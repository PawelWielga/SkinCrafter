import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';

import races, { Race } from '../data/races';
import NBar from '../components/nbar';
import PreviewArea from '../components/previewArea';
import Wardrobe from '../components/wardrobe';
import type { LayerOrder } from '../data/layerOrder';
import defaultLayerOrder from '../data/layerOrder';

import skinColorMap from '../data/skinColorMap';
import raceTextureMap from '../data/raceTextureMap';
import hatTextureMap, { Hat, hats } from '../data/hatTextureMap';
import combineTextures from '../utils/combineTextures';
import MyFooter from '../components/myFooter';

const App: React.FC = () => {
  const [race, setRace] = useState<Race>('Human');
  const [skinColor, setSkinColor] = useState<string>(skinColorMap.Human[0]);
  const [hat, setHat] = useState<Hat>('None');
  const layerOrder: LayerOrder = defaultLayerOrder;
  const [combinedTexture, setCombinedTexture] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const storedRace = localStorage.getItem('wardrobeRace');
    let raceToSet: Race = 'Human';
    if (storedRace && races.includes(storedRace as Race)) {
      raceToSet = storedRace as Race;
      setRace(raceToSet);
    }

    const storedColor = localStorage.getItem('wardrobeSkinColor');
    if (storedColor && skinColorMap[raceToSet].includes(storedColor)) {
      setSkinColor(storedColor);
    } else {
      setSkinColor(skinColorMap[raceToSet][0]);
    }

    const storedHat = localStorage.getItem('wardrobeHat');
    if (storedHat && hats.includes(storedHat as Hat)) {
      setHat(storedHat as Hat);
    }
  }, []);

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
    localStorage.setItem('wardrobeRace', race);
  }, [race]);

  useEffect(() => {
    localStorage.setItem('wardrobeSkinColor', skinColor);
  }, [skinColor]);

  useEffect(() => {
    localStorage.setItem('wardrobeHat', hat);
  }, [hat]);

  useEffect(() => {
    const measure = () => {
      setFooterHeight(footerRef.current?.offsetHeight ?? 0);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
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

  return (
    <div className="flex flex-col md:min-h-screen">
      <NBar />

      {/* Zmieniono main na flex-grow flex, aby rozciągał się i był kontenerem flex dla swoich dzieci */}
      <main className="flex-grow flex">
        {/* Dodano h-full do kontenera siatki, aby wypełniał dostępną wysokość main */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
          {/* WAŻNE: Upewnij się, że komponent PreviewArea (i jego główny element) ma klasę h-full,
              aby mógł wypełnić dostępną wysokość. Jeśli PreviewArea.tsx nie przyjmuje propa className,
              będziesz musiał dodać h-full bezpośrednio w pliku PreviewArea.tsx do jego głównego elementu. */}
          <div className="h-full">
            <PreviewArea texture={combinedTexture} />
          </div>

          <Wardrobe
            skinColors={skinColors}
            selectedSkinColor={skinColor}
            selectedRace={race}
            selectedHat={hat}
            onRaceChange={handleRaceChange}
            onSkinColorChange={handleSkinColorChange}
            onHatChange={handleHatChange}
          />
        </div>
      </main>

      <MyFooter />
    </div>
  );
};

export default App;
