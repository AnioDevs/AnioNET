import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = 'https://images.pexels.com/photos/1182392/pexels-photo-1182392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) => {
  return (
    <div 
      className="relative bg-navy-900 min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 8, 35, 0.8), rgba(0, 8, 35, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-900/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {subtitle}
            </p>
          </motion.div>
          
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900 to-transparent"></div>
    </div>
  );
};

export default HeroSection;