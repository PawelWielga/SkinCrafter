import { describe, expect, it } from 'vitest';
import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  defineWardrobeItemVariants,
} from './wardrobeDefinitions';
import type { SkinCrafterSkinModel } from '../publicTypes';

const primarySlot = {
  id: 'primary',
  labelKey: 'wardrobeColor.primary' as const,
  defaultColor: '#4A6FA5',
  palette: ['#4A6FA5', '#A33A3A'] as const,
};

function colorableVariant(
  skinModel: SkinCrafterSkinModel,
  palette: readonly string[] = primarySlot.palette
) {
  return defineWardrobeItem({
    skinModel,
    textureLayers: defineTextureLayers({
      tintable: {
        texture: 'textures/eyes/small.tintable.png',
        colorSlot: 'primary',
      },
    }),
    colorSlots: [{ ...primarySlot, palette }],
  });
}

describe('wardrobe color contracts across model variants', () => {
  it('accepts identical color slots for Classic and Slim variants', () => {
    expect(() => defineWardrobeItemVariants({
      classic: colorableVariant('classic'),
      slim: colorableVariant('slim'),
    })).not.toThrow();
  });

  it('rejects conflicting color slots for two colorable variants of one item', () => {
    expect(() => defineWardrobeItemVariants({
      classic: colorableVariant('classic'),
      slim: colorableVariant('slim', ['#4A6FA5', '#2F8F4E']),
    })).toThrow(
      'Colorable wardrobe variants for one item must define identical color slots across skin models.'
    );
  });

  it('allows a fixed-only variant to coexist with a colorable variant', () => {
    expect(() => defineWardrobeItemVariants({
      classic: colorableVariant('classic'),
      slim: defineWardrobeItem({
        skinModel: 'slim',
        textureLayers: defineTextureLayers({ fixed: 'textures/eyes/clasic.fixed.png' }),
      }),
    })).not.toThrow();
  });
});
