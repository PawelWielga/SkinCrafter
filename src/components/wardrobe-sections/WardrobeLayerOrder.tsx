import React from 'react';
import './Wardrobe.css';

export type Layer = 'race' | 'hat';
export type LayerOrder = Layer[];

interface WardrobeLayerOrderProps {
  order: LayerOrder;
  onChange?: (order: LayerOrder) => void;
}

const options: Record<string, LayerOrder> = {
  'race-hat': ['race', 'hat'],
  'hat-race': ['hat', 'race'],
};

function WardrobeLayerOrder({ order, onChange }: WardrobeLayerOrderProps): JSX.Element {
  return (
    <div className="section" aria-label="Select layer order">
      <h3 className="section-title">Layer Order</h3>
      <select
        value={order.join('-')}
        onChange={(e) => onChange?.(options[e.target.value])}
      >
        <option value="race-hat">Race → Hat</option>
        <option value="hat-race">Hat → Race</option>
      </select>
    </div>
  );
}

export default WardrobeLayerOrder;
