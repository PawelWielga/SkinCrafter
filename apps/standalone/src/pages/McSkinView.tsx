import React, { useCallback, useState, type ChangeEvent, type FormEvent } from 'react';
import { SkinPreview } from '@dihor/skincrafter-editor';
import fetchSkin, {
  FetchSkinError,
  type FetchSkinErrorCode,
  type FetchedSkin,
} from '../api/fetchSkin';
import AppShell from '../components/appShell';
import type { StandaloneTranslationKey } from '../i18n/translations';

const fetchSkinErrorTranslationKeys: Record<FetchSkinErrorCode, StandaloneTranslationKey> = {
  player_not_found: 'skinView.error.playerNotFound',
  skin_texture_missing: 'skinView.error.skinTextureMissing',
  rate_limited: 'skinView.error.rateLimited',
  service_unavailable: 'skinView.error.serviceUnavailable',
  network_error: 'skinView.error.network',
  invalid_response: 'skinView.error.invalidResponse',
};

const UserIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    data-standalone-icon="user"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.25 3.6-7 8-7s8 2.75 8 7" />
  </svg>
);

const PlayerCardIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    data-standalone-icon="player-card"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M6.5 16c.7-1.4 1.5-2 2.5-2s1.8.6 2.5 2M14 10h4M14 14h4" />
  </svg>
);

const DownloadIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    data-standalone-icon="download"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 18H6a4 4 0 0 1-.4-7.98A6.5 6.5 0 0 1 18.2 9 4.5 4.5 0 0 1 18 18h-1" />
    <path d="M12 11v8m0 0-3-3m3 3 3-3" />
  </svg>
);

const McSkinView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [skin, setSkin] = useState<FetchedSkin | null>(null);
  const [errorKey, setErrorKey] = useState<StandaloneTranslationKey | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }, []);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim()) {
      setErrorKey('skinView.error.usernameRequired');
      return;
    }

    setErrorKey(null);
    setSkin(null);
    setLoading(true);

    try {
      setSkin(await fetchSkin(username.trim()));
    } catch (err: unknown) {
      setErrorKey(
        err instanceof FetchSkinError
          ? fetchSkinErrorTranslationKeys[err.code]
          : 'skinView.error.invalidResponse'
      );
      setSkin(null);
    } finally {
      setLoading(false);
    }
  }, [username]);

  return (
    <AppShell>
      {({ footerHeight, language, t }) => (
        <div className="flex-1 min-h-0 flex flex-col md:flex-row">
          <div className="flex-1 min-h-0 w-full md:w-1/2">
            <SkinPreview
              texture={skin?.texture ?? null}
              model={skin?.model ?? 'classic'}
              locale={language}
              bottomOffset={footerHeight}
            />
          </div>
          <div className="flex-1 min-h-0 w-full md:w-1/2">
            <section className="mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-700 flex items-center">
                <UserIcon className="mr-2 h-5 w-5 shrink-0 text-green-700" />
                {t('panel.loadSkin')}
              </h2>
              <div className="space-y-4 md:flex-1 md:min-h-0 overflow-y-auto pr-2">
                <div className="option-card bg-white shadow p-4 pixel-border relative pt-5">
                  <h3 className="font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10">
                    <PlayerCardIcon className="mr-2 h-4 w-4 shrink-0 text-amber-600" />
                    {t('skinView.player')}
                  </h3>
                  <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      placeholder={t('skinView.username')}
                      aria-label={t('skinView.username')}
                      className="w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="pixel-button p-2 pixel-border bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    >
                      <DownloadIcon className="mr-2 inline-block h-4 w-4 align-middle" />
                      {loading ? t('action.loading') : t('action.loadSkin')}
                    </button>
                  </form>
                </div>
                {errorKey && (
                  <div
                    role="alert"
                    className="option-card bg-red-50 text-red-700 shadow p-4 pixel-border"
                  >
                    {t(errorKey)}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </AppShell>
  );
};

export default McSkinView;
