import { describe, expect, it } from 'vitest';
import {
  appearanceCategories,
  buildTextureInputs,
  defaultAppearance,
  getOptions,
} from './appearance';

describe('appearance model', () => {
  it('exposes all MVP wardrobe categories', () => {
    expect(appearanceCategories.map((category) => category.id)).toEqual([
      'race',
      'sex',
      'skinColor',
      'eyes',
      'eyesColor',
      'hair',
      'hairColor',
      'hat',
      'shirt',
      'pants',
      'shoes',
      'accessory',
    ]);
  });

  it('uses None as the no-texture option for optional categories', () => {
    expect(getOptions('shirt', defaultAppearance)).toEqual([
      expect.objectContaining({ id: 'None', texture: null }),
    ]);
  });

  it('tints only the race base layer in the current MVP texture inputs', () => {
    const inputs = buildTextureInputs(defaultAppearance);

    expect(inputs[0]).toEqual(
      expect.objectContaining({
        tint: defaultAppearance.skinColor,
        blendMode: 'multiply',
      })
    );
    expect(inputs.slice(1).filter((input) => input && typeof input === 'object' && 'tint' in input))
      .toHaveLength(0);
  });
});
