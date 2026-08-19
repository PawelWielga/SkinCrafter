import { describe, expect, it } from 'vitest';
import {
  appearanceCategories,
  buildTextureInputs,
  defaultAppearance,
  getOptions,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  textureLayerCategories,
} from './appearance';

describe('appearance model', () => {
  it('exposes all wardrobe categories', () => {
    expect(appearanceCategories.map((category) => category.id)).toEqual([
      'race', 'sex', 'skinColor', 'eyes', 'eyesColor', 'hair', 'hairColor',
      'hat', 'shirt', 'pants', 'shoes', 'accessory',
    ]);
  });

  it('uses None as the no-texture option for optional categories', () => {
    expect(getOptions('shirt', defaultAppearance)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'None', texture: null })])
    );
    expect(getOptions('pants', defaultAppearance)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'None', texture: null })])
    );
  });

  it('normalizes texture layer order', () => {
    expect(normalizeTextureLayerOrder(['pants', 'hat', 'unknown', 'hat'])).toEqual([
      'pants', 'hat', 'shirt', 'shoes', 'accessory',
    ]);
    expect(normalizeTextureLayerOrder(null)).toEqual(textureLayerCategories);
  });

  it('resolves every texture through the host asset base when provided', () => {
    const inputs = buildTextureInputs(
      { ...defaultAppearance, hat: 'Duck', shirt: 'Hoodie', pants: 'Pants' },
      ['pants', 'shirt', 'hat', 'shoes', 'accessory'],
      '/character/skincrafter-assets/'
    );
    expect(inputs[0]).toEqual(expect.objectContaining({
      url: '/character/skincrafter-assets/textures/race/human/male.png',
    }));
    expect(inputs[2]).toEqual(expect.objectContaining({
      url: '/character/skincrafter-assets/textures/eyes/clasic.png',
    }));
    expect(inputs[4]).toEqual({
      url: '/character/skincrafter-assets/textures/bottom/pants.png',
      blendMode: 'source-over',
    });
    expect(inputs[5]).toEqual({
      url: '/character/skincrafter-assets/textures/top/male/hoodie.png',
      blendMode: 'source-over',
    });
    expect(inputs[6]).toBe('/character/skincrafter-assets/textures/hat/duck.png');
  });

  it('switches the base texture and model inputs when sex changes', () => {
    const inputs = buildTextureInputs({ ...defaultAppearance, sex: 'Female' }, undefined, '/');
    expect(inputs[0]).toEqual(expect.objectContaining({ url: '/textures/race/human/female.png' }));
  });

  it('limits and normalizes sex variants to those available for a race', () => {
    expect(getOptions('sex', { ...defaultAppearance, race: 'Zombie' })).toEqual([
      expect.objectContaining({ id: 'Male' }),
    ]);
    expect(normalizeAppearance({ ...defaultAppearance, race: 'Zombie', sex: 'Female' }).sex).toBe('Male');
  });
});
