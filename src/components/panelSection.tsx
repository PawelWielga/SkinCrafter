import React from 'react';

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
  iconClassName = 'text-green-700',
  className = '',
  children,
}: PanelSectionProps): JSX.Element {
  return (
    <section
      className={`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${className}`}
    >
      <h2 className="text-xl font-bold mb-2 text-gray-700 flex items-center">
        <i className={`fas ${icon} mr-2 ${iconClassName}`} /> {title}
      </h2>

      {children}
    </section>
  );
}
