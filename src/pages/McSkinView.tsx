import React, { useState, useCallback, FormEvent, ChangeEvent } from 'react';
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
    <div className="max-w-3xl mx-auto p-4">
      <NBar />
      <div className="flex flex-col items-center gap-4">
        <form
          onSubmit={handleSubmit}
          className="mb-4 flex flex-col sm:flex-row gap-2 w-full justify-center"
        >
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Minecraft username"
            aria-label="Minecraft username"
            className="flex-grow border rounded px-2 py-1"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Loading…' : 'Load Skin'}
          </button>
        </form>

        {error && <div className="text-red-600">{error}</div>}

        <PreviewArea texture={texture} />
      </div>
    </div>
  );
};

export default McSkinView;
