import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  defaultLanguage,
  languages,
  translate,
  type Language,
  type TranslationKey,
} from '@dihor/skincrafter-editor';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
  t?: (key: TranslationKey) => string;
}

const fallbackT = (key: TranslationKey): string => translate(defaultLanguage, key);
const defaultLogoSrc = `${import.meta.env.BASE_URL}logo.png`;
const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  pl: '🇵🇱',
};
const languageDisplayNames = new Intl.DisplayNames([defaultLanguage], { type: 'language' });

export const getLanguageOptionLabel = (language: Language): string => {
  const displayName = languageDisplayNames.of(language) ?? language.toUpperCase();
  return `${languageFlags[language]} ${displayName}`;
};

export const getEnvironmentBadge = (baseUrl: string): string | null =>
  baseUrl === '/dev/' ? 'DEV' : null;

const environmentBadge = getEnvironmentBadge(import.meta.env.BASE_URL);

const NBar: React.FC<NBarProps> = ({
  logoSrc = defaultLogoSrc,
  logoAlt = 'SkinCrafter logo',
  language = 'en',
  onLanguageChange,
  t = fallbackT,
}) => {
  return (
    <nav className="bg-green-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="h-8 w-36 flex items-center">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-auto max-h-8 w-full object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          {environmentBadge && (
            <span
              className="pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm"
              title={environmentBadge}
              aria-label={environmentBadge}
            >
              {environmentBadge}
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pixel-button px-3 py-1 pixel-border transition-colors ${
                isActive ? 'bg-amber-600 text-white' : 'bg-green-700 hover:bg-green-600 text-white'
              }`
            }
          >
            {t('nav.wardrobe')}
          </NavLink>
          <NavLink
            to="/mcskinview"
            className={({ isActive }) =>
              `pixel-button px-3 py-1 pixel-border transition-colors ${
                isActive ? 'bg-amber-600 text-white' : 'bg-green-700 hover:bg-green-600 text-white'
              }`
            }
          >
            {t('nav.skinView')}
          </NavLink>
          {onLanguageChange && (
            <label>
              <span className="sr-only">{t('nav.language')}</span>
              <select
                className="min-w-36 cursor-pointer bg-green-700 text-white pixel-border px-3 py-1.5 pr-8 font-medium transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-800"
                value={language}
                onChange={(event) => onLanguageChange(event.target.value as Language)}
                aria-label={t('nav.language')}
              >
                {languages.map((item) => (
                  <option key={item} value={item}>
                    {getLanguageOptionLabel(item)}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NBar;
