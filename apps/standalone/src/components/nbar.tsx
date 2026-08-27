import React, { useRef } from 'react';
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

interface LanguageOption {
  flag: string;
  label: string;
}

const fallbackT = (key: TranslationKey): string => translate(defaultLanguage, key);
const defaultLogoSrc = `${import.meta.env.BASE_URL}logo.png`;
const languageOptions: Record<Language, LanguageOption> = {
  en: { flag: '🇬🇧', label: 'English' },
  pl: { flag: '🇵🇱', label: 'Polski' },
  'pt-BR': { flag: '🇧🇷', label: 'Português' },
};

export const getLanguageOption = (language: Language): LanguageOption => languageOptions[language];

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
  const languageMenuRef = useRef<HTMLDetailsElement>(null);
  const selectedLanguage = getLanguageOption(language);

  const handleLanguageChange = (nextLanguage: Language) => {
    languageMenuRef.current?.removeAttribute('open');
    onLanguageChange?.(nextLanguage);
  };

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
            <details ref={languageMenuRef} className="group relative">
              <summary
                className="flex h-9 min-w-16 cursor-pointer list-none items-center justify-center gap-2 rounded-sm border border-white/35 bg-green-700 px-2.5 text-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-800 [&::-webkit-details-marker]:hidden"
                aria-label={`${t('nav.language')}: ${selectedLanguage.label}`}
              >
                <span aria-hidden="true">{selectedLanguage.flag}</span>
                <span className="text-xs transition-transform group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div
                className="absolute right-0 z-50 mt-2 min-w-44 overflow-hidden rounded-md border border-slate-200 bg-white py-1 text-slate-900 shadow-xl"
                role="menu"
                aria-label={t('nav.language')}
              >
                {languages.map((item) => {
                  const option = getLanguageOption(item);
                  const isSelected = item === language;

                  return (
                    <button
                      key={item}
                      type="button"
                      className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none ${
                        isSelected ? 'font-semibold' : ''
                      }`}
                      role="menuitemradio"
                      aria-checked={isSelected}
                      onClick={() => handleLanguageChange(item)}
                    >
                      <span className="text-base" aria-hidden="true">
                        {option.flag}
                      </span>
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </details>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NBar;
