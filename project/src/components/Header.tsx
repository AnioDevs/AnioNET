import React from 'react';
import { Menu } from 'lucide-react';
import { DbdLogo } from './Icons';

interface HeaderProps {
  isScrolled: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, toggleMobileMenu }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <DbdLogo className="h-10 w-auto mr-4" />
          <span className="text-xl font-bold font-teko uppercase tracking-wider">
            Dead by Daylight
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          <a href="#game" className="nav-link">Game</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#characters" className="nav-link">Characters</a>
          <a href="#media" className="nav-link">Media</a>
          <a href="#dlc" className="nav-link">DLC</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#store" className="nav-link">Store</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block btn-primary">
            Play Free*
          </button>
          <button 
            className="block md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;