import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import './App.css';

import { Race } from '../data/races';
import NBar from '../components/nbar/NBar';
import PreviewArea from '../components/preview-area/PreviewArea';
import WardrobeRace from '../components/wardrobe-sections/WardrobeRace';
import WardrobeSkinColor from '../components/wardrobe-sections/WardrobeSkinColor';
import WardrobeEyes from '../components/wardrobe-sections/WardrobeEyes';
import WardrobeEyesColor from '../components/wardrobe-sections/WardrobeEyesColor';
import WardrobeHat from '../components/wardrobe-sections/WardrobeHat';
import type { LayerOrder } from '../data/layerOrder';
import defaultLayerOrder from '../data/layerOrder';

import skinColorMap from '../data/skinColorMap';
import raceTextureMap from '../data/raceTextureMap';
import hatTextureMap, { Hat } from '../data/hatTextureMap';
import combineTextures from '../utils/combineTextures';

const App: React.FC = () => {
  const [race, setRace] = useState<Race>('Human');
  const [skinColor, setSkinColor] = useState<string>(skinColorMap.Human[0]);
  const [hat, setHat] = useState<Hat>('None');
  const layerOrder: LayerOrder = defaultLayerOrder;
  const [combinedTexture, setCombinedTexture] = useState<string | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);

  const skinColors = useMemo(() => skinColorMap[race], [race]);

  const handleRaceChange = useCallback((newRace: Race) => {
    setRace(newRace);
    setSkinColor(skinColorMap[newRace][0]);
  }, []);

  const handleSkinColorChange = useCallback((color: string) => {
    setSkinColor(color);
  }, []);

  const handleHatChange = useCallback((newHat: Hat) => {
    setHat(newHat);
  }, []);

  useEffect(() => {
    const textures: (string | null)[] = [];
    layerOrder.forEach((layer) => {
      if (layer === 'race') {
        textures.push(raceTextureMap[race]);
      } else if (layer === 'hat') {
        textures.push(hatTextureMap[hat]);
      }
    });

    combineTextures(textures).then((tex) => setCombinedTexture(tex));
  }, [race, hat]);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = 6 + Math.random() * 4 + 's';
      container.appendChild(particle);
    }
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="container">
      <div className="particles" ref={particlesRef} />
      <NBar />

      <div className="main-content">
        <PreviewArea texture={combinedTexture} />

        <div className="wardrobe-container">
          <WardrobeRace onChange={handleRaceChange} />

          <WardrobeSkinColor
            colors={skinColors}
            selectedColor={skinColor}
            onChange={handleSkinColorChange}
          />

          <WardrobeHat onChange={handleHatChange} />

          <WardrobeEyes />

          <WardrobeEyesColor />

          {/* TODO: hair, hairColor, top, topCoat, bottom, boots, etc. */}
        </div>
      </div>
    </div>
  );
};

export default App;
