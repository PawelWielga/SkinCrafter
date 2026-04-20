import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NBar from '../components/nbar';
import PreviewArea from '../components/previewArea';
import Wardrobe from '../components/wardrobe';
import MyFooter from '../components/myFooter';
import McSkinView from './McSkinView';
import {
  buildTextureInputs,
  defaultAppearance,
  normalizeAppearance,
  type AppearanceCategoryId,
  type AppearanceState,
} from '../data/appearance';
import combineTextures from '../utils/combineTextures';
import {
  defaultLanguage,
  isLanguage,
  translate,
  type Language,
  type TranslationKey,
} from '../i18n/translations';

const APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LANGUAGE_STORAGE_KEY = 'skincrafterLanguage';

const readStoredAppearance = (): AppearanceState => {
  const stored = localStorage.getItem(APPEARANCE_STORAGE_KEY);
  if (stored) {
    try {
      return normalizeAppearance(JSON.parse(stored) as Partial<AppearanceState>);
    } catch {
      return normalizeAppearance(null);
    }
  }

  return normalizeAppearance({
    race: localStorage.getItem('wardrobeRace') ?? defaultAppearance.race,
    skinColor: localStorage.getItem('wardrobeSkinColor') ?? defaultAppearance.skinColor,
    hat: localStorage.getItem('wardrobeHat') ?? defaultAppearance.hat,
  });
};

const readStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(stored) ? stored : defaultLanguage;
};

const WardrobeEditor: React.FC = () => {
  const [appearance, setAppearance] = useState<AppearanceState>(() => readStoredAppearance());
  const [language, setLanguage] = useState<Language>(() => readStoredLanguage());
  const [combinedTexture, setCombinedTexture] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  const t = useCallback(
    (key: TranslationKey) => translate(language, key),
    [language]
  );

  const handleAppearanceChange = useCallback(
    (category: AppearanceCategoryId, value: string) => {
      setAppearance((current) => {
        const next = normalizeAppearance({ ...current, [category]: value });
        return next;
      });
    },
    []
  );

  const handleLanguageChange = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
  }, [appearance]);

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

  const textureInputs = useMemo(() => buildTextureInputs(appearance), [appearance]);

  useEffect(() => {
    let isCurrent = true;
    combineTextures(textureInputs).then((tex) => {
      if (isCurrent) {
        setCombinedTexture(tex);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [textureInputs]);

  return (
    <div className="max-w-full min-h-dvh md:h-screen overflow-x-visible overflow-y-auto flex flex-col">
      <NBar
        language={language}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 w-full md:w-1/2">
          <PreviewArea texture={combinedTexture} footerHeight={footerHeight} t={t} />
        </div>
        <div className="flex-1 w-full md:w-1/2">
          <Wardrobe
            appearance={appearance}
            onAppearanceChange={handleAppearanceChange}
            t={t}
          />
        </div>
      </div>

      <MyFooter ref={footerRef} />
    </div>
  );
};

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<WardrobeEditor />} />
    <Route path="/mcskinview" element={<McSkinView />} />
  </Routes>
);

export default App;
