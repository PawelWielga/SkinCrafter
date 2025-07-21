import React from 'react';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
}

const NBar: React.FC<NBarProps> = ({ logoSrc = '/logo.png', logoAlt = 'Logo aplikacji' }) => {
  return (
    <nav
      className="flex items-center justify-between bg-gray-800 text-white p-4 mb-4"
      role="navigation"
      aria-label="Główna nawigacja"
    >
      <div className="flex items-center">
        <img src={logoSrc} alt={logoAlt} className="h-10 select-none" draggable={false} />
      </div>
      <div className="flex space-x-4">
        {/* <a href="#" className="nav-link" aria-label="Pomoc">
          Help
        </a>
        <a href="#" className="nav-coffee-btn" aria-label="Kup mi kawę">
          Buy me a coffee
        </a> */}
      </div>
    </nav>
  );
};

export default NBar;
