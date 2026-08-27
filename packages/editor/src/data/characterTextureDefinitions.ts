import type { SkinCrafterSkinModel } from '../publicTypes';
import { defineTextureLayers, type TextureLayers } from './textureLayers';
import {
  defineTextureItem,
  defineTextureItemVariants,
  resolveTextureItemVariant,
  type ResolvedTextureItemDefinition,
  type TextureItemColorSlotDefinition,
  type TextureItemVariants,
} from './textureItemDefinitions';

export type EyeStyle = 'Classic' | 'Small' | 'Big';
export type HairStyle = 'None';

const eyeColorSlot: TextureItemColorSlotDefinition = {
  id: 'iris',
  labelKey: 'category.eyesColor',
  defaultColor: '#2F5D9B',
  palette: ['#2F5D9B', '#2F8F4E', '#5B3A29'],
};

const hairColorSlot: TextureItemColorSlotDefinition = {
  id: 'primary',
  labelKey: 'category.hairColor',
  defaultColor: '#4A2F20',
  palette: ['#4A2F20', '#D6B15D', '#1F1A17'],
};

function sharedColorableVariants(
  textureLayers: TextureLayers,
  colorSlot: TextureItemColorSlotDefinition
): TextureItemVariants {
  return defineTextureItemVariants({
    classic: defineTextureItem({
      skinModel: 'classic',
      textureLayers,
      colorSlots: [colorSlot],
    }),
    slim: defineTextureItem({
      skinModel: 'slim',
      textureLayers,
      colorSlots: [colorSlot],
    }),
  });
}

const eyeDefinitions: Record<EyeStyle, TextureItemVariants> = {
  Classic: sharedColorableVariants(
    defineTextureLayers({
      tintable: {
        texture: 'textures/eyes/clasic.tintable.png',
        colorSlot: eyeColorSlot.id,
      },
      fixed: 'textures/eyes/clasic.fixed.png',
    }),
    eyeColorSlot
  ),
  Small: sharedColorableVariants(
    defineTextureLayers({
      tintable: {
        texture: 'textures/eyes/small.tintable.png',
        colorSlot: eyeColorSlot.id,
      },
    }),
    eyeColorSlot
  ),
  Big: sharedColorableVariants(
    defineTextureLayers({
      tintable: {
        texture: 'textures/eyes/big.tintable.png',
        colorSlot: eyeColorSlot.id,
      },
      fixed: 'textures/eyes/big.fixed.png',
    }),
    eyeColorSlot
  ),
};

const hairDefinitions: Record<HairStyle, TextureItemVariants | null> = {
  None: null,
};

export const eyes = Object.keys(eyeDefinitions) as EyeStyle[];
export const hairStyles = Object.keys(hairDefinitions) as HairStyle[];

export function getEyeDefinition(
  eye: string,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  const variants = eyeDefinitions[eye as EyeStyle];
  return variants ? resolveTextureItemVariant(variants, skinModel, assetBaseUrl) : null;
}

export function getHairDefinition(
  hair: string,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedTextureItemDefinition | null {
  const variants = hairDefinitions[hair as HairStyle];
  return variants ? resolveTextureItemVariant(variants, skinModel, assetBaseUrl) : null;
}

export function getEyeColorPalette(): readonly string[] {
  return eyeColorSlot.palette;
}

export function getHairColorPalette(): readonly string[] {
  return hairColorSlot.palette;
}
