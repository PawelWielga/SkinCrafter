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
  selectedRace: Race;
  selectedHat: Hat;
  onRaceChange?: (race: Race) => void;
  onSkinColorChange?: (color: string) => void;
  onHatChange?: (hat: Hat) => void;
}

export default function Wardrobe({
  skinColors,
  selectedSkinColor,
  selectedRace,
  selectedHat,
  onRaceChange,
  onSkinColorChange,
  onHatChange,
}: WardrobeProps): React.JSX.Element {
  return (
    <section className="overflow-y-scroll h-full pr-2 customization-panel">
      <div className="custom-scrollbar">
        <div className="custom-scrollbar-thumb" />
      </div>
      <h2 className="text-xl font-bold mb-2 text-gray-700 flex items-center">
        <i className="fas fa-sliders mr-2 text-green-700" /> Customization
      </h2>

      <div className="space-y-2 options-container">
        <div className="option-card bg-white rounded-lg shadow p-4 pixel-border relative">
          <h3 className="font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
            <i className="fas fa-user-tag mr-2 text-amber-600" /> Character Race
          </h3>
          <WardrobeRace
            selectedRace={selectedRace}
            onChange={onRaceChange}
            hideLabel
            className="mt-4"
          />
        </div>

        <div className="option-card bg-white rounded-lg shadow p-4 pixel-border relative">
          <h3 className="font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
            <i className="fas fa-palette mr-2 text-amber-600" /> Skin Color
          </h3>
          <WardrobeSkinColor
            colors={skinColors}
            selectedColor={selectedSkinColor}
            onChange={onSkinColorChange}
            hideLabel
            className="mt-4"
          />
        </div>

        <div className="option-card bg-white rounded-lg shadow p-4 pixel-border relative">
          <h3 className="font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
            <i className="fas fa-tshirt mr-2 text-amber-600" /> Hat
          </h3>
          <WardrobeHat
            selectedHat={selectedHat}
            onChange={onHatChange}
            hideLabel
            className="mt-4"
          />
        </div>

        {/* Placeholder sections */}
        <div className="option-card bg-white rounded-lg shadow p-4 pixel-border relative">
          <h3 className="font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
            <i className="fas fa-eye mr-2 text-amber-600" /> Eyes
          </h3>
          <div className="mt-4">
            <WardrobeEyes />
            <WardrobeEyesColor />
          </div>
        </div>
      </div>
    </section>
  );
}
