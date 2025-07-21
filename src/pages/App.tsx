import React, { useState, useMemo, useCallback, useEffect } from 'react';
import '../styles/main.scss';

import { Race } from '../data/races';
import NBar from '../components/nbar';
import PreviewArea from '../components/previewArea';
import Wardrobe from '../components/wardrobe';
import type { LayerOrder } from '../data/layerOrder';
import defaultLayerOrder from '../data/layerOrder';

import skinColorMap from '../data/skinColorMap';
import raceTextureMap from '../data/raceTextureMap';
import hatTextureMap, { Hat } from '../data/hatTextureMap';
import combineTextures from '../utils/combineTextures';
import MyFooter from '../components/myFooter';

const App: React.FC = () => {
  const [race, setRace] = useState<Race>('Human');
  const [skinColor, setSkinColor] = useState<string>(skinColorMap.Human[0]);
  const [hat, setHat] = useState<Hat>('None');
  const layerOrder: LayerOrder = defaultLayerOrder;
  const [combinedTexture, setCombinedTexture] = useState<string | null>(null);

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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <NBar />

      <div className="flex flex-col md:flex-row gap-8">
        <PreviewArea texture={combinedTexture} />

        <Wardrobe
          skinColors={skinColors}
          selectedSkinColor={skinColor}
          onRaceChange={handleRaceChange}
          onSkinColorChange={handleSkinColorChange}
          onHatChange={handleHatChange}
        />
      </div>

      <MyFooter />
    </div>
  );
};

export default App;
