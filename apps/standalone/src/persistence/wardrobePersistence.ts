import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  parseSkinCrafterState,
  type SkinCrafterPersistenceAdapter,
  type SkinCrafterState,
} from '@pawelwielga/skincrafter-editor';

export const WARDROBE_STATE_STORAGE_KEY = 'skincrafterState';

const APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LAYER_ORDER_STORAGE_KEY = 'wardrobeLayerOrder';

function readJson(raw: string): unknown {
  return JSON.parse(raw) as unknown;
}

function loadVersionedState(raw: string): SkinCrafterState | null {
  let value: unknown;
  try {
    value = readJson(raw);
  } catch {
    return null;
  }

  const parsed = parseSkinCrafterState(value);
  if (!parsed.success) {
    if (parsed.error.code === 'unsupported_schema_version') {
      throw new Error(parsed.error.message);
    }
    return null;
  }

  return parsed.state;
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

  const parsed = parseSkinCrafterState({ appearance, layerOrder });
  if (!parsed.success) {
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

export const wardrobePersistence: SkinCrafterPersistenceAdapter = {
  load: () => {
    const storedState = localStorage.getItem(WARDROBE_STATE_STORAGE_KEY);
    if (storedState !== null) {
      return loadVersionedState(storedState);
    }

    return loadLegacyState();
  },
  save: (state) => {
    localStorage.setItem(WARDROBE_STATE_STORAGE_KEY, JSON.stringify(state));

    // Keep legacy keys synchronized for backward compatibility with older standalone builds.
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(state.appearance));
    localStorage.setItem(LAYER_ORDER_STORAGE_KEY, JSON.stringify(state.layerOrder));
  },
};
