import {
  cloneWardrobeColors,
  normalizeWardrobeColors,
  type AppearanceState,
  type TextureLayerCategoryId,
  type WardrobeColorState,
} from './data/appearance';
import type { SkinCrafterSkinOutput } from './publicTypes';
import type { SkinModel } from './skinModel';

export function dataUrlToBlob(dataUrl: string): Blob {
  const [header, payload] = dataUrl.split(',', 2);
  const mimeType = header.match(/^data:([^;]+);base64$/)?.[1] ?? 'image/png';
  const binary = atob(payload ?? '');
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: mimeType });
}

export function createSkinOutput(
  dataUrl: string,
  appearance: AppearanceState,
  layerOrder: TextureLayerCategoryId[],
  model: SkinModel = appearance.sex === 'Female' ? 'slim' : 'classic',
  wardrobeColors?: WardrobeColorState
): SkinCrafterSkinOutput {
  const blob = dataUrlToBlob(dataUrl);
  const file = new File([blob], 'skincrafter-skin.png', { type: 'image/png' });
  const normalizedWardrobeColors = normalizeWardrobeColors(wardrobeColors);

  return {
    blob,
    file,
    dataUrl,
    metadata: {
      width: 64,
      height: 64,
      mimeType: 'image/png',
      model,
      appearance: { ...appearance },
      layerOrder: [...layerOrder],
      wardrobeColors: cloneWardrobeColors(normalizedWardrobeColors),
    },
  };
}
