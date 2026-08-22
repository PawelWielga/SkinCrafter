import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  resolveWardrobeItem,
  type ResolvedWardrobeItemDefinition,
  type WardrobeItemDefinition,
} from './wardrobeDefinitions';

export const shirts = ['None', 'Hoodie'] as const;
export type Shirt = (typeof shirts)[number];

const shirtDefinitions = {
  Hoodie: defineWardrobeItem({
    skinModel: 'classic',
    textureLayers: defineTextureLayers({ fixed: 'textures/top/male/hoodie.png' }),
  }),
} satisfies Record<Exclude<Shirt, 'None'>, WardrobeItemDefinition>;

export function getShirtDefinition(
  shirt: Shirt,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  if (shirt === 'None') return null;
  return resolveWardrobeItem(shirtDefinitions[shirt], assetBaseUrl);
}
