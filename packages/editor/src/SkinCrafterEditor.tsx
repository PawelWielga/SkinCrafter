import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PreviewArea from './components/previewArea';
import TwoPanelLayout from './components/twoPanelLayout';
import Wardrobe from './components/wardrobe';
import {
  buildTextureInputs,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  type AppearanceCategoryId,
  type AppearanceState,
  type TextureLayerCategoryId,
} from './data/appearance';
import { defaultLanguage, translate, type TranslationKey } from './i18n/translations';
import type {
  SkinCrafterEditorProps,
  SkinCrafterError,
  SkinCrafterGenerationStatus,
  SkinCrafterInitialSkin,
  SkinCrafterSkinOutput,
  SkinCrafterState,
  SkinCrafterTheme,
} from './publicTypes';
import { createSkinOutput } from './skinOutput';
import { serializeSkinCrafterState } from './stateSerialization';
import combineTextures, { TextureLoadError } from './utils/combineTextures';

interface GeneratedSkinResult {
  key: string;
  texture: string;
  output: SkinCrafterSkinOutput;
}

interface GenerationState {
  key: string | null;
  status: SkinCrafterGenerationStatus;
  error: SkinCrafterError | null;
}

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

function generationErrorFrom(cause: unknown): SkinCrafterError {
  if (cause instanceof TextureLoadError) {
    return {
      code: 'asset_load_failed',
      category: 'asset',
      message: `Failed to load skin texture asset: ${cause.assetUrl}`,
      assetUrl: cause.assetUrl,
      cause: cause.cause,
    };
  }

  return {
    code: 'generation_failed',
    category: 'generation',
    message: 'Failed to generate the current skin.',
    cause,
  };
}

function notifyHost<TArgs extends unknown[]>(
  callback: ((...args: TArgs) => void) | undefined,
  ...args: TArgs
): void {
  if (!callback) return;

  try {
    callback(...args);
  } catch (cause) {
    console.error('SkinCrafter host callback failed', cause);
  }
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
  onStatusChange,
  onError,
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
  const [generatedSkin, setGeneratedSkin] = useState<GeneratedSkinResult | null>(null);
  const [generationState, setGenerationState] = useState<GenerationState>({
    key: null,
    status: 'idle',
    error: null,
  });
  const onSkinChangeRef = useRef(onSkinChange);
  const onStatusChangeRef = useRef(onStatusChange);
  const onErrorRef = useRef(onError);

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
    onSkinChangeRef.current = onSkinChange;
  }, [onSkinChange]);

  useEffect(() => {
    onStatusChangeRef.current = onStatusChange;
  }, [onStatusChange]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    if (!value) persistence?.save(serializeSkinCrafterState(state));
  }, [persistence, state, value]);

  const {
    race,
    sex,
    skinColor,
    eyes,
    eyesColor,
    hair,
    hairColor,
    hat,
    shirt,
    pants,
    shoes,
    accessory,
  } = state.appearance;
  const layerOrderKey = JSON.stringify(state.layerOrder);
  const canonicalAssetBaseUrl = assetBaseUrl?.replace(/\/+$/, '') || undefined;
  const generationKey = JSON.stringify([
    race,
    sex,
    skinColor,
    eyes,
    eyesColor,
    hair,
    hairColor,
    hat,
    shirt,
    pants,
    shoes,
    accessory,
    layerOrderKey,
    canonicalAssetBaseUrl ?? null,
  ]);
  const currentGeneratedSkin = generatedSkin?.key === generationKey ? generatedSkin : null;
  const generationStatus: SkinCrafterGenerationStatus = generationState.key === generationKey
    ? generationState.status
    : 'idle';
  const generationError = generationState.key === generationKey ? generationState.error : null;

  useEffect(() => {
    let current = true;
    const appearanceSnapshot: AppearanceState = {
      race,
      sex,
      skinColor,
      eyes,
      eyesColor,
      hair,
      hairColor,
      hat,
      shirt,
      pants,
      shoes,
      accessory,
    };
    const layerOrderSnapshot = JSON.parse(layerOrderKey) as TextureLayerCategoryId[];

    setGenerationState({ key: generationKey, status: 'generating', error: null });
    notifyHost(onStatusChangeRef.current, 'generating');

    const generate = async (): Promise<void> => {
      let result: { dataUrl: string; output: SkinCrafterSkinOutput };

      try {
        const textureInputs = buildTextureInputs(
          appearanceSnapshot,
          layerOrderSnapshot,
          canonicalAssetBaseUrl
        );
        const dataUrl = await combineTextures(textureInputs);
        result = {
          dataUrl,
          output: createSkinOutput(dataUrl, appearanceSnapshot, layerOrderSnapshot),
        };
      } catch (cause) {
        if (!current) return;

        const error = generationErrorFrom(cause);
        setGenerationState({ key: generationKey, status: 'error', error });
        notifyHost(onStatusChangeRef.current, 'error');
        notifyHost(onErrorRef.current, error);
        return;
      }

      if (!current) return;

      setGeneratedSkin({ key: generationKey, texture: result.dataUrl, output: result.output });
      setGenerationState({ key: generationKey, status: 'ready', error: null });
      notifyHost(onSkinChangeRef.current, result.output);
      notifyHost(onStatusChangeRef.current, 'ready');
    };

    void generate();

    return () => {
      current = false;
    };
  }, [
    accessory,
    canonicalAssetBaseUrl,
    eyes,
    eyesColor,
    generationKey,
    hair,
    hairColor,
    hat,
    layerOrderKey,
    pants,
    race,
    sex,
    shirt,
    shoes,
    skinColor,
  ]);

  const skinOutput = currentGeneratedSkin?.output ?? null;
  const combinedTexture = currentGeneratedSkin?.texture ?? null;
  const canSave = generationStatus === 'ready' && skinOutput !== null;
  const handleSave = onSave && canSave && skinOutput ? () => onSave(skinOutput) : undefined;
  const handlePreviewError = useCallback((error: SkinCrafterError): void => {
    notifyHost(onErrorRef.current, error);
  }, []);

  return (
    <div
      className={`skincrafter-editor h-full min-h-0 w-full ${className}`.trim()}
      style={{ ...themeStyle(theme), ...style }}
      data-testid="skincrafter-editor"
      data-skincrafter-locale={locale}
      data-skincrafter-generation-status={generationStatus}
    >
      <TwoPanelLayout
        left={
          <PreviewArea
            texture={combinedTexture}
            model={state.appearance.sex === 'Female' ? 'slim' : 'classic'}
            footerHeight={previewBottomOffset}
            t={t}
            onSave={handleSave}
            canSave={canSave}
            generationStatus={generationStatus}
            generationError={generationError}
            onError={handlePreviewError}
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
