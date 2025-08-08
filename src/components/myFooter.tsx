import React from 'react';

interface MyFooterProps {}

const MyFooter: React.FC<MyFooterProps> = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>© 2025 SkinCrafter by Dihor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MyFooter;
