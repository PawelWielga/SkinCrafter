import { describe, expect, it } from 'vitest';
import {
  appearanceCategories,
  buildTextureInputs,
  buildTextureInputsForCategories,
  defaultAppearance,
  getOptions,
  getVisualLayerForControl,
  isColorControlEffective,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
  textureLayerCategories,
} from './appearance';
import { buildTextureInputsFromItem } from './textureItemDefinitions';

describe('appearance model', () => {
  it('exposes all wardrobe categories', () => {
    expect(appearanceCategories.map((category) => category.id)).toEqual([
      'race', 'sex', 'skinColor', 'eyes', 'eyesColor', 'hair', 'hairColor',
      'hat', 'shirt', 'pants', 'shoes', 'accessory',
    ]);
  });

  it('maps semantic controls to their owning visual layer declaratively', () => {
    expect(getVisualLayerForControl('race')).toBe('race');
    expect(getVisualLayerForControl('sex')).toBe('race');
    expect(getVisualLayerForControl('skinColor')).toBe('race');
    expect(getVisualLayerForControl('eyesColor')).toBe('eyes');
    expect(getVisualLayerForControl('hairColor')).toBe('hair');
    expect(getVisualLayerForControl('shirt')).toBe('shirt');
  });

  it('uses None as the no-texture option for optional categories', () => {
    expect(getOptions('shirt', defaultAppearance)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'None', textureLayers: null })])
    );
    expect(getOptions('pants', defaultAppearance)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'None', textureLayers: null })])
    );
  });

  it('keeps explicit shared variants on slim while filtering classic-only wardrobe definitions', () => {
    const slimAppearance = { ...defaultAppearance, sex: 'Female' };

    expect(getOptions('hat', slimAppearance).map((option) => option.id)).toEqual(['None', 'Duck']);
    expect(getOptions('shirt', slimAppearance).map((option) => option.id)).toEqual(['None']);
    expect(getOptions('pants', slimAppearance).map((option) => option.id)).toEqual(['None', 'Pants']);

    expect(getOptions('hat', defaultAppearance).map((option) => option.id)).toContain('Duck');
    expect(getOptions('shirt', defaultAppearance).map((option) => option.id)).toContain('Hoodie');
    expect(getOptions('pants', defaultAppearance).map((option) => option.id)).toContain('Pants');
  });

  it('honors an explicit active model when it differs from semantic sex', () => {
    expect(
      getOptions('shirt', defaultAppearance, undefined, 'slim').map((option) => option.id)
    ).toEqual(['None']);
    expect(
      getOptions('hat', defaultAppearance, undefined, 'slim').map((option) => option.id)
    ).toEqual(['None', 'Duck']);
    expect(
      getOptions('pants', defaultAppearance, undefined, 'slim').map((option) => option.id)
    ).toEqual(['None', 'Pants']);
    expect(
      getOptions('shirt', { ...defaultAppearance, sex: 'Female' }, undefined, 'classic').map(
        (option) => option.id
      )
    ).toEqual(['None', 'Hoodie']);
  });

  it('normalizes only incompatible selections when switching from classic to slim', () => {
    const classic = normalizeAppearance({
      ...defaultAppearance,
      sex: 'Male',
      hat: 'Duck',
      shirt: 'Hoodie',
      pants: 'Pants',
    });

    expect(classic).toEqual(expect.objectContaining({
      sex: 'Male',
      hat: 'Duck',
      shirt: 'Hoodie',
      pants: 'Pants',
    }));

    const slim = normalizeAppearance({ ...classic, sex: 'Female' });
    expect(slim).toEqual(expect.objectContaining({
      sex: 'Female',
      hat: 'Duck',
      shirt: 'None',
      pants: 'Pants',
    }));
  });

  it('normalizes wardrobe against an explicit model override without rewriting sex', () => {
    const slim = normalizeAppearance({
      ...defaultAppearance,
      sex: 'Male',
      shirt: 'Hoodie',
    }, 'slim');

    expect(slim.sex).toBe('Male');
    expect(slim.shirt).toBe('None');
  });

  it('normalizes texture layer order', () => {
    expect(normalizeTextureLayerOrder(['pants', 'hat', 'unknown', 'hat'])).toEqual([
      'pants', 'hat', 'shirt', 'shoes', 'accessory',
    ]);
    expect(normalizeTextureLayerOrder(null)).toEqual(textureLayerCategories);
  });

  it('fills missing wardrobe color slots with declared defaults and preserves valid saved colors', () => {
    expect(normalizeWardrobeColors(undefined)).toEqual({
      shirt: { Hoodie: { primary: '#4A6FA5' } },
    });
    expect(normalizeWardrobeColors({
      shirt: { Hoodie: { primary: '#A33A3A' } },
    })).toEqual({
      shirt: { Hoodie: { primary: '#A33A3A' } },
    });
    expect(normalizeWardrobeColors({
      shirt: { Hoodie: { primary: '#not-a-palette-color', removed: '#FFFFFF' } },
      hat: { RemovedItem: { primary: '#FFFFFF' } },
    })).toEqual({
      shirt: { Hoodie: { primary: '#4A6FA5' } },
    });
  });

  it('builds arbitrary texture item layers in declaration order with per-slot tints and fixed last', () => {
    const inputs = buildTextureInputsFromItem(
      {
        skinModel: 'classic',
        textureLayers: {
          tintable: [
            { texture: '/looks-fixed.png', colorSlot: 'primary' },
            { texture: '/looks-tintable.png', colorSlot: 'secondary' },
            { texture: '/also-fixed-name.png', colorSlot: 'primary' },
          ],
          fixed: '/looks-tintable-final.png',
        },
        colorSlots: [
          {
            id: 'primary',
            labelKey: 'wardrobeColor.primary',
            defaultColor: '#4A6FA5',
            palette: ['#4A6FA5', '#A33A3A'],
          },
          {
            id: 'secondary',
            labelKey: 'wardrobeColor.secondary',
            defaultColor: '#D6B15D',
            palette: ['#D6B15D', '#2F8F4E'],
          },
        ],
      },
      { primary: '#A33A3A', secondary: '#2F8F4E' }
    );

    expect(inputs).toEqual([
      { url: '/looks-fixed.png', role: 'tintable', tint: '#A33A3A' },
      { url: '/looks-tintable.png', role: 'tintable', tint: '#2F8F4E' },
      { url: '/also-fixed-name.png', role: 'tintable', tint: '#A33A3A' },
      { url: '/looks-tintable-final.png', role: 'fixed' },
    ]);
  });

  it('resolves tintable and fixed layers through the host asset base', () => {
    const colors = normalizeWardrobeColors({
      shirt: { Hoodie: { primary: '#A33A3A' } },
    });
    const inputs = buildTextureInputs(
      { ...defaultAppearance, hat: 'Duck', shirt: 'Hoodie', pants: 'Pants' },
      ['pants', 'shirt', 'hat', 'shoes', 'accessory'],
      '/character/skincrafter-assets/',
      'classic',
      colors
    );

    expect(inputs).toEqual([
      {
        url: '/character/skincrafter-assets/textures/race/human/male.tintable.png',
        role: 'tintable',
        tint: defaultAppearance.skinColor,
      },
      {
        url: '/character/skincrafter-assets/textures/race/human/male.fixed.png',
        role: 'fixed',
      },
      {
        url: '/character/skincrafter-assets/textures/eyes/clasic.tintable.png',
        role: 'tintable',
        tint: defaultAppearance.eyesColor,
      },
      {
        url: '/character/skincrafter-assets/textures/eyes/clasic.fixed.png',
        role: 'fixed',
      },
      {
        url: '/character/skincrafter-assets/textures/bottom/pants.png',
        role: 'fixed',
      },
      {
        url: '/character/skincrafter-assets/textures/top/male/hoodie.png',
        role: 'tintable',
        tint: '#A33A3A',
      },
      {
        url: '/character/skincrafter-assets/textures/hat/duck.png',
        role: 'fixed',
      },
    ]);
  });

  it('keeps every internal item layer adjacent while category order moves as one logical layer', () => {
    const inputs = buildTextureInputs(
      { ...defaultAppearance, hat: 'Duck', shirt: 'Hoodie', pants: 'Pants' },
      ['hat', 'pants', 'shirt', 'shoes', 'accessory'],
      '/assets'
    );

    expect(inputs.slice(0, 4)).toEqual([
      { url: '/assets/textures/race/human/male.tintable.png', role: 'tintable', tint: defaultAppearance.skinColor },
      { url: '/assets/textures/race/human/male.fixed.png', role: 'fixed' },
      { url: '/assets/textures/eyes/clasic.tintable.png', role: 'tintable', tint: defaultAppearance.eyesColor },
      { url: '/assets/textures/eyes/clasic.fixed.png', role: 'fixed' },
    ]);
    expect(inputs.slice(4)).toEqual([
      { url: '/assets/textures/hat/duck.png', role: 'fixed' },
      { url: '/assets/textures/bottom/pants.png', role: 'fixed' },
      { url: '/assets/textures/top/male/hoodie.png', role: 'tintable', tint: '#4A6FA5' },
    ]);
  });

  it('keeps fixed-only race composition identical across stored color choices', () => {
    const first = buildTextureInputsForCategories(
      { ...defaultAppearance, race: 'Bear', sex: 'Male', skinColor: '#5D4037' },
      textureLayerCategories,
      ['race', 'skinColor'],
      '/assets'
    );
    const second = buildTextureInputsForCategories(
      { ...defaultAppearance, race: 'Bear', sex: 'Male', skinColor: '#A1887F' },
      textureLayerCategories,
      ['race', 'skinColor'],
      '/assets'
    );

    expect(first).toEqual([{ url: '/assets/textures/race/bear/male.fixed.png', role: 'fixed' }]);
    expect(second).toEqual(first);
    expect(isColorControlEffective('skinColor', { ...defaultAppearance, race: 'Bear', sex: 'Male' })).toBe(false);
  });

  it('supports a tintable-only appearance option', () => {
    const appearance = { ...defaultAppearance, eyes: 'Small', eyesColor: '#2F8F4E' };
    const inputs = buildTextureInputsForCategories(
      appearance,
      textureLayerCategories,
      ['eyes', 'eyesColor'],
      '/assets'
    );

    expect(inputs).toEqual([
      {
        url: '/assets/textures/eyes/small.tintable.png',
        role: 'tintable',
        tint: '#2F8F4E',
      },
    ]);
    expect(isColorControlEffective('eyesColor', appearance)).toBe(true);
  });

  it('switches both explicit base layers when sex changes', () => {
    const inputs = buildTextureInputsForCategories(
      { ...defaultAppearance, sex: 'Female' },
      textureLayerCategories,
      ['race'],
      '/'
    );
    expect(inputs).toEqual([
      { url: '/textures/race/human/female.tintable.png', role: 'tintable', tint: defaultAppearance.skinColor },
      { url: '/textures/race/human/female.fixed.png', role: 'fixed' },
    ]);
  });

  it('filters only incompatible wardrobe definitions at the compositor boundary', () => {
    const slimState = {
      ...defaultAppearance,
      sex: 'Female',
      hat: 'Duck',
      shirt: 'Hoodie',
      pants: 'Pants',
    };

    const inputs = buildTextureInputs(
      slimState,
      ['hat', 'shirt', 'pants', 'shoes', 'accessory'],
      '/assets'
    );

    expect(inputs).toEqual([
      { url: '/assets/textures/race/human/female.tintable.png', role: 'tintable', tint: defaultAppearance.skinColor },
      { url: '/assets/textures/race/human/female.fixed.png', role: 'fixed' },
      { url: '/assets/textures/eyes/clasic.tintable.png', role: 'tintable', tint: defaultAppearance.eyesColor },
      { url: '/assets/textures/eyes/clasic.fixed.png', role: 'fixed' },
      { url: '/assets/textures/hat/duck.png', role: 'fixed' },
      { url: '/assets/textures/bottom/pants.png', role: 'fixed' },
    ]);
  });

  it('uses an explicit model override as a compositor safety boundary', () => {
    const incompatibleImportedState = {
      ...defaultAppearance,
      sex: 'Male',
      shirt: 'Hoodie',
    };

    const inputs = buildTextureInputsForCategories(
      incompatibleImportedState,
      textureLayerCategories,
      ['shirt'],
      '/assets',
      'slim'
    );

    expect(inputs).toEqual([]);
  });

  it('hides color controls when the selected option has no tintable layer', () => {
    expect(isColorControlEffective('skinColor', defaultAppearance)).toBe(true);
    expect(isColorControlEffective('hairColor', defaultAppearance)).toBe(false);
  });

  it('limits and normalizes sex variants to those available for a race', () => {
    expect(getOptions('sex', { ...defaultAppearance, race: 'Zombie' })).toEqual([
      expect.objectContaining({ id: 'Male' }),
    ]);
    expect(normalizeAppearance({ ...defaultAppearance, race: 'Zombie', sex: 'Female' }).sex).toBe('Male');
  });
});
