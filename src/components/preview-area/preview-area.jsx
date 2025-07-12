import './preview-area.css';

function PreviewArea() {
  return (
    <div className="preview-area">
        <div className="character-preview">
            <div className="character-silhouette"></div>
        </div>
        <div className="action-buttons">
            <button className="btn btn-secondary">Randomize</button>
            <button className="btn btn-danger">Reset</button>
            <button className="btn btn-primary">Download Skin</button>
        </div>
    </div>
  );
}

export default PreviewArea;
