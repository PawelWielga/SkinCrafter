import React, { useState, useCallback } from 'react';
import './Wardrobe.css';
import { hats, Hat } from '../../data/hatTextureMap';

export interface WardrobeHatProps {
  onChange?: (hat: Hat) => void;
}

const WardrobeHat: React.FC<WardrobeHatProps> = React.memo(({ onChange }) => {
  const [selectedHat, setSelectedHat] = useState<Hat>('None');

  const handleClick = useCallback(
    (hat: Hat) => {
      setSelectedHat(hat);
      onChange?.(hat);
    },
    [onChange]
  );

  return (
    <div className="section" role="group" aria-label="Select Hat">
      <h3 className="section-title">Hat</h3>
      <div className="section-grid">
        {hats.map((hat) => {
          const isSelected = selectedHat === hat;
          return (
            <button
              key={hat}
              type="button"
              className={`section-grid-option${isSelected ? ' selected' : ''}`}
              aria-pressed={isSelected}
              onClick={() => handleClick(hat)}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(hat);
                }
              }}
            >
              {hat}
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default WardrobeHat;
