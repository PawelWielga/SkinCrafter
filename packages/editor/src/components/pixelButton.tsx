import React from 'react';

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
      {icon && <i className={`fas ${icon} mr-2`} />}
      {children}
    </button>
  );
}
