import React, { useState, useCallback, FormEvent, ChangeEvent } from 'react';
import '../styles/main.scss';
import fetchSkin from '../api/fetchSkin';
import NBar from '../components/nbar';
import PreviewArea from '../components/previewArea';

const McSkinView: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [texture, setTexture] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUsernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!username.trim()) {
        setError('Please enter a username.');
        return;
      }

      setError(null);
      setLoading(true);

      try {
        const url = await fetchSkin(username.trim());
        setTexture(url);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
        setTexture(null);
      } finally {
        setLoading(false);
      }
    },
    [username]
  );

  return (
    <div className="container">
      <NBar />
      <div className="main-content">
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Minecraft username"
            aria-label="Minecraft username"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading…' : 'Load Skin'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        <PreviewArea texture={texture} />
      </div>
    </div>
  );
};

export default McSkinView;
