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
    <div className="mb-4">
      <h3 className="mb-2 font-semibold">Skin Color</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`w-8 h-8 rounded-full border hover:scale-110 transition${
              selectedColor === color ? ' ring-2 ring-blue-500' : ''
            }`}
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
