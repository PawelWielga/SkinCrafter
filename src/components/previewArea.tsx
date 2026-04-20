import React, { useEffect, useRef, useState } from 'react';
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
    <section className="mb-4 md:mb-0 md:flex md:flex-col md:h-full p-4">
      <h2 className="text-xl font-bold mb-2 text-gray-700 flex items-center">
        <i className="fas fa-eye mr-2 text-green-700" /> {t('panel.preview')}
      </h2>

      <div className="bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow h-full max-h-[70dvh] md:max-h-full">
        <div className="flex justify-center items-center model-placeholder">
          <ThreePreview
            texture={texture}
            pose={pose}
            showOverlay={showOverlay}
            bottomOffset={offset}
          />
        </div>
      </div>

      <div ref={buttonsRef} className="mt-4 grid grid-cols-3 gap-2">
        <button
          className="pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label={t('action.changePose')}
          onClick={cyclePose}
        >
          <i className="fas fa-arrows-rotate mr-2" />
          {t('action.changePose')}
        </button>
        <button
          className="pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label={showOverlay ? t('action.hideOverlay') : t('action.showOverlay')}
          onClick={toggleOverlay}
        >
          <i className="fas fa-layer-group mr-2" />
          {showOverlay ? t('action.hideOverlay') : t('action.showOverlay')}
        </button>
        <button
          className="pixel-button bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label={t('action.downloadSkin')}
          onClick={downloadSkin}
          disabled={!texture}
        >
          <i className="fas fa-download mr-2" />
          {t('action.download')}
        </button>
      </div>
    </section>
  );
}
