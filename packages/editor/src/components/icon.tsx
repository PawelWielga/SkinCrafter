import React from 'react';

interface SkinCrafterIconProps {
  name: string;
  className?: string;
}

function iconContent(name: string): React.ReactNode {
  switch (name) {
    case 'fa-user-tag':
    case 'fa-person':
      return (
        <>
          <circle cx="12" cy="7" r="3.5" />
          <path d="M5 21c0-4.2 3.1-7 7-7s7 2.8 7 7" />
        </>
      );
    case 'fa-venus-mars':
      return (
        <>
          <circle cx="8" cy="9" r="3.5" />
          <path d="M8 12.5V21M5 17.5h6" />
          <circle cx="16.5" cy="14.5" r="3.5" />
          <path d="M19 12l3-3m0 0h-4m4 0v4" />
        </>
      );
    case 'fa-palette':
      return (
        <>
          <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0-3-9Z" />
          <circle cx="7" cy="10" r=".7" fill="currentColor" stroke="none" />
          <circle cx="9" cy="6.5" r=".7" fill="currentColor" stroke="none" />
          <circle cx="13" cy="5.8" r=".7" fill="currentColor" stroke="none" />
        </>
      );
    case 'fa-eye':
      return (
        <>
          <path d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </>
      );
    case 'fa-eye-dropper':
      return (
        <>
          <path d="m14 5 5 5M16.5 2.5l5 5-10 10-4 1 1-4 10-10Z" />
          <path d="M5 19h6" />
        </>
      );
    case 'fa-scissors':
      return (
        <>
          <circle cx="6" cy="7" r="2.5" />
          <circle cx="6" cy="17" r="2.5" />
          <path d="m8 8.5 12 8.5M8 15.5 20 7" />
        </>
      );
    case 'fa-fill-drip':
      return (
        <>
          <path d="m4 14 8-8 6 6-8 8H4v-6Z" />
          <path d="M15 5 12 2" />
          <path d="M20 15s2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 2-3.5 2-3.5Z" />
        </>
      );
    case 'fa-hat-cowboy':
      return (
        <>
          <path d="M4 16h16M7 16l1.5-7h7L17 16" />
          <path d="M2.5 16c1.5 3 17.5 3 19 0" />
        </>
      );
    case 'fa-shirt':
      return <path d="M8 4h8l5 4-3 4-2-2v10H8V10l-2 2-3-4 5-4Z" />;
    case 'fa-shoe-prints':
      return (
        <>
          <ellipse cx="8" cy="8" rx="2.5" ry="4" transform="rotate(-20 8 8)" />
          <ellipse cx="16" cy="16" rx="2.5" ry="4" transform="rotate(-20 16 16)" />
        </>
      );
    case 'fa-gem':
      return (
        <>
          <path d="M6 4h12l4 5-10 11L2 9l4-5Z" />
          <path d="M2 9h20M8 4l4 16 4-16" />
        </>
      );
    case 'fa-sliders':
      return (
        <>
          <path d="M4 6h5M15 6h5M4 12h10M18 12h2M4 18h2M10 18h10" />
          <circle cx="12" cy="6" r="2" />
          <circle cx="16" cy="12" r="2" />
          <circle cx="8" cy="18" r="2" />
        </>
      );
    case 'fa-grip-vertical':
      return (
        <>
          <circle cx="9" cy="6" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="6" r="1" fill="currentColor" stroke="none" />
          <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="9" cy="18" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="18" r="1" fill="currentColor" stroke="none" />
        </>
      );
    case 'fa-chevron-up':
      return <path d="m6 15 6-6 6 6" />;
    case 'fa-chevron-down':
      return <path d="m6 9 6 6 6-6" />;
    case 'fa-check':
      return <path d="m5 12 4 4L19 6" />;
    case 'fa-arrows-rotate':
      return (
        <>
          <path d="M20 7v5h-5" />
          <path d="M4 17v-5h5" />
          <path d="M6.2 8.2A7 7 0 0 1 18.8 10M17.8 15.8A7 7 0 0 1 5.2 14" />
        </>
      );
    case 'fa-layer-group':
      return (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
        </>
      );
    case 'fa-pause':
      return <path d="M8 5v14M16 5v14" />;
    case 'fa-play':
      return <path d="m8 5 11 7-11 7V5Z" />;
    case 'fa-download':
      return (
        <>
          <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
          <path d="M5 20h14" />
        </>
      );
    default:
      return (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01" />
        </>
      );
  }
}

export default function SkinCrafterIcon({
  name,
  className = '',
}: SkinCrafterIconProps): React.JSX.Element {
  return (
    <svg
      className={`skincrafter-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      data-skincrafter-icon={name}
    >
      {iconContent(name)}
    </svg>
  );
}
