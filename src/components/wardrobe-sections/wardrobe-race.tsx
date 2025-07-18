import { useState } from 'react';
import './wardrobe.css';
import races from '../../data/races';

interface WardrobeRaceProps {
  onChange?: (race: string) => void;
}

function WardrobeRace({ onChange }: WardrobeRaceProps): JSX.Element {
  const [selectedRace, setSelectedRace] = useState<string>('Human');

  const handleClick = (race: string): void => {
    setSelectedRace(race);
    onChange?.(race);
  };

  return (
    <div className="section">
      <h3 className="section-title">Race</h3>
      <div className="section-grid">
        {races.map((race) => (
          <div
            key={race}
            className={`section-grid-option ${selectedRace === race ? 'selected' : ''}`}
            onClick={() => handleClick(race)}
          >
            {race}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WardrobeRace;
