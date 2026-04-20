import React, { useEffect, useRef, useState } from 'react';
import PanelSection from './panelSection';
import PixelButton from './pixelButton';
import ThreePreview from './three/three-preview';
import type { Pose } from './three/pose-utils';
import { defaultLanguage, translate, type TranslationKey } from '../i18n/translations';

interface PreviewAreaProps {
  texture: string | null;
  footerHeight?: number;
  t?: (key: TranslationKey) => string;
}

const fallbackT = (key: TranslationKey): string => translate(defaultLanguage, key);

export default function PreviewArea({
  texture,
  footerHeight = 0,
  t = fallbackT,
}: PreviewAreaProps): React.JSX.Element {
  const [pose, setPose] = useState<Pose>('default');
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const cyclePose = (): void => {
    setPose((p) => (p === 'default' ? 'tpose' : p === 'tpose' ? 'walking' : 'default'));
  };

  const toggleOverlay = (): void => {
    setShowOverlay((v) => !v);
  };

  const downloadSkin = (): void => {
    if (!texture) return;
    const link = document.createElement('a');
    link.href = texture;
    link.download = 'skincrafter-skin.png';
    link.click();
  };

  useEffect(() => {
    const measure = () => {
      const buttons = buttonsRef.current?.offsetHeight ?? 0;
      setOffset(buttons + footerHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [footerHeight]);

  return (
    <PanelSection title={t('panel.preview')} icon="fa-eye">
      <div className="bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full">
        <div className="flex justify-center items-center model-placeholder md:h-full">
          <ThreePreview
            texture={texture}
            pose={pose}
            showOverlay={showOverlay}
            bottomOffset={offset}
          />
        </div>
      </div>

      <div ref={buttonsRef} className="mt-4 preview-actions">
        <PixelButton
          className="bg-gray-200 hover:bg-gray-300"
          icon="fa-arrows-rotate"
          aria-label={t('action.changePose')}
          onClick={cyclePose}
        >
          {t('action.changePose')}
        </PixelButton>
        <PixelButton
          className="bg-gray-200 hover:bg-gray-300"
          icon="fa-layer-group"
          aria-label={showOverlay ? t('action.hideOverlay') : t('action.showOverlay')}
          onClick={toggleOverlay}
        >
          {showOverlay ? t('action.hideOverlay') : t('action.showOverlay')}
        </PixelButton>
        <PixelButton
          className="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          icon="fa-download"
          aria-label={t('action.downloadSkin')}
          onClick={downloadSkin}
          disabled={!texture}
        >
          {t('action.download')}
        </PixelButton>
      </div>
    </PanelSection>
  );
}
