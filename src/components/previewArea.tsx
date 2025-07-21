import React, { useState } from 'react';
import ThreePreview from './three/three-preview';
import type { Pose } from './three/pose-utils';

interface PreviewAreaProps {
  texture: string | null;
}

export default function PreviewArea({ texture }: PreviewAreaProps): React.JSX.Element {
  const [pose, setPose] = useState<Pose>('default');
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

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
    link.download = 'skin.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full">
        <ThreePreview texture={texture} pose={pose} showOverlay={showOverlay} />
      </div>

      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        <button
          type="button"
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
          aria-label="Change character pose"
          onClick={cyclePose}
        >
          Change Pose
        </button>

        <button
          type="button"
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
          aria-label={showOverlay ? 'Hide overlay' : 'Show overlay'}
          onClick={toggleOverlay}
        >
          {showOverlay ? 'Hide' : 'Show'} Overlay
        </button>

        <button
          type="button"
          className="px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          aria-label="Download character skin"
          onClick={downloadSkin}
        >
          Download Skin
        </button>
      </div>
    </div>
  );
}
