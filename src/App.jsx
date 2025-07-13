import "./App.css";

import { useState } from "react";

import NBar from "./components/nbar/nbar.jsx";
import PreviewArea from "./components/preview-area/preview-area.jsx";
import WardrobeRace from "./components/wardrobe-sections/wardrobe-race.jsx";
import skinColorMap from "./data/skinColorMap.js";
import WardrobeSkinColor from "./components/wardrobe-sections/wardrobe-skincolor.jsx";

function App() {
  const [race, setRace] = useState("Human");
  const [skincolor, setSkincolor] = useState("Light");
  const skinColors = skinColorMap[race] || [];

  return (
    <div className="container">
      <NBar />
      <div className="main-content">
        <PreviewArea />
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
        </div>
      </div>
    </div>
  );
}

export default App;
