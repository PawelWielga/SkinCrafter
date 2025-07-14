import { useState } from 'react';
import './wardrobe.css';
import races from '../../data/races.js';

function WardrobeRace({ onChange }) {
  const [selectedRace, setSelectedRace] = useState('Human');

  const handleClick = (race) => {
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
