import type { AppearanceState, TextureLayerCategoryId } from './data/appearance';
import type { SkinCrafterSkinOutput } from './publicTypes';

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
  layerOrder: TextureLayerCategoryId[]
): SkinCrafterSkinOutput {
  const blob = dataUrlToBlob(dataUrl);
  const file = new File([blob], 'skincrafter-skin.png', { type: 'image/png' });

  return {
    blob,
    file,
    dataUrl,
    metadata: {
      width: 64,
      height: 64,
      mimeType: 'image/png',
      model: appearance.sex === 'Female' ? 'slim' : 'classic',
      appearance: { ...appearance },
      layerOrder: [...layerOrder],
    },
  };
}
