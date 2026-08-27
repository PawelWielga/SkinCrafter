import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  defaultLanguage,
  languages,
  translate,
  type Language,
  type TranslationKey,
} from '@dihor/skincrafter-editor';
import brazilFlag from '../assets/flags/br.svg';
import unitedKingdomFlag from '../assets/flags/gb.svg';
import polandFlag from '../assets/flags/pl.svg';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
  t?: (key: TranslationKey) => string;
}

interface LanguageOption {
  flagSrc: string;
  label: string;
}

const fallbackT = (key: TranslationKey): string => translate(defaultLanguage, key);
const defaultLogoSrc = `${import.meta.env.BASE_URL}logo.png`;
const languageOptions: Record<Language, LanguageOption> = {
  en: { flagSrc: unitedKingdomFlag, label: 'English' },
  pl: { flagSrc: polandFlag, label: 'Polski' },
  'pt-BR': { flagSrc: brazilFlag, label: 'Português' },
};

export const getLanguageOption = (language: Language): LanguageOption => languageOptions[language];

export const getEnvironmentBadge = (baseUrl: string): string | null =>
  baseUrl === '/dev/' ? 'DEV' : null;

const environmentBadge = getEnvironmentBadge(import.meta.env.BASE_URL);

const LanguageFlag: React.FC<{ src: string }> = ({ src }) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    className="h-[14px] w-6 shrink-0 object-contain"
  />
);

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
                className="pixel-button pixel-border flex h-9 min-w-16 cursor-pointer list-none items-center justify-center gap-2 bg-green-700 px-3 py-1 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-800 [&::-webkit-details-marker]:hidden"
                aria-label={`${t('nav.language')}: ${selectedLanguage.label}`}
              >
                <LanguageFlag src={selectedLanguage.flagSrc} />
                <span className="text-xs transition-transform group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div
                className="pixel-border absolute right-0 z-50 mt-2 min-w-44 bg-green-800 p-1 text-white shadow-md"
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
                      className={`pixel-button pixel-border mb-1 flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors last:mb-0 ${
                        isSelected
                          ? 'bg-green-700 text-white hover:bg-green-600 focus:bg-green-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-inset`}
                      role="menuitemradio"
                      aria-checked={isSelected}
                      onClick={() => handleLanguageChange(item)}
                    >
                      <LanguageFlag src={option.flagSrc} />
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
