import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SkinCrafterEditor } from '@dihor/skincrafter-editor';
import AppShell from '../components/appShell';
import { wardrobePersistence } from '../persistence/wardrobePersistence';
import McSkinView from './McSkinView';

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
