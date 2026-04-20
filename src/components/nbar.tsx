import React from 'react';
import { NavLink } from 'react-router-dom';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
}

const NBar: React.FC<NBarProps> = ({ logoSrc = '/logo.png', logoAlt = 'Logo aplikacji' }) => {
  return (
    <nav className="bg-green-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-500 flex items-center justify-center pixel-border overflow-hidden">
            <img src={logoSrc} alt={logoAlt} className="h-full w-full object-cover" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">SkinCrafter</h1>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pixel-button px-3 py-1 rounded pixel-border transition-colors ${
                isActive ? 'bg-amber-600 text-white' : 'bg-green-700 hover:bg-green-600 text-white'
              }`
            }
          >
            Wardrobe
          </NavLink>
          <NavLink
            to="/mcskinview"
            className={({ isActive }) =>
              `pixel-button px-3 py-1 rounded pixel-border transition-colors ${
                isActive ? 'bg-amber-600 text-white' : 'bg-green-700 hover:bg-green-600 text-white'
              }`
            }
          >
            Skin View
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NBar;
