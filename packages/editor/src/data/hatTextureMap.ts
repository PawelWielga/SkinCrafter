import type { SkinCrafterSkinModel } from '../publicTypes';
import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  defineWardrobeItemVariants,
  resolveWardrobeItemVariant,
  type ResolvedWardrobeItemDefinition,
  type WardrobeItemVariants,
} from './wardrobeDefinitions';

export const hats = ['None', 'Duck'] as const;
export type Hat = (typeof hats)[number];

const hatDefinitions = {
  Duck: defineWardrobeItemVariants({
    classic: defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    }),
    slim: defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    }),
  }),
} satisfies Record<Exclude<Hat, 'None'>, WardrobeItemVariants>;

export function getHatDefinition(
  hat: Hat,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  if (hat === 'None') return null;
  return resolveWardrobeItemVariant(hatDefinitions[hat], skinModel, assetBaseUrl);
}
