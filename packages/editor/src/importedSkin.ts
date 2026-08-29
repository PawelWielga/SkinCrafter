import type { SkinModel } from './skinModel';

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a] as const;
const MINECRAFT_SKIN_SIZE = 64;

export interface LoadedImportedSkin {
  dataUrl: string;
  fingerprint: string;
  model: SkinModel;
}

export class InvalidInitialSkinError extends Error {
  readonly cause?: unknown;

  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = 'InvalidInitialSkinError';
    this.cause = cause;
  }
}

function bytesToDataUrl(bytes: Uint8Array): string {
  let binary = '';
  const chunkSize = 0x8000;

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const chunk = bytes.subarray(offset, Math.min(offset + chunkSize, bytes.length));
    binary += String.fromCharCode(...chunk);
  }

  return `data:image/png;base64,${btoa(binary)}`;
}

async function fingerprintImportedSkinBytes(bytes: Uint8Array): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new InvalidInitialSkinError(
      'Initial skin fingerprint could not be computed because Web Crypto is unavailable.'
    );
  }

  try {
    const digestInput = new Uint8Array(bytes.byteLength);
    digestInput.set(bytes);
    const digest = await subtle.digest('SHA-256', digestInput);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  } catch (cause) {
    throw new InvalidInitialSkinError('Initial skin fingerprint could not be computed.', cause);
  }
}

function readPngDimensions(bytes: Uint8Array): { width: number; height: number } {
  if (bytes.length < 24) {
    throw new InvalidInitialSkinError('Initial skin is not a valid PNG file.');
  }

  for (let index = 0; index < PNG_SIGNATURE.length; index += 1) {
    if (bytes[index] !== PNG_SIGNATURE[index]) {
      throw new InvalidInitialSkinError('Initial skin is not a valid PNG file.');
    }
  }

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const ihdrLength = view.getUint32(8);
  const ihdrType = String.fromCharCode(bytes[12], bytes[13], bytes[14], bytes[15]);
  if (ihdrLength !== 13 || ihdrType !== 'IHDR') {
    throw new InvalidInitialSkinError('Initial skin PNG is missing a valid IHDR header.');
  }

  return {
    width: view.getUint32(16),
    height: view.getUint32(20),
  };
}

async function readBlobBytes(image: Blob): Promise<Uint8Array> {
  if (typeof image.arrayBuffer === 'function') {
    return new Uint8Array(await image.arrayBuffer());
  }

  return new Promise<Uint8Array>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (!(reader.result instanceof ArrayBuffer)) {
        reject(new Error('Blob reader did not return an ArrayBuffer.'));
        return;
      }
      resolve(new Uint8Array(reader.result));
    };
    reader.onerror = () => reject(reader.error ?? new Error('Blob reader failed.'));
    reader.readAsArrayBuffer(image);
  });
}

async function validateDecodedImage(dataUrl: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const width = image.naturalWidth || image.width;
      const height = image.naturalHeight || image.height;
      image.onload = null;
      image.onerror = null;

      if (width !== MINECRAFT_SKIN_SIZE || height !== MINECRAFT_SKIN_SIZE) {
        reject(new InvalidInitialSkinError('Initial skin must be a 64x64 Minecraft PNG.'));
        return;
      }
      resolve();
    };
    image.onerror = (cause) => {
      image.onload = null;
      image.onerror = null;
      reject(new InvalidInitialSkinError('Initial skin PNG could not be decoded.', cause));
    };
    image.src = dataUrl;
  });
}

export async function loadImportedSkin(
  image: Blob,
  model: SkinModel
): Promise<LoadedImportedSkin> {
  if (image.type && image.type.toLowerCase() !== 'image/png') {
    throw new InvalidInitialSkinError('Initial skin must use the image/png MIME type.');
  }

  let bytes: Uint8Array;
  try {
    bytes = await readBlobBytes(image);
  } catch (cause) {
    throw new InvalidInitialSkinError('Initial skin data could not be read.', cause);
  }

  const dimensions = readPngDimensions(bytes);
  if (dimensions.width !== MINECRAFT_SKIN_SIZE || dimensions.height !== MINECRAFT_SKIN_SIZE) {
    throw new InvalidInitialSkinError('Initial skin must be a 64x64 Minecraft PNG.');
  }

  const dataUrl = bytesToDataUrl(bytes);
  await validateDecodedImage(dataUrl);
  const fingerprint = await fingerprintImportedSkinBytes(bytes);

  return {
    dataUrl,
    fingerprint,
    model,
  };
}
