import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  parseSkinCrafterState,
  serializeSkinCrafterState,
  type SkinCrafterPersistenceAdapter,
  type SkinCrafterSerializedState,
  type SkinCrafterState,
} from '@dihor/skincrafter-editor';
import {
  browserStorage,
  type BrowserStorageReadResult,
  type SafeBrowserStorage,
} from './browserStorage';

export const WARDROBE_STATE_STORAGE_KEY = 'skincrafterState';

const APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LAYER_ORDER_STORAGE_KEY = 'wardrobeLayerOrder';

interface LoadedState {
  state: SkinCrafterState;
  serializedState: SkinCrafterSerializedState;
}

type VersionedStateLoadResult =
  | { kind: 'loaded'; value: LoadedState }
  | { kind: 'unsupported' }
  | { kind: 'invalid' };

type LegacyAggregateLoadResult =
  | { kind: 'loaded'; value: LoadedState }
  | { kind: 'missing' }
  | { kind: 'unavailable' };

type StorageReader = (key: string) => BrowserStorageReadResult;
type StorageWriter = (key: string, value: string) => boolean;

function readJson(raw: string): unknown {
  return JSON.parse(raw) as unknown;
}

function createDefaultState(): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance },
    layerOrder: normalizeTextureLayerOrder(null),
  };
}

function parseLoadedState(value: unknown): LoadedState | null {
  const parsed = parseSkinCrafterState(value);
  if (!parsed.success) return null;

  return {
    state: parsed.state,
    serializedState: parsed.serializedState,
  };
}

function loadVersionedState(raw: string): VersionedStateLoadResult {
  let value: unknown;
  try {
    value = readJson(raw);
  } catch {
    return { kind: 'invalid' };
  }

  const parsed = parseSkinCrafterState(value);
  if (!parsed.success) {
    return parsed.error.code === 'unsupported_schema_version'
      ? { kind: 'unsupported' }
      : { kind: 'invalid' };
  }

  return {
    kind: 'loaded',
    value: {
      state: parsed.state,
      serializedState: parsed.serializedState,
    },
  };
}

function loadLegacyAggregateState(read: StorageReader): LegacyAggregateLoadResult {
  const storedAppearance = read(APPEARANCE_STORAGE_KEY);
  if (storedAppearance.status === 'unavailable') return { kind: 'unavailable' };
  if (storedAppearance.value === null) return { kind: 'missing' };

  const storedLayerOrder = read(LAYER_ORDER_STORAGE_KEY);
  if (storedLayerOrder.status === 'unavailable') return { kind: 'unavailable' };
  if (storedLayerOrder.value === null) return { kind: 'missing' };

  try {
    const loaded = parseLoadedState({
      appearance: readJson(storedAppearance.value),
      layerOrder: readJson(storedLayerOrder.value),
    });
    return loaded ? { kind: 'loaded', value: loaded } : { kind: 'missing' };
  } catch {
    return { kind: 'missing' };
  }
}

function loadLegacyState(read: StorageReader, write: StorageWriter): SkinCrafterState {
  const storedAppearance = read(APPEARANCE_STORAGE_KEY);
  if (storedAppearance.status === 'unavailable') return createDefaultState();

  let appearance: unknown;
  if (storedAppearance.value) {
    try {
      appearance = readJson(storedAppearance.value);
    } catch {
      appearance = { ...defaultAppearance };
    }
  } else {
    const race = read('wardrobeRace');
    const skinColor = read('wardrobeSkinColor');
    const hat = read('wardrobeHat');
    if (
      race.status === 'unavailable'
      || skinColor.status === 'unavailable'
      || hat.status === 'unavailable'
    ) {
      return createDefaultState();
    }

    appearance = {
      race: race.value ?? defaultAppearance.race,
      skinColor: skinColor.value ?? defaultAppearance.skinColor,
      hat: hat.value ?? defaultAppearance.hat,
    };
  }

  let layerOrder: unknown = normalizeTextureLayerOrder(null);
  const storedLayerOrder = read(LAYER_ORDER_STORAGE_KEY);
  if (storedLayerOrder.status === 'unavailable') return createDefaultState();
  if (storedLayerOrder.value) {
    try {
      layerOrder = readJson(storedLayerOrder.value);
    } catch {
      layerOrder = normalizeTextureLayerOrder(null);
    }
  }

  const parsed = parseLoadedState({ appearance, layerOrder });
  if (!parsed) return createDefaultState();

  write(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(parsed.serializedState));
  return parsed.state;
}

function legacyEditableStateEqual(
  left: SkinCrafterSerializedState,
  right: SkinCrafterSerializedState
): boolean {
  return JSON.stringify(left.appearance) === JSON.stringify(right.appearance)
    && JSON.stringify(left.layerOrder) === JSON.stringify(right.layerOrder);
}

export function createWardrobePersistence(storage: SafeBrowserStorage = browserStorage) {
  let writesEnabled = true;

  const read: StorageReader = (key) => {
    const result = storage.read(key);
    if (result.status === 'unavailable') writesEnabled = false;
    return result;
  };

  const write: StorageWriter = (key, value) => {
    if (!writesEnabled) return false;

    const succeeded = storage.write(key, value);
    if (!succeeded) writesEnabled = false;
    return succeeded;
  };

  return {
    load: () => {
      writesEnabled = true;

      const storedState = read(WARDROBE_STATE_STORAGE_KEY);
      if (storedState.status === 'unavailable') {
        return { status: 'empty' as const };
      }
      if (storedState.value === null) {
        return { status: 'loaded' as const, state: loadLegacyState(read, write) };
      }

      const versioned = loadVersionedState(storedState.value);
      if (versioned.kind === 'unsupported') {
        writesEnabled = false;
        return { status: 'incompatible' as const };
      }
      if (versioned.kind === 'invalid') {
        return { status: 'empty' as const };
      }

      const legacyAggregate = loadLegacyAggregateState(read);
      if (legacyAggregate.kind === 'loaded'
        && !legacyEditableStateEqual(
          legacyAggregate.value.serializedState,
          versioned.value.serializedState
        )) {
        // Older standalone releases know only appearance and layer order. Preserve their newer edit,
        // but carry forward v2-only wardrobe colors that the old build could not have changed.
        const mergedState: SkinCrafterState = {
          ...legacyAggregate.value.state,
          wardrobeColors: versioned.value.state.wardrobeColors,
        };
        const serialized = serializeSkinCrafterState(mergedState);
        write(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(serialized));
        return { status: 'loaded' as const, state: mergedState };
      }

      return { status: 'loaded' as const, state: versioned.value.state };
    },
    save: (state: SkinCrafterSerializedState) => {
      if (!write(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(state))) return;

      // Keep legacy keys synchronized for backward compatibility with older standalone builds.
      if (!write(APPEARANCE_STORAGE_KEY, JSON.stringify(state.appearance))) return;
      write(LAYER_ORDER_STORAGE_KEY, JSON.stringify(state.layerOrder));
    },
  } satisfies SkinCrafterPersistenceAdapter;
}

export const wardrobePersistence = createWardrobePersistence();
