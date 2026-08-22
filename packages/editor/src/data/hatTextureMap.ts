import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  resolveWardrobeItem,
  type ResolvedWardrobeItemDefinition,
  type WardrobeItemDefinition,
} from './wardrobeDefinitions';

export const hats = ['None', 'Duck'] as const;
export type Hat = (typeof hats)[number];

const hatDefinitions = {
  Duck: defineWardrobeItem({
    skinModel: 'classic',
    textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
  }),
} satisfies Record<Exclude<Hat, 'None'>, WardrobeItemDefinition>;

export function getHatDefinition(
  hat: Hat,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  if (hat === 'None') return null;
  return resolveWardrobeItem(hatDefinitions[hat], assetBaseUrl);
}
