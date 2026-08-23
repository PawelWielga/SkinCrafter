import type { SkinCrafterSkinModel } from '../publicTypes';
import {
  resolveTextureLayers,
  type ResolvedTextureLayers,
  type TextureLayers,
} from './textureLayers';

export interface WardrobeItemDefinition {
  skinModel: SkinCrafterSkinModel;
  textureLayers: TextureLayers;
}

export interface ResolvedWardrobeItemDefinition {
  skinModel: SkinCrafterSkinModel;
  textureLayers: ResolvedTextureLayers;
}

export type WardrobeItemVariants = Partial<
  Record<SkinCrafterSkinModel, WardrobeItemDefinition>
>;

export function defineWardrobeItem(
  definition: WardrobeItemDefinition
): WardrobeItemDefinition {
  const skinModel = (definition as Partial<WardrobeItemDefinition>).skinModel;
  if (skinModel !== 'classic' && skinModel !== 'slim') {
    throw new Error('A wardrobe item must define skinModel as "classic" or "slim".');
  }

  return { ...definition, skinModel };
}

export function defineWardrobeItemVariants(
  variants: WardrobeItemVariants
): WardrobeItemVariants {
  const normalized: WardrobeItemVariants = {};

  for (const skinModel of ['classic', 'slim'] as const) {
    const definition = variants[skinModel];
    if (!definition) continue;

    const validated = defineWardrobeItem(definition);
    if (validated.skinModel !== skinModel) {
      throw new Error(`Wardrobe variant "${skinModel}" must declare the same skinModel.`);
    }
    normalized[skinModel] = validated;
  }

  return normalized;
}

export function resolveWardrobeItem(
  definition: WardrobeItemDefinition,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition {
  return {
    skinModel: definition.skinModel,
    textureLayers: resolveTextureLayers(definition.textureLayers, assetBaseUrl),
  };
}

export function resolveWardrobeItemVariant(
  variants: WardrobeItemVariants,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  const definition = variants[skinModel];
  return definition ? resolveWardrobeItem(definition, assetBaseUrl) : null;
}

export function isWardrobeItemCompatible(
  definition: Pick<WardrobeItemDefinition, 'skinModel'>,
  skinModel: SkinCrafterSkinModel
): boolean {
  return definition.skinModel === skinModel;
}
