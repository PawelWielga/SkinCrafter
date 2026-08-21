export type TextureLayerRole = 'tintable' | 'fixed';

export interface TintableTextureLayerInput {
  url: string | null;
  role: 'tintable';
  tint: string;
}

export interface FixedTextureLayerInput {
  url: string | null;
  role: 'fixed';
}

export type TextureLayerInput = TintableTextureLayerInput | FixedTextureLayerInput;

export interface TextureLayer {
  url: string;
  role: TextureLayerRole;
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

export const MINECRAFT_SKIN_SIZE = 64;

const normalizeLayer = (layer: TextureInput): TextureLayer | null => {
  if (!layer) return null;
  if (typeof layer === 'string') {
    return { url: layer, role: 'fixed' };
  }
  if (!layer.url) return null;
  return layer.role === 'tintable'
    ? { url: layer.url, role: 'tintable', tint: layer.tint }
    : { url: layer.url, role: 'fixed' };
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

export function isMinecraftSkinAtlasSize(width: number, height: number): boolean {
  return width === MINECRAFT_SKIN_SIZE && height === MINECRAFT_SKIN_SIZE;
}

/**
 * Applies the selected color to an explicitly tintable pixel while preserving
 * the source pixel's intensity and alpha. RGB values never decide whether a
 * pixel is tintable; that semantic belongs to the texture layer itself.
 */
export function tintTexturePixel(base: RgbaPixel, tint: RgbaPixel): RgbaPixel {
  if (base.a === 0) return base;

  const sourceIntensity = (base.r + base.g + base.b) / (3 * 255);
  return {
    r: Math.round(tint.r * sourceIntensity),
    g: Math.round(tint.g * sourceIntensity),
    b: Math.round(tint.b * sourceIntensity),
    a: base.a,
  };
}

export function tintTexturePixelBuffer(
  source: Uint8ClampedArray,
  tint: RgbaPixel
): Uint8ClampedArray {
  const result = new Uint8ClampedArray(source);

  for (let index = 0; index < result.length; index += 4) {
    const next = tintTexturePixel(
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
  tint: string
): void => {
  const layerCanvas = document.createElement('canvas');
  layerCanvas.width = MINECRAFT_SKIN_SIZE;
  layerCanvas.height = MINECRAFT_SKIN_SIZE;
  const layerCtx = layerCanvas.getContext('2d', { willReadFrequently: true });
  if (!layerCtx) {
    throw new Error('Could not create a 2D canvas context for tintable skin composition.');
  }

  layerCtx.imageSmoothingEnabled = false;
  layerCtx.drawImage(img, 0, 0);

  const imageData = layerCtx.getImageData(0, 0, MINECRAFT_SKIN_SIZE, MINECRAFT_SKIN_SIZE);
  imageData.data.set(tintTexturePixelBuffer(imageData.data, hexToPixel(tint)));
  layerCtx.putImageData(imageData, 0, 0);
  ctx.drawImage(layerCanvas, 0, 0);
};

const drawLayer = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  layer: TextureLayer
): void => {
  if (layer.role === 'fixed') {
    ctx.drawImage(img, 0, 0);
    return;
  }

  drawTintedLayer(ctx, img, layer.tint ?? '#FFFFFF');
};

const loadTexture = (src: string): Promise<HTMLImageElement> =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      if (!isMinecraftSkinAtlasSize(width, height)) {
        reject(
          new TextureLoadError(
            src,
            new Error(
              `Skin texture atlas must be ${MINECRAFT_SKIN_SIZE}x${MINECRAFT_SKIN_SIZE}; got ${width}x${height}.`
            )
          )
        );
        return;
      }
      resolve(img);
    };
    img.onerror = (cause) => reject(new TextureLoadError(src, cause));
    img.src = src;
  });

export default async function combineTextures(inputs: TextureInput[]): Promise<string> {
  const layers = inputs.map(normalizeLayer).filter((layer): layer is TextureLayer => !!layer);
  if (layers.length === 0) {
    throw new Error('No texture assets were available for skin composition.');
  }

  const images = await Promise.all(layers.map((layer) => loadTexture(layer.url)));

  const canvas = document.createElement('canvas');
  canvas.width = MINECRAFT_SKIN_SIZE;
  canvas.height = MINECRAFT_SKIN_SIZE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    throw new Error('Could not create a 2D canvas context for skin composition.');
  }
  ctx.imageSmoothingEnabled = false;

  images.forEach((img, index) => drawLayer(ctx, img, layers[index]));

  return canvas.toDataURL('image/png');
}
