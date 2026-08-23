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

const hoodiePalette = [
  '#4A6FA5',
  '#A33A3A',
  '#2F8F4E',
  '#D6B15D',
  '#7047A3',
  '#5B3A29',
  '#1F1A17',
  '#FFFFFF',
] as const;

const shirtDefinitions = {
  Hoodie: defineWardrobeItemVariants({
    classic: defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: [
          {
            texture: 'textures/top/male/hoodie.png',
            colorSlot: 'primary',
          },
        ],
      }),
      colorSlots: [
        {
          id: 'primary',
          labelKey: 'wardrobeColor.primary',
          defaultColor: hoodiePalette[0],
          palette: hoodiePalette,
        },
      ],
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
