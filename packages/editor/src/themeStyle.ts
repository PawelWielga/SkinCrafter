import type { CSSProperties } from 'react';
import type { SkinCrafterTheme } from './publicTypes';

export function createThemeStyle(theme?: SkinCrafterTheme): CSSProperties {
  if (!theme) return {};
  return {
    '--skincrafter-accent': theme.accent,
    '--skincrafter-accent-strong': theme.accentStrong,
    '--skincrafter-surface': theme.surface,
    '--skincrafter-text': theme.text,
    '--skincrafter-muted': theme.muted,
    '--skincrafter-border': theme.border,
  } as CSSProperties;
}
