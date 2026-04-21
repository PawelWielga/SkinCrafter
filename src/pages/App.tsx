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
  normalizeTextureLayerOrder,
  type AppearanceCategoryId,
  type AppearanceState,
  type TextureLayerCategoryId,
} from '../data/appearance';
import combineTextures from '../utils/combineTextures';

const APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LAYER_ORDER_STORAGE_KEY = 'wardrobeLayerOrder';

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

const readStoredLayerOrder = (): TextureLayerCategoryId[] => {
  const stored = localStorage.getItem(LAYER_ORDER_STORAGE_KEY);
  if (!stored) {
    return normalizeTextureLayerOrder(null);
  }

  try {
    return normalizeTextureLayerOrder(JSON.parse(stored) as string[]);
  } catch {
    return normalizeTextureLayerOrder(null);
  }
};

const WardrobeEditor: React.FC = () => {
  const [appearance, setAppearance] = useState<AppearanceState>(() => readStoredAppearance());
  const [textureLayerOrder, setTextureLayerOrder] = useState<TextureLayerCategoryId[]>(() =>
    readStoredLayerOrder()
  );
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

  const handleLayerOrderChange = useCallback((nextOrder: TextureLayerCategoryId[]) => {
    setTextureLayerOrder(normalizeTextureLayerOrder(nextOrder));
  }, []);

  useEffect(() => {
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
  }, [appearance]);

  useEffect(() => {
    localStorage.setItem(LAYER_ORDER_STORAGE_KEY, JSON.stringify(textureLayerOrder));
  }, [textureLayerOrder]);

  const textureInputs = useMemo(
    () => buildTextureInputs(appearance, textureLayerOrder),
    [appearance, textureLayerOrder]
  );

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
              textureLayerOrder={textureLayerOrder}
              onAppearanceChange={handleAppearanceChange}
              onLayerOrderChange={handleLayerOrderChange}
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
