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
    <div className="section" role="group" aria-label="Select Race">
      <h3 className="section-title">Race</h3>
      <div className="section-grid">
        {races.map((race) => {
          const isSelected = selectedRace === race;
          return (
            <button
              key={race}
              type="button"
              className={`section-grid-option${isSelected ? ' selected' : ''}`}
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
