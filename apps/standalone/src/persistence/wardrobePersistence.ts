import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  parseSkinCrafterState,
  type SkinCrafterPersistenceAdapter,
  type SkinCrafterSerializedState,
  type SkinCrafterState,
} from '@dihor/skincrafter-editor';

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

function readJson(raw: string): unknown {
  return JSON.parse(raw) as unknown;
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

function loadLegacyAggregateState(): LoadedState | null {
  const storedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY);
  const storedLayerOrder = localStorage.getItem(LAYER_ORDER_STORAGE_KEY);
  if (storedAppearance === null || storedLayerOrder === null) return null;

  try {
    return parseLoadedState({
      appearance: readJson(storedAppearance),
      layerOrder: readJson(storedLayerOrder),
    });
  } catch {
    return null;
  }
}

function loadLegacyState(): SkinCrafterState {
  let appearance: unknown;
  const storedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY);
  if (storedAppearance) {
    try {
      appearance = readJson(storedAppearance);
    } catch {
      appearance = { ...defaultAppearance };
    }
  } else {
    appearance = {
      race: localStorage.getItem('wardrobeRace') ?? defaultAppearance.race,
      skinColor: localStorage.getItem('wardrobeSkinColor') ?? defaultAppearance.skinColor,
      hat: localStorage.getItem('wardrobeHat') ?? defaultAppearance.hat,
    };
  }

  let layerOrder: unknown = normalizeTextureLayerOrder(null);
  const storedLayerOrder = localStorage.getItem(LAYER_ORDER_STORAGE_KEY);
  if (storedLayerOrder) {
    try {
      layerOrder = readJson(storedLayerOrder);
    } catch {
      layerOrder = normalizeTextureLayerOrder(null);
    }
  }

  const parsed = parseLoadedState({ appearance, layerOrder });
  if (!parsed) {
    return {
      appearance: { ...defaultAppearance },
      layerOrder: normalizeTextureLayerOrder(null),
    };
  }

  localStorage.setItem(
    WARDROBE_STATE_STORAGE_KEY,
    JSON.stringify(parsed.serializedState)
  );
  return parsed.state;
}

function serializedStatesEqual(
  left: SkinCrafterSerializedState,
  right: SkinCrafterSerializedState
): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

function hasUnsupportedFutureState(): boolean {
  const storedState = localStorage.getItem(WARDROBE_STATE_STORAGE_KEY);
  if (storedState === null) return false;

  return loadVersionedState(storedState).kind === 'unsupported';
}

export const wardrobePersistence: SkinCrafterPersistenceAdapter = {
  load: () => {
    const storedState = localStorage.getItem(WARDROBE_STATE_STORAGE_KEY);
    if (storedState === null) {
      return loadLegacyState();
    }

    const versioned = loadVersionedState(storedState);
    if (versioned.kind === 'unsupported') {
      // An older standalone must never downgrade or overwrite state written by a newer schema.
      // Returning null lets the editor render with its normal defaults while save() remains blocked
      // for as long as the unsupported record is still present.
      return null;
    }
    if (versioned.kind === 'invalid') {
      return null;
    }

    const legacyAggregate = loadLegacyAggregateState();
    if (
      legacyAggregate
      && !serializedStatesEqual(legacyAggregate.serializedState, versioned.value.serializedState)
    ) {
      // Older standalone releases know only the aggregate legacy keys. Because current saves keep
      // those keys synchronized, a valid divergence means an older release changed the wardrobe
      // after skincrafterState was written. Preserve that newer user edit and migrate it forward.
      localStorage.setItem(
        WARDROBE_STATE_STORAGE_KEY,
        JSON.stringify(legacyAggregate.serializedState)
      );
      return legacyAggregate.state;
    }

    return versioned.value.state;
  },
  save: (state) => {
    if (hasUnsupportedFutureState()) {
      return;
    }

    localStorage.setItem(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(state));

    // Keep legacy keys synchronized for backward compatibility with older standalone builds.
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(state.appearance));
    localStorage.setItem(LAYER_ORDER_STORAGE_KEY, JSON.stringify(state.layerOrder));
  },
};
