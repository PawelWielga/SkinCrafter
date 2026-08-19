import type React from 'react';
import type { AppearanceState, TextureLayerCategoryId } from './data/appearance';
import type { Language } from './i18n/translations';

export interface SkinCrafterState {
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
}

export interface SkinCrafterInitialSkin {
  appearance?: Partial<AppearanceState>;
  layerOrder?: readonly string[];
}

export interface SkinCrafterPersistenceAdapter {
  load: () => SkinCrafterInitialSkin | null;
  save: (state: SkinCrafterState) => void;
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
  className?: string;
  style?: React.CSSProperties;
  theme?: SkinCrafterTheme;
  previewBottomOffset?: number;
}
