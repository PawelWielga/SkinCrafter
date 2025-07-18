import './App.css';

import { useState } from 'react';

import NBar from './components/nbar/nbar';
import PreviewArea from './components/preview-area/preview-area';
import WardrobeRace from './components/wardrobe-sections/wardrobe-race';
import skinColorMap from './data/skinColorMap';
import raceTextureMap from './data/raceTextureMap';
import WardrobeSkinColor from './components/wardrobe-sections/wardrobe-skincolor';
import WardrobeEyes from './components/wardrobe-sections/wardrobe-eyes';
import WardrobeEyescolor from './components/wardrobe-sections/wardrobe-eyescolor';

function App(): JSX.Element {
  const [race, setRace] = useState<string>('Human');
  const [skincolor, setSkincolor] = useState<string | null>('Light');
  const skinColors: string[] = skinColorMap[race] || [];

  return (
    <div className="container">
      <NBar />
      <div className="main-content">
        <PreviewArea texture={raceTextureMap[race]} />
        <div className="wardrobe-container">
          <WardrobeRace
            onChange={(selected) => {
              setRace(selected);
              setSkincolor(skinColorMap[selected]?.[0] || null);
            }}
          />
          <WardrobeSkinColor
            colors={skinColors}
            selectedColor={skincolor}
            onChange={(selected) => setSkincolor(selected)}
          />
          <span>TODO:</span>
          <br />
          <WardrobeEyes />
          <WardrobeEyescolor />
          <span>hair</span>
          <br />
          <span>haircolor</span>
          <br />
          <span>top</span>
          <br />
          <span>topCoat</span>
          <br />
          <span>bottom</span>
          <br />
          <span>boots</span>
          <br />
          <span>and ?</span>
        </div>
      </div>
    </div>
  );
}

export default App;
