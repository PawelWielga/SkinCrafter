import './App.css';
import { useState } from 'react';
import fetchSkin from './api/fetchSkin';
import NBar from './components/nbar/nbar';
import PreviewArea from './components/preview-area/preview-area';

function McSkinView() {
  const [username, setUsername] = useState('');
  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="container">
      <NBar />
      <div className="main-content">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            try {
              const url = await fetchSkin(username);
              setTexture(url);
            } catch (err) {
              setError(err.message);
              setTexture(null);
            }
          }}
          style={{ marginBottom: '1rem' }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Minecraft username"
          />
          <button type="submit">Load Skin</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <PreviewArea texture={texture} />
      </div>
    </div>
  );
}

export default McSkinView;
