import './wardrobe.css';

interface WardrobeSkinColorProps {
  colors: string[];
  selectedColor: string | null;
  onChange?: (color: string) => void;
}

function WardrobeSkinColor({
  colors,
  selectedColor,
  onChange,
}: WardrobeSkinColorProps): JSX.Element {
  return (
    <div className="section">
      <h3 className="section-title">Skin Color</h3>
      <div className="color-palette">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-option ${color.toLowerCase()} ${
              selectedColor === color ? 'selected' : ''
            }`}
            data-color={color.toLowerCase()}
            onClick={() => onChange?.(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default WardrobeSkinColor;
