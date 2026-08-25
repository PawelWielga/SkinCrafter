import React, { useCallback, useEffect, useState } from 'react';
import PanelSection from './panelSection';
import PixelButton from './pixelButton';
import ThreePreview, { type SkinModel } from './three/three-preview';
import type { Pose } from './three/pose-utils';
import { defaultLanguage, translate, type TranslationKey } from '../i18n/translations';
import type {
  SkinCrafterError,
  SkinCrafterGenerationStatus,
} from '../publicTypes';

interface PreviewAreaProps {
  texture: string | null;
  model?: SkinModel;
  footerHeight?: number;
  t?: (key: TranslationKey) => string;
  onSave?: () => void;
  canSave?: boolean;
  generationStatus?: SkinCrafterGenerationStatus;
  generationError?: SkinCrafterError | null;
  onError?: (error: SkinCrafterError) => void;
}

const fallbackT = (key: TranslationKey): string => translate(defaultLanguage, key);

function errorTranslationKey(error: SkinCrafterError): TranslationKey {
  if (error.code === 'asset_load_failed') return 'error.assetLoad';
  if (error.code === 'invalid_initial_skin') return 'error.initialSkin';
  if (error.category === 'preview') return 'error.preview';
  return 'error.generation';
}

export default function PreviewArea({
  texture,
  model = 'classic',
  footerHeight = 0,
  t = fallbackT,
  onSave,
  canSave,
  generationStatus,
  generationError,
  onError,
}: PreviewAreaProps): React.JSX.Element {
  const [pose, setPose] = useState<Pose>('default');
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [previewError, setPreviewError] = useState<SkinCrafterError | null>(null);
  const [previewRetryRevision, setPreviewRetryRevision] = useState(0);

  const cyclePose = (): void => {
    setPose((p) => (p === 'default' ? 'tpose' : p === 'tpose' ? 'walking' : 'default'));
  };

  const toggleOverlay = (): void => {
    setShowOverlay((v) => !v);
  };

  const toggleAutoRotate = (): void => {
    setAutoRotate((v) => !v);
  };

  const saveEnabled = canSave ?? !!texture;

  const downloadSkin = (): void => {
    if (!texture || !saveEnabled) return;
    const link = document.createElement('a');
    link.href = texture;
    link.download = 'skincrafter-skin.png';
    link.click();
  };

  const handleSave = (): void => {
    if (!saveEnabled) return;
    if (onSave) {
      onSave();
      return;
    }
    downloadSkin();
  };

  const handlePreviewError = useCallback((error: SkinCrafterError): void => {
    setPreviewError(error);
    onError?.(error);
  }, [onError]);

  const retryPreview = (): void => {
    setPreviewError(null);
    setPreviewRetryRevision((revision) => revision + 1);
  };

  useEffect(() => {
    setPreviewError((current) =>
      current?.code === 'preview_texture_load_failed' ? null : current
    );
  }, [texture]);

  const activeError = generationStatus === 'error' && generationError
    ? generationError
    : previewError;
  const canRetryPreview =
    activeError === previewError && previewError?.code === 'preview_texture_load_failed';
  const previewSurfaceStyle = {
    '--skincrafter-preview-bottom-offset': `${Math.max(0, footerHeight)}px`,
  } as React.CSSProperties;

  return (
    <PanelSection title={t('panel.preview')} icon="fa-eye">
      <div
        className="skincrafter-preview-surface overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full"
        style={previewSurfaceStyle}
      >
        <div className="flex justify-center items-center model-placeholder h-full">
          <ThreePreview
            texture={texture}
            pose={pose}
            model={model}
            showOverlay={showOverlay}
            autoRotate={autoRotate}
            textureRequestRevision={previewRetryRevision}
            onError={handlePreviewError}
          />
        </div>
      </div>

      {activeError && (
        <p className="mt-3 text-sm font-semibold skincrafter-error-text" role="alert">
          {t(errorTranslationKey(activeError))}
        </p>
      )}

      {canRetryPreview && (
        <PixelButton
          className="mt-2 skincrafter-secondary-action"
          icon="fa-arrows-rotate"
          aria-label={t('action.retryPreview')}
          onClick={retryPreview}
        >
          {t('action.retryPreview')}
        </PixelButton>
      )}

      <div className="mt-4 preview-actions">
        <PixelButton
          className="skincrafter-secondary-action"
          icon="fa-arrows-rotate"
          aria-label={t('action.changePose')}
          onClick={cyclePose}
        >
          {t('action.changePose')}
        </PixelButton>
        <PixelButton
          className="skincrafter-secondary-action"
          icon="fa-layer-group"
          aria-label={showOverlay ? t('action.hideOverlay') : t('action.showOverlay')}
          onClick={toggleOverlay}
        >
          {showOverlay ? t('action.hideOverlay') : t('action.showOverlay')}
        </PixelButton>
        <PixelButton
          className="skincrafter-secondary-action"
          icon={autoRotate ? 'fa-pause' : 'fa-play'}
          aria-label={autoRotate ? t('action.disableAutoRotate') : t('action.enableAutoRotate')}
          onClick={toggleAutoRotate}
        >
          {autoRotate ? t('action.disableAutoRotate') : t('action.enableAutoRotate')}
        </PixelButton>
        <PixelButton
          className="skincrafter-secondary-action disabled:opacity-50 disabled:cursor-not-allowed"
          icon="fa-download"
          aria-label={t('action.downloadSkin')}
          onClick={handleSave}
          disabled={!saveEnabled}
        >
          {t('action.download')}
        </PixelButton>
      </div>
    </PanelSection>
  );
}
