import { describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
} from './data/appearance';
import {
  SKINCRAFTER_STATE_SCHEMA_VERSION,
  parseSkinCrafterState,
  serializeSkinCrafterState,
} from './stateSerialization';
import type { SkinCrafterState } from './publicTypes';

function createState(): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance, hat: 'Duck' },
    layerOrder: ['shirt', 'hat', 'pants', 'shoes', 'accessory'],
    wardrobeColors: normalizeWardrobeColors({
      shirt: { Hoodie: { primary: '#A33A3A' } },
    }),
  };
}

describe('SkinCrafter state serialization', () => {
  it('round-trips the current schema without migration', () => {
    const serialized = serializeSkinCrafterState(createState());

    expect(serialized.schemaVersion).toBe(SKINCRAFTER_STATE_SCHEMA_VERSION);

    const parsed = parseSkinCrafterState(serialized);
    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.sourceSchemaVersion).toBe(SKINCRAFTER_STATE_SCHEMA_VERSION);
    expect(parsed.migrated).toBe(false);
    expect(parsed.notices).toEqual([]);
    expect(parsed.state).toEqual(createState());
    expect(parsed.serializedState).toEqual(serialized);
  });

  it('migrates legacy unversioned state without losing supported values and adds wardrobe defaults', () => {
    const parsed = parseSkinCrafterState({
      appearance: { ...defaultAppearance, race: 'Bear', hat: 'Duck' },
      layerOrder: ['pants', 'hat'],
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.sourceSchemaVersion).toBeNull();
    expect(parsed.migrated).toBe(true);
    expect(parsed.state.appearance.race).toBe('Bear');
    expect(parsed.state.appearance.hat).toBe('Duck');
    expect(parsed.state.layerOrder).toEqual(['pants', 'hat', 'shirt', 'shoes', 'accessory']);
    expect(parsed.state.wardrobeColors).toEqual({
      shirt: { Hoodie: { primary: '#4A6FA5' } },
    });
    expect(parsed.serializedState.schemaVersion).toBe(2);
    expect(parsed.notices.map((notice) => notice.code)).toContain('legacy_unversioned');
  });

  it('runs explicit version migrations through the centralized pipeline', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 0,
      appearance: { ...defaultAppearance, race: 'Bear' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.sourceSchemaVersion).toBe(0);
    expect(parsed.state.appearance.race).toBe('Bear');
    expect(parsed.serializedState.schemaVersion).toBe(2);
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'schema_version_migrated', from: 0, to: 1 }),
      expect.objectContaining({ code: 'schema_version_migrated', from: 1, to: 2 }),
    ]));
  });

  it('migrates schema v1 by adding deterministic defaults for newly introduced color slots', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 1,
      appearance: { ...defaultAppearance, shirt: 'Hoodie' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.sourceSchemaVersion).toBe(1);
    expect(parsed.state.wardrobeColors).toEqual({
      shirt: { Hoodie: { primary: '#4A6FA5' } },
    });
    expect(parsed.serializedState.schemaVersion).toBe(2);
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'schema_version_migrated', from: 1, to: 2 }),
      expect.objectContaining({ code: 'wardrobe_colors_normalized', path: 'wardrobeColors' }),
    ]));
  });

  it('fills a color slot added after a v2 save and preserves existing valid slot values', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: { ...defaultAppearance, shirt: 'Hoodie' },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: { shirt: { Hoodie: {} } },
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.state.wardrobeColors).toEqual({
      shirt: { Hoodie: { primary: '#4A6FA5' } },
    });
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'wardrobe_colors_normalized', path: 'wardrobeColors' }),
    ]));
  });

  it('preserves a valid selected wardrobe color in the current schema', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: { ...defaultAppearance, shirt: 'Hoodie' },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: { shirt: { Hoodie: { primary: '#7047A3' } } },
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;
    expect(parsed.state.wardrobeColors).toEqual({
      shirt: { Hoodie: { primary: '#7047A3' } },
    });
    expect(parsed.notices).toEqual([]);
  });

  it('falls back deterministically for removed appearance and wardrobe color values', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: {
        ...defaultAppearance,
        race: 'DeletedRace',
        hat: 'DeletedHat',
      },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: {
        shirt: { Hoodie: { primary: '#000001', removedSlot: '#FFFFFF' } },
        hat: { RemovedItem: { primary: '#FFFFFF' } },
      },
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.state.appearance.race).toBe(defaultAppearance.race);
    expect(parsed.state.appearance.hat).toBe(defaultAppearance.hat);
    expect(parsed.state.wardrobeColors).toEqual({
      shirt: { Hoodie: { primary: '#4A6FA5' } },
    });
    expect(parsed.migrated).toBe(true);
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'appearance_value_defaulted', path: 'race' }),
      expect.objectContaining({ code: 'appearance_value_defaulted', path: 'hat' }),
      expect.objectContaining({ code: 'wardrobe_colors_normalized', path: 'wardrobeColors' }),
    ]));
  });

  it('preserves valid layer order while removing invalid entries and appending missing layers', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: { ...defaultAppearance },
      layerOrder: ['pants', 'hat', 'pants', 'removed-layer'],
      wardrobeColors: normalizeWardrobeColors(undefined),
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.state.layerOrder).toEqual(['pants', 'hat', 'shirt', 'shoes', 'accessory']);
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'layer_order_normalized', path: 'layerOrder' }),
    ]));
  });

  it('rejects malformed current-schema state', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: 'not-an-object',
      layerOrder: [],
      wardrobeColors: {},
    });

    expect(parsed).toEqual({
      success: false,
      error: {
        code: 'invalid_state',
        message: 'SkinCrafter persisted appearance must be an object.',
      },
    });
  });

  it('rejects malformed wardrobe color state instead of guessing', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: { ...defaultAppearance },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: { shirt: { Hoodie: { primary: 123 } } },
    });

    expect(parsed.success).toBe(false);
    if (parsed.success) return;
    expect(parsed.error.code).toBe('invalid_state');
    expect(parsed.error.message).toContain('wardrobeColors.shirt.Hoodie.primary must be a string');
  });

  it('rejects incomplete current-schema state instead of silently treating it as legacy', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: { race: 'Human' },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: {},
    });

    expect(parsed.success).toBe(false);
    if (parsed.success) return;
    expect(parsed.error.code).toBe('invalid_state');
    expect(parsed.error.message).toContain('missing sex');
  });

  it('fails explicitly for unknown future schema versions', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 3,
      appearance: { ...defaultAppearance },
      layerOrder: normalizeTextureLayerOrder(null),
      wardrobeColors: normalizeWardrobeColors(undefined),
    });

    expect(parsed).toEqual({
      success: false,
      error: {
        code: 'unsupported_schema_version',
        message: 'Unsupported SkinCrafter state schema version: 3.',
        schemaVersion: 3,
      },
    });
  });
});
