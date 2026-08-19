import { describe, expect, it } from 'vitest';
import { hexToPixel, isWhitePixel, multiplyPixel, tintNonWhitePixel } from './combineTextures';

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

  it('detects white pixels with a small tolerance', () => {
    expect(isWhitePixel({ r: 255, g: 255, b: 255, a: 255 })).toBe(true);
    expect(isWhitePixel({ r: 249, g: 255, b: 255, a: 255 })).toBe(false);
  });

  it('tints only non-white pixels', () => {
    const tint = hexToPixel('#2F5D9B');

    expect(tintNonWhitePixel({ r: 255, g: 255, b: 255, a: 255 }, tint)).toEqual({
      r: 255,
      g: 255,
      b: 255,
      a: 255,
    });
    expect(tintNonWhitePixel({ r: 40, g: 40, b: 40, a: 255 }, tint)).toEqual({
      r: 47,
      g: 93,
      b: 155,
      a: 255,
    });
  });
});
