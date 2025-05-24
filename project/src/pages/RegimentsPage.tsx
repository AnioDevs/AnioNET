import React from 'react';
import PageTitle from '../components/PageTitle';
import RegimentCard from '../components/RegimentCard';
import { regiments } from '../data/regiments';

const RegimentsPage: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="Our Regiments" 
        subtitle="Learn about the elite military units that comprise the Brunswick Ducal Corps"
      />
      
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300">
              The Brunswick Ducal Corps is organized into specialized regiments, each with its own history, traditions, and battle honors. Explore our current regiments and find the one that suits your interests and playstyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {regiments.map((regiment) => (
              <RegimentCard key={regiment.id} regiment={regiment} />
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-navy-800 rounded-lg border border-navy-700 p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">New Regiments Coming Soon</h3>
              <p className="text-gray-300 mb-6">
                As our community grows, we're planning to expand with additional regiments representing different branches of service and specialized roles within the historical Brunswick Ducal Corps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mt-8">
                <div className="bg-navy-700 p-4 rounded-md">
                  <h4 className="text-gold-400 font-medium mb-2">Cavalry Regiment</h4>
                  <p className="text-sm text-gray-400">Light horsemen specializing in reconnaissance and flanking maneuvers.</p>
                </div>
                <div className="bg-navy-700 p-4 rounded-md">
                  <h4 className="text-gold-400 font-medium mb-2">Artillery Battery</h4>
                  <p className="text-sm text-gray-400">Field artillery providing crucial fire support in battle.</p>
                </div>
                <div className="bg-navy-700 p-4 rounded-md">
                  <h4 className="text-gold-400 font-medium mb-2">Elite Guard</h4>
                  <p className="text-sm text-gray-400">Elite infantry serving as the Duke's personal guard unit.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Interested in Joining?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Enlist today to become part of one of our prestigious regiments. New recruits will undergo basic training before being assigned to a regiment based on their preferences and abilities.
            </p>
            <a
              href="/enlist"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300"
            >
              Enlist Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegimentsPage;