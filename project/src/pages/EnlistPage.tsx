import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';

const EnlistPage: React.FC = () => {
  useEffect(() => {
    // Redirect to Discord after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'https://discord.gg/sHMFS4eG2y';
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageTitle 
        title="Enlist in the Corps" 
        subtitle="Join our ranks and become part of Napoleonic history"
      />
      
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-navy-800 rounded-lg border-2 border-gold-500 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Redirecting to our Discord Server</h2>
              <p className="text-gray-300 mb-6">
                You are being redirected to our Discord server where you can complete the enlistment process.
              </p>
              
              <div className="w-full bg-navy-700 rounded-full h-2.5 mb-6">
                <motion.div 
                  className="bg-gold-500 h-2.5 rounded-full" 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5 }}
                />
              </div>
              
              <p className="text-gray-400 text-sm mb-8">
                If you are not redirected automatically, please click the button below.
              </p>
              
              <a
                href="https://discord.gg/sHMFS4eG2y"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
              >
                Join Our Discord
              </a>
            </motion.div>
            
            <div className="mt-12">
              <h3 className="text-xl font-serif font-bold text-gold-500 mb-4">What to Expect After Enlisting</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
                  <div className="text-gold-500 text-4xl font-serif mb-4">1</div>
                  <h4 className="text-lg font-medium text-white mb-2">Introduction</h4>
                  <p className="text-gray-300 text-sm">
                    You'll be greeted by our recruitment officers who will guide you through the onboarding process.
                  </p>
                </div>
                <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
                  <div className="text-gold-500 text-4xl font-serif mb-4">2</div>
                  <h4 className="text-lg font-medium text-white mb-2">Basic Training</h4>
                  <p className="text-gray-300 text-sm">
                    Learn the basics of our roleplay system, including commands, protocols, and historical context.
                  </p>
                </div>
                <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
                  <div className="text-gold-500 text-4xl font-serif mb-4">3</div>
                  <h4 className="text-lg font-medium text-white mb-2">Regiment Assignment</h4>
                  <p className="text-gray-300 text-sm">
                    Based on your preferences and abilities, you'll be assigned to one of our prestigious regiments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnlistPage;