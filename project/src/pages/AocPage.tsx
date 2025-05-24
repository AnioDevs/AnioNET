import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';

const AocPage: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="About Our Community" 
        subtitle="Learn about the wider community we are proud to be a part of"
      />
      
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <h2 className="text-gold-500 font-serif">The Napoleonic Roleplay Community</h2>
              <p>
                The Brunswick Ducal Corps is proudly part of a larger network of Napoleonic-era roleplay communities. Together, we create a rich, interconnected world that simulates the complex political and military landscape of early 19th century Europe.
              </p>
              <p>
                Our allied communities represent different nations and factions from the Napoleonic Wars, including France, Britain, Russia, Prussia, Austria, and various smaller states. This creates opportunities for diplomacy, alliances, conflicts, and large-scale events that mirror historical developments.
              </p>
              
              <div className="my-12 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/87080/war-soldiers-military-wehrmacht-87080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Historical Reenactment" 
                  className="w-full"
                />
              </div>
              
              <h2 className="text-gold-500 font-serif">Inter-Community Events</h2>
              <p>
                One of the most exciting aspects of being part of this larger ecosystem is the ability to participate in inter-community events, such as:
              </p>
              <ul>
                <li><strong>Battle Reenactments:</strong> Large-scale recreations of famous battles like Waterloo, Austerlitz, and Leipzig</li>
                <li><strong>Campaign Seasons:</strong> Extended roleplay scenarios that simulate entire military campaigns</li>
                <li><strong>Diplomatic Congresses:</strong> Political roleplay events where different nations negotiate treaties and alliances</li>
                <li><strong>Joint Training Exercises:</strong> Opportunities to learn and practice alongside members of allied communities</li>
                <li><strong>Community Tournaments:</strong> Competitive events that test strategic skills and historical knowledge</li>
              </ul>
              
              <h2 className="text-gold-500 font-serif">Community Values and Standards</h2>
              <p>
                All communities in our network adhere to shared values that ensure a positive experience for everyone:
              </p>
              <ul>
                <li><strong>Historical Respect:</strong> While we embrace creative roleplay, we maintain respect for historical events and figures</li>
                <li><strong>Inclusive Environment:</strong> We welcome members regardless of background, experience level, or prior knowledge</li>
                <li><strong>Cross-Community Courtesy:</strong> Members represent not only themselves but their community when interacting with others</li>
                <li><strong>Educational Focus:</strong> We encourage learning and the sharing of historical knowledge</li>
                <li><strong>Healthy Competition:</strong> While communities may "compete" in roleplay scenarios, this is always done in a spirit of friendship</li>
              </ul>
              
              <h2 className="text-gold-500 font-serif">How to Participate</h2>
              <p>
                As a member of the Brunswick Ducal Corps, you'll automatically have opportunities to participate in inter-community events. These are announced in advance through our Discord server and community calendar.
              </p>
              <p>
                If you're interested in representing Brunswick in diplomatic missions or special events, speak with our leadership team about available opportunities. We're always looking for articulate and knowledgeable members to represent our community.
              </p>
              
              <div className="mt-12 p-6 bg-navy-800 rounded-lg border border-navy-700">
                <h3 className="text-gold-500 font-serif text-xl mb-4">Allied Communities</h3>
                <p className="text-gray-300 mb-4">
                  The Brunswick Ducal Corps maintains friendly relations with numerous other Napoleonic roleplay communities. Below are some of our closest allies:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    <span>Imperial French Corps</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>British Expeditionary Force</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Russian Imperial Guard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span>Prussian State Army</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    <span>Austrian Imperial-Royal Army</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AocPage;