import React from 'react';
import PreviewArea from './components/previewArea';
import { defaultLanguage, translate, type Language, type TranslationKey } from './i18n/translations';
import type { SkinCrafterError, SkinCrafterSkinModel, SkinCrafterTheme } from './publicTypes';
import { createThemeStyle } from './themeStyle';

export interface SkinPreviewProps {
  texture: string | null;
  model?: SkinCrafterSkinModel;
  locale?: Language;
  bottomOffset?: number;
  className?: string;
  style?: React.CSSProperties;
  theme?: SkinCrafterTheme;
  onError?: (error: SkinCrafterError) => void;
}

export default function SkinPreview({
  texture,
  model = 'classic',
  locale = defaultLanguage,
  bottomOffset = 0,
  className = '',
  style,
  theme,
  onError,
}: SkinPreviewProps): React.JSX.Element {
  const t = (key: TranslationKey): string => translate(locale, key);
  return (
    <div className={`skincrafter-editor h-full min-h-0 ${className}`.trim()} style={{ ...createThemeStyle(theme), ...style }}>
      <PreviewArea
        texture={texture}
        model={model}
        footerHeight={bottomOffset}
        t={t}
        onError={onError}
      />
    </div>
  );
}
