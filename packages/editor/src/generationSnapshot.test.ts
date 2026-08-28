import { describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
  type AppearanceCategoryId,
} from './data/appearance';
import {
  areSkinGenerationSnapshotsEqual,
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

    state.appearance.race = 'Bear';
    state.layerOrder.reverse();
    activeCategories.push('shirt');
    const firstCategory = Object.keys(wardrobeColors)[0] as keyof typeof wardrobeColors | undefined;
    if (firstCategory) {
      const firstItem = Object.keys(wardrobeColors[firstCategory] ?? {})[0];
      if (firstItem) {
        const firstSlot = Object.keys(wardrobeColors[firstCategory]?.[firstItem] ?? {})[0];
        if (firstSlot) wardrobeColors[firstCategory]![firstItem]![firstSlot] = '#000000';
      }
    }

    expect(snapshot.appearance.race).toBe(defaultAppearance.race);
    expect(snapshot.layerOrder).toEqual(normalizeTextureLayerOrder(null));
    expect(snapshot.activeCategories).toEqual(['hat']);
    expect(snapshot.wardrobeColors).not.toBe(wardrobeColors);
  });

  it('treats equivalent recreated inputs as one generation identity', () => {
    const firstState = createState();
    const secondState = createState();
    const first = createSkinGenerationSnapshot({
      state: firstState,
      compositionSex: firstState.appearance.sex,
      wardrobeColors: normalizeWardrobeColors(firstState.wardrobeColors),
      activeCategories: ['hat'],
      assetBaseUrl: '/assets',
      importedFingerprint: null,
      model: 'classic',
    });
    const second = createSkinGenerationSnapshot({
      state: secondState,
      compositionSex: secondState.appearance.sex,
      wardrobeColors: normalizeWardrobeColors(secondState.wardrobeColors),
      activeCategories: ['hat'],
      assetBaseUrl: '/assets',
      importedFingerprint: null,
      model: 'classic',
    });

    expect(areSkinGenerationSnapshotsEqual(first, second)).toBe(true);
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

    const changedAppearanceState = createState();
    changedAppearanceState.appearance.race = 'Bear';
    expect(areSkinGenerationSnapshotsEqual(
      baseline,
      createSkinGenerationSnapshot({ ...baseInput, state: changedAppearanceState })
    )).toBe(false);
    expect(areSkinGenerationSnapshotsEqual(
      baseline,
      createSkinGenerationSnapshot({ ...baseInput, activeCategories: ['hat'] })
    )).toBe(false);
    expect(areSkinGenerationSnapshotsEqual(
      baseline,
      createSkinGenerationSnapshot({ ...baseInput, assetBaseUrl: '/assets' })
    )).toBe(false);
    expect(areSkinGenerationSnapshotsEqual(
      baseline,
      createSkinGenerationSnapshot({ ...baseInput, importedFingerprint: 'fingerprint' })
    )).toBe(false);
    expect(areSkinGenerationSnapshotsEqual(
      baseline,
      createSkinGenerationSnapshot({ ...baseInput, model: 'slim', compositionSex: 'Female' })
    )).toBe(false);
  });
});
