import { describe, expect, it, vi } from 'vitest';
import combineTextures, {
  MINECRAFT_SKIN_SIZE,
  TextureLoadError,
  hexToPixel,
  isMinecraftSkinAtlasSize,
  tintTexturePixel,
  tintTexturePixelBuffer,
} from './combineTextures';

describe('combineTextures explicit tintable layer semantics', () => {
  it('tints every authored RGB shade in a tintable layer without RGB classification', () => {
    const tint = hexToPixel('#C04020');

    expect(tintTexturePixel({ r: 255, g: 255, b: 255, a: 255 }, tint)).toEqual({
      r: 192,
      g: 64,
      b: 32,
      a: 255,
    });
    expect(tintTexturePixel({ r: 128, g: 128, b: 128, a: 255 }, tint)).toEqual({
      r: 96,
      g: 32,
      b: 16,
      a: 255,
    });
    expect(tintTexturePixel({ r: 0, g: 0, b: 0, a: 255 }, tint)).toEqual({
      r: 0,
      g: 0,
      b: 0,
      a: 255,
    });
    expect(tintTexturePixel({ r: 255, g: 0, b: 0, a: 255 }, tint)).toEqual({
      r: 64,
      g: 21,
      b: 11,
      a: 255,
    });
  });

  it('preserves relative source intensity and alpha for tintable pixels', () => {
    const tint = hexToPixel('#C04020');
    const dark = tintTexturePixel({ r: 64, g: 64, b: 64, a: 77 }, tint);
    const light = tintTexturePixel({ r: 204, g: 204, b: 204, a: 191 }, tint);

    expect(dark).toEqual({ r: 48, g: 16, b: 8, a: 77 });
    expect(light).toEqual({ r: 154, g: 51, b: 26, a: 191 });
    expect(light.r).toBeGreaterThan(dark.r);
    expect(light.g).toBeGreaterThan(dark.g);
    expect(light.b).toBeGreaterThan(dark.b);
  });

  it('keeps fully transparent tintable pixels byte-identical', () => {
    const source = { r: 120, g: 121, b: 122, a: 0 };
    expect(tintTexturePixel(source, hexToPixel('#00ff00'))).toEqual(source);
  });

  it('transforms a tintable pixel buffer while preserving source input and alpha', () => {
    const source = new Uint8ClampedArray([
      255, 255, 255, 255,
      128, 128, 128, 200,
      0, 0, 0, 128,
      10, 20, 30, 0,
    ]);

    const result = tintTexturePixelBuffer(source, hexToPixel('#C04020'));

    expect(Array.from(result)).toEqual([
      192, 64, 32, 255,
      96, 32, 16, 200,
      0, 0, 0, 128,
      10, 20, 30, 0,
    ]);
    expect(Array.from(source)).toEqual([
      255, 255, 255, 255,
      128, 128, 128, 200,
      0, 0, 0, 128,
      10, 20, 30, 0,
    ]);
  });

  it('recognizes only exact 64x64 Minecraft skin atlases', () => {
    expect(MINECRAFT_SKIN_SIZE).toBe(64);
    expect(isMinecraftSkinAtlasSize(64, 64)).toBe(true);
    expect(isMinecraftSkinAtlasSize(64, 32)).toBe(false);
    expect(isMinecraftSkinAtlasSize(128, 128)).toBe(false);
  });

  it('rejects a decoded texture with unsupported dimensions instead of resampling it', async () => {
    class WrongSizeImage {
      crossOrigin = '';
      naturalWidth = 32;
      naturalHeight = 64;
      width = 32;
      height = 64;
      onload: (() => void) | null = null;
      onerror: ((error: unknown) => void) | null = null;

      set src(_value: string) {
        queueMicrotask(() => this.onload?.());
      }
    }

    vi.stubGlobal('Image', WrongSizeImage);

    try {
      await expect(combineTextures([{ url: '/wrong-size.png', role: 'fixed' }])).rejects.toEqual(
        expect.objectContaining({
          name: 'TextureLoadError',
          assetUrl: '/wrong-size.png',
          cause: expect.objectContaining({
            message: expect.stringContaining('64x64'),
          }),
        })
      );
    } finally {
      vi.unstubAllGlobals();
    }
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
