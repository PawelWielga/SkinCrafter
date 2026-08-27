import { describe, expect, it } from 'vitest';
import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  defineWardrobeItemVariants,
  isWardrobeItemCompatible,
  resolveWardrobeItem,
  resolveWardrobeItemVariant,
  type WardrobeItemDefinition,
} from './wardrobeDefinitions';

const primarySlot = {
  id: 'primary',
  labelKey: 'wardrobeColor.primary' as const,
  defaultColor: '#4A6FA5',
  palette: ['#4A6FA5', '#A33A3A'],
};

const secondarySlot = {
  id: 'secondary',
  labelKey: 'wardrobeColor.secondary' as const,
  defaultColor: '#D6B15D',
  palette: ['#D6B15D', '#7047A3'],
};

describe('wardrobe item definitions', () => {
  it('accepts an explicit classic model for a tintable item with a color slot', () => {
    const definition = defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: {
          texture: 'textures/eyes/clasic.tintable.png',
          colorSlot: 'primary',
        },
        fixed: 'textures/eyes/clasic.fixed.png',
      }),
      colorSlots: [primarySlot],
    });

    expect(definition.skinModel).toBe('classic');
    expect(definition.textureLayers).toEqual({
      tintable: [{ texture: 'textures/eyes/clasic.tintable.png', colorSlot: 'primary' }],
      fixed: 'textures/eyes/clasic.fixed.png',
    });
  });

  it('preserves arbitrary ordered tintable layers, shared slots, different slots and fixed-last metadata', () => {
    const definition = defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({
        tintable: [
          { texture: 'textures/eyes/big.fixed.png', colorSlot: 'primary' },
          { texture: 'textures/eyes/small.tintable.png', colorSlot: 'secondary' },
          { texture: 'textures/eyes/clasic.fixed.png', colorSlot: 'primary' },
        ],
        fixed: 'textures/eyes/big.tintable.png',
      }),
      colorSlots: [primarySlot, secondarySlot],
    });

    expect(resolveWardrobeItem(definition, '/assets')).toEqual({
      skinModel: 'slim',
      textureLayers: {
        tintable: [
          { texture: '/assets/textures/eyes/big.fixed.png', colorSlot: 'primary' },
          { texture: '/assets/textures/eyes/small.tintable.png', colorSlot: 'secondary' },
          { texture: '/assets/textures/eyes/clasic.fixed.png', colorSlot: 'primary' },
        ],
        fixed: '/assets/textures/eyes/big.tintable.png',
      },
      colorSlots: [primarySlot, secondarySlot],
    });
  });

  it('supports fixed-only definitions without color slots', () => {
    const variants = defineWardrobeItemVariants({
      classic: defineWardrobeItem({
        skinModel: 'classic',
        textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
      }),
      slim: defineWardrobeItem({
        skinModel: 'slim',
        textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
      }),
    });

    expect(resolveWardrobeItemVariant(variants, 'classic', '/assets')).toEqual({
      skinModel: 'classic',
      textureLayers: { fixed: '/assets/textures/hat/duck.png' },
    });
    expect(resolveWardrobeItemVariant(variants, 'slim', '/assets')).toEqual({
      skinModel: 'slim',
      textureLayers: { fixed: '/assets/textures/hat/duck.png' },
    });
  });

  it('rejects tintable layers without declared color slots through the shared texture-item validator', () => {
    expect(() => defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ tintable: 'textures/eyes/small.tintable.png' }),
    })).toThrow('Every tintable texture item must define at least one color slot.');
  });

  it('rejects tintable layers that reference an unknown slot', () => {
    expect(() => defineWardrobeItem({
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

  it('rejects duplicate and unused color slots', () => {
    expect(() => defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: {
          texture: 'textures/eyes/small.tintable.png',
          colorSlot: 'primary',
        },
      }),
      colorSlots: [primarySlot, primarySlot],
    })).toThrow('Texture item color slot "primary" is defined more than once.');

    expect(() => defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: {
          texture: 'textures/eyes/small.tintable.png',
          colorSlot: 'primary',
        },
      }),
      colorSlots: [primarySlot, secondarySlot],
    })).toThrow('Texture item color slot "secondary" is not used by any tintable layer.');
  });

  it('rejects a variant whose registry key disagrees with its declared model', () => {
    const slim = defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    });

    expect(() => defineWardrobeItemVariants({ classic: slim })).toThrow(
      'Texture item variant "classic" must declare the same skinModel.'
    );
  });

  it('rejects a missing skinModel instead of silently assuming classic', () => {
    const invalid = {
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    } as unknown as WardrobeItemDefinition;

    expect(() => defineWardrobeItem(invalid)).toThrow(
      'A texture item must define skinModel as "classic" or "slim".'
    );
  });

  it('rejects an unsupported skinModel value', () => {
    const invalid = {
      skinModel: 'wide',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    } as unknown as WardrobeItemDefinition;

    expect(() => defineWardrobeItem(invalid)).toThrow(
      'A texture item must define skinModel as "classic" or "slim".'
    );
  });

  it('treats classic and slim definitions as mutually incompatible when switching models', () => {
    const classic = defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    });
    const slim = defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/bottom/pants.png' }),
    });

    expect(isWardrobeItemCompatible(classic, 'classic')).toBe(true);
    expect(isWardrobeItemCompatible(classic, 'slim')).toBe(false);
    expect(isWardrobeItemCompatible(slim, 'slim')).toBe(true);
    expect(isWardrobeItemCompatible(slim, 'classic')).toBe(false);
  });
});
