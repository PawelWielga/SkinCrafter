import React, { useState, useCallback } from 'react';
import races, { Race } from '../../data/races';

export interface WardrobeRaceProps {
  onChange?: (race: Race) => void;
}

const WardrobeRace: React.FC<WardrobeRaceProps> = React.memo(({ onChange }) => {
  const [selectedRace, setSelectedRace] = useState<Race>('Human');

  const handleClick = useCallback(
    (race: Race) => {
      setSelectedRace(race);
      onChange?.(race);
    },
    [onChange]
  );

  return (
    <div className="mb-4" role="group" aria-label="Select Race">
      <h3 className="mb-2 font-semibold">Race</h3>
      <div className="grid grid-cols-3 gap-2">
        {races.map((race) => {
          const isSelected = selectedRace === race;
          return (
            <button
              key={race}
              type="button"
              className={`px-2 py-1 border rounded hover:bg-gray-200${
                isSelected ? ' bg-blue-500 text-white' : ''
              }`}
              aria-pressed={isSelected}
              onClick={() => handleClick(race)}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(race);
                }
              }}
            >
              {race}
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default WardrobeRace;
