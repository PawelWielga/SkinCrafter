import { describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
  textureLayerCategories,
  type AppearanceCategoryId,
  type WardrobeColorState,
} from './data/appearance';
import {
  areSkinGenerationSnapshotsEqual,
  createSkinGenerationKey,
  createSkinGenerationSnapshot,
} from './generationSnapshot';
import type { SkinCrafterState } from './publicTypes';

function createState(): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance },
    layerOrder: normalizeTextureLayerOrder(null),
    wardrobeColors: normalizeWardrobeColors(undefined),
  };
}

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

describe('skin generation snapshots', () => {
  it('owns immutable copies of mutable editor inputs', () => {
    const state = createState();
    const activeCategories: AppearanceCategoryId[] = ['hat'];
    const wardrobeColors = normalizeWardrobeColors(state.wardrobeColors);
    const snapshot = createSkinGenerationSnapshot({
      state,
      compositionSex: state.appearance.sex,
      wardrobeColors,
      activeCategories,
      assetBaseUrl: '/assets',
      importedFingerprint: 'fingerprint',
      model: 'classic',
    });

    const firstCategory = textureLayerCategories.find(
      (category) => Object.keys(wardrobeColors[category] ?? {}).length > 0
    );
    if (!firstCategory) throw new Error('Expected normalized wardrobe colors to contain a category.');
    const firstItem = Object.keys(wardrobeColors[firstCategory] ?? {})[0];
    if (!firstItem) throw new Error('Expected normalized wardrobe colors to contain an item.');
    const firstSlot = Object.keys(wardrobeColors[firstCategory]?.[firstItem] ?? {})[0];
    if (!firstSlot) throw new Error('Expected normalized wardrobe colors to contain a slot.');
    const snapshotColor = snapshot.wardrobeColors[firstCategory]?.[firstItem]?.[firstSlot];
    if (!snapshotColor) throw new Error('Expected the snapshot to contain the selected slot color.');

    state.appearance.race = 'Bear';
    state.layerOrder.reverse();
    activeCategories.push('shirt');
    wardrobeColors[firstCategory]![firstItem]![firstSlot] = `${snapshotColor}-mutated`;

    expect(snapshot.appearance.race).toBe(defaultAppearance.race);
    expect(snapshot.layerOrder).toEqual(normalizeTextureLayerOrder(null));
    expect(snapshot.activeCategories).toEqual(['hat']);
    expect(snapshot.wardrobeColors).not.toBe(wardrobeColors);
    expect(snapshot.wardrobeColors[firstCategory]?.[firstItem]?.[firstSlot]).toBe(snapshotColor);
  });

  it('treats equivalent recreated inputs as one generation identity', () => {
    const firstState = createState();
    const secondState = createState();
    const firstColors = normalizeWardrobeColors(firstState.wardrobeColors);
    const secondColors = reverseWardrobeObjectOrder(firstColors);
    const first = createSkinGenerationSnapshot({
      state: firstState,
      compositionSex: firstState.appearance.sex,
      wardrobeColors: firstColors,
      activeCategories: ['shirt', 'hat'],
      assetBaseUrl: '/assets',
      importedFingerprint: null,
      model: 'classic',
    });
    const second = createSkinGenerationSnapshot({
      state: secondState,
      compositionSex: secondState.appearance.sex,
      wardrobeColors: secondColors,
      activeCategories: ['hat', 'shirt'],
      assetBaseUrl: '/assets',
      importedFingerprint: null,
      model: 'classic',
    });

    expect(first.activeCategories).toEqual(['hat', 'shirt']);
    expect(second.activeCategories).toEqual(first.activeCategories);
    expect(areSkinGenerationSnapshotsEqual(first, second)).toBe(true);
    expect(createSkinGenerationKey(first)).toBe(createSkinGenerationKey(second));
  });

  it('changes generation identity for relevant composition inputs', () => {
    const state = createState();
    const baseInput = {
      state,
      compositionSex: state.appearance.sex,
      wardrobeColors: normalizeWardrobeColors(state.wardrobeColors),
      activeCategories: [] as AppearanceCategoryId[],
      assetBaseUrl: undefined,
      importedFingerprint: null,
      model: 'classic' as const,
    };
    const baseline = createSkinGenerationSnapshot(baseInput);
    const baselineKey = createSkinGenerationKey(baseline);

    const expectChanged = (snapshot: ReturnType<typeof createSkinGenerationSnapshot>): void => {
      expect(areSkinGenerationSnapshotsEqual(baseline, snapshot)).toBe(false);
      expect(createSkinGenerationKey(snapshot)).not.toBe(baselineKey);
    };

    const changedAppearanceState = createState();
    changedAppearanceState.appearance.race = 'Bear';
    expectChanged(createSkinGenerationSnapshot({ ...baseInput, state: changedAppearanceState }));
    expectChanged(createSkinGenerationSnapshot({ ...baseInput, activeCategories: ['hat'] }));
    expectChanged(createSkinGenerationSnapshot({ ...baseInput, assetBaseUrl: '/assets' }));
    expectChanged(createSkinGenerationSnapshot({ ...baseInput, importedFingerprint: 'fingerprint' }));
    expectChanged(createSkinGenerationSnapshot({
      ...baseInput,
      model: 'slim',
      compositionSex: 'Female',
    }));
  });
});
