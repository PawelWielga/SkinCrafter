import React from 'react';

interface MyFooterProps {}

const MyFooter = React.forwardRef<HTMLElement, MyFooterProps>((_props, ref) => {
  return (
    <footer ref={ref} className="bg-gray-800 text-white py-4 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>© 2025 SkinCrafter. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-amber-400 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
});

export default MyFooter;
