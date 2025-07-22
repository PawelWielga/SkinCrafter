import React, { useCallback } from 'react';
import races, { Race } from '../../data/races';

export interface WardrobeRaceProps {
  selectedRace: Race;
  onChange?: (race: Race) => void;
  hideLabel?: boolean;
  className?: string;
}

const WardrobeRace: React.FC<WardrobeRaceProps> = React.memo(
  ({ selectedRace, onChange, hideLabel = false, className }) => {
    const handleClick = useCallback(
      (race: Race) => {
        onChange?.(race);
      },
      [onChange]
    );

    return (
      <div
        className={className ?? 'mb-4'}
        role="group"
        aria-label="Select Race"
      >
        {!hideLabel && <h3 className="mb-2 font-semibold">Race</h3>}
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
  }
);

export default WardrobeRace;
