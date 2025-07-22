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
    <div className="max-w-full min-h-dvh md:h-screen overflow-x-visible overflow-y-auto flex flex-col">
      <NBar />

      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 w-full md:w-1/2">
          <PreviewArea texture={combinedTexture} footerHeight={footerHeight} />
        </div>
        <div className="flex-1 w-full md:w-1/2">
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
      </div>

      <MyFooter ref={footerRef} />
    </div>
  );
};

export default App;
