import React from 'react';
import { motion } from 'framer-motion';
import { Regiment } from '../types';

interface RegimentCardProps {
  regiment: Regiment;
}

const RegimentCard: React.FC<RegimentCardProps> = ({ regiment }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-navy-800 rounded-lg overflow-hidden shadow-lg border border-navy-700"
    >
      {regiment.image && (
        <div className="h-56 overflow-hidden">
          <img 
            src={regiment.image} 
            alt={regiment.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-serif font-bold text-gold-500">{regiment.name}</h3>
          <span className="bg-navy-700 text-gray-300 px-3 py-1 rounded-full text-xs">
            {regiment.category} - {regiment.brigade}
          </span>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm">Overseer</p>
            <p className="text-white">{regiment.overseer}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Commanding Officer</p>
              <p className="text-white">{regiment.commandingOfficer}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Executive Officer</p>
              <p className="text-white">{regiment.executiveOfficer}</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm mb-1">About</p>
            <p className="text-gray-300 text-sm">{regiment.info}</p>
          </div>
          
          <div className="pt-2 border-t border-navy-700">
            <p className="text-gold-400 font-serif italic">"{regiment.motto}"</p>
            {regiment.mottoTranslation && (
              <p className="text-gray-400 text-sm italic">Meaning: {regiment.mottoTranslation}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegimentCard;