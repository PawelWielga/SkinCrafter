import {
  cloneWardrobeColors,
  normalizeWardrobeColors,
  type AppearanceCategoryId,
  type AppearanceState,
  type TextureLayerCategoryId,
  type WardrobeColorState,
} from './data/appearance';
import type { SkinCrafterSkinModel, SkinCrafterState } from './publicTypes';
import {
  areActiveCategoriesEqual,
  areAppearanceStatesEqual,
  areTextureLayerOrdersEqual,
  areWardrobeColorsEqual,
} from './stateEquality';

export interface SkinGenerationSnapshot {
  appearance: AppearanceState;
  compositionAppearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
  wardrobeColors: WardrobeColorState;
  activeCategories: AppearanceCategoryId[];
  assetBaseUrl: string | undefined;
  importedFingerprint: string | null;
  model: SkinCrafterSkinModel;
}

interface CreateSkinGenerationSnapshotInput {
  state: SkinCrafterState;
  compositionSex: string;
  wardrobeColors: WardrobeColorState;
  activeCategories: readonly AppearanceCategoryId[];
  assetBaseUrl: string | undefined;
  importedFingerprint: string | null;
  model: SkinCrafterSkinModel;
}

export function createSkinGenerationSnapshot({
  state,
  compositionSex,
  wardrobeColors,
  activeCategories,
  assetBaseUrl,
  importedFingerprint,
  model,
}: CreateSkinGenerationSnapshotInput): SkinGenerationSnapshot {
  const appearance = { ...state.appearance };

  return {
    appearance,
    compositionAppearance: { ...appearance, sex: compositionSex },
    layerOrder: [...state.layerOrder],
    wardrobeColors: cloneWardrobeColors(normalizeWardrobeColors(wardrobeColors)),
    activeCategories: [...activeCategories],
    assetBaseUrl,
    importedFingerprint,
    model,
  };
}

export function areSkinGenerationSnapshotsEqual(
  left: SkinGenerationSnapshot,
  right: SkinGenerationSnapshot
): boolean {
  return left.assetBaseUrl === right.assetBaseUrl
    && left.importedFingerprint === right.importedFingerprint
    && left.model === right.model
    && areAppearanceStatesEqual(left.appearance, right.appearance)
    && areAppearanceStatesEqual(left.compositionAppearance, right.compositionAppearance)
    && areTextureLayerOrdersEqual(left.layerOrder, right.layerOrder)
    && areWardrobeColorsEqual(left.wardrobeColors, right.wardrobeColors)
    && areActiveCategoriesEqual(left.activeCategories, right.activeCategories);
}
