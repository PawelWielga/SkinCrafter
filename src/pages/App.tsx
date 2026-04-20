import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppShell from '../components/appShell';
import PreviewArea from '../components/previewArea';
import TwoPanelLayout from '../components/twoPanelLayout';
import Wardrobe from '../components/wardrobe';
import McSkinView from './McSkinView';
import {
  buildTextureInputs,
  defaultAppearance,
  normalizeAppearance,
  type AppearanceCategoryId,
  type AppearanceState,
} from '../data/appearance';
import combineTextures from '../utils/combineTextures';

const APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';

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

const WardrobeEditor: React.FC = () => {
  const [appearance, setAppearance] = useState<AppearanceState>(() => readStoredAppearance());
  const [combinedTexture, setCombinedTexture] = useState<string | null>(null);

  const handleAppearanceChange = useCallback(
    (category: AppearanceCategoryId, value: string) => {
      setAppearance((current) => {
        const next = normalizeAppearance({ ...current, [category]: value });
        return next;
      });
    },
    []
  );

  useEffect(() => {
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
  }, [appearance]);

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
    <AppShell>
      {({ footerHeight, t }) => (
        <TwoPanelLayout
          left={
            <PreviewArea
              texture={combinedTexture}
              model={appearance.sex === 'Female' ? 'slim' : 'classic'}
              footerHeight={footerHeight}
              t={t}
            />
          }
          right={
            <Wardrobe
              appearance={appearance}
              onAppearanceChange={handleAppearanceChange}
              t={t}
            />
          }
        />
      )}
    </AppShell>
  );
};

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<WardrobeEditor />} />
    <Route path="/mcskinview" element={<McSkinView />} />
  </Routes>
);

export default App;
