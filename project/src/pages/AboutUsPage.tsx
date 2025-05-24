import React from 'react';
import PageTitle from '../components/PageTitle';
import LeaderCard from '../components/LeaderCard';
import { leaders } from '../data/leaders';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="Our Leadership" 
        subtitle="Meet the dedicated leaders behind the Brunswick Ducal Corps"
      />
      
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300">
              Our community is led by a team of passionate history enthusiasts and strategy gamers who are dedicated to creating an immersive Napoleonic roleplay experience. Get to know the individuals who make our community thrive.
            </p>
          </div>
          
          <div className="space-y-8 mt-12">
            {leaders.map((leader, index) => (
              <LeaderCard key={leader.id} leader={leader} index={index} />
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Join Our Leadership Team</h3>
            <p className="text-gray-300 mb-6">
              As our community grows, we're always looking for dedicated members to take on leadership roles. If you're passionate about Napoleonic history and want to contribute to our community, consider applying for a leadership position.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300">
              Apply for Leadership
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;