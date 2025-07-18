import './Wardrobe.css';

interface WardrobeSkinColorProps {
  colors: string[];
  selectedColor: string | null;
  onChange?: (color: string) => void;
}

function WardrobeSkinColor({
  colors,
  selectedColor,
  onChange,
}: WardrobeSkinColorProps): React.JSX.Element {
  return (
    <div className="section">
      <h3 className="section-title">Skin Color</h3>
      <div className="color-palette">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`color-option${selectedColor === color ? ' selected' : ''}`}
            style={{ backgroundColor: color }}
            aria-label={`Kolor skóry ${color}`}
            onClick={() => onChange?.(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default WardrobeSkinColor;
