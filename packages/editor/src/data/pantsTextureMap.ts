import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  resolveWardrobeItem,
  type ResolvedWardrobeItemDefinition,
  type WardrobeItemDefinition,
} from './wardrobeDefinitions';

export const pants = ['None', 'Pants'] as const;
export type Pants = (typeof pants)[number];

const pantsDefinitions = {
  Pants: defineWardrobeItem({
    skinModel: 'classic',
    textureLayers: defineTextureLayers({ fixed: 'textures/bottom/pants.png' }),
  }),
} satisfies Record<Exclude<Pants, 'None'>, WardrobeItemDefinition>;

export function getPantsDefinition(
  pants: Pants,
  assetBaseUrl?: string
): ResolvedWardrobeItemDefinition | null {
  if (pants === 'None') return null;
  return resolveWardrobeItem(pantsDefinitions[pants], assetBaseUrl);
}
