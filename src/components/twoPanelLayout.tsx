import React from 'react';

interface TwoPanelLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function TwoPanelLayout({ left, right }: TwoPanelLayoutProps): JSX.Element {
  return (
    <div className="flex-1 min-h-0 flex flex-col md:flex-row">
      <div className="flex-1 min-h-0 w-full md:w-1/2">{left}</div>
      <div className="flex-1 min-h-0 w-full md:w-1/2">{right}</div>
    </div>
  );
}
