import {
  appearanceCategories,
  cloneWardrobeColors,
  normalizeWardrobeColors,
  textureLayerCategories,
  type AppearanceCategoryId,
  type AppearanceState,
  type TextureLayerCategoryId,
  type WardrobeColorState,
} from './data/appearance';
import type { SkinCrafterState } from './publicTypes';

function areOrderedValuesEqual<T>(left: readonly T[], right: readonly T[]): boolean {
  return left.length === right.length
    && left.every((value, index) => value === right[index]);
}

export function areTextureLayerOrdersEqual(
  left: readonly TextureLayerCategoryId[],
  right: readonly TextureLayerCategoryId[]
): boolean {
  return areOrderedValuesEqual(left, right);
}

export function areActiveCategoriesEqual(
  left: readonly AppearanceCategoryId[],
  right: readonly AppearanceCategoryId[]
): boolean {
  return areOrderedValuesEqual(left, right);
}

export function areAppearanceStatesEqual(
  left: AppearanceState,
  right: AppearanceState
): boolean {
  return appearanceCategories.every(({ id }) => left[id] === right[id]);
}

export function areColorSlotValuesEqual(
  left: Readonly<Record<string, string>> | undefined,
  right: Readonly<Record<string, string>> | undefined
): boolean {
  const leftEntries = Object.entries(left ?? {});
  const rightValues = right ?? {};

  return leftEntries.length === Object.keys(rightValues).length
    && leftEntries.every(([slotId, color]) => rightValues[slotId] === color);
}

export function areWardrobeColorsEqual(
  left: WardrobeColorState | undefined,
  right: WardrobeColorState | undefined
): boolean {
  const normalizedLeft = normalizeWardrobeColors(left);
  const normalizedRight = normalizeWardrobeColors(right);

  return textureLayerCategories.every((category) => {
    const leftItems = normalizedLeft[category] ?? {};
    const rightItems = normalizedRight[category] ?? {};
    const leftItemIds = Object.keys(leftItems);

    return leftItemIds.length === Object.keys(rightItems).length
      && leftItemIds.every((itemId) => (
        itemId in rightItems
        && areColorSlotValuesEqual(leftItems[itemId], rightItems[itemId])
      ));
  });
}

export function areSkinCrafterStatesEqual(
  left: SkinCrafterState,
  right: SkinCrafterState
): boolean {
  return areAppearanceStatesEqual(left.appearance, right.appearance)
    && areTextureLayerOrdersEqual(left.layerOrder, right.layerOrder)
    && areWardrobeColorsEqual(left.wardrobeColors, right.wardrobeColors);
}

export function cloneSkinCrafterState(state: SkinCrafterState): SkinCrafterState {
  return {
    appearance: { ...state.appearance },
    layerOrder: [...state.layerOrder],
    wardrobeColors: cloneWardrobeColors(normalizeWardrobeColors(state.wardrobeColors)),
  };
}
