import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  toggleMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMobileMenu }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col p-6">
      <div className="flex justify-end">
        <button 
          onClick={toggleMobileMenu}
          className="text-white hover:text-red-500 transition-colors"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col space-y-6 text-center">
          <a 
            href="#game" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            Game
          </a>
          <a 
            href="#news" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            News
          </a>
          <a 
            href="#characters" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            Characters
          </a>
          <a 
            href="#media" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            Media
          </a>
          <a 
            href="#dlc" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            DLC
          </a>
          <a 
            href="#community" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            Community
          </a>
          <a 
            href="#store" 
            className="text-2xl font-teko uppercase text-white hover:text-red-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            Store
          </a>
          
          <button className="btn-primary mt-8 w-full">
            Play Free*
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;