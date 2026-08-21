import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
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

function logicalTexturePath(texturePath) {
  return relative(textureRoot, texturePath).replaceAll('\\', '/');
}

function inspectPng(texturePath) {
  const bytes = readFileSync(texturePath);
  if (bytes.length < 26 || !bytes.subarray(0, 8).equals(pngSignature)) {
    fail(`${logicalTexturePath(texturePath)} is not a valid PNG file.`);
  }
  if (bytes.toString('ascii', 12, 16) !== 'IHDR') {
    fail(`${logicalTexturePath(texturePath)} is missing the PNG IHDR header.`);
  }

  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  const bitDepth = bytes.readUInt8(24);
  const colorType = bytes.readUInt8(25);
  if (width === 0 || height === 0) {
    fail(`${logicalTexturePath(texturePath)} has invalid ${width}x${height} dimensions.`);
  }

  return { width, height, bitDepth, colorType };
}

function isRuntimeSkinAtlas(path) {
  return !path.startsWith('preview/');
}

function hasExplicitAlphaChannel(colorType) {
  return colorType === 4 || colorType === 6;
}

const textureFiles = listPngFiles(textureRoot);
if (textureFiles.length === 0) {
  fail('no PNG texture assets were found.');
}

const skinAtlases = [];
const nonAtlasAssets = [];

for (const texturePath of textureFiles) {
  const path = logicalTexturePath(texturePath);
  const metadata = inspectPng(texturePath);

  if (!isRuntimeSkinAtlas(path)) {
    nonAtlasAssets.push({ path, ...metadata });
    continue;
  }

  if (metadata.width !== MINECRAFT_SKIN_SIZE || metadata.height !== MINECRAFT_SKIN_SIZE) {
    fail(
      `${path} is a runtime Minecraft skin layer and must be ` +
        `${MINECRAFT_SKIN_SIZE}x${MINECRAFT_SKIN_SIZE}; got ${metadata.width}x${metadata.height}.`
    );
  }

  if (!hasExplicitAlphaChannel(metadata.colorType)) {
    fail(
      `${path} is a composited skin layer and must use a PNG color type with an explicit alpha channel; ` +
        `got PNG color type ${metadata.colorType}.`
    );
  }

  skinAtlases.push({ path, ...metadata });
}

if (skinAtlases.length === 0) {
  fail('no runtime Minecraft skin atlas PNGs were found.');
}

const splitLayerPairs = new Map();
for (const atlas of skinAtlases) {
  const match = atlas.path.match(/^(.*)\.(tintable|fixed)\.png$/);
  if (!match) continue;

  const [, stem, role] = match;
  const pair = splitLayerPairs.get(stem) ?? {};
  pair[role] = atlas;
  splitLayerPairs.set(stem, pair);
}

for (const [stem, pair] of splitLayerPairs) {
  if (!pair.tintable || !pair.fixed) continue;
  if (
    pair.tintable.width !== pair.fixed.width ||
    pair.tintable.height !== pair.fixed.height
  ) {
    fail(
      `${stem}.tintable.png and ${stem}.fixed.png must use the same UV atlas dimensions; ` +
        `got ${pair.tintable.width}x${pair.tintable.height} and ` +
        `${pair.fixed.width}x${pair.fixed.height}.`
    );
  }
}

console.log(
  `Verified ${skinAtlases.length} runtime skin atlas PNGs are 64x64 with explicit alpha, ` +
    `${splitLayerPairs.size} explicit tintable/fixed atlas definitions are dimension-compatible, ` +
    `and ${nonAtlasAssets.length} non-atlas preview PNG asset(s) are valid PNGs without a forced skin-atlas size.`
);
