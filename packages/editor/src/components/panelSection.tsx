import React from 'react';
import SkinCrafterIcon from './icon';

interface PanelSectionProps {
  title: React.ReactNode;
  icon: string;
  iconClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export default function PanelSection({
  title,
  icon,
  iconClassName = 'skincrafter-accent-text',
  className = '',
  children,
}: PanelSectionProps): JSX.Element {
  return (
    <section
      className={`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${className}`}
    >
      <h2 className="text-xl font-bold mb-2 skincrafter-heading flex items-center">
        <SkinCrafterIcon
          name={icon}
          className={`skincrafter-heading-icon ${iconClassName}`.trim()}
        />
        {title}
      </h2>

      {children}
    </section>
  );
}
