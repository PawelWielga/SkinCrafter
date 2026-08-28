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

function encodeString(value: string): string {
  return `${value.length}:${value}`;
}

function encodeNullableString(value: string | null | undefined): string {
  if (value === undefined) return 'u';
  if (value === null) return 'n';
  return `s${encodeString(value)}`;
}

function encodeStringList(values: readonly string[]): string {
  return `${values.length}[${values.map(encodeString).join('')}]`;
}

function appearanceIdentity(appearance: AppearanceState): string {
  return encodeStringList(appearanceCategories.map(({ id }) => appearance[id]));
}

function wardrobeColorsIdentity(value: WardrobeColorState): string {
  const colors = normalizeWardrobeColors(value);

  return textureLayerCategories.map((category) => {
    const items = colors[category] ?? {};
    const itemIds = Object.keys(items).sort();
    const itemIdentity = itemIds.map((itemId) => {
      const slots = items[itemId] ?? {};
      const slotIds = Object.keys(slots).sort();
      const slotIdentity = slotIds
        .map((slotId) => `${encodeString(slotId)}${encodeString(slots[slotId])}`)
        .join('');
      return `${encodeString(itemId)}${slotIds.length}{${slotIdentity}}`;
    }).join('');

    return `${encodeString(category)}${itemIds.length}{${itemIdentity}}`;
  }).join('');
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
  const activeCategorySet = new Set(activeCategories);

  return {
    appearance,
    compositionAppearance: { ...appearance, sex: compositionSex },
    layerOrder: [...state.layerOrder],
    wardrobeColors: cloneWardrobeColors(normalizeWardrobeColors(wardrobeColors)),
    activeCategories: appearanceCategories
      .map(({ id }) => id)
      .filter((category) => activeCategorySet.has(category)),
    assetBaseUrl,
    importedFingerprint,
    model,
  };
}

export function createSkinGenerationKey(snapshot: SkinGenerationSnapshot): string {
  return [
    `appearance:${appearanceIdentity(snapshot.appearance)}`,
    `composition:${appearanceIdentity(snapshot.compositionAppearance)}`,
    `layers:${encodeStringList(snapshot.layerOrder)}`,
    `colors:${wardrobeColorsIdentity(snapshot.wardrobeColors)}`,
    `active:${encodeStringList(snapshot.activeCategories)}`,
    `assets:${encodeNullableString(snapshot.assetBaseUrl)}`,
    `import:${encodeNullableString(snapshot.importedFingerprint)}`,
    `model:${encodeString(snapshot.model)}`,
  ].join('|');
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
