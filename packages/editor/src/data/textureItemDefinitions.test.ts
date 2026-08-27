import { describe, expect, it } from 'vitest';
import { defineTextureLayers } from './textureLayers';
import {
  buildTextureInputsFromItem,
  defineTextureItem,
  defineTextureItemVariants,
  resolveTextureItemVariant,
  type TextureItemDefinition,
} from './textureItemDefinitions';

const primarySlot = {
  id: 'primary',
  labelKey: 'wardrobeColor.primary' as const,
  defaultColor: '#4A6FA5',
  palette: ['#4A6FA5', '#A33A3A'],
};

describe('texture item definitions', () => {
  it('requires an explicit supported skin model', () => {
    const missingModel = {
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    } as unknown as TextureItemDefinition;
    const invalidModel = {
      skinModel: 'wide',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    } as unknown as TextureItemDefinition;

    expect(() => defineTextureItem(missingModel)).toThrow(
      'A texture item must define skinModel as "classic" or "slim".'
    );
    expect(() => defineTextureItem(invalidModel)).toThrow(
      'A texture item must define skinModel as "classic" or "slim".'
    );
  });

  it('does not cross-fallback between classic and slim variants', () => {
    const variants = defineTextureItemVariants({
      classic: defineTextureItem({
        skinModel: 'classic',
        textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
      }),
    });

    expect(resolveTextureItemVariant(variants, 'classic', '/assets')).toEqual({
      skinModel: 'classic',
      textureLayers: { fixed: '/assets/textures/hat/duck.png' },
    });
    expect(resolveTextureItemVariant(variants, 'slim', '/assets')).toBeNull();
  });

  it('validates tintable layers and their color slots', () => {
    expect(() => defineTextureItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ tintable: 'textures/eyes/small.tintable.png' }),
    })).toThrow('Every tintable texture item must define at least one color slot.');

    expect(() => defineTextureItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: {
          texture: 'textures/eyes/small.tintable.png',
          colorSlot: 'missing',
        },
      }),
      colorSlots: [primarySlot],
    })).toThrow('Every tintable texture layer must reference a declared colorSlot.');
  });

  it('builds tintable layers in declaration order and fixed last with slot defaults', () => {
    const item = defineTextureItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: [
          { texture: 'textures/eyes/small.tintable.png', colorSlot: 'primary' },
          { texture: 'textures/eyes/big.tintable.png', colorSlot: 'primary' },
        ],
        fixed: 'textures/eyes/big.fixed.png',
      }),
      colorSlots: [primarySlot],
    });
    const resolved = resolveTextureItemVariant(
      defineTextureItemVariants({ classic: item }),
      'classic',
      '/assets'
    );

    expect(buildTextureInputsFromItem(resolved)).toEqual([
      {
        url: '/assets/textures/eyes/small.tintable.png',
        role: 'tintable',
        tint: '#4A6FA5',
      },
      {
        url: '/assets/textures/eyes/big.tintable.png',
        role: 'tintable',
        tint: '#4A6FA5',
      },
      { url: '/assets/textures/eyes/big.fixed.png', role: 'fixed' },
    ]);
  });
});
