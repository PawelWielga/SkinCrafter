import React from 'react';
import SkinCrafterIcon from './icon';

interface OptionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  icon?: string;
  iconClassName?: string;
}

export default function OptionCard({
  heading,
  icon,
  iconClassName = 'skincrafter-category-icon',
  className = '',
  children,
  ...props
}: OptionCardProps): JSX.Element {
  return (
    <div
      className={`option-card skincrafter-surface p-4 pixel-border relative ${
        heading ? 'pt-5' : ''
      } ${className}`}
      {...props}
    >
      {heading && (
        <h3 className="font-medium mb-2 flex items-center absolute -top-3 left-4 px-2 skincrafter-surface skincrafter-heading z-10">
          {icon && (
            <SkinCrafterIcon
              name={icon}
              className={`skincrafter-heading-icon ${iconClassName}`.trim()}
            />
          )}
          {heading}
        </h3>
      )}

      {children}
    </div>
  );
}
