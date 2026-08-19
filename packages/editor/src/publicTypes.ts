import type React from 'react';
import type {
  AppearanceCategoryId,
  AppearanceState,
  TextureLayerCategoryId,
} from './data/appearance';
import type { Language } from './i18n/translations';

export interface SkinCrafterState {
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
}

export interface SkinCrafterInitialSkin {
  appearance?: Partial<AppearanceState>;
  layerOrder?: readonly string[];
}

export interface SkinCrafterSerializedStateV1 {
  schemaVersion: 1;
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
}

export type SkinCrafterSerializedState = SkinCrafterSerializedStateV1;

export type SkinCrafterStateMigrationNoticeCode =
  | 'legacy_unversioned'
  | 'schema_version_migrated'
  | 'appearance_value_defaulted'
  | 'layer_order_normalized';

export interface SkinCrafterStateMigrationNotice {
  code: SkinCrafterStateMigrationNoticeCode;
  message: string;
  path?: AppearanceCategoryId | 'layerOrder';
  from?: unknown;
  to?: unknown;
}

export type SkinCrafterStateParseErrorCode =
  | 'invalid_state'
  | 'unsupported_schema_version';

export interface SkinCrafterStateParseError {
  code: SkinCrafterStateParseErrorCode;
  message: string;
  schemaVersion?: number;
}

export type SkinCrafterStateParseResult =
  | {
    success: true;
    state: SkinCrafterState;
    serializedState: SkinCrafterSerializedState;
    sourceSchemaVersion: number | null;
    migrated: boolean;
    notices: SkinCrafterStateMigrationNotice[];
  }
  | {
    success: false;
    error: SkinCrafterStateParseError;
  };

export interface SkinCrafterPersistenceAdapter {
  load: () => SkinCrafterInitialSkin | SkinCrafterState | null;
  save: (state: SkinCrafterSerializedState) => void;
}

export interface SkinCrafterSkinMetadata {
  width: 64;
  height: 64;
  mimeType: 'image/png';
  model: 'classic' | 'slim';
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
}

export interface SkinCrafterSkinOutput {
  blob: Blob;
  file: File;
  dataUrl: string;
  metadata: SkinCrafterSkinMetadata;
}

export type SkinCrafterGenerationStatus = 'idle' | 'generating' | 'ready' | 'error';

export type SkinCrafterErrorCategory = 'generation' | 'asset' | 'preview';

export type SkinCrafterErrorCode =
  | 'generation_failed'
  | 'asset_load_failed'
  | 'preview_texture_load_failed'
  | 'preview_webgl_initialization_failed';

export interface SkinCrafterError {
  code: SkinCrafterErrorCode;
  category: SkinCrafterErrorCategory;
  message: string;
  assetUrl?: string;
  cause?: unknown;
}

export interface SkinCrafterTheme {
  accent?: string;
  accentStrong?: string;
  surface?: string;
  text?: string;
  muted?: string;
  border?: string;
}

export interface SkinCrafterEditorProps {
  locale?: Language;
  value?: SkinCrafterState;
  initialSkin?: SkinCrafterInitialSkin;
  persistence?: SkinCrafterPersistenceAdapter;
  assetBaseUrl?: string;
  onStateChange?: (state: SkinCrafterState) => void;
  onSkinChange?: (skin: SkinCrafterSkinOutput) => void;
  onSave?: (skin: SkinCrafterSkinOutput) => void;
  onStatusChange?: (status: SkinCrafterGenerationStatus) => void;
  onError?: (error: SkinCrafterError) => void;
  className?: string;
  style?: React.CSSProperties;
  theme?: SkinCrafterTheme;
  previewBottomOffset?: number;
}
