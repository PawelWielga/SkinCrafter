import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PreviewArea from './components/previewArea';
import TwoPanelLayout from './components/twoPanelLayout';
import Wardrobe from './components/wardrobe';
import {
  buildTextureInputs,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  type AppearanceCategoryId,
  type TextureLayerCategoryId,
} from './data/appearance';
import { defaultLanguage, translate, type TranslationKey } from './i18n/translations';
import type {
  SkinCrafterEditorProps,
  SkinCrafterInitialSkin,
  SkinCrafterState,
  SkinCrafterTheme,
} from './publicTypes';
import { createSkinOutput } from './skinOutput';
import combineTextures from './utils/combineTextures';

function normalizeState(value?: SkinCrafterInitialSkin | SkinCrafterState | null): SkinCrafterState {
  return {
    appearance: normalizeAppearance(value?.appearance ?? null),
    layerOrder: normalizeTextureLayerOrder(value?.layerOrder),
  };
}

function themeStyle(theme?: SkinCrafterTheme): React.CSSProperties {
  if (!theme) return {};
  return {
    '--skincrafter-accent': theme.accent,
    '--skincrafter-accent-strong': theme.accentStrong,
    '--skincrafter-surface': theme.surface,
    '--skincrafter-text': theme.text,
    '--skincrafter-muted': theme.muted,
    '--skincrafter-border': theme.border,
  } as React.CSSProperties;
}

export default function SkinCrafterEditor({
  locale = defaultLanguage,
  value,
  initialSkin,
  persistence,
  assetBaseUrl,
  onStateChange,
  onSkinChange,
  onSave,
  className = '',
  style,
  theme,
  previewBottomOffset = 0,
}: SkinCrafterEditorProps): React.JSX.Element {
  const [internalState, setInternalState] = useState<SkinCrafterState>(() => {
    if (value) return normalizeState(value);
    if (initialSkin) return normalizeState(initialSkin);
    return normalizeState(persistence?.load() ?? null);
  });
  const [combinedTexture, setCombinedTexture] = useState<string | null>(null);
  const [skinOutput, setSkinOutput] = useState<ReturnType<typeof createSkinOutput> | null>(null);

  const controlledState = useMemo(() => (value ? normalizeState(value) : null), [value]);
  const state = controlledState ?? internalState;
  const t = useCallback((key: TranslationKey) => translate(locale, key), [locale]);

  const publishState = useCallback((next: SkinCrafterState) => {
    if (!value) setInternalState(next);
    onStateChange?.(next);
  }, [onStateChange, value]);

  const handleAppearanceChange = useCallback((category: AppearanceCategoryId, nextValue: string) => {
    publishState({
      ...state,
      appearance: normalizeAppearance({ ...state.appearance, [category]: nextValue }),
    });
  }, [publishState, state]);

  const handleLayerOrderChange = useCallback((layerOrder: TextureLayerCategoryId[]) => {
    publishState({ ...state, layerOrder: normalizeTextureLayerOrder(layerOrder) });
  }, [publishState, state]);

  useEffect(() => {
    if (!value) persistence?.save(state);
  }, [persistence, state, value]);

  const textureInputs = useMemo(
    () => buildTextureInputs(state.appearance, state.layerOrder, assetBaseUrl),
    [assetBaseUrl, state.appearance, state.layerOrder]
  );

  useEffect(() => {
    let current = true;
    void combineTextures(textureInputs).then((dataUrl) => {
      if (!current || !dataUrl) return;
      const output = createSkinOutput(dataUrl, state.appearance, state.layerOrder);
      setCombinedTexture(dataUrl);
      setSkinOutput(output);
      onSkinChange?.(output);
    });
    return () => { current = false; };
  }, [onSkinChange, state.appearance, state.layerOrder, textureInputs]);

  const handleSave = onSave && skinOutput ? () => onSave(skinOutput) : undefined;

  return (
    <div
      className={`skincrafter-editor h-full min-h-0 w-full ${className}`.trim()}
      style={{ ...themeStyle(theme), ...style }}
      data-testid="skincrafter-editor"
      data-skincrafter-locale={locale}
    >
      <TwoPanelLayout
        left={
          <PreviewArea
            texture={combinedTexture}
            model={state.appearance.sex === 'Female' ? 'slim' : 'classic'}
            footerHeight={previewBottomOffset}
            t={t}
            onSave={handleSave}
          />
        }
        right={
          <Wardrobe
            appearance={state.appearance}
            textureLayerOrder={state.layerOrder}
            onAppearanceChange={handleAppearanceChange}
            onLayerOrderChange={handleLayerOrderChange}
            t={t}
            assetBaseUrl={assetBaseUrl}
          />
        }
      />
    </div>
  );
}
