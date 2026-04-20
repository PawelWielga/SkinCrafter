import React from 'react';

interface OptionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  icon?: string;
  iconClassName?: string;
}

export default function OptionCard({
  heading,
  icon,
  iconClassName = 'text-amber-600',
  className = '',
  children,
  ...props
}: OptionCardProps): JSX.Element {
  return (
    <div
      className={`option-card bg-white shadow p-4 pixel-border relative ${
        heading ? 'pt-5' : ''
      } ${className}`}
      {...props}
    >
      {heading && (
        <h3 className="font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10">
          {icon && <i className={`fas ${icon} mr-2 ${iconClassName}`} />}
          {heading}
        </h3>
      )}

      {children}
    </div>
  );
}
