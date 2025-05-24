import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Sword, Users, History } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-gold-500" />,
      title: 'Historical Accuracy',
      description: 'Experience authentic Napoleonic warfare and tactics based on historical research.',
    },
    {
      icon: <Sword className="h-8 w-8 text-gold-500" />,
      title: 'Strategic Gameplay',
      description: 'Engage in complex military strategies and political maneuvering in our roleplay sessions.',
    },
    {
      icon: <Users className="h-8 w-8 text-gold-500" />,
      title: 'Community-Focused',
      description: 'Join a dedicated community of history enthusiasts and strategy gamers.',
    },
    {
      icon: <History className="h-8 w-8 text-gold-500" />,
      title: 'Rich Lore',
      description: 'Immerse yourself in the rich historical context of the Napoleonic Wars era.',
    },
  ];

  return (
    <>
      <HeroSection
        title="Brunswick Ducal Corps"
        subtitle="Join our thriving Napoleonic Wars roleplay community and experience history in action"
        ctaText="Enlist Now"
        ctaLink="/enlist"
      />
      
      <section className="py-16 bg-navy-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-4">Welcome to the Corps</h2>
            <p className="text-gray-300">
              The Brunswick Ducal Corps brings together those who love history and strategy games to offer a thriving RPG experience set during the Napoleonic Wars. Join our ranks and become part of a historical legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-800 p-6 rounded-lg shadow-md border border-navy-700 hover:border-gold-500 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-gold-500 text-base font-medium rounded-md text-gold-500 bg-transparent hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-navy-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gold-500 mb-4">Our Prestigious Regiments</h2>
              <p className="text-gray-300 mb-6">
                The Brunswick Ducal Corps consists of elite regiments with rich histories dating back to the Napoleonic era. Each regiment has its unique traditions, specialties, and battle honors.
              </p>
              <p className="text-gray-300 mb-6">
                From the oldest active regiment, the 1. Linien Bataillon, to our specialized cavalry and artillery units, we recreate the full military structure of the historical Brunswick forces.
              </p>
              <Link
                to="/regiments"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
              >
                Explore Our Regiments
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-2xl border-4 border-navy-700"
            >
              <img 
                src="https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Brunswick Regiment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/1182392/pexels-photo-1182392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-6">Ready to Join Our Ranks?</h2>
            <p className="text-gray-300 mb-8">
              Become part of our growing community of history enthusiasts and strategy gamers. Enlist today and experience the thrill of Napoleonic warfare through immersive roleplay.
            </p>
            <Link
              to="/enlist"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
            >
              Enlist Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;