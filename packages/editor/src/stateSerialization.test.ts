import { describe, expect, it } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
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

  it('migrates legacy unversioned state without losing supported values', () => {
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
    expect(parsed.serializedState.schemaVersion).toBe(1);
    expect(parsed.notices.map((notice) => notice.code)).toContain('legacy_unversioned');
  });

  it('runs the explicit version zero migration through the centralized pipeline', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 0,
      appearance: { ...defaultAppearance, race: 'Bear' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.sourceSchemaVersion).toBe(0);
    expect(parsed.state.appearance.race).toBe('Bear');
    expect(parsed.serializedState.schemaVersion).toBe(1);
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({
        code: 'schema_version_migrated',
        from: 0,
        to: 1,
      }),
    ]));
  });

  it('falls back deterministically for removed appearance values and reports each fallback', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 1,
      appearance: {
        ...defaultAppearance,
        race: 'DeletedRace',
        hat: 'DeletedHat',
      },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(parsed.state.appearance.race).toBe(defaultAppearance.race);
    expect(parsed.state.appearance.hat).toBe(defaultAppearance.hat);
    expect(parsed.migrated).toBe(true);
    expect(parsed.notices).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'appearance_value_defaulted', path: 'race' }),
      expect.objectContaining({ code: 'appearance_value_defaulted', path: 'hat' }),
    ]));
  });

  it('preserves valid layer order while removing invalid entries and appending missing layers', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 1,
      appearance: { ...defaultAppearance },
      layerOrder: ['pants', 'hat', 'pants', 'removed-layer'],
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
      schemaVersion: 1,
      appearance: 'not-an-object',
      layerOrder: [],
    });

    expect(parsed).toEqual({
      success: false,
      error: {
        code: 'invalid_state',
        message: 'SkinCrafter persisted appearance must be an object.',
      },
    });
  });

  it('rejects incomplete current-schema state instead of silently treating it as legacy', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 1,
      appearance: { race: 'Human' },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(parsed.success).toBe(false);
    if (parsed.success) return;
    expect(parsed.error.code).toBe('invalid_state');
    expect(parsed.error.message).toContain('missing sex');
  });

  it('fails explicitly for unknown future schema versions', () => {
    const parsed = parseSkinCrafterState({
      schemaVersion: 2,
      appearance: { ...defaultAppearance },
      layerOrder: normalizeTextureLayerOrder(null),
    });

    expect(parsed).toEqual({
      success: false,
      error: {
        code: 'unsupported_schema_version',
        message: 'Unsupported SkinCrafter state schema version: 2.',
        schemaVersion: 2,
      },
    });
  });
});
