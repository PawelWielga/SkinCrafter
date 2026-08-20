import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const fixtures = [
  {
    name: 'classic',
    file: 'uv-diagnostic-classic.png',
    sha256: '5ce0317d7f518474f4cd5646fb8bd36c83543cfaa005a2db4e5a51a931cde4a0',
  },
  {
    name: 'slim',
    file: 'uv-diagnostic-slim.png',
    sha256: 'cb32a03faba2e87488d63c599ea521c47eddc098a7b86e18a30b0673dae9e2f6',
  },
] as const;

describe('renderer diagnostic skin fixtures', () => {
  it.each(fixtures)('$name fixture is a stable 64x64 PNG', ({ file, sha256 }) => {
    const bytes = readFileSync(new URL(`./fixtures/${file}`, import.meta.url));

    expect(bytes.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
    expect(bytes.readUInt32BE(16)).toBe(64);
    expect(bytes.readUInt32BE(20)).toBe(64);
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(sha256);
  });
});
