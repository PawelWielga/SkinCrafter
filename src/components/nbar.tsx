import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  defaultLanguage,
  languages,
  translate,
  type Language,
  type TranslationKey,
} from '../i18n/translations';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
  t?: (key: TranslationKey) => string;
}

const fallbackT = (key: TranslationKey): string => translate(defaultLanguage, key);

const NBar: React.FC<NBarProps> = ({
  logoSrc = '/logo.png',
  logoAlt = 'SkinCrafter logo',
  language = 'en',
  onLanguageChange,
  t = fallbackT,
}) => {
  return (
    <nav className="bg-green-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-500 flex items-center justify-center pixel-border overflow-hidden">
            <img src={logoSrc} alt={logoAlt} className="h-full w-full object-cover" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">{t('app.title')}</h1>
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
            <label className="flex items-center gap-2 text-sm">
              <span>{t('nav.language')}</span>
              <select
                className="bg-green-700 text-white pixel-border px-2 py-1"
                value={language}
                onChange={(event) => onLanguageChange(event.target.value as Language)}
                aria-label={t('nav.language')}
              >
                {languages.map((item) => (
                  <option key={item} value={item}>
                    {item.toUpperCase()}
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
