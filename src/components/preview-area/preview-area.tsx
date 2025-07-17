import ThreePreview from '../three/three-preview';
import './preview-area.css';
import { useState } from 'react';

function PreviewArea({ texture }) {
  const [pose, setPose] = useState('default');
  const [showOverlay, setShowOverlay] = useState(true);

  const cyclePose = () => {
    setPose((p) => (p === 'default' ? 'tpose' : p === 'tpose' ? 'walking' : 'default'));
  };

  return (
    <div className="preview-area">
      <div className="character-preview">
        <ThreePreview texture={texture} pose={pose} showOverlay={showOverlay} />
      </div>
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={cyclePose}>
          Change Pose
        </button>
        <button className="btn btn-secondary" onClick={() => setShowOverlay((v) => !v)}>
          {showOverlay ? 'Hide' : 'Show'} Overlay
        </button>
        <button className="btn btn-primary">Download Skin</button>
      </div>
    </div>
  );
}

export default PreviewArea;
