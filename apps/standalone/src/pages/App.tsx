import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  SkinCrafterEditor,
  defaultAppearance,
  normalizeAppearance,
  normalizeTextureLayerOrder,
  type SkinCrafterPersistenceAdapter,
} from '@pawelwielga/skincrafter-editor';
import AppShell from '../components/appShell';
import McSkinView from './McSkinView';

const APPEARANCE_STORAGE_KEY = 'wardrobeAppearance';
const LAYER_ORDER_STORAGE_KEY = 'wardrobeLayerOrder';

const wardrobePersistence: SkinCrafterPersistenceAdapter = {
  load: () => {
    let appearance = defaultAppearance;
    const storedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY);
    if (storedAppearance) {
      try {
        appearance = normalizeAppearance(JSON.parse(storedAppearance));
      } catch {
        appearance = defaultAppearance;
      }
    } else {
      appearance = normalizeAppearance({
        race: localStorage.getItem('wardrobeRace') ?? defaultAppearance.race,
        skinColor: localStorage.getItem('wardrobeSkinColor') ?? defaultAppearance.skinColor,
        hat: localStorage.getItem('wardrobeHat') ?? defaultAppearance.hat,
      });
    }

    let layerOrder = normalizeTextureLayerOrder(null);
    const storedLayerOrder = localStorage.getItem(LAYER_ORDER_STORAGE_KEY);
    if (storedLayerOrder) {
      try {
        layerOrder = normalizeTextureLayerOrder(JSON.parse(storedLayerOrder));
      } catch {
        layerOrder = normalizeTextureLayerOrder(null);
      }
    }

    return { appearance, layerOrder };
  },
  save: (state) => {
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(state.appearance));
    localStorage.setItem(LAYER_ORDER_STORAGE_KEY, JSON.stringify(state.layerOrder));
  },
};

const WardrobeEditor: React.FC = () => (
  <AppShell>
    {({ footerHeight, language }) => (
      <SkinCrafterEditor
        locale={language}
        persistence={wardrobePersistence}
        previewBottomOffset={footerHeight}
      />
    )}
  </AppShell>
);

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<WardrobeEditor />} />
    <Route path="/mcskinview" element={<McSkinView />} />
  </Routes>
);

export default App;
