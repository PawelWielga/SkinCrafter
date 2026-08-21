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
    ).toEqual({ tintable: 'textures/eyes/small.tintable.png' });
    expect(
      defineTextureLayers({ fixed: 'textures/race/bear/male.fixed.png' })
    ).toEqual({ fixed: 'textures/race/bear/male.fixed.png' });
    expect(
      defineTextureLayers({
        tintable: 'textures/race/human/male.tintable.png',
        fixed: 'textures/race/human/male.fixed.png',
      })
    ).toEqual({
      tintable: 'textures/race/human/male.tintable.png',
      fixed: 'textures/race/human/male.fixed.png',
    });
  });

  it('resolves both logical layers below a host-provided asset base URL', () => {
    const layers = defineTextureLayers({
      tintable: 'textures/race/human/male.tintable.png',
      fixed: 'textures/race/human/male.fixed.png',
    });

    expect(resolveTextureLayers(layers, '/character/skincrafter-assets/')).toEqual({
      tintable: '/character/skincrafter-assets/textures/race/human/male.tintable.png',
      fixed: '/character/skincrafter-assets/textures/race/human/male.fixed.png',
    });
  });
});
