import React from 'react';
import WardrobeRace from './wardrobe-sections/WardrobeRace';
import WardrobeSkinColor from './wardrobe-sections/WardrobeSkinColor';
import WardrobeHat from './wardrobe-sections/WardrobeHat';
import WardrobeEyes from './wardrobe-sections/WardrobeEyes';
import WardrobeEyesColor from './wardrobe-sections/WardrobeEyesColor';
import type { Race } from '../data/races';
import type { Hat } from '../data/hatTextureMap';

interface WardrobeProps {
  skinColors: string[];
  selectedSkinColor: string | null;
  onRaceChange?: (race: Race) => void;
  onSkinColorChange?: (color: string) => void;
  onHatChange?: (hat: Hat) => void;
}

export default function Wardrobe({
  skinColors,
  selectedSkinColor,
  onRaceChange,
  onSkinColorChange,
  onHatChange,
}: WardrobeProps): React.JSX.Element {
  return (
    <div className="wardrobe-container">
      <WardrobeRace onChange={onRaceChange} />

      <WardrobeSkinColor
        colors={skinColors}
        selectedColor={selectedSkinColor}
        onChange={onSkinColorChange}
      />

      <WardrobeHat onChange={onHatChange} />

      <WardrobeEyes />

      <WardrobeEyesColor />

      {/* TODO: hair, hairColor, top, topCoat, bottom, boots, etc. */}
    </div>
  );
}
