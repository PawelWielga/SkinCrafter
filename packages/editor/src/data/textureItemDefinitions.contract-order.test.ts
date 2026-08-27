import { describe, expect, it } from 'vitest';
import { defineTextureLayers } from './textureLayers';
import { defineTextureItem, defineTextureItemVariants } from './textureItemDefinitions';

describe('texture item variant color-slot contracts', () => {
  it('accepts identical slot fields authored with different property insertion order', () => {
    const classicSlot = {
      id: 'primary',
      labelKey: 'wardrobeColor.primary' as const,
      defaultColor: '#4A6FA5',
      palette: ['#4A6FA5', '#A33A3A'],
    };
    const slimSlot = {
      palette: ['#4A6FA5', '#A33A3A'],
      defaultColor: '#4A6FA5',
      labelKey: 'wardrobeColor.primary' as const,
      id: 'primary',
    };

    expect(() => defineTextureItemVariants({
      classic: defineTextureItem({
        skinModel: 'classic',
        textureLayers: defineTextureLayers({
          tintable: { texture: 'textures/eyes/small.tintable.png', colorSlot: 'primary' },
        }),
        colorSlots: [classicSlot],
      }),
      slim: defineTextureItem({
        skinModel: 'slim',
        textureLayers: defineTextureLayers({
          tintable: { texture: 'textures/eyes/small.tintable.png', colorSlot: 'primary' },
        }),
        colorSlots: [slimSlot],
      }),
    })).not.toThrow();
  });
});
