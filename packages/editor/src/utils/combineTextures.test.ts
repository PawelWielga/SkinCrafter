import { describe, expect, it, vi } from 'vitest';
import combineTextures, {
  GRAYSCALE_TINT_TOLERANCE,
  TextureLoadError,
  hexToPixel,
  isTintableGrayscalePixel,
  tintGrayscalePixel,
  tintGrayscalePixelBuffer,
} from './combineTextures';

describe('combineTextures grayscale tinting', () => {
  it('uses a small centralized grayscale tolerance', () => {
    expect(GRAYSCALE_TINT_TOLERANCE).toBe(4);
    expect(isTintableGrayscalePixel({ r: 100, g: 103, b: 104, a: 255 })).toBe(true);
    expect(isTintableGrayscalePixel({ r: 100, g: 104, b: 105, a: 255 })).toBe(false);
  });

  it.each(['#ff0000', '#2F5D9B'])('keeps pure black unchanged for tint %s', (color) => {
    const black = { r: 0, g: 0, b: 0, a: 255 };
    expect(tintGrayscalePixel(black, hexToPixel(color))).toEqual(black);
  });

  it.each(['#ff0000', '#2F5D9B'])('keeps pure white unchanged for tint %s', (color) => {
    const white = { r: 255, g: 255, b: 255, a: 255 };
    expect(tintGrayscalePixel(white, hexToPixel(color))).toEqual(white);
  });

  it('tints mid-gray using its grayscale intensity', () => {
    expect(
      tintGrayscalePixel({ r: 128, g: 128, b: 128, a: 255 }, hexToPixel('#ff0000'))
    ).toEqual({ r: 128, g: 0, b: 0, a: 255 });
  });

  it('preserves relative grayscale shading for dark and light pixels', () => {
    const tint = hexToPixel('#C04020');
    const dark = tintGrayscalePixel({ r: 64, g: 64, b: 64, a: 255 }, tint);
    const light = tintGrayscalePixel({ r: 204, g: 204, b: 204, a: 255 }, tint);

    expect(dark).toEqual({ r: 48, g: 16, b: 8, a: 255 });
    expect(light).toEqual({ r: 154, g: 51, b: 26, a: 255 });
    expect(light.r).toBeGreaterThan(dark.r);
    expect(light.g).toBeGreaterThan(dark.g);
    expect(light.b).toBeGreaterThan(dark.b);
  });

  it('keeps authored chromatic pixels byte-identical', () => {
    const tint = hexToPixel('#ff0000');

    expect(tintGrayscalePixel({ r: 255, g: 204, b: 0, a: 255 }, tint)).toEqual({
      r: 255,
      g: 204,
      b: 0,
      a: 255,
    });
    expect(tintGrayscalePixel({ r: 35, g: 160, b: 112, a: 191 }, tint)).toEqual({
      r: 35,
      g: 160,
      b: 112,
      a: 191,
    });
  });

  it('tints near-gray pixels at the tolerance boundary', () => {
    expect(
      tintGrayscalePixel({ r: 100, g: 103, b: 104, a: 255 }, hexToPixel('#ff0000'))
    ).toEqual({ r: 102, g: 0, b: 0, a: 255 });
  });

  it('keeps pixels just outside the grayscale tolerance unchanged', () => {
    const source = { r: 100, g: 104, b: 105, a: 255 };
    expect(tintGrayscalePixel(source, hexToPixel('#ff0000'))).toEqual(source);
  });

  it('preserves partial alpha exactly while tinting grayscale RGB', () => {
    expect(
      tintGrayscalePixel({ r: 64, g: 64, b: 64, a: 77 }, hexToPixel('#00ff00'))
    ).toEqual({ r: 0, g: 64, b: 0, a: 77 });
  });

  it('keeps fully transparent pixels byte-identical', () => {
    const source = { r: 120, g: 121, b: 122, a: 0 };
    expect(tintGrayscalePixel(source, hexToPixel('#00ff00'))).toEqual(source);
  });

  it('produces exact mixed fixture bytes for the export tint path', () => {
    const source = new Uint8ClampedArray([
      128, 128, 128, 255,
      255, 204, 0, 255,
      0, 0, 0, 128,
      255, 255, 255, 64,
      100, 102, 99, 200,
      10, 16, 10, 255,
    ]);

    const result = tintGrayscalePixelBuffer(source, hexToPixel('#C04020'));

    expect(Array.from(result)).toEqual([
      96, 32, 16, 255,
      255, 204, 0, 255,
      0, 0, 0, 128,
      255, 255, 255, 64,
      76, 25, 13, 200,
      10, 16, 10, 255,
    ]);
    expect(Array.from(source)).toEqual([
      128, 128, 128, 255,
      255, 204, 0, 255,
      0, 0, 0, 128,
      255, 255, 255, 64,
      100, 102, 99, 200,
      10, 16, 10, 255,
    ]);
  });

  it('keeps transparent none-like layers out of composition inputs', () => {
    expect(hexToPixel('#fff')).toEqual({
      r: 255,
      g: 255,
      b: 255,
      a: 255,
    });
  });

  it('rejects a missing texture with the exact failing asset URL', async () => {
    const cause = new Event('error');

    class FailingImage {
      crossOrigin = '';
      onload: (() => void) | null = null;
      onerror: ((error: unknown) => void) | null = null;

      set src(_value: string) {
        queueMicrotask(() => this.onerror?.(cause));
      }
    }

    vi.stubGlobal('Image', FailingImage);

    try {
      await expect(combineTextures(['/missing-texture.png'])).rejects.toEqual(
        expect.objectContaining({
          name: 'TextureLoadError',
          assetUrl: '/missing-texture.png',
          cause,
        })
      );
      await expect(Promise.reject(new TextureLoadError('/other.png'))).rejects.toBeInstanceOf(
        TextureLoadError
      );
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
