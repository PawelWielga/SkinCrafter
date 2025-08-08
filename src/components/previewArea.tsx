import React, { useState, useRef } from 'react';
import type { JSX } from 'react';
import ThreePreview from './three/three-preview';
import { useToast } from '../components/ui/toast';
import type { Pose } from './three/pose-utils';

interface PreviewAreaProps {
  texture: string | null;
  loading?: boolean;
}

export default function PreviewArea({ texture, loading = false }: PreviewAreaProps): React.JSX.Element {
  const { push } = useToast();
  const [pose, setPose] = useState<Pose>('default');
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const handleCanvasReady = (c: HTMLCanvasElement | null) => { canvasRef.current = c; };
  const downloadSkinTexture = async (): Promise<void> => {
    if (!texture) return;
    try {
      const res = await fetch(texture);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skin.png';
      a.click();
      URL.revokeObjectURL(url);
      push({ type: 'success', message: 'Texture PNG downloaded.' });
    } catch {
      push({ type: 'error', message: 'Failed to download texture.' });
    }
  };

  const downloadPreviewPng = (): void => {
    const c = canvasRef.current;
    if (!c) {
      push({ type: 'error', message: 'Preview is not ready yet.' });
      return;
    }
    const url = c.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skincrafter-preview.png';
    a.click();
  };

  const cyclePose = (): void => {
    setPose((p) => (p === 'default' ? 'tpose' : p === 'tpose' ? 'walking' : 'default'));
  };

  const toggleOverlay = (): void => {
    setShowOverlay((v) => !v);
  };

  return (
    <section className="mb-4 md:mb-0 md:flex md:flex-col md:h-full p-4">
      <h2 className="text-xl font-bold mb-2 text-gray-700 flex items-center">
        <i className="fas fa-eye mr-2 text-green-700"></i> Preview
      </h2>

      <div className="bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow h-full max-h-[70dvh] md:max-h-full">
        <div className="flex justify-center items-center model-placeholder">
          <ThreePreview texture={texture} pose={pose} showOverlay={showOverlay} onCanvasReady={handleCanvasReady} />
        </div>
      </div>

      <div ref={buttonsRef} className="mt-4 grid grid-cols-3 gap-2">
        <button type="button"
          className="pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label="Change character pose"
          onClick={cyclePose}
        >
          <i className="fas fa-arrows-rotate mr-2" />
          Change Pose
        </button>
        <button type="button"
          className="pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label={showOverlay ? 'Hide overlay' : 'Show overlay'}
          onClick={toggleOverlay}
        >
          <i className="fas fa-layer-group mr-2" />
          {showOverlay ? 'Hide' : 'Show'} Overlay
        </button>
        <button type="button"
          className="pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label="Download character skin"
          onClick={downloadPreviewPng}
        >
          <i className="fas fa-image mr-2" />
          Export Preview PNG
        </button>
        <button
          type="button"
          className="pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center"
          aria-label="Download texture PNG"
          onClick={downloadSkinTexture}
        >
          <i className="fas fa-download mr-2" />
          Download Texture PNG
        </button>
      </div>
    </section>
  );
}
