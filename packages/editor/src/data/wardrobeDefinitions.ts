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

export function defineWardrobeItem(
  definition: WardrobeItemDefinition
): WardrobeItemDefinition {
  const skinModel = (definition as Partial<WardrobeItemDefinition>).skinModel;
  if (skinModel !== 'classic' && skinModel !== 'slim') {
    throw new Error('A wardrobe item must define skinModel as "classic" or "slim".');
  }

  return { ...definition, skinModel };
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

export function isWardrobeItemCompatible(
  definition: Pick<WardrobeItemDefinition, 'skinModel'>,
  skinModel: SkinCrafterSkinModel
): boolean {
  return definition.skinModel === skinModel;
}
