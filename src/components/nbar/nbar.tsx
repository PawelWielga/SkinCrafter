import React from 'react';
import './Nbar.css';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
}

const NBar: React.FC<NBarProps> = ({ logoSrc = '/logo.png', logoAlt = 'Logo aplikacji' }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="Główna nawigacja">
      <div className="logo-container">
        <img src={logoSrc} alt={logoAlt} className="logo" draggable={false} />
      </div>
      <div className="nav-links">
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
