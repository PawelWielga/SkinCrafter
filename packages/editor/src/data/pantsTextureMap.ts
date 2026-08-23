import type { SkinCrafterSkinModel } from '../publicTypes';
import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  defineWardrobeItemVariants,
  resolveWardrobeItemVariant,
  type ResolvedWardrobeItemDefinition,
  type WardrobeItemVariants,
} from './wardrobeDefinitions';

export const pants = ['None', 'Pants'] as const;
export type Pants = (typeof pants)[number];

const pantsDefinitions = {
  Pants: defineWardrobeItemVariants({
    classic: defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/bottom/pants.png' }),
    }),
    slim: defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/bottom/pants.png' }),
    }),
  }),
} satisfies Record<Exclude<Pants, 'None'>, WardrobeItemVariants>;

export function getPantsDefinition(
  pants: Pants,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  if (pants === 'None') return null;
  return resolveWardrobeItemVariant(pantsDefinitions[pants], skinModel, assetBaseUrl);
}
