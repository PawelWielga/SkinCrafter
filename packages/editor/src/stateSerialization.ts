import {
  appearanceCategories,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  type AppearanceState,
} from './data/appearance';
import type {
  SkinCrafterSerializedState,
  SkinCrafterState,
  SkinCrafterStateMigrationNotice,
  SkinCrafterStateParseResult,
} from './publicTypes';

export const SKINCRAFTER_STATE_SCHEMA_VERSION = 1 as const;

interface UnknownStateRecord {
  [key: string]: unknown;
}

type StateMigration = (value: UnknownStateRecord) => UnknownStateRecord;

const migrations = new Map<number, StateMigration>([
  [0, (value) => ({ ...value, schemaVersion: 1 })],
]);

function isRecord(value: unknown): value is UnknownStateRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function invalidState(message: string): SkinCrafterStateParseResult {
  return {
    success: false,
    error: {
      code: 'invalid_state',
      message,
    },
  };
}

function unsupportedSchemaVersion(schemaVersion: number): SkinCrafterStateParseResult {
  return {
    success: false,
    error: {
      code: 'unsupported_schema_version',
      message: `Unsupported SkinCrafter state schema version: ${schemaVersion}.`,
      schemaVersion,
    },
  };
}

function canonicalizeState(state: SkinCrafterState): SkinCrafterSerializedState {
  return {
    schemaVersion: SKINCRAFTER_STATE_SCHEMA_VERSION,
    appearance: normalizeAppearance(state.appearance),
    layerOrder: normalizeTextureLayerOrder(state.layerOrder),
  };
}

export function serializeSkinCrafterState(state: SkinCrafterState): SkinCrafterSerializedState {
  const serialized = canonicalizeState(state);
  return {
    ...serialized,
    appearance: { ...serialized.appearance },
    layerOrder: [...serialized.layerOrder],
  };
}

export function parseSkinCrafterState(value: unknown): SkinCrafterStateParseResult {
  if (!isRecord(value)) {
    return invalidState('SkinCrafter persisted state must be an object.');
  }

  const notices: SkinCrafterStateMigrationNotice[] = [];
  const rawSchemaVersion = value.schemaVersion;
  let sourceSchemaVersion: number | null;
  let working: UnknownStateRecord;

  if (rawSchemaVersion === undefined) {
    sourceSchemaVersion = null;
    notices.push({
      code: 'legacy_unversioned',
      message: 'Migrated legacy unversioned SkinCrafter state.',
    });
    working = { ...value, schemaVersion: 0 };
  } else {
    if (
      typeof rawSchemaVersion !== 'number'
      || !Number.isInteger(rawSchemaVersion)
      || rawSchemaVersion < 0
    ) {
      return invalidState('SkinCrafter schemaVersion must be a non-negative integer.');
    }

    sourceSchemaVersion = rawSchemaVersion;
    if (sourceSchemaVersion > SKINCRAFTER_STATE_SCHEMA_VERSION) {
      return unsupportedSchemaVersion(sourceSchemaVersion);
    }
    working = { ...value };
  }

  let workingVersion = sourceSchemaVersion ?? 0;
  while (workingVersion < SKINCRAFTER_STATE_SCHEMA_VERSION) {
    const migrate = migrations.get(workingVersion);
    if (!migrate) {
      return unsupportedSchemaVersion(workingVersion);
    }

    const nextVersion = workingVersion + 1;
    working = migrate(working);
    notices.push({
      code: 'schema_version_migrated',
      message: `Migrated SkinCrafter state schema from version ${workingVersion} to ${nextVersion}.`,
      from: workingVersion,
      to: nextVersion,
    });
    workingVersion = nextVersion;
  }

  if (working.schemaVersion !== SKINCRAFTER_STATE_SCHEMA_VERSION) {
    return invalidState('SkinCrafter state migration did not produce the current schema version.');
  }

  const allowPartial = sourceSchemaVersion === null || sourceSchemaVersion === 0;
  if (!isRecord(working.appearance)) {
    return invalidState('SkinCrafter persisted appearance must be an object.');
  }

  const appearanceInput: Partial<AppearanceState> = {};
  for (const category of appearanceCategories) {
    const rawValue = working.appearance[category.id];
    if (rawValue === undefined) {
      if (!allowPartial) {
        return invalidState(`SkinCrafter persisted appearance is missing ${category.id}.`);
      }
      continue;
    }
    if (typeof rawValue !== 'string') {
      return invalidState(`SkinCrafter persisted appearance.${category.id} must be a string.`);
    }
    appearanceInput[category.id] = rawValue;
  }

  const rawLayerOrder = working.layerOrder;
  if (rawLayerOrder === undefined && !allowPartial) {
    return invalidState('SkinCrafter persisted state is missing layerOrder.');
  }
  if (rawLayerOrder !== undefined) {
    if (!Array.isArray(rawLayerOrder) || rawLayerOrder.some((layer) => typeof layer !== 'string')) {
      return invalidState('SkinCrafter persisted layerOrder must be an array of strings.');
    }
  }

  const normalizedAppearance = normalizeAppearance(appearanceInput);
  for (const category of appearanceCategories) {
    const rawValue = working.appearance[category.id];
    const normalizedValue = normalizedAppearance[category.id];
    if (rawValue !== normalizedValue) {
      notices.push({
        code: 'appearance_value_defaulted',
        message: `Normalized persisted appearance.${category.id} to a supported value.`,
        path: category.id,
        from: rawValue,
        to: normalizedValue,
      });
    }
  }

  const layerOrderInput = (rawLayerOrder ?? []) as string[];
  const normalizedLayerOrder = normalizeTextureLayerOrder(layerOrderInput);
  if (
    layerOrderInput.length !== normalizedLayerOrder.length
    || layerOrderInput.some((layer, index) => layer !== normalizedLayerOrder[index])
  ) {
    notices.push({
      code: 'layer_order_normalized',
      message: 'Normalized persisted layer order by removing invalid/duplicate layers and appending missing layers.',
      path: 'layerOrder',
      from: [...layerOrderInput],
      to: [...normalizedLayerOrder],
    });
  }

  const state: SkinCrafterState = {
    appearance: normalizedAppearance,
    layerOrder: normalizedLayerOrder,
  };
  const serializedState = serializeSkinCrafterState(state);

  return {
    success: true,
    state,
    serializedState,
    sourceSchemaVersion,
    migrated: sourceSchemaVersion !== SKINCRAFTER_STATE_SCHEMA_VERSION || notices.length > 0,
    notices,
  };
}
