// src/App.tsx

import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

import { Race } from '../data/races';
import NBar from '../components/nbar/nbar';
import PreviewArea from '../components/preview-area/preview-area';
import WardrobeRace from '../components/wardrobe-sections/wardrobe-race';
import WardrobeSkinColor from '../components/wardrobe-sections/wardrobe-skincolor';
import WardrobeEyes from '../components/wardrobe-sections/wardrobe-eyes';
import WardrobeEyesColor from '../components/wardrobe-sections/WardrobeEyesColor';

import skinColorMap from '../data/skinColorMap';
import raceTextureMap from '../data/raceTextureMap';

const App: React.FC = () => {
  const [race, setRace] = useState<Race>('Human');
  const [skinColor, setSkinColor] = useState<string>(skinColorMap.Human[0]);

  // Przeliczana tylko, gdy zmieni się race
  const skinColors = useMemo(() => skinColorMap[race], [race]);

  const handleRaceChange = useCallback((newRace: Race) => {
    setRace(newRace);
    // resetuj kolor skóry do pierwszego z listy
    setSkinColor(skinColorMap[newRace][0]);
  }, []);

  const handleSkinColorChange = useCallback((color: string) => {
    setSkinColor(color);
  }, []);

  return (
    <div className="container">
      <NBar />

      <div className="main-content">
        <PreviewArea texture={raceTextureMap[race]} />

        <div className="wardrobe-container">
          <WardrobeRace onChange={handleRaceChange} />

          <WardrobeSkinColor
            colors={skinColors}
            selectedColor={skinColor}
            onChange={handleSkinColorChange}
          />

          <WardrobeEyes />

          <WardrobeEyesColor />

          {/* TODO: hair, hairColor, top, topCoat, bottom, boots, etc. */}
        </div>
      </div>
    </div>
  );
};

export default App;
