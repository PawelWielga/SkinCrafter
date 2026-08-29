import type { SkinModel } from '../skinModel';
import { defineTextureLayers } from './textureLayers';
import {
  defineTextureItem,
  defineTextureItemVariants,
  resolveTextureItemVariant,
  type ResolvedTextureItemDefinition,
  type TextureItemVariants,
} from './textureItemDefinitions';

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
  Hoodie: defineTextureItemVariants({
    classic: defineTextureItem({
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
} satisfies Record<Exclude<Shirt, 'None'>, TextureItemVariants>;

export function getShirtDefinition(
  shirt: Shirt,
  skinModel: SkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  if (shirt === 'None') return null;
  return resolveTextureItemVariant(shirtDefinitions[shirt], skinModel, assetBaseUrl);
}
