import React from 'react';
import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-navy-900 py-16 sm:py-24 border-b border-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-serif font-bold text-gold-500 sm:text-4xl lg:text-5xl mb-4 relative inline-block">
            {title}
            <div className="absolute left-0 right-0 h-1 bg-gold-500 bottom-0 transform translate-y-2"></div>
          </h1>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageTitle;