import { resolveAssetUrl, type SkinCrafterAssetPath } from '../assetResolver';

export type TextureLayers =
  | { tintable: SkinCrafterAssetPath; fixed?: SkinCrafterAssetPath }
  | { tintable?: never; fixed: SkinCrafterAssetPath };

export type ResolvedTextureLayers =
  | { tintable: string; fixed?: string }
  | { tintable?: never; fixed: string };

export function defineTextureLayers(layers: {
  tintable?: SkinCrafterAssetPath;
  fixed?: SkinCrafterAssetPath;
}): TextureLayers {
  if (!layers.tintable && !layers.fixed) {
    throw new Error('A texture-backed option must define a tintable layer, a fixed layer, or both.');
  }

  return { ...layers } as TextureLayers;
}

export function resolveTextureLayers(
  layers: TextureLayers,
  assetBaseUrl?: string
): ResolvedTextureLayers {
  if (layers.tintable) {
    return {
      tintable: resolveAssetUrl(layers.tintable, assetBaseUrl),
      ...(layers.fixed ? { fixed: resolveAssetUrl(layers.fixed, assetBaseUrl) } : {}),
    };
  }

  return { fixed: resolveAssetUrl(layers.fixed, assetBaseUrl) };
}

export function hasTintableTextureLayer(
  layers: ResolvedTextureLayers | null | undefined
): boolean {
  return Boolean(layers?.tintable);
}
