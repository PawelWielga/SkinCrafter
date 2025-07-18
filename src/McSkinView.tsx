import './App.css';
import { useState } from 'react';
import fetchSkin from './api/fetchSkin';
import NBar from './components/nbar/nbar';
import PreviewArea from './components/preview-area/preview-area';

function McSkinView(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [texture, setTexture] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="container">
      <NBar />
      <div className="main-content">
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setError(null);
            try {
              const url = await fetchSkin(username);
              setTexture(url);
            } catch (err: unknown) {
              if (err instanceof Error) {
                setError(err.message);
              } else {
                setError('Unknown error');
              }
              setTexture(null);
            }
          }}
          style={{ marginBottom: '1rem' }}
        >
          <input
            type="text"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
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
