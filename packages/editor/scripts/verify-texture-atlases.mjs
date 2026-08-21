import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const textureRoot = fileURLToPath(new URL('../src/assets/textures', import.meta.url));
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MINECRAFT_SKIN_SIZE = 64;

function fail(message) {
  throw new Error(`[texture verification] ${message}`);
}

function listPngFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return listPngFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.png') ? [entryPath] : [];
  });
}

const textureFiles = listPngFiles(textureRoot);
if (textureFiles.length === 0) {
  fail('no PNG texture assets were found.');
}

for (const texturePath of textureFiles) {
  const bytes = readFileSync(texturePath);
  if (bytes.length < 24 || !bytes.subarray(0, 8).equals(pngSignature)) {
    fail(`${texturePath} is not a valid PNG file.`);
  }
  if (bytes.toString('ascii', 12, 16) !== 'IHDR') {
    fail(`${texturePath} is missing the PNG IHDR header.`);
  }

  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width !== MINECRAFT_SKIN_SIZE || height !== MINECRAFT_SKIN_SIZE) {
    fail(
      `${texturePath} must be ${MINECRAFT_SKIN_SIZE}x${MINECRAFT_SKIN_SIZE}; got ${width}x${height}.`
    );
  }
}

console.log(`Verified ${textureFiles.length} source texture PNG atlases are 64x64.`);
