import React, { useState, useCallback, FormEvent, ChangeEvent } from 'react';
import fetchSkin from '../api/fetchSkin';
import AppShell from '../components/appShell';
import OptionCard from '../components/optionCard';
import PanelSection from '../components/panelSection';
import PixelButton from '../components/pixelButton';
import PreviewArea from '../components/previewArea';
import TwoPanelLayout from '../components/twoPanelLayout';

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
    <AppShell>
      {({ footerHeight, t }) => (
        <TwoPanelLayout
          left={
            <PreviewArea texture={texture} footerHeight={footerHeight} t={t} />
          }
          right={
            <PanelSection title={t('panel.loadSkin')} icon="fa-user">
              <div className="space-y-4 options-container md:flex-1 md:min-h-0">
                <OptionCard heading={t('skinView.player')} icon="fa-id-card">
                  <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      placeholder={t('skinView.username')}
                      aria-label={t('skinView.username')}
                      className="w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"
                    />
                    <PixelButton
                      type="submit"
                      disabled={loading}
                      icon="fa-cloud-arrow-down"
                      className="bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    >
                      {loading ? t('action.loading') : t('action.loadSkin')}
                    </PixelButton>
                  </form>
                </OptionCard>

                {error && (
                  <OptionCard className="bg-red-50 text-red-700">
                    {error}
                  </OptionCard>
                )}
              </div>
            </PanelSection>
          }
        />
      )}
    </AppShell>
  );
};

export default McSkinView;
