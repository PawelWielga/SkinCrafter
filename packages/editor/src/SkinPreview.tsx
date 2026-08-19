import React from 'react';
import PreviewArea from './components/previewArea';
import { defaultLanguage, translate, type Language, type TranslationKey } from './i18n/translations';
import type { SkinCrafterError, SkinCrafterTheme } from './publicTypes';

export interface SkinPreviewProps {
  texture: string | null;
  model?: 'classic' | 'slim';
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
  const themeVars = {
    '--skincrafter-accent': theme?.accent,
    '--skincrafter-accent-strong': theme?.accentStrong,
    '--skincrafter-surface': theme?.surface,
    '--skincrafter-text': theme?.text,
    '--skincrafter-muted': theme?.muted,
    '--skincrafter-border': theme?.border,
  } as React.CSSProperties;

  return (
    <div className={`skincrafter-editor h-full min-h-0 ${className}`.trim()} style={{ ...themeVars, ...style }}>
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
