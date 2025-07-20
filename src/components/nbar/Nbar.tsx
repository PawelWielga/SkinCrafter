import React, { useEffect, useState } from 'react';
import './NBar.css';

type Theme = 'wow' | 'forest';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
}

const NBar: React.FC<NBarProps> = ({ logoSrc = '/logo.png', logoAlt = 'Logo aplikacji' }) => {
  const [theme, setTheme] = useState<Theme>('wow');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'forest') {
      setTheme('forest');
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove('theme-wow', 'theme-forest');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="navbar" role="navigation" aria-label="Główna nawigacja">
      <div className="logo-container">
        <img src={logoSrc} alt={logoAlt} className="logo" draggable={false} />
      </div>
      <div className="nav-links">
        <select
          aria-label="Select theme"
          className="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          <option value="wow">Default</option>
          <option value="forest">Forest</option>
        </select>
      </div>
    </nav>
  );
};

export default NBar;
