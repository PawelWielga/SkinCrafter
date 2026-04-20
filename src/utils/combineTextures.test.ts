import { describe, expect, it } from 'vitest';
import { hexToPixel, multiplyPixel } from './combineTextures';

describe('combineTextures tint helpers', () => {
  it('multiplies pixel color by tint color', () => {
    const base = { r: 200, g: 160, b: 120, a: 255 };
    const tint = hexToPixel('#804020');

    expect(multiplyPixel(base, tint)).toEqual({
      r: 100,
      g: 40,
      b: 15,
      a: 255,
    });
  });

  it('keeps transparent none-like layers out of composition inputs', () => {
    expect(hexToPixel('#fff')).toEqual({
      r: 255,
      g: 255,
      b: 255,
      a: 255,
    });
  });
});
