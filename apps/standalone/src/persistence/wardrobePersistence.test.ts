import { beforeEach, describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  serializeSkinCrafterState,
} from '@pawelwielga/skincrafter-editor';
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

  it('uses the rewritten versioned state on later loads instead of repeating legacy migration', () => {
    localStorage.setItem(
      LEGACY_APPEARANCE_STORAGE_KEY,
      JSON.stringify({ ...defaultAppearance, hat: 'Duck' })
    );

    const firstLoad = wardrobePersistence.load();
    expect(firstLoad?.appearance?.hat).toBe('Duck');

    localStorage.setItem(
      LEGACY_APPEARANCE_STORAGE_KEY,
      JSON.stringify({ ...defaultAppearance, hat: 'None' })
    );

    const secondLoad = wardrobePersistence.load();
    expect(secondLoad?.appearance?.hat).toBe('Duck');
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

  it('does not silently reinterpret an unknown future schema as the current schema', () => {
    localStorage.setItem(
      WARDROBE_STATE_STORAGE_KEY,
      JSON.stringify({
        schemaVersion: 2,
        appearance: { ...defaultAppearance },
        layerOrder: normalizeTextureLayerOrder(null),
      })
    );

    expect(() => wardrobePersistence.load()).toThrow(
      'Unsupported SkinCrafter state schema version: 2.'
    );
    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toMatchObject({
      schemaVersion: 2,
    });
  });
});
