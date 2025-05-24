import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Disc as Discord, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-gold-500 font-serif text-xl font-bold">Brunswick Ducal Corps</h3>
            <p className="text-gray-300 text-sm">
              A historical strategy roleplay community set in the Napoleonic Wars era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Discord size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/regiments" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm">
                  Regiments
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/enlist" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm">
                  Enlist
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              Join our Discord server to connect with the community.
            </p>
            <Link
              to="/enlist"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
            >
              Enlist Now
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Brunswick Ducal Corps. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-xs">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-xs">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;