import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { inspectPngBytes } from './png-validation.mjs';

const referencePng = readFileSync(
  new URL('../src/assets/textures/race/human/male.tintable.png', import.meta.url)
);

test('accepts a complete decodable PNG', () => {
  assert.deepEqual(inspectPngBytes(referencePng, 'reference.png'), {
    width: 64,
    height: 64,
    bitDepth: 8,
    colorType: 6,
    interlaceMethod: 0,
  });
});

test('rejects a PNG truncated after its IHDR prefix', () => {
  assert.throws(
    () => inspectPngBytes(referencePng.subarray(0, 26), 'truncated.png'),
    /truncated IHDR chunk/
  );
});

test('rejects a PNG with a corrupt chunk CRC', () => {
  const corrupt = Buffer.from(referencePng);
  corrupt[corrupt.length - 1] ^= 0x01;

  assert.throws(() => inspectPngBytes(corrupt, 'corrupt.png'), /IEND chunk CRC is invalid/);
});
