import { beforeEach, describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  serializeSkinCrafterState,
} from '@dihor/skincrafter-editor';
import {
  WARDROBE_STATE_STORAGE_KEY,
  wardrobePersistence,
} from './wardrobePersistence';

const LEGACY_APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LEGACY_LAYER_ORDER_STORAGE_KEY = 'wardrobeLayerOrder';

describe('standalone wardrobe persistence', () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear(),
      },
    });
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: window.localStorage,
    });
  });

  it('migrates legacy standalone keys and immediately rewrites them as versioned state', () => {
    localStorage.setItem(
      LEGACY_APPEARANCE_STORAGE_KEY,
      JSON.stringify({ ...defaultAppearance, hat: 'Duck' })
    );
    localStorage.setItem(
      LEGACY_LAYER_ORDER_STORAGE_KEY,
      JSON.stringify(['pants', 'hat'])
    );

    const loaded = wardrobePersistence.load();

    expect(loaded?.appearance?.hat).toBe('Duck');
    expect(loaded?.layerOrder).toEqual(['pants', 'hat', 'shirt', 'shoes', 'accessory']);

    const rewritten = JSON.parse(
      localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null'
    ) as { schemaVersion?: number; appearance?: { hat?: string } } | null;
    expect(rewritten?.schemaVersion).toBe(1);
    expect(rewritten?.appearance?.hat).toBe('Duck');
  });

  it('uses the versioned state when synchronized legacy aggregate keys are semantically unchanged', () => {
    const serialized = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
    });
    localStorage.setItem(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(serialized));
    localStorage.setItem(
      LEGACY_APPEARANCE_STORAGE_KEY,
      JSON.stringify(serialized.appearance)
    );
    localStorage.setItem(
      LEGACY_LAYER_ORDER_STORAGE_KEY,
      JSON.stringify(serialized.layerOrder)
    );

    const loaded = wardrobePersistence.load();

    expect(loaded?.appearance?.hat).toBe('Duck');
    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toEqual(
      serialized
    );
  });

  it('migrates divergent valid legacy aggregate keys forward instead of overwriting newer user edits', () => {
    const staleVersioned = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
    });
    const newerLegacyAppearance = { ...defaultAppearance, hat: 'None', shirt: 'Hoodie' };
    const newerLegacyLayerOrder = ['pants', 'shirt', 'hat'];

    localStorage.setItem(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(staleVersioned));
    localStorage.setItem(
      LEGACY_APPEARANCE_STORAGE_KEY,
      JSON.stringify(newerLegacyAppearance)
    );
    localStorage.setItem(
      LEGACY_LAYER_ORDER_STORAGE_KEY,
      JSON.stringify(newerLegacyLayerOrder)
    );

    const loaded = wardrobePersistence.load();

    expect(loaded?.appearance?.hat).toBe('None');
    expect(loaded?.appearance?.shirt).toBe('Hoodie');
    expect(loaded?.layerOrder).toEqual(['pants', 'shirt', 'hat', 'shoes', 'accessory']);

    const rewritten = JSON.parse(
      localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null'
    ) as { schemaVersion?: number; appearance?: { hat?: string; shirt?: string } } | null;
    expect(rewritten).toMatchObject({
      schemaVersion: 1,
      appearance: {
        hat: 'None',
        shirt: 'Hoodie',
      },
    });
  });

  it('persists the current schema while keeping legacy keys synchronized', () => {
    const serialized = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    wardrobePersistence.save(serialized);

    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toEqual(serialized);
    expect(JSON.parse(localStorage.getItem(LEGACY_APPEARANCE_STORAGE_KEY) ?? 'null')).toEqual(
      serialized.appearance
    );
    expect(JSON.parse(localStorage.getItem(LEGACY_LAYER_ORDER_STORAGE_KEY) ?? 'null')).toEqual(
      serialized.layerOrder
    );
  });

  it('keeps an unsupported future schema intact and disables persistence until it is removed', () => {
    const futureState = {
      schemaVersion: 2,
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
      futureOnlyField: 'keep-me',
    };
    const attemptedSave = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, hat: 'None' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    localStorage.setItem(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(futureState));

    expect(() => wardrobePersistence.load()).not.toThrow();
    expect(wardrobePersistence.load()).toBeNull();

    wardrobePersistence.save(attemptedSave);

    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toEqual(
      futureState
    );
    expect(localStorage.getItem(LEGACY_APPEARANCE_STORAGE_KEY)).toBeNull();
    expect(localStorage.getItem(LEGACY_LAYER_ORDER_STORAGE_KEY)).toBeNull();

    localStorage.removeItem(WARDROBE_STATE_STORAGE_KEY);
    wardrobePersistence.save(attemptedSave);

    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toEqual(
      attemptedSave
    );
  });
});
