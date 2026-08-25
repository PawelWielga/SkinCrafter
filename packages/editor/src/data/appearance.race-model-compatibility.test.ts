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

  it.each(classicOnlyRaces)(
    'normalizes the Classic-only %s race away when an imported Slim model is authoritative',
    (race) => {
      const normalized = normalizeAppearance({
        ...defaultAppearance,
        race,
        sex: 'Male',
      }, 'slim');

      expect(normalized.race).toBe('Human');
      expect(normalized.sex).toBe('Male');
    }
  );

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

  it.each(classicOnlyRaces)(
    'still composes the %s race when the active model is Classic',
    (race) => {
      const appearance = normalizeAppearance({
        ...defaultAppearance,
        race,
        sex: 'Male',
      });
      const inputs = buildTextureInputsForCategories(
        appearance,
        textureLayerCategories,
        ['race'],
        '/assets',
        'classic'
      );
      const baseUrl = `/assets/textures/race/${race.toLowerCase()}/male`;

      if (race === 'Bear') {
        expect(inputs).toEqual([
          { url: `${baseUrl}.fixed.png`, role: 'fixed' },
        ]);
        return;
      }

      expect(inputs).toEqual([
        { url: `${baseUrl}.tintable.png`, role: 'tintable', tint: appearance.skinColor },
        { url: `${baseUrl}.fixed.png`, role: 'fixed' },
      ]);
    }
  );
});
