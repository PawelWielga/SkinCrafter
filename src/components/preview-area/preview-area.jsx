import ThreePreview from '../three/three-preview';
import './preview-area.css';

function PreviewArea({ texture }) {
  return (
    <div className="preview-area">
      <div className="character-preview">
        <ThreePreview texture={texture} />
      </div>
      <div className="action-buttons">
        <button className="btn btn-primary">Download Skin</button>
      </div>
    </div>
  );
}

export default PreviewArea;
