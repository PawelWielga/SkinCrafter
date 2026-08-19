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
export type {
  SkinCrafterEditorProps,
  SkinCrafterError,
  SkinCrafterErrorCategory,
  SkinCrafterErrorCode,
  SkinCrafterGenerationStatus,
  SkinCrafterInitialSkin,
  SkinCrafterPersistenceAdapter,
  SkinCrafterSkinMetadata,
  SkinCrafterSkinOutput,
  SkinCrafterState,
  SkinCrafterTheme,
} from './publicTypes';
