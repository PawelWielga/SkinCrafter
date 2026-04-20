import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  defaultLanguage,
  isLanguage,
  translate,
  type Language,
  type TranslationKey,
} from '../i18n/translations';
import MyFooter from './myFooter';
import NBar from './nbar';

const LANGUAGE_STORAGE_KEY = 'skincrafterLanguage';

interface AppShellContext {
  footerHeight: number;
  language: Language;
  t: (key: TranslationKey) => string;
}

interface AppShellProps {
  children: (context: AppShellContext) => React.ReactNode;
}

const readStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(stored) ? stored : defaultLanguage;
};

export default function AppShell({ children }: AppShellProps): JSX.Element {
  const [language, setLanguage] = useState<Language>(() => readStoredLanguage());
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  const t = useCallback(
    (key: TranslationKey) => translate(language, key),
    [language]
  );

  const handleLanguageChange = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    const measure = () => {
      setFooterHeight(footerRef.current?.offsetHeight ?? 0);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <div className="max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col">
      <div className="shrink-0">
        <NBar
          language={language}
          onLanguageChange={handleLanguageChange}
          t={t}
        />
      </div>

      {children({ footerHeight, language, t })}

      <div className="shrink-0">
        <MyFooter ref={footerRef} />
      </div>
    </div>
  );
}
