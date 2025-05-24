import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="About Our Community" 
        subtitle="Learn about the Brunswick Ducal Corps, our history, and our mission"
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
              <h2 className="text-gold-500 font-serif">Our History</h2>
              <p>
                The Brunswick Ducal Corps is a dedicated community of history enthusiasts and strategy gamers who share a passion for the Napoleonic era. Our community was founded with the goal of creating an immersive roleplay experience that accurately reflects the military structures, tactics, and political landscape of early 19th century Europe.
              </p>
              <p>
                Named after the historical Brunswick Ducal Corps, also known as the "Black Brunswickers," our community pays homage to the brave soldiers who fought against Napoleon's forces. The original Brunswick Corps was raised in 1809 by Duke Frederick William of Brunswick-Wolfenbüttel to fight in the War of the Fifth Coalition.
              </p>
              
              <div className="my-12 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Historical Brunswick Soldiers" 
                  className="w-full"
                />
              </div>
              
              <h2 className="text-gold-500 font-serif">Our Mission</h2>
              <p>
                We strive to create a welcoming and educational environment where members can learn about Napoleonic history while enjoying strategic gameplay. Our mission is to:
              </p>
              <ul>
                <li>Provide an authentic and immersive roleplay experience</li>
                <li>Foster a community of respectful and passionate history enthusiasts</li>
                <li>Educate members about the military, political, and social aspects of the Napoleonic era</li>
                <li>Organize regular events that recreate historical battles and campaigns</li>
                <li>Continue to grow and evolve our community with new members and fresh ideas</li>
              </ul>
              
              <h2 className="text-gold-500 font-serif">What We Offer</h2>
              <p>
                As a member of the Brunswick Ducal Corps, you'll have access to:
              </p>
              <ul>
                <li>Regular roleplay sessions set during the Napoleonic Wars</li>
                <li>A rank structure based on historical military organizations</li>
                <li>Opportunities to rise through the ranks based on merit and participation</li>
                <li>Educational resources about Napoleonic warfare and tactics</li>
                <li>A friendly community of like-minded individuals</li>
                <li>Special events recreating famous battles like Waterloo, Austerlitz, and more</li>
              </ul>
              
              <h2 className="text-gold-500 font-serif">Community Values</h2>
              <p>
                Our community is built on the following core values:
              </p>
              <ul>
                <li><strong>Respect:</strong> We treat all members with dignity and respect</li>
                <li><strong>Historical Accuracy:</strong> We strive for authenticity in our roleplay</li>
                <li><strong>Inclusivity:</strong> We welcome members from all backgrounds</li>
                <li><strong>Education:</strong> We encourage learning and knowledge-sharing</li>
                <li><strong>Camaraderie:</strong> We foster friendships and teamwork</li>
              </ul>
              
              <div className="mt-12 text-center">
                <p className="text-gold-500 font-serif text-xl italic">
                  "Sieg oder Tod!" — Victory or Death!
                </p>
                <p className="text-gray-400">
                  The battle cry of the Brunswick Ducal Corps
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;