import React, { useCallback } from 'react';
import { hats, Hat } from '../../data/hatTextureMap';

export interface WardrobeHatProps {
  selectedHat: Hat;
  onChange?: (hat: Hat) => void;
}

const WardrobeHat: React.FC<WardrobeHatProps> = React.memo(
  ({ selectedHat, onChange }) => {
    const handleClick = useCallback(
      (hat: Hat) => {
        onChange?.(hat);
      },
      [onChange]
    );

    return (
      <div className="mb-4" role="group" aria-label="Select Hat">
        <h3 className="mb-2 font-semibold">Hat</h3>
        <div className="grid grid-cols-3 gap-2">
          {hats.map((hat) => {
            const isSelected = selectedHat === hat;
            return (
              <button
                key={hat}
                type="button"
                className={`px-2 py-1 border rounded hover:bg-gray-200${
                  isSelected ? ' bg-blue-500 text-white' : ''
                }`}
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
  }
);

export default WardrobeHat;
