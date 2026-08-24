import { describe, expect, it } from 'vitest';
import {
  buildTextureInputsForCategories,
  defaultAppearance,
  getOptions,
  normalizeAppearance,
  textureLayerCategories,
} from './appearance';
import type { Race } from './races';

const classicOnlyRaces = ['Bear', 'Orc', 'Zombie'] as const satisfies readonly Race[];

describe('race model compatibility', () => {
  it('exposes only race variants compatible with the active skin model', () => {
    expect(
      getOptions('race', defaultAppearance, undefined, 'classic').map((option) => option.id)
    ).toEqual(['Human', 'Bear', 'Orc', 'Zombie']);
    expect(
      getOptions('race', defaultAppearance, undefined, 'slim').map((option) => option.id)
    ).toEqual(['Human']);
  });

  it('normalizes a classic-only race away when an imported slim model is authoritative', () => {
    const normalized = normalizeAppearance({
      ...defaultAppearance,
      race: 'Bear',
      sex: 'Male',
    }, 'slim');

    expect(normalized.race).toBe('Human');
    expect(normalized.sex).toBe('Male');
  });

  it('uses the explicit model for the Human race even when semantic sex still says Male', () => {
    const inputs = buildTextureInputsForCategories(
      { ...defaultAppearance, race: 'Human', sex: 'Male' },
      textureLayerCategories,
      ['race'],
      '/assets',
      'slim'
    );

    expect(inputs).toEqual([
      {
        url: '/assets/textures/race/human/female.tintable.png',
        role: 'tintable',
        tint: defaultAppearance.skinColor,
      },
      {
        url: '/assets/textures/race/human/female.fixed.png',
        role: 'fixed',
      },
    ]);
  });

  it.each(classicOnlyRaces)(
    'does not fall back to the Classic %s atlas at the Slim compositor boundary',
    (race) => {
      const inputs = buildTextureInputsForCategories(
        { ...defaultAppearance, race, sex: 'Male' },
        textureLayerCategories,
        ['race'],
        '/assets',
        'slim'
      );

      expect(inputs).toEqual([]);
    }
  );

  it('still composes a classic-only race when the active model is Classic', () => {
    const inputs = buildTextureInputsForCategories(
      { ...defaultAppearance, race: 'Bear', sex: 'Male' },
      textureLayerCategories,
      ['race'],
      '/assets',
      'classic'
    );

    expect(inputs).toEqual([
      { url: '/assets/textures/race/bear/male.fixed.png', role: 'fixed' },
    ]);
  });
});
