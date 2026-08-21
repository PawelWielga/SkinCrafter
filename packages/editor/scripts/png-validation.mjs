import { inflateSync } from 'node:zlib';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const VALID_BIT_DEPTHS = new Map([
  [0, new Set([1, 2, 4, 8, 16])],
  [2, new Set([8, 16])],
  [3, new Set([1, 2, 4, 8])],
  [4, new Set([8, 16])],
  [6, new Set([8, 16])],
]);
const CHANNELS_BY_COLOR_TYPE = new Map([
  [0, 1],
  [2, 3],
  [3, 1],
  [4, 2],
  [6, 4],
]);
const ADAM7_PASSES = [
  [0, 0, 8, 8],
  [4, 0, 8, 8],
  [0, 4, 4, 8],
  [2, 0, 4, 4],
  [0, 2, 2, 4],
  [1, 0, 2, 2],
  [0, 1, 1, 2],
];

const CRC_TABLE = new Uint32Array(256);
for (let index = 0; index < CRC_TABLE.length; index += 1) {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = (value & 1) !== 0 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  CRC_TABLE[index] = value >>> 0;
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function invalid(label, message) {
  throw new Error(`${label}: ${message}`);
}

function isAsciiLetter(byte) {
  return (byte >= 0x41 && byte <= 0x5a) || (byte >= 0x61 && byte <= 0x7a);
}

function passSize(size, start, step) {
  return size <= start ? 0 : Math.ceil((size - start) / step);
}

function expectedInflatedLength(width, height, bitsPerPixel, interlaceMethod) {
  const scanlineLength = (passWidth) => 1 + Math.ceil((passWidth * bitsPerPixel) / 8);
  if (interlaceMethod === 0) return height * scanlineLength(width);

  return ADAM7_PASSES.reduce((total, [startX, startY, stepX, stepY]) => {
    const passWidth = passSize(width, startX, stepX);
    const passHeight = passSize(height, startY, stepY);
    return passWidth === 0 || passHeight === 0
      ? total
      : total + passHeight * scanlineLength(passWidth);
  }, 0);
}

function validateDecodedScanlines(bytes, width, height, bitsPerPixel, interlaceMethod, label) {
  let offset = 0;

  const validatePass = (passWidth, passHeight) => {
    if (passWidth === 0 || passHeight === 0) return;
    const rowBytes = Math.ceil((passWidth * bitsPerPixel) / 8);
    for (let row = 0; row < passHeight; row += 1) {
      if (offset + 1 + rowBytes > bytes.length) {
        invalid(label, 'decoded image data is truncated.');
      }
      const filterType = bytes[offset];
      if (filterType > 4) {
        invalid(label, `decoded scanline uses invalid PNG filter type ${filterType}.`);
      }
      offset += 1 + rowBytes;
    }
  };

  if (interlaceMethod === 0) {
    validatePass(width, height);
  } else {
    for (const [startX, startY, stepX, stepY] of ADAM7_PASSES) {
      validatePass(passSize(width, startX, stepX), passSize(height, startY, stepY));
    }
  }

  if (offset !== bytes.length) {
    invalid(label, `decoded image data has ${bytes.length - offset} unexpected trailing byte(s).`);
  }
}

export function inspectPngBytes(input, label = 'PNG') {
  const bytes = Buffer.isBuffer(input) ? input : Buffer.from(input);
  if (
    bytes.length < PNG_SIGNATURE.length ||
    !bytes.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)
  ) {
    invalid(label, 'invalid PNG signature.');
  }

  let offset = PNG_SIGNATURE.length;
  let ihdr = null;
  let palette = null;
  let idatSeen = false;
  let idatEnded = false;
  let iendSeen = false;
  const idatChunks = [];

  while (offset < bytes.length) {
    if (bytes.length - offset < 12) {
      invalid(label, 'truncated PNG chunk header.');
    }

    const length = bytes.readUInt32BE(offset);
    if (length > 0x7fffffff) {
      invalid(label, `PNG chunk length ${length} exceeds the specification limit.`);
    }

    const typeStart = offset + 4;
    const dataStart = offset + 8;
    const dataEnd = dataStart + length;
    const chunkEnd = dataEnd + 4;
    if (chunkEnd > bytes.length) {
      const partialType = bytes
        .subarray(typeStart, Math.min(typeStart + 4, bytes.length))
        .toString('ascii');
      invalid(label, `truncated ${partialType || 'PNG'} chunk.`);
    }

    const typeBytes = bytes.subarray(typeStart, typeStart + 4);
    if (![...typeBytes].every(isAsciiLetter)) {
      invalid(label, 'PNG chunk type contains non-letter bytes.');
    }
    if ((typeBytes[2] & 0x20) !== 0) {
      invalid(label, `PNG chunk ${typeBytes.toString('ascii')} sets the reserved chunk-type bit.`);
    }

    const type = typeBytes.toString('ascii');
    const data = bytes.subarray(dataStart, dataEnd);
    const expectedCrc = bytes.readUInt32BE(dataEnd);
    const actualCrc = crc32(bytes.subarray(typeStart, dataEnd));
    if (actualCrc !== expectedCrc) {
      invalid(label, `${type} chunk CRC is invalid.`);
    }

    if (!ihdr && type !== 'IHDR') {
      invalid(label, 'IHDR must be the first PNG chunk.');
    }

    if (type === 'IHDR') {
      if (ihdr) invalid(label, 'PNG contains more than one IHDR chunk.');
      if (length !== 13) invalid(label, `IHDR must contain 13 bytes; got ${length}.`);

      const width = data.readUInt32BE(0);
      const height = data.readUInt32BE(4);
      const bitDepth = data.readUInt8(8);
      const colorType = data.readUInt8(9);
      const compressionMethod = data.readUInt8(10);
      const filterMethod = data.readUInt8(11);
      const interlaceMethod = data.readUInt8(12);
      const validBitDepths = VALID_BIT_DEPTHS.get(colorType);

      if (width === 0 || height === 0 || width > 0x7fffffff || height > 0x7fffffff) {
        invalid(label, `invalid PNG dimensions ${width}x${height}.`);
      }
      if (!validBitDepths || !validBitDepths.has(bitDepth)) {
        invalid(label, `invalid bit depth ${bitDepth} for PNG color type ${colorType}.`);
      }
      if (compressionMethod !== 0) {
        invalid(label, `unsupported PNG compression method ${compressionMethod}.`);
      }
      if (filterMethod !== 0) {
        invalid(label, `unsupported PNG filter method ${filterMethod}.`);
      }
      if (interlaceMethod !== 0 && interlaceMethod !== 1) {
        invalid(label, `invalid PNG interlace method ${interlaceMethod}.`);
      }

      ihdr = { width, height, bitDepth, colorType, interlaceMethod };
    } else if (type === 'PLTE') {
      if (idatSeen) invalid(label, 'PLTE must appear before the first IDAT chunk.');
      if (palette) invalid(label, 'PNG contains more than one PLTE chunk.');
      if (length === 0 || length % 3 !== 0 || length > 768) {
        invalid(label, `PLTE has invalid length ${length}.`);
      }
      palette = data;
    } else if (type === 'IDAT') {
      if (idatEnded) invalid(label, 'IDAT chunks must be consecutive.');
      idatSeen = true;
      idatChunks.push(data);
    } else if (type === 'IEND') {
      if (!idatSeen) invalid(label, 'IEND appeared before any IDAT chunk.');
      if (length !== 0) invalid(label, `IEND must be empty; got ${length} bytes.`);
      iendSeen = true;
      offset = chunkEnd;
      if (offset !== bytes.length) invalid(label, 'PNG contains bytes after IEND.');
      break;
    } else {
      if ((typeBytes[0] & 0x20) === 0) invalid(label, `unknown critical PNG chunk ${type}.`);
      if (idatSeen) idatEnded = true;
    }

    offset = chunkEnd;
  }

  if (!ihdr) invalid(label, 'missing IHDR chunk.');
  if (!idatSeen) invalid(label, 'missing IDAT chunk.');
  if (!iendSeen) invalid(label, 'missing IEND chunk.');
  if ((ihdr.colorType === 0 || ihdr.colorType === 4) && palette) {
    invalid(label, `PLTE is forbidden for PNG color type ${ihdr.colorType}.`);
  }
  if (ihdr.colorType === 3) {
    if (!palette) invalid(label, 'indexed-color PNG is missing PLTE.');
    if (palette.length / 3 > 2 ** ihdr.bitDepth) {
      invalid(label, `PLTE contains too many entries for bit depth ${ihdr.bitDepth}.`);
    }
  }

  const channels = CHANNELS_BY_COLOR_TYPE.get(ihdr.colorType);
  const bitsPerPixel = channels * ihdr.bitDepth;
  const expectedLength = expectedInflatedLength(
    ihdr.width,
    ihdr.height,
    bitsPerPixel,
    ihdr.interlaceMethod
  );
  if (!Number.isSafeInteger(expectedLength)) {
    invalid(label, 'decoded image size exceeds the safe validation range.');
  }

  let decoded;
  try {
    decoded = inflateSync(Buffer.concat(idatChunks), { maxOutputLength: expectedLength + 1 });
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    invalid(label, `IDAT data cannot be decoded (${reason}).`);
  }

  if (decoded.length !== expectedLength) {
    invalid(label, `decoded image data has ${decoded.length} bytes; expected ${expectedLength}.`);
  }
  validateDecodedScanlines(
    decoded,
    ihdr.width,
    ihdr.height,
    bitsPerPixel,
    ihdr.interlaceMethod,
    label
  );

  return ihdr;
}
