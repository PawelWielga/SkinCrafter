import { describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  getOptions,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
  textureLayerCategories,
  type WardrobeColorState,
} from './data/appearance';
import type { SkinCrafterState } from './publicTypes';
import {
  areColorSlotValuesEqual,
  areSkinCrafterStatesEqual,
  areWardrobeColorsEqual,
  cloneSkinCrafterState,
} from './stateEquality';

function reverseWardrobeObjectOrder(value: WardrobeColorState): WardrobeColorState {
  return Object.fromEntries(
    Object.entries(value).reverse().map(([category, items]) => [
      category,
      Object.fromEntries(
        Object.entries(items ?? {}).reverse().map(([itemId, slots]) => [
          itemId,
          Object.fromEntries(Object.entries(slots).reverse()),
        ])
      ),
    ])
  ) as WardrobeColorState;
}

function createState(): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance },
    layerOrder: normalizeTextureLayerOrder(null),
    wardrobeColors: normalizeWardrobeColors(undefined),
  };
}

describe('editor state equality', () => {
  it('compares color slot records by values rather than property insertion order', () => {
    expect(areColorSlotValuesEqual(
      { primary: '#111111', secondary: '#222222' },
      { secondary: '#222222', primary: '#111111' }
    )).toBe(true);
    expect(areColorSlotValuesEqual(
      { primary: '#111111' },
      { primary: '#222222' }
    )).toBe(false);
  });

  it('treats normalized wardrobe colors as equal regardless of object key order', () => {
    const colors = normalizeWardrobeColors(undefined);
    expect(areWardrobeColorsEqual(colors, reverseWardrobeObjectOrder(colors))).toBe(true);
  });

  it('detects a real wardrobe color change', () => {
    const colors = normalizeWardrobeColors(undefined);
    const changed = cloneSkinCrafterState({
      appearance: { ...defaultAppearance },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: colors,
    }).wardrobeColors ?? {};

    const colorable = textureLayerCategories.flatMap((category) =>
      getOptions(category, defaultAppearance, undefined, 'classic')
        .filter((option) => option.textureItem?.colorSlots?.some((slot) => slot.palette.length > 1))
        .map((option) => ({ category, option }))
    )[0];
    expect(colorable).toBeDefined();

    const slot = colorable.option.textureItem?.colorSlots?.find((candidate) => candidate.palette.length > 1);
    expect(slot).toBeDefined();
    const nextColor = slot?.palette.find((color) => color !== slot.defaultColor);
    expect(nextColor).toBeDefined();

    changed[colorable.category]![colorable.option.id]![slot!.id] = nextColor!;
    expect(areWardrobeColorsEqual(colors, changed)).toBe(false);
  });

  it('compares complete editor state semantically', () => {
    const state = createState();
    const equivalent = cloneSkinCrafterState(state);
    expect(areSkinCrafterStatesEqual(state, equivalent)).toBe(true);

    const changedAppearance = cloneSkinCrafterState(state);
    changedAppearance.appearance.race = 'Bear';
    expect(areSkinCrafterStatesEqual(state, changedAppearance)).toBe(false);

    const changedOrder = cloneSkinCrafterState(state);
    [changedOrder.layerOrder[0], changedOrder.layerOrder[1]] = [
      changedOrder.layerOrder[1],
      changedOrder.layerOrder[0],
    ];
    expect(areSkinCrafterStatesEqual(state, changedOrder)).toBe(false);
  });
});
