export interface TextureLayerInput {
  url: string | null;
  tint?: string;
}

export interface TextureLayer {
  url: string;
  tint?: string;
}

export interface RgbaPixel {
  r: number;
  g: number;
  b: number;
  a: number;
}

export type TextureInput = string | null | TextureLayerInput;

export class TextureLoadError extends Error {
  readonly assetUrl: string;
  readonly cause?: unknown;

  constructor(assetUrl: string, cause?: unknown) {
    super(`Failed to load texture asset: ${assetUrl}`);
    this.name = 'TextureLoadError';
    this.assetUrl = assetUrl;
    this.cause = cause;
  }
}

const MINECRAFT_SKIN_SIZE = 64;

/**
 * Maximum RGB channel spread that is still considered authored grayscale.
 * A tolerance of 4/255 absorbs tiny export noise without tinting visibly chromatic details.
 */
export const GRAYSCALE_TINT_TOLERANCE = 4;

const normalizeLayer = (layer: TextureInput): TextureLayer | null => {
  if (!layer) return null;
  if (typeof layer === 'string') {
    return { url: layer };
  }
  return layer.url
    ? {
        url: layer.url,
        tint: layer.tint,
      }
    : null;
};

export function hexToPixel(hex: string): RgbaPixel {
  const clean = hex.replace('#', '');
  const value = clean.length === 3
    ? clean
        .split('')
        .map((part) => `${part}${part}`)
        .join('')
    : clean;

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
    a: 255,
  };
}

function isProtectedBlackOrWhite(pixel: RgbaPixel): boolean {
  const isBlack = pixel.r === 0 && pixel.g === 0 && pixel.b === 0;
  const isWhite = pixel.r === 255 && pixel.g === 255 && pixel.b === 255;
  return isBlack || isWhite;
}

export function isTintableGrayscalePixel(pixel: RgbaPixel): boolean {
  if (pixel.a === 0 || isProtectedBlackOrWhite(pixel)) {
    return false;
  }

  const darkest = Math.min(pixel.r, pixel.g, pixel.b);
  const lightest = Math.max(pixel.r, pixel.g, pixel.b);
  return lightest - darkest <= GRAYSCALE_TINT_TOLERANCE;
}

export function tintGrayscalePixel(base: RgbaPixel, tint: RgbaPixel): RgbaPixel {
  if (!isTintableGrayscalePixel(base)) {
    return base;
  }

  const grayscaleIntensity = (base.r + base.g + base.b) / (3 * 255);
  return {
    r: Math.round(tint.r * grayscaleIntensity),
    g: Math.round(tint.g * grayscaleIntensity),
    b: Math.round(tint.b * grayscaleIntensity),
    a: base.a,
  };
}

export function tintGrayscalePixelBuffer(
  source: Uint8ClampedArray,
  tint: RgbaPixel
): Uint8ClampedArray {
  const result = new Uint8ClampedArray(source);

  for (let index = 0; index < result.length; index += 4) {
    const next = tintGrayscalePixel(
      {
        r: source[index],
        g: source[index + 1],
        b: source[index + 2],
        a: source[index + 3],
      },
      tint
    );
    result[index] = next.r;
    result[index + 1] = next.g;
    result[index + 2] = next.b;
    result[index + 3] = next.a;
  }

  return result;
}

const drawTintedLayer = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  tint: string,
  width: number,
  height: number
): void => {
  const layerCanvas = document.createElement('canvas');
  layerCanvas.width = width;
  layerCanvas.height = height;
  const layerCtx = layerCanvas.getContext('2d', { willReadFrequently: true });
  if (!layerCtx) {
    ctx.drawImage(img, 0, 0, width, height);
    return;
  }

  layerCtx.imageSmoothingEnabled = false;
  layerCtx.drawImage(img, 0, 0, width, height);

  const imageData = layerCtx.getImageData(0, 0, width, height);
  imageData.data.set(tintGrayscalePixelBuffer(imageData.data, hexToPixel(tint)));
  layerCtx.putImageData(imageData, 0, 0);
  ctx.drawImage(layerCanvas, 0, 0);
};

const drawLayer = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  tint: string | undefined,
  width: number,
  height: number
): void => {
  if (!tint) {
    ctx.drawImage(img, 0, 0, width, height);
    return;
  }

  drawTintedLayer(ctx, img, tint, width, height);
};

export default async function combineTextures(inputs: TextureInput[]): Promise<string> {
  const layers = inputs.map(normalizeLayer).filter((layer): layer is TextureLayer => !!layer);
  const valid = layers.map((layer) => layer.url);
  if (valid.length === 0) {
    throw new Error('No texture assets were available for skin composition.');
  }

  const images = await Promise.all(
    valid.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = (cause) => reject(new TextureLoadError(src, cause));
          img.src = src;
        })
    )
  );

  const canvas = document.createElement('canvas');
  canvas.width = MINECRAFT_SKIN_SIZE;
  canvas.height = MINECRAFT_SKIN_SIZE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    throw new Error('Could not create a 2D canvas context for skin composition.');
  }
  ctx.imageSmoothingEnabled = false;

  images.forEach((img, index) => {
    const layer = layers[index];
    drawLayer(ctx, img, layer.tint, canvas.width, canvas.height);
  });

  return canvas.toDataURL('image/png');
}
