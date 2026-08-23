import { describe, expect, it } from 'vitest';
import { skinCrafterAssetPaths } from '../assetResolver';
import { languages, translations } from '../i18n/translations';
import {
  appearanceCategories,
  buildTextureInputsForCategories,
  defaultAppearance,
  getOptions,
  textureLayerCategories,
} from './appearance';

describe('wardrobe content workflow contract', () => {
  it('keeps the documented Human/Male mixed reference content wired end-to-end', () => {
    const assetBaseUrl = '/character/skincrafter-assets/';
    const appearance = { ...defaultAppearance, race: 'Human', sex: 'Male' };
    const humanOption = getOptions('race', appearance, assetBaseUrl).find(
      (option) => option.id === 'Human'
    );

    expect(humanOption?.textureLayers).toEqual({
      tintable: [
        { texture: '/character/skincrafter-assets/textures/race/human/male.tintable.png' },
      ],
      fixed: '/character/skincrafter-assets/textures/race/human/male.fixed.png',
    });
    expect(skinCrafterAssetPaths).toEqual(
      expect.arrayContaining([
        'textures/race/human/male.tintable.png',
        'textures/race/human/male.fixed.png',
      ])
    );
    expect(
      buildTextureInputsForCategories(
        appearance,
        textureLayerCategories,
        ['race', 'skinColor'],
        assetBaseUrl
      )
    ).toEqual([
      {
        url: '/character/skincrafter-assets/textures/race/human/male.tintable.png',
        role: 'tintable',
        tint: defaultAppearance.skinColor,
      },
      {
        url: '/character/skincrafter-assets/textures/race/human/male.fixed.png',
        role: 'fixed',
      },
    ]);
  });

  it('keeps English and Polish labels complete for every choice category, option and color slot', () => {
    const choiceCategories = appearanceCategories.filter(
      (category) => category.control === 'choice'
    );
    const labelKeys = new Set(choiceCategories.map((category) => category.labelKey));
    const raceAppearances = getOptions('race', defaultAppearance).map((race) => ({
      ...defaultAppearance,
      race: race.id,
    }));

    for (const appearance of raceAppearances) {
      for (const category of choiceCategories) {
        for (const option of getOptions(category.id, appearance)) {
          labelKeys.add(option.labelKey);
          for (const slot of option.colorSlots ?? []) {
            labelKeys.add(slot.labelKey);
          }
        }
      }
    }

    for (const language of languages) {
      for (const key of labelKeys) {
        expect(
          Object.prototype.hasOwnProperty.call(translations[language], key),
          `${language} is missing translation key ${key}`
        ).toBe(true);
      }
    }
  });
});
