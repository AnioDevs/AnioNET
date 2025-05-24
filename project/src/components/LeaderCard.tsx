import React from 'react';
import { motion } from 'framer-motion';
import { Leader } from '../types';

interface LeaderCardProps {
  leader: Leader;
  index: number;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-navy-800 rounded-lg overflow-hidden shadow-lg border border-navy-700 flex flex-col md:flex-row"
    >
      {leader.avatar && (
        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
          <img 
            src={leader.avatar} 
            alt={leader.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      
      <div className="p-6 md:w-2/3 flex flex-col justify-center">
        <h3 className="text-xl font-serif font-bold text-gold-500 mb-1">
          {leader.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{leader.role}</p>
        
        <p className="text-gray-300">{leader.description}</p>
        
        <div className="mt-6 flex items-center space-x-4">
          <button className="text-navy-900 bg-gold-500 hover:bg-gold-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Contact
          </button>
          <button className="text-gold-500 border border-gold-500 hover:bg-navy-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;