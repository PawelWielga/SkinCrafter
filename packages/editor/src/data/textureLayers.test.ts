import { describe, expect, it } from 'vitest';
import { defineTextureLayers, resolveTextureLayers } from './textureLayers';

describe('explicit texture layer definitions', () => {
  it('rejects a texture-backed option with neither layer', () => {
    expect(() => defineTextureLayers({})).toThrow(
      'A texture-backed option must define a tintable layer, a fixed layer, or both.'
    );
  });

  it('supports tintable-only, fixed-only and mixed definitions', () => {
    expect(
      defineTextureLayers({ tintable: 'textures/eyes/small.tintable.png' })
    ).toEqual({ tintable: [{ texture: 'textures/eyes/small.tintable.png' }] });
    expect(
      defineTextureLayers({ fixed: 'textures/race/bear/male.fixed.png' })
    ).toEqual({ fixed: 'textures/race/bear/male.fixed.png' });
    expect(
      defineTextureLayers({
        tintable: 'textures/race/human/male.tintable.png',
        fixed: 'textures/race/human/male.fixed.png',
      })
    ).toEqual({
      tintable: [{ texture: 'textures/race/human/male.tintable.png' }],
      fixed: 'textures/race/human/male.fixed.png',
    });
  });

  it('keeps arbitrary tintable layers in declaration order and preserves color slots', () => {
    expect(
      defineTextureLayers({
        tintable: [
          { texture: 'textures/eyes/big.fixed.png', colorSlot: 'primary' },
          { texture: 'textures/eyes/small.tintable.png', colorSlot: 'secondary' },
          { texture: 'textures/eyes/clasic.fixed.png', colorSlot: 'primary' },
        ],
        fixed: 'textures/eyes/clasic.tintable.png',
      })
    ).toEqual({
      tintable: [
        { texture: 'textures/eyes/big.fixed.png', colorSlot: 'primary' },
        { texture: 'textures/eyes/small.tintable.png', colorSlot: 'secondary' },
        { texture: 'textures/eyes/clasic.fixed.png', colorSlot: 'primary' },
      ],
      fixed: 'textures/eyes/clasic.tintable.png',
    });
  });

  it('resolves every logical layer below a host-provided asset base URL without reordering', () => {
    const layers = defineTextureLayers({
      tintable: [
        { texture: 'textures/race/human/male.fixed.png', colorSlot: 'primary' },
        { texture: 'textures/race/human/male.tintable.png', colorSlot: 'secondary' },
      ],
      fixed: 'textures/race/human/female.tintable.png',
    });

    expect(resolveTextureLayers(layers, '/character/skincrafter-assets/')).toEqual({
      tintable: [
        {
          texture: '/character/skincrafter-assets/textures/race/human/male.fixed.png',
          colorSlot: 'primary',
        },
        {
          texture: '/character/skincrafter-assets/textures/race/human/male.tintable.png',
          colorSlot: 'secondary',
        },
      ],
      fixed: '/character/skincrafter-assets/textures/race/human/female.tintable.png',
    });
  });
});
