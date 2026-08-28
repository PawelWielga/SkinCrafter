import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PreviewArea from './components/previewArea';
import TwoPanelLayout from './components/twoPanelLayout';
import Wardrobe from './components/wardrobe';
import {
  appearanceCategories,
  buildTextureInputs,
  buildTextureInputsForCategories,
  cloneWardrobeColors,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
  textureLayerCategories,
  type AppearanceCategoryId,
  type AppearanceState,
  type TextureLayerCategoryId,
  type WardrobeColorState,
} from './data/appearance';
import { defaultLanguage, translate, type TranslationKey } from './i18n/translations';
import { InvalidInitialSkinError, loadImportedSkin } from './importedSkin';
import type {
  SkinCrafterEditorProps,
  SkinCrafterError,
  SkinCrafterGenerationStatus,
  SkinCrafterInitialSkin,
  SkinCrafterPersistenceAdapter,
  SkinCrafterSkinModel,
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

interface ImportedSkinRuntime {
  source: Blob;
  dataUrl: string;
  fingerprint: string;
  model: SkinCrafterSkinModel;
  baselineState: SkinCrafterState;
}

interface ImportLoadState {
  source: Blob | null;
  model: SkinCrafterSkinModel | null;
  status: 'idle' | 'loading' | 'ready' | 'error';
  error: SkinCrafterError | null;
}

interface PersistenceInitialization {
  state: SkinCrafterState;
  writesBlocked: boolean;
  error: SkinCrafterError | null;
}

function normalizeState(
  value?: SkinCrafterInitialSkin | SkinCrafterState | null,
  skinModel?: SkinCrafterSkinModel
): SkinCrafterState {
  return {
    appearance: normalizeAppearance(value?.appearance ?? null, skinModel),
    layerOrder: normalizeTextureLayerOrder(value?.layerOrder),
    wardrobeColors: normalizeWardrobeColors(value?.wardrobeColors),
  };
}

function areWardrobeColorsEqual(
  left: WardrobeColorState | undefined,
  right: WardrobeColorState | undefined
): boolean {
  return JSON.stringify(normalizeWardrobeColors(left)) === JSON.stringify(normalizeWardrobeColors(right));
}

function areStatesEqual(left: SkinCrafterState, right: SkinCrafterState): boolean {
  if (left.layerOrder.length !== right.layerOrder.length) return false;
  if (left.layerOrder.some((category, index) => category !== right.layerOrder[index])) return false;
  if (!areWardrobeColorsEqual(left.wardrobeColors, right.wardrobeColors)) return false;

  return appearanceCategories.every(
    ({ id }) => left.appearance[id] === right.appearance[id]
  );
}

function persistenceErrorFrom(
  operation: 'load' | 'save',
  cause: unknown
): SkinCrafterError {
  return {
    code: operation === 'load' ? 'persistence_load_failed' : 'persistence_save_failed',
    category: 'persistence',
    message: operation === 'load'
      ? 'Failed to load persisted SkinCrafter state.'
      : 'Failed to save SkinCrafter state.',
    cause,
  };
}

function initializePersistence(
  persistence?: SkinCrafterPersistenceAdapter
): PersistenceInitialization {
  try {
    const loaded = persistence?.load() ?? null;

    if (loaded && 'status' in loaded) {
      if (loaded.status === 'incompatible') {
        return { state: normalizeState(null), writesBlocked: true, error: null };
      }
      if (loaded.status === 'empty') {
        return { state: normalizeState(null), writesBlocked: false, error: null };
      }
      return { state: normalizeState(loaded.state), writesBlocked: false, error: null };
    }

    return { state: normalizeState(loaded), writesBlocked: false, error: null };
  } catch (cause) {
    return {
      state: normalizeState(null),
      writesBlocked: true,
      error: persistenceErrorFrom('load', cause),
    };
  }
}

function cloneState(state: SkinCrafterState): SkinCrafterState {
  return {
    appearance: { ...state.appearance },
    layerOrder: [...state.layerOrder],
    wardrobeColors: cloneWardrobeColors(normalizeWardrobeColors(state.wardrobeColors)),
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

function initialSkinErrorFrom(cause: unknown): SkinCrafterError {
  return {
    code: 'invalid_initial_skin',
    category: 'input',
    message: cause instanceof InvalidInitialSkinError
      ? cause.message
      : 'Initial skin must be a decodable 64x64 Minecraft PNG.',
    cause: cause instanceof InvalidInitialSkinError ? cause.cause ?? cause : cause,
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
  const initialImage = initialSkin?.image ?? null;
  const initialModel = initialSkin?.model ?? null;
  const hasImportedRequest = initialImage !== null;
  const [persistenceInitialization] = useState<PersistenceInitialization>(() => {
    if (value) {
      return {
        state: normalizeState(value, initialModel ?? undefined),
        writesBlocked: false,
        error: null,
      };
    }

    const persisted = initializePersistence(persistence);
    if (initialSkin) {
      return {
        state: normalizeState(initialSkin, initialModel ?? undefined),
        writesBlocked: persisted.writesBlocked,
        error: persisted.error,
      };
    }
    return persisted;
  });
  const [internalState, setInternalState] = useState<SkinCrafterState>(
    persistenceInitialization.state
  );
  const [generatedSkin, setGeneratedSkin] = useState<GeneratedSkinResult | null>(null);
  const [generationState, setGenerationState] = useState<GenerationState>({
    key: null,
    status: 'idle',
    error: null,
  });
  const [loadedImportedSkin, setLoadedImportedSkin] = useState<ImportedSkinRuntime | null>(null);
  const [importLoadState, setImportLoadState] = useState<ImportLoadState>({
    source: null,
    model: null,
    status: 'idle',
    error: null,
  });
  const [activatedCategories, setActivatedCategories] = useState<AppearanceCategoryId[]>([]);
  const activationVersionRef = useRef(0);
  const categoryActivationVersionRef = useRef<Partial<Record<AppearanceCategoryId, number>>>({});
  const onSkinChangeRef = useRef(onSkinChange);
  const onStatusChangeRef = useRef(onStatusChange);
  const onErrorRef = useRef(onError);
  const loadedImportedSkinRef = useRef<ImportedSkinRuntime | null>(null);
  const equivalentImportPendingRef = useRef(false);
  const lastGeneratedKeyRef = useRef<string | null>(null);
  const effectiveModelRef = useRef<SkinCrafterSkinModel>('classic');
  const checkedPersistenceRef = useRef<SkinCrafterPersistenceAdapter | undefined>(persistence);
  const persistenceWasCheckedRef = useRef(!value);
  const persistenceWritesBlockedRef = useRef(persistenceInitialization.writesBlocked);
  const persistenceFailureLatchedRef = useRef(persistenceInitialization.error !== null);
  const initialPersistenceErrorReportedRef = useRef(false);
  const pendingControlledWardrobeColorActivationRef = useRef<{
    category: TextureLayerCategoryId;
    itemId: string;
    slotId: string;
    color: string;
  } | null>(null);

  const importedLoadedCurrent = hasImportedRequest
    && initialModel !== null
    && loadedImportedSkin?.source === initialImage
    && loadedImportedSkin.model === initialModel;
  const importedBaselineSex = importedLoadedCurrent && loadedImportedSkin
    ? loadedImportedSkin.baselineState.appearance.sex
    : persistenceInitialization.state.appearance.sex;
  const sexWasExplicitlyActivated = activatedCategories.includes('sex');
  const controlledState = useMemo(() => {
    if (!value) return null;

    const modelOverride = initialModel !== null
      && !sexWasExplicitlyActivated
      && value.appearance.sex === importedBaselineSex
      ? initialModel
      : undefined;
    return normalizeState(value, modelOverride);
  }, [importedBaselineSex, initialModel, sexWasExplicitlyActivated, value]);
  const modelNormalizedInternalState = useMemo(() => {
    if (!importedLoadedCurrent || initialModel === null || sexWasExplicitlyActivated) {
      return internalState;
    }

    const normalized = normalizeState(internalState, initialModel);
    return areStatesEqual(internalState, normalized) ? internalState : normalized;
  }, [importedLoadedCurrent, initialModel, internalState, sexWasExplicitlyActivated]);
  const state = controlledState ?? modelNormalizedInternalState;
  const stateWardrobeColors = useMemo(
    () => normalizeWardrobeColors(state.wardrobeColors),
    [state.wardrobeColors]
  );
  const stateRef = useRef(state);
  stateRef.current = state;
  const t = useCallback((key: TranslationKey) => translate(locale, key), [locale]);
  const markCategoryActivated = useCallback((category: AppearanceCategoryId) => {
    const activationVersion = activationVersionRef.current + 1;
    activationVersionRef.current = activationVersion;
    categoryActivationVersionRef.current[category] = activationVersion;
    setActivatedCategories((current) =>
      current.includes(category) ? current : [...current, category]
    );
  }, []);

  useEffect(() => {
    if (!controlledState) return;

    setInternalState((current) => (
      areStatesEqual(current, controlledState) ? current : controlledState
    ));
  }, [controlledState]);

  useEffect(() => {
    if (value || modelNormalizedInternalState === internalState) return;
    setInternalState(modelNormalizedInternalState);
  }, [internalState, modelNormalizedInternalState, value]);

  useEffect(() => {
    if (!value || !hasImportedRequest || sexWasExplicitlyActivated) return;
    if (value.appearance.sex === importedBaselineSex) return;

    markCategoryActivated('sex');
  }, [
    hasImportedRequest,
    importedBaselineSex,
    markCategoryActivated,
    sexWasExplicitlyActivated,
    value,
  ]);

  const publishState = useCallback((next: SkinCrafterState) => {
    if (!value) setInternalState(next);
    notifyHost(onStateChange, next);
  }, [onStateChange, value]);

  const handleAppearanceChange = useCallback((category: AppearanceCategoryId, nextValue: string) => {
    if (hasImportedRequest) markCategoryActivated(category);
    const nextModel: SkinCrafterSkinModel = category === 'sex'
      ? nextValue === 'Female' ? 'slim' : 'classic'
      : effectiveModelRef.current;
    publishState({
      ...state,
      appearance: normalizeAppearance(
        { ...state.appearance, [category]: nextValue },
        nextModel
      ),
      wardrobeColors: stateWardrobeColors,
    });
  }, [hasImportedRequest, markCategoryActivated, publishState, state, stateWardrobeColors]);

  const handleWardrobeColorChange = useCallback((
    category: TextureLayerCategoryId,
    itemId: string,
    slotId: string,
    color: string
  ) => {
    if (hasImportedRequest) {
      if (value) {
        pendingControlledWardrobeColorActivationRef.current = { category, itemId, slotId, color };
      } else {
        markCategoryActivated(category);
      }
    }
    const nextColors = cloneWardrobeColors(stateWardrobeColors);
    const categoryColors = nextColors[category] ?? {};
    const itemColors = categoryColors[itemId] ?? {};
    nextColors[category] = {
      ...categoryColors,
      [itemId]: {
        ...itemColors,
        [slotId]: color,
      },
    };
    publishState({
      ...state,
      wardrobeColors: normalizeWardrobeColors(nextColors),
    });
  }, [hasImportedRequest, markCategoryActivated, publishState, state, stateWardrobeColors, value]);

  const handleLayerOrderChange = useCallback((layerOrder: TextureLayerCategoryId[]) => {
    publishState({ ...state, layerOrder: normalizeTextureLayerOrder(layerOrder) });
  }, [publishState, state]);

  useEffect(() => {
    const pending = pendingControlledWardrobeColorActivationRef.current;
    // Controlled state acceptance is authoritative even while an equivalent import Blob is reloading.
    if (!pending || !value) return;
    if (state.appearance[pending.category] !== pending.itemId) return;
    if (stateWardrobeColors[pending.category]?.[pending.itemId]?.[pending.slotId] !== pending.color) {
      return;
    }

    pendingControlledWardrobeColorActivationRef.current = null;
    markCategoryActivated(pending.category);
  }, [
    importedLoadedCurrent,
    markCategoryActivated,
    state.appearance,
    stateWardrobeColors,
    value,
  ]);

  useEffect(() => {
    pendingControlledWardrobeColorActivationRef.current = null;
  }, [initialImage, initialModel]);

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
    if (initialPersistenceErrorReportedRef.current || !persistenceInitialization.error) return;

    initialPersistenceErrorReportedRef.current = true;
    notifyHost(onErrorRef.current, persistenceInitialization.error);
  }, [persistenceInitialization.error]);

  useEffect(() => {
    if (!initialImage) {
      loadedImportedSkinRef.current = null;
      equivalentImportPendingRef.current = false;
      setLoadedImportedSkin(null);
      activationVersionRef.current = 0;
      categoryActivationVersionRef.current = {};
      setActivatedCategories([]);
      setImportLoadState({ source: null, model: null, status: 'idle', error: null });
      return undefined;
    }

    if (!initialModel) {
      equivalentImportPendingRef.current = false;
      const error = initialSkinErrorFrom(
        new InvalidInitialSkinError('Initial skin model must be either classic or slim.')
      );
      setImportLoadState({ source: initialImage, model: null, status: 'error', error });
      notifyHost(onStatusChangeRef.current, 'error');
      notifyHost(onErrorRef.current, error);
      return undefined;
    }

    let current = true;
    const requestBaseline = cloneState(stateRef.current);
    const activationVersionAtRequest = activationVersionRef.current;
    setImportLoadState({ source: initialImage, model: initialModel, status: 'loading', error: null });
    notifyHost(onStatusChangeRef.current, 'generating');

    void loadImportedSkin(initialImage, initialModel)
      .then((loaded) => {
        if (!current) return;

        const previous = loadedImportedSkinRef.current;
        const semanticallyUnchanged = previous !== null
          && previous.fingerprint === loaded.fingerprint
          && previous.model === loaded.model;
        const next: ImportedSkinRuntime = semanticallyUnchanged
          ? { ...previous, source: initialImage }
          : {
              source: initialImage,
              dataUrl: loaded.dataUrl,
              fingerprint: loaded.fingerprint,
              model: loaded.model,
              baselineState: normalizeState(requestBaseline, loaded.model),
            };

        equivalentImportPendingRef.current = semanticallyUnchanged;
        loadedImportedSkinRef.current = next;
        setLoadedImportedSkin(next);
        if (!semanticallyUnchanged) {
          const activatedDuringRequest = Object.entries(categoryActivationVersionRef.current)
            .filter(([, version]) => (version ?? 0) > activationVersionAtRequest)
            .map(([category]) => category as AppearanceCategoryId);
          setActivatedCategories(activatedDuringRequest);
        }
        setImportLoadState({ source: initialImage, model: initialModel, status: 'ready', error: null });

        if (semanticallyUnchanged) {
          notifyHost(onStatusChangeRef.current, 'ready');
        }
      })
      .catch((cause: unknown) => {
        if (!current) return;
        equivalentImportPendingRef.current = false;
        const error = initialSkinErrorFrom(cause);
        setImportLoadState({ source: initialImage, model: initialModel, status: 'error', error });
        notifyHost(onStatusChangeRef.current, 'error');
        notifyHost(onErrorRef.current, error);
      });

    return () => {
      current = false;
    };
  }, [initialImage, initialModel]);

  useEffect(() => {
    if (value || persistenceFailureLatchedRef.current) return;

    if (!persistenceWasCheckedRef.current || checkedPersistenceRef.current !== persistence) {
      const nextPersistenceInitialization = initializePersistence(persistence);
      checkedPersistenceRef.current = persistence;
      persistenceWasCheckedRef.current = true;
      persistenceWritesBlockedRef.current = nextPersistenceInitialization.writesBlocked;
      if (nextPersistenceInitialization.error) {
        persistenceFailureLatchedRef.current = true;
        notifyHost(onErrorRef.current, nextPersistenceInitialization.error);
        return;
      }
    }

    if (persistenceWritesBlockedRef.current || !persistence) return;

    try {
      persistence.save(serializeSkinCrafterState(state));
    } catch (cause) {
      persistenceWritesBlockedRef.current = true;
      persistenceFailureLatchedRef.current = true;
      notifyHost(onErrorRef.current, persistenceErrorFrom('save', cause));
    }
  }, [persistence, state, value]);

  const effectiveActiveCategories = useMemo(() => {
    if (!importedLoadedCurrent || !loadedImportedSkin) return [];

    const active = new Set<AppearanceCategoryId>(activatedCategories);
    for (const category of appearanceCategories) {
      if (state.appearance[category.id] !== loadedImportedSkin.baselineState.appearance[category.id]) {
        active.add(category.id);
      }
    }

    const baselineColors = normalizeWardrobeColors(loadedImportedSkin.baselineState.wardrobeColors);
    for (const category of textureLayerCategories) {
      const selectedItem = state.appearance[category];
      if (selectedItem !== loadedImportedSkin.baselineState.appearance[category]) continue;
      const current = stateWardrobeColors[category]?.[selectedItem] ?? {};
      const baseline = baselineColors[category]?.[selectedItem] ?? {};
      if (JSON.stringify(current) !== JSON.stringify(baseline)) {
        active.add(category);
      }
    }

    return appearanceCategories
      .map((category) => category.id)
      .filter((category) => active.has(category));
  }, [
    activatedCategories,
    importedLoadedCurrent,
    loadedImportedSkin,
    state.appearance,
    stateWardrobeColors,
  ]);

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
  const wardrobeColorsKey = JSON.stringify(stateWardrobeColors);
  const activeCategoriesKey = JSON.stringify(effectiveActiveCategories);
  const canonicalAssetBaseUrl = assetBaseUrl?.replace(/\/+$/, '') || undefined;
  const sexWasEdited = effectiveActiveCategories.includes('sex');
  const compositionSex = importedLoadedCurrent && loadedImportedSkin && !sexWasEdited
    ? loadedImportedSkin.model === 'slim' ? 'Female' : 'Male'
    : sex;
  const effectiveModel: SkinCrafterSkinModel = importedLoadedCurrent
    && loadedImportedSkin
    && !sexWasEdited
    ? loadedImportedSkin.model
    : sex === 'Female' ? 'slim' : 'classic';
  effectiveModelRef.current = effectiveModel;
  const importedFingerprint = importedLoadedCurrent ? loadedImportedSkin?.fingerprint ?? null : null;
  const importedDataUrl = importedLoadedCurrent ? loadedImportedSkin?.dataUrl ?? null : null;
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
    wardrobeColorsKey,
    canonicalAssetBaseUrl ?? null,
    importedFingerprint,
    effectiveModel,
    activeCategoriesKey,
  ]);
  const currentGeneratedSkin = generatedSkin?.key === generationKey ? generatedSkin : null;
  const importLoadIsCurrent = hasImportedRequest
    && importLoadState.source === initialImage
    && importLoadState.model === initialModel;
  const importIsPending = hasImportedRequest
    && (!importLoadIsCurrent || importLoadState.status === 'loading');
  const importHasError = importLoadIsCurrent && importLoadState.status === 'error';
  const generationStatus: SkinCrafterGenerationStatus = importIsPending
    ? 'generating'
    : importHasError
      ? 'error'
      : generationState.key === generationKey
        ? generationState.status
        : 'idle';
  const generationError = importHasError
    ? importLoadState.error
    : generationState.key === generationKey
      ? generationState.error
      : null;

  useEffect(() => {
    if (hasImportedRequest && !importedLoadedCurrent) return undefined;

    if (equivalentImportPendingRef.current) {
      const currentImportAlreadyGenerated = lastGeneratedKeyRef.current === generationKey;
      equivalentImportPendingRef.current = false;
      if (currentImportAlreadyGenerated) return undefined;
    }

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
    const compositionAppearanceSnapshot: AppearanceState = {
      ...appearanceSnapshot,
      sex: compositionSex,
    };
    const layerOrderSnapshot = JSON.parse(layerOrderKey) as TextureLayerCategoryId[];
    const wardrobeColorSnapshot = JSON.parse(wardrobeColorsKey) as WardrobeColorState;
    const activeCategorySnapshot = JSON.parse(activeCategoriesKey) as AppearanceCategoryId[];

    setGenerationState({ key: generationKey, status: 'generating', error: null });
    notifyHost(onStatusChangeRef.current, 'generating');

    const generate = async (): Promise<void> => {
      let result: { dataUrl: string; output: SkinCrafterSkinOutput };

      try {
        let dataUrl: string;
        if (importedDataUrl) {
          const textureInputs = buildTextureInputsForCategories(
            compositionAppearanceSnapshot,
            layerOrderSnapshot,
            activeCategorySnapshot,
            canonicalAssetBaseUrl,
            effectiveModel,
            wardrobeColorSnapshot
          );
          dataUrl = textureInputs.filter(Boolean).length === 0
            ? importedDataUrl
            : await combineTextures([importedDataUrl, ...textureInputs]);
        } else {
          const textureInputs = buildTextureInputs(
            appearanceSnapshot,
            layerOrderSnapshot,
            canonicalAssetBaseUrl,
            effectiveModel,
            wardrobeColorSnapshot
          );
          dataUrl = await combineTextures(textureInputs);
        }
        result = {
          dataUrl,
          output: createSkinOutput(
            dataUrl,
            appearanceSnapshot,
            layerOrderSnapshot,
            effectiveModel,
            wardrobeColorSnapshot
          ),
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

      lastGeneratedKeyRef.current = generationKey;
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
    activeCategoriesKey,
    canonicalAssetBaseUrl,
    compositionSex,
    effectiveModel,
    eyes,
    eyesColor,
    generationKey,
    hair,
    hairColor,
    hasImportedRequest,
    hat,
    importedDataUrl,
    importedLoadedCurrent,
    layerOrderKey,
    pants,
    race,
    sex,
    shirt,
    shoes,
    skinColor,
    wardrobeColorsKey,
  ]);

  const previewSkin = currentGeneratedSkin ?? generatedSkin;
  const skinOutput = currentGeneratedSkin?.output ?? null;
  const combinedTexture = previewSkin?.texture ?? null;
  const previewModel = previewSkin?.output.metadata.model ?? effectiveModel;
  const canSave = generationStatus === 'ready' && skinOutput !== null;
  const handleSave = onSave && canSave && skinOutput
    ? () => notifyHost(onSave, skinOutput)
    : undefined;
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
            model={previewModel}
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
            wardrobeColors={stateWardrobeColors}
            onAppearanceChange={handleAppearanceChange}
            onWardrobeColorChange={handleWardrobeColorChange}
            onLayerOrderChange={handleLayerOrderChange}
            t={t}
            assetBaseUrl={assetBaseUrl}
            skinModel={effectiveModel}
          />
        }
      />
    </div>
  );
}
