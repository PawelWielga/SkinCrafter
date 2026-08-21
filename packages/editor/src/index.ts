import './styles/main.css';

export { default as SkinCrafterEditor } from './SkinCrafterEditor';
export { default as SkinPreview } from './SkinPreview';
export type { SkinPreviewProps } from './SkinPreview';
export { resolveAssetUrl } from './assetResolver';
export {
  appearanceCategories,
  defaultAppearance,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  textureLayerCategories,
} from './data/appearance';
export type {
  AppearanceCategoryId,
  AppearanceState,
  TextureLayerCategoryId,
} from './data/appearance';
export { defaultLanguage, isLanguage, languages, translate } from './i18n/translations';
export type { Language, TranslationKey } from './i18n/translations';
export {
  SKINCRAFTER_STATE_SCHEMA_VERSION,
  parseSkinCrafterState,
  serializeSkinCrafterState,
} from './stateSerialization';
export type {
  SkinCrafterEditorProps,
  SkinCrafterError,
  SkinCrafterErrorCategory,
  SkinCrafterErrorCode,
  SkinCrafterGenerationStatus,
  SkinCrafterImportedInitialSkin,
  SkinCrafterInitialSkin,
  SkinCrafterPersistenceAdapter,
  SkinCrafterPersistenceLoadResult,
  SkinCrafterSemanticInitialSkin,
  SkinCrafterSerializedState,
  SkinCrafterSerializedStateV1,
  SkinCrafterSkinMetadata,
  SkinCrafterSkinModel,
  SkinCrafterSkinOutput,
  SkinCrafterState,
  SkinCrafterStateMigrationNotice,
  SkinCrafterStateMigrationNoticeCode,
  SkinCrafterStateParseError,
  SkinCrafterStateParseErrorCode,
  SkinCrafterStateParseResult,
  SkinCrafterTheme,
} from './publicTypes';
