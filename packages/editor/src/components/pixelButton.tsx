import React from 'react';
import SkinCrafterIcon from './icon';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

export default function PixelButton({
  icon,
  className = '',
  children,
  ...props
}: PixelButtonProps): JSX.Element {
  return (
    <button
      className={`pixel-button preview-action-button p-2 pixel-border transition-colors ${className}`}
      {...props}
    >
      {icon && <SkinCrafterIcon name={icon} className="skincrafter-button-icon" />}
      {children}
    </button>
  );
}
