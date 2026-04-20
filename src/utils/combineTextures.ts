export type TextureBlendMode = 'source-over' | 'multiply';

export interface TextureLayerInput {
  url: string | null;
  tint?: string;
  blendMode?: TextureBlendMode;
}

export interface TextureLayer {
  url: string;
  tint?: string;
  blendMode: TextureBlendMode;
}

export interface RgbaPixel {
  r: number;
  g: number;
  b: number;
  a: number;
}

export type TextureInput = string | null | TextureLayerInput;

const normalizeLayer = (layer: TextureInput): TextureLayer | null => {
  if (!layer) return null;
  if (typeof layer === 'string') {
    return { url: layer, blendMode: 'source-over' };
  }
  return layer.url
    ? {
        url: layer.url,
        tint: layer.tint,
        blendMode: layer.blendMode ?? 'source-over',
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

export function multiplyPixel(base: RgbaPixel, tint: RgbaPixel): RgbaPixel {
  return {
    r: Math.round((base.r * tint.r) / 255),
    g: Math.round((base.g * tint.g) / 255),
    b: Math.round((base.b * tint.b) / 255),
    a: base.a,
  };
}

const drawLayer = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  tint: string | undefined,
  blendMode: TextureBlendMode
): void => {
  if (!tint) {
    ctx.drawImage(img, 0, 0);
    return;
  }

  const layerCanvas = document.createElement('canvas');
  layerCanvas.width = img.width;
  layerCanvas.height = img.height;
  const layerCtx = layerCanvas.getContext('2d');
  if (!layerCtx) {
    ctx.drawImage(img, 0, 0);
    return;
  }

  layerCtx.drawImage(img, 0, 0);
  layerCtx.globalCompositeOperation = blendMode;
  layerCtx.fillStyle = tint;
  layerCtx.fillRect(0, 0, layerCanvas.width, layerCanvas.height);
  layerCtx.globalCompositeOperation = 'destination-in';
  layerCtx.drawImage(img, 0, 0);
  ctx.drawImage(layerCanvas, 0, 0);
};

export default async function combineTextures(inputs: TextureInput[]): Promise<string> {
  const layers = inputs.map(normalizeLayer).filter((layer): layer is TextureLayer => !!layer);
  const valid = layers.map((layer) => layer.url);
  if (valid.length === 0) return '';

  const images = await Promise.all(
    valid.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        })
    )
  );

  const canvas = document.createElement('canvas');
  canvas.width = images[0].width;
  canvas.height = images[0].height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  images.forEach((img, index) => {
    const layer = layers[index];
    drawLayer(ctx, img, layer.tint, layer.blendMode);
  });

  return canvas.toDataURL('image/png');
}
