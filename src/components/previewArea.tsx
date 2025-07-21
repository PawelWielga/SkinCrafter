import React, { useState } from 'react';
import ThreePreview from '../three/three-preview';
import type { Pose } from '../three/pose-utils';
import '../styles/_previewArea.scss';

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
    <div className="preview-area">
      <div className="character-preview">
        <ThreePreview texture={texture} pose={pose} showOverlay={showOverlay} />
      </div>

      <div className="action-buttons">
        <button
          type="button"
          className="btn btn-secondary"
          aria-label="Change character pose"
          onClick={cyclePose}
        >
          Change Pose
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          aria-label={showOverlay ? 'Hide overlay' : 'Show overlay'}
          onClick={toggleOverlay}
        >
          {showOverlay ? 'Hide' : 'Show'} Overlay
        </button>

        <button
          type="button"
          className="btn btn-primary"
          aria-label="Download character skin"
          onClick={downloadSkin}
        >
          Download Skin
        </button>
      </div>
    </div>
  );
}
