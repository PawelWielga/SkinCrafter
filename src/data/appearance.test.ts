import { describe, expect, it } from 'vitest';
import {
  appearanceCategories,
  buildTextureInputs,
  defaultAppearance,
  getOptions,
  normalizeAppearance,
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
    expect(getOptions('shirt', defaultAppearance)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'None', texture: null })])
    );
    expect(getOptions('pants', defaultAppearance)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'None', texture: null })])
    );
  });

  it('defaults sex to Male', () => {
    expect(defaultAppearance.sex).toBe('Male');
    expect(getOptions('sex', defaultAppearance)).toEqual([
      expect.objectContaining({ id: 'Male', texture: null }),
      expect.objectContaining({ id: 'Female', texture: null }),
    ]);
  });

  it('uses race and sex for the base texture input', () => {
    const inputs = buildTextureInputs(defaultAppearance);

    expect(inputs[0]).toEqual(
      expect.objectContaining({
        url: '/textures/race/human/male.png',
        tint: defaultAppearance.skinColor,
        blendMode: 'multiply',
      })
    );
    expect(inputs.slice(1).filter((input) => input && typeof input === 'object' && 'tint' in input))
      .toHaveLength(0);
  });

  it('switches the base texture when sex changes', () => {
    const inputs = buildTextureInputs({ ...defaultAppearance, sex: 'Female' });

    expect(inputs[0]).toEqual(
      expect.objectContaining({
        url: '/textures/race/human/female.png',
      })
    );
  });

  it('limits sex options to variants available for the selected race', () => {
    expect(getOptions('sex', { ...defaultAppearance, race: 'Zombie' })).toEqual([
      expect.objectContaining({ id: 'Male', texture: null }),
    ]);
    expect(getOptions('sex', { ...defaultAppearance, race: 'Template' })).toEqual([
      expect.objectContaining({ id: 'None', texture: null }),
    ]);
  });

  it('normalizes unavailable sex variants after race changes', () => {
    expect(normalizeAppearance({ ...defaultAppearance, race: 'Zombie', sex: 'Female' }).sex).toBe(
      'Male'
    );
    expect(normalizeAppearance({ ...defaultAppearance, race: 'Template', sex: 'Male' }).sex).toBe(
      'None'
    );
  });
});
