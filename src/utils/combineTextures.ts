export interface TextureLayerInput {
  url: string | null;
  tint?: string;
}

export interface TextureLayer {
  url: string;
  tint?: string;
}

export type TextureInput = string | null | TextureLayerInput;

const normalizeLayer = (layer: TextureInput): TextureLayer | null => {
  if (!layer) return null;
  if (typeof layer === 'string') return { url: layer };
  return layer.url ? { url: layer.url, tint: layer.tint } : null;
};

const drawLayer = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  tint: string | undefined
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
  layerCtx.globalCompositeOperation = 'multiply';
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
    drawLayer(ctx, img, layers[index].tint);
  });

  return canvas.toDataURL();
}
