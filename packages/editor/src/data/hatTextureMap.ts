import type { SkinModel } from '../skinModel';
import { defineTextureLayers } from './textureLayers';
import {
  defineTextureItem,
  defineTextureItemVariants,
  resolveTextureItemVariant,
  type ResolvedTextureItemDefinition,
  type TextureItemVariants,
} from './textureItemDefinitions';

export const hats = ['None', 'Duck'] as const;
export type Hat = (typeof hats)[number];

const hatDefinitions = {
  Duck: defineTextureItemVariants({
    classic: defineTextureItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    }),
    slim: defineTextureItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    }),
  }),
} satisfies Record<Exclude<Hat, 'None'>, TextureItemVariants>;

export function getHatDefinition(
  hat: Hat,
  skinModel: SkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  if (hat === 'None') return null;
  return resolveTextureItemVariant(hatDefinitions[hat], skinModel, assetBaseUrl);
}
