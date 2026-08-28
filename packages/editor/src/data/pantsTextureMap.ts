import type { SkinCrafterSkinModel } from '../publicTypes';
import { defineTextureLayers } from './textureLayers';
import {
  defineTextureItem,
  defineTextureItemVariants,
  resolveTextureItemVariant,
  type ResolvedTextureItemDefinition,
  type TextureItemVariants,
} from './textureItemDefinitions';

export const pants = ['None', 'Pants'] as const;
export type Pants = (typeof pants)[number];

const pantsDefinitions = {
  Pants: defineTextureItemVariants({
    classic: defineTextureItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/bottom/pants.png' }),
    }),
    slim: defineTextureItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/bottom/pants.png' }),
    }),
  }),
} satisfies Record<Exclude<Pants, 'None'>, TextureItemVariants>;

export function getPantsDefinition(
  pants: Pants,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  if (pants === 'None') return null;
  return resolveTextureItemVariant(pantsDefinitions[pants], skinModel, assetBaseUrl);
}
