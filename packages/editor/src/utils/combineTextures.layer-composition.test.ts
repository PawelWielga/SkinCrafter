import { describe, expect, it, vi } from 'vitest';
import { buildTextureInputsFromLayers } from '../data/appearance';
import combineTextures from './combineTextures';

interface LoadedImage {
  readonly src: string;
}

function installSuccessfulImages(): LoadedImage[] {
  const images: LoadedImage[] = [];

  class SuccessfulImage {
    crossOrigin = '';
    naturalWidth = 64;
    naturalHeight = 64;
    width = 64;
    height = 64;
    onload: (() => void) | null = null;
    onerror: ((error: unknown) => void) | null = null;
    private currentSrc = '';

    constructor() {
      images.push(this);
    }

    get src(): string {
      return this.currentSrc;
    }

    set src(value: string) {
      this.currentSrc = value;
      queueMicrotask(() => this.onload?.());
    }
  }

  vi.stubGlobal('Image', SuccessfulImage);
  return images;
}

function createOutputCanvas() {
  const drawImage = vi.fn();
  const context = {
    imageSmoothingEnabled: true,
    drawImage,
  } as unknown as CanvasRenderingContext2D;
  const canvas = {
    width: 0,
    height: 0,
    getContext: vi.fn(() => context),
    toDataURL: vi.fn(() => 'data:image/png;base64,composed'),
  } as unknown as HTMLCanvasElement;

  return { canvas, context, drawImage };
}

function createTintCanvas() {
  const sourcePixels = new Uint8ClampedArray(64 * 64 * 4);
  sourcePixels.set([
    255, 255, 255, 255,
    128, 128, 128, 191,
    0, 0, 0, 128,
    255, 0, 0, 77,
  ]);

  const getImageData = vi.fn(() => ({ data: new Uint8ClampedArray(sourcePixels) } as ImageData));
  const putImageData = vi.fn();
  const context = {
    imageSmoothingEnabled: true,
    drawImage: vi.fn(),
    getImageData,
    putImageData,
  } as unknown as CanvasRenderingContext2D;
  const canvas = {
    width: 0,
    height: 0,
    getContext: vi.fn(() => context),
  } as unknown as HTMLCanvasElement;

  return { canvas, context, getImageData, putImageData };
}

describe('combineTextures explicit layer composition', () => {
  it('draws a fixed-only texture directly without entering the tint pixel path', async () => {
    const images = installSuccessfulImages();
    const output = createOutputCanvas();
    const createElementSpy = vi
      .spyOn(document, 'createElement')
      .mockReturnValueOnce(output.canvas);

    try {
      await expect(
        combineTextures([{ url: '/fixed.png', role: 'fixed' }])
      ).resolves.toBe('data:image/png;base64,composed');

      const fixedImage = images.find((image) => image.src === '/fixed.png');
      expect(fixedImage).toBeDefined();
      expect(createElementSpy).toHaveBeenCalledTimes(1);
      expect(output.drawImage).toHaveBeenCalledTimes(1);
      expect(output.drawImage).toHaveBeenCalledWith(fixedImage, 0, 0);
      expect(output.context.imageSmoothingEnabled).toBe(false);
    } finally {
      createElementSpy.mockRestore();
      vi.unstubAllGlobals();
    }
  });

  it('composes tintable content first and then draws the fixed overlay unchanged', async () => {
    const images = installSuccessfulImages();
    const output = createOutputCanvas();
    const tint = createTintCanvas();
    const createElementSpy = vi
      .spyOn(document, 'createElement')
      .mockReturnValueOnce(output.canvas)
      .mockReturnValueOnce(tint.canvas);

    try {
      await expect(
        combineTextures([
          { url: '/tintable.png', role: 'tintable', tint: '#C04020' },
          { url: '/fixed.png', role: 'fixed' },
        ])
      ).resolves.toBe('data:image/png;base64,composed');

      const tintableImage = images.find((image) => image.src === '/tintable.png');
      const fixedImage = images.find((image) => image.src === '/fixed.png');
      expect(tintableImage).toBeDefined();
      expect(fixedImage).toBeDefined();

      expect(tint.getImageData).toHaveBeenCalledTimes(1);
      expect(tint.putImageData).toHaveBeenCalledTimes(1);
      expect(tint.context.imageSmoothingEnabled).toBe(false);
      expect(output.context.imageSmoothingEnabled).toBe(false);

      expect(output.drawImage).toHaveBeenCalledTimes(2);
      expect(output.drawImage).toHaveBeenNthCalledWith(1, tint.canvas, 0, 0);
      expect(output.drawImage).toHaveBeenNthCalledWith(2, fixedImage, 0, 0);
    } finally {
      createElementSpy.mockRestore();
      vi.unstubAllGlobals();
    }
  });

  it('applies shared and independent wardrobe slots to ordered tintable layers before fixed content', async () => {
    const images = installSuccessfulImages();
    const output = createOutputCanvas();
    const primaryFirst = createTintCanvas();
    const secondary = createTintCanvas();
    const primarySecond = createTintCanvas();
    const createElementSpy = vi
      .spyOn(document, 'createElement')
      .mockReturnValueOnce(output.canvas)
      .mockReturnValueOnce(primaryFirst.canvas)
      .mockReturnValueOnce(secondary.canvas)
      .mockReturnValueOnce(primarySecond.canvas);

    const inputs = buildTextureInputsFromLayers(
      {
        tintable: [
          { texture: '/layer-named-fixed.png', colorSlot: 'primary' },
          { texture: '/layer-secondary.png', colorSlot: 'secondary' },
          { texture: '/layer-primary-again.png', colorSlot: 'primary' },
        ],
        fixed: '/overlay-named-tintable.png',
      },
      undefined,
      { primary: '#A33A3A', secondary: '#2F8F4E' }
    );

    try {
      await expect(combineTextures(inputs)).resolves.toBe('data:image/png;base64,composed');

      const fixedImage = images.find((image) => image.src === '/overlay-named-tintable.png');
      expect(fixedImage).toBeDefined();
      expect(output.drawImage).toHaveBeenNthCalledWith(1, primaryFirst.canvas, 0, 0);
      expect(output.drawImage).toHaveBeenNthCalledWith(2, secondary.canvas, 0, 0);
      expect(output.drawImage).toHaveBeenNthCalledWith(3, primarySecond.canvas, 0, 0);
      expect(output.drawImage).toHaveBeenNthCalledWith(4, fixedImage, 0, 0);

      const firstPrimaryPixels = primaryFirst.putImageData.mock.calls[0]?.[0].data as Uint8ClampedArray;
      const secondaryPixels = secondary.putImageData.mock.calls[0]?.[0].data as Uint8ClampedArray;
      const secondPrimaryPixels = primarySecond.putImageData.mock.calls[0]?.[0].data as Uint8ClampedArray;
      expect([...firstPrimaryPixels.slice(0, 4)]).toEqual([163, 58, 58, 255]);
      expect([...secondaryPixels.slice(0, 4)]).toEqual([47, 143, 78, 255]);
      expect([...secondPrimaryPixels.slice(0, 4)]).toEqual([163, 58, 58, 255]);
    } finally {
      createElementSpy.mockRestore();
      vi.unstubAllGlobals();
    }
  });
});
