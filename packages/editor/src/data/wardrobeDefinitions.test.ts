import { describe, expect, it } from 'vitest';
import { defineTextureLayers } from './textureLayers';
import {
  defineWardrobeItem,
  isWardrobeItemCompatible,
  resolveWardrobeItem,
  type WardrobeItemDefinition,
} from './wardrobeDefinitions';

describe('wardrobe item definitions', () => {
  it('accepts an explicit classic model for the whole item definition', () => {
    const definition = defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({
        tintable: 'textures/eyes/clasic.tintable.png',
        fixed: 'textures/eyes/clasic.fixed.png',
      }),
    });

    expect(definition.skinModel).toBe('classic');
    expect(definition.textureLayers).toEqual({
      tintable: 'textures/eyes/clasic.tintable.png',
      fixed: 'textures/eyes/clasic.fixed.png',
    });
  });

  it('accepts an explicit slim model and preserves it while resolving every layer', () => {
    const definition = defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({
        tintable: 'textures/eyes/big.tintable.png',
        fixed: 'textures/eyes/big.fixed.png',
      }),
    });

    expect(resolveWardrobeItem(definition, '/assets')).toEqual({
      skinModel: 'slim',
      textureLayers: {
        tintable: '/assets/textures/eyes/big.tintable.png',
        fixed: '/assets/textures/eyes/big.fixed.png',
      },
    });
  });

  it('rejects a missing skinModel instead of silently assuming classic', () => {
    const invalid = {
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    } as unknown as WardrobeItemDefinition;

    expect(() => defineWardrobeItem(invalid)).toThrow(
      'A wardrobe item must define skinModel as "classic" or "slim".'
    );
  });

  it('rejects an unsupported skinModel value', () => {
    const invalid = {
      skinModel: 'wide',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/duck.png' }),
    } as unknown as WardrobeItemDefinition;

    expect(() => defineWardrobeItem(invalid)).toThrow(
      'A wardrobe item must define skinModel as "classic" or "slim".'
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
