import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  serializeSkinCrafterState,
} from '@dihor/skincrafter-editor';
import {
  createWardrobePersistence,
  WARDROBE_STATE_STORAGE_KEY,
} from './wardrobePersistence';

const LEGACY_APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LEGACY_LAYER_ORDER_STORAGE_KEY = 'wardrobeLayerOrder';

type WardrobePersistence = ReturnType<typeof createWardrobePersistence>;

function requireLoadedState(result: ReturnType<WardrobePersistence['load']>) {
  if (result.status !== 'loaded') {
    throw new Error(`Expected loaded persistence state, received ${result.status}.`);
  }
  return result.state;
}

function installLocalStorage(storage: Pick<Storage, 'getItem' | 'setItem'>): void {
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: storage,
  });
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: window.localStorage,
  });
}

describe('standalone wardrobe persistence', () => {
  let persistence: WardrobePersistence;

  beforeEach(() => {
    const store = new Map<string, string>();
    installLocalStorage({
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    });
    persistence = createWardrobePersistence();
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

    const loaded = requireLoadedState(persistence.load());

    expect(loaded.appearance.hat).toBe('Duck');
    expect(loaded.layerOrder).toEqual(['pants', 'hat', 'shirt', 'shoes', 'accessory']);

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

    const loaded = requireLoadedState(persistence.load());

    expect(loaded.appearance.hat).toBe('Duck');
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

    const loaded = requireLoadedState(persistence.load());

    expect(loaded.appearance.hat).toBe('None');
    expect(loaded.appearance.shirt).toBe('Hoodie');
    expect(loaded.layerOrder).toEqual(['pants', 'shirt', 'hat', 'shoes', 'accessory']);

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

    persistence.save(serialized);

    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toEqual(serialized);
    expect(JSON.parse(localStorage.getItem(LEGACY_APPEARANCE_STORAGE_KEY) ?? 'null')).toEqual(
      serialized.appearance
    );
    expect(JSON.parse(localStorage.getItem(LEGACY_LAYER_ORDER_STORAGE_KEY) ?? 'null')).toEqual(
      serialized.layerOrder
    );
  });

  it('reports an unsupported future schema as incompatible without rewriting storage', () => {
    const futureState = {
      schemaVersion: 2,
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
      futureOnlyField: 'keep-me',
    };

    localStorage.setItem(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(futureState));

    const loaded = persistence.load();

    expect(loaded).toEqual({ status: 'incompatible' });
    expect(JSON.parse(localStorage.getItem(WARDROBE_STATE_STORAGE_KEY) ?? 'null')).toEqual(
      futureState
    );
    expect(localStorage.getItem(LEGACY_APPEARANCE_STORAGE_KEY)).toBeNull();
    expect(localStorage.getItem(LEGACY_LAYER_ORDER_STORAGE_KEY)).toBeNull();
  });

  it('uses an in-memory empty state and suppresses writes when storage reads are unavailable', () => {
    const setItem = vi.fn();
    installLocalStorage({
      getItem: () => {
        throw new DOMException('Storage blocked', 'SecurityError');
      },
      setItem,
    });
    persistence = createWardrobePersistence();

    expect(persistence.load()).toEqual({ status: 'empty' });

    const serialized = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, shirt: 'Hoodie' },
      layerOrder: normalizeTextureLayerOrder(null),
    });
    expect(() => persistence.save(serialized)).not.toThrow();
    expect(setItem).not.toHaveBeenCalled();
  });

  it('stops retrying writes after browser storage rejects a save', () => {
    const stored = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
    });
    const setItem = vi.fn(() => {
      throw new DOMException('Quota exceeded', 'QuotaExceededError');
    });
    installLocalStorage({
      getItem: (key: string) => (
        key === WARDROBE_STATE_STORAGE_KEY ? JSON.stringify(stored) : null
      ),
      setItem,
    });
    persistence = createWardrobePersistence();
    requireLoadedState(persistence.load());

    const updated = serializeSkinCrafterState({
      appearance: { ...defaultAppearance, hat: 'None', shirt: 'Hoodie' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(() => persistence.save(updated)).not.toThrow();
    expect(() => persistence.save(updated)).not.toThrow();
    expect(setItem).toHaveBeenCalledTimes(1);
  });

  it('aborts legacy migration without partial writes when a legacy read becomes unavailable', () => {
    const setItem = vi.fn();
    installLocalStorage({
      getItem: (key: string) => {
        if (key === WARDROBE_STATE_STORAGE_KEY) return null;
        if (key === LEGACY_APPEARANCE_STORAGE_KEY) {
          return JSON.stringify({ ...defaultAppearance, hat: 'Duck' });
        }
        throw new DOMException('Storage became unavailable', 'SecurityError');
      },
      setItem,
    });
    persistence = createWardrobePersistence();

    const loaded = requireLoadedState(persistence.load());

    expect(loaded.appearance).toEqual(defaultAppearance);
    expect(setItem).not.toHaveBeenCalled();
  });

  it('keeps future-schema protection fail-closed even if storage writes would throw', () => {
    const futureState = {
      schemaVersion: 2,
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: normalizeTextureLayerOrder(null),
      futureOnlyField: 'keep-me',
    };
    const getItem = vi.fn((key: string) => {
      if (key === WARDROBE_STATE_STORAGE_KEY) return JSON.stringify(futureState);
      throw new DOMException('Unexpected legacy read', 'SecurityError');
    });
    const setItem = vi.fn(() => {
      throw new DOMException('Storage blocked', 'SecurityError');
    });
    installLocalStorage({ getItem, setItem });
    persistence = createWardrobePersistence();

    expect(persistence.load()).toEqual({ status: 'incompatible' });

    const currentState = serializeSkinCrafterState({
      appearance: { ...defaultAppearance },
      layerOrder: normalizeTextureLayerOrder(null),
    });
    expect(() => persistence.save(currentState)).not.toThrow();
    expect(getItem).toHaveBeenCalledTimes(1);
    expect(setItem).not.toHaveBeenCalled();
  });
});
