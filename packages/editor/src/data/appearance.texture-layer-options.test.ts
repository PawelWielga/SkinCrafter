import { describe, expect, it } from 'vitest';
import { defaultAppearance, getOptions, textureLayerCategories } from './appearance';

describe('texture-backed appearance option registry', () => {
  it('keeps every texture layer category on the shared ordered option path', () => {
    expect(Object.fromEntries(
      textureLayerCategories.map((categoryId) => [
        categoryId,
        getOptions(categoryId, defaultAppearance).map((option) => option.id),
      ])
    )).toEqual({
      hat: ['None', 'Duck'],
      shirt: ['None', 'Hoodie'],
      pants: ['None', 'Pants'],
      shoes: ['None'],
      accessory: ['None'],
    });
  });

  it('applies skin model compatibility through the shared path', () => {
    const slimAppearance = { ...defaultAppearance, sex: 'Female' };

    expect(Object.fromEntries(
      textureLayerCategories.map((categoryId) => [
        categoryId,
        getOptions(categoryId, slimAppearance).map((option) => option.id),
      ])
    )).toEqual({
      hat: ['None', 'Duck'],
      shirt: ['None'],
      pants: ['None', 'Pants'],
      shoes: ['None'],
      accessory: ['None'],
    });
  });
});
