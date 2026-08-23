import type { SkinCrafterSkinModel } from '../publicTypes';
import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  defineWardrobeItemVariants,
  resolveWardrobeItemVariant,
  type ResolvedWardrobeItemDefinition,
  type WardrobeItemVariants,
} from './wardrobeDefinitions';

export const shirts = ['None', 'Hoodie'] as const;
export type Shirt = (typeof shirts)[number];

const shirtDefinitions = {
  Hoodie: defineWardrobeItemVariants({
    classic: defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/top/male/hoodie.png' }),
    }),
  }),
} satisfies Record<Exclude<Shirt, 'None'>, WardrobeItemVariants>;

export function getShirtDefinition(
  shirt: Shirt,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  if (shirt === 'None') return null;
  return resolveWardrobeItemVariant(shirtDefinitions[shirt], skinModel, assetBaseUrl);
}
