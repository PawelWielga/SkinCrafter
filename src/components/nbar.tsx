import React from 'react';

interface NBarProps {
  logoSrc?: string;
  logoAlt?: string;
}

const NBar: React.FC<NBarProps> = ({ logoSrc = '/logo.png', logoAlt = 'Logo aplikacji' }) => {
  return (
    <nav className="bg-green-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-500 flex items-center justify-center pixel-border">
            <i className="fas fa-cube text-sm"></i>
          </div>
          <h1 className="text-xl font-bold tracking-tight">SkinCrafter</h1>
        </div>
        <button className="pixel-button bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded pixel-border transition-colors">
          <i className="fas fa-user mr-1"></i> My Skins
        </button>
      </div>
    </nav>
  );
};

export default NBar;
