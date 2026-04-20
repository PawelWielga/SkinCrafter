import React from 'react';

const MyFooter = React.forwardRef<HTMLElement>((_props, ref) => {
  return (
    <footer ref={ref} className="bg-gray-800 text-white py-4 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>(c) 2026 SkinCrafter. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default MyFooter;
