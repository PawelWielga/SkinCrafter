import { resolveAssetUrl, type SkinCrafterAssetPath } from '../assetResolver';

export interface TintableTextureLayerDefinition {
  texture: SkinCrafterAssetPath;
  colorSlot?: string;
}

export interface ResolvedTintableTextureLayerDefinition {
  texture: string;
  colorSlot?: string;
}

export type TextureLayers =
  | {
      tintable: readonly TintableTextureLayerDefinition[];
      fixed?: SkinCrafterAssetPath;
    }
  | { tintable?: never; fixed: SkinCrafterAssetPath };

export type ResolvedTextureLayers =
  | {
      tintable: readonly ResolvedTintableTextureLayerDefinition[];
      fixed?: string;
    }
  | { tintable?: never; fixed: string };

export type TintableTextureLayerInput =
  | SkinCrafterAssetPath
  | TintableTextureLayerDefinition;

export function defineTextureLayers(layers: {
  tintable?: TintableTextureLayerInput | readonly TintableTextureLayerInput[];
  fixed?: SkinCrafterAssetPath;
}): TextureLayers {
  const tintableInput = layers.tintable === undefined
    ? []
    : Array.isArray(layers.tintable)
      ? layers.tintable
      : [layers.tintable];
  const tintable = tintableInput.map((layer) =>
    typeof layer === 'string' ? { texture: layer } : { ...layer }
  );

  if (tintable.length === 0 && !layers.fixed) {
    throw new Error('A texture-backed option must define a tintable layer, a fixed layer, or both.');
  }

  if (tintable.length > 0) {
    return {
      tintable,
      ...(layers.fixed ? { fixed: layers.fixed } : {}),
    };
  }

  return { fixed: layers.fixed as SkinCrafterAssetPath };
}

export function resolveTextureLayers(
  layers: TextureLayers,
  assetBaseUrl?: string
): ResolvedTextureLayers {
  if (layers.tintable) {
    return {
      tintable: layers.tintable.map((layer) => ({
        texture: resolveAssetUrl(layer.texture, assetBaseUrl),
        ...(layer.colorSlot ? { colorSlot: layer.colorSlot } : {}),
      })),
      ...(layers.fixed ? { fixed: resolveAssetUrl(layers.fixed, assetBaseUrl) } : {}),
    };
  }

  return { fixed: resolveAssetUrl(layers.fixed, assetBaseUrl) };
}

export function hasTintableTextureLayer(
  layers: ResolvedTextureLayers | null | undefined
): boolean {
  return Boolean(layers?.tintable?.length);
}
