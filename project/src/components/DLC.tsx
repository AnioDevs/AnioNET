import React from 'react';

interface DLCItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
  isNew?: boolean;
}

const DLCItem: React.FC<DLCItemProps> = ({ image, title, description, price, isNew }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        {isNew && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-white">{price}</span>
          <button className="btn-primary text-sm py-2 px-4">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const DLC: React.FC = () => {
  return (
    <section id="dlc" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">DOWNLOADABLE CONTENT</h2>
        <div className="w-20 h-1 bg-red-700 mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DLCItem 
            image="https://images.pexels.com/photos/8107172/pexels-photo-8107172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="The Skull Merchant Chapter"
            description="Includes a new killer, survivor, and map."
            price="$7.99"
            isNew={true}
          />
          <DLCItem 
            image="https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Alien Chapter"
            description="Features the iconic Xenomorph and Ellen Ripley."
            price="$11.99"
          />
          <DLCItem 
            image="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            title="Resident Evil: PROJECT W"
            description="Includes Wesker, Ada Wong, and Rebecca Chambers."
            price="$11.99"
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-black bg-opacity-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0">
                <h3 className="text-3xl font-bold mb-2">Dead by Daylight: Ultimate Edition</h3>
                <p className="text-gray-300 mb-4">
                  Get the base game plus 12 chapters, 24 characters, and exclusive cosmetics at a discounted price.
                </p>
                <ul className="text-gray-400 mb-4">
                  <li className="mb-1">• Base Game</li>
                  <li className="mb-1">• 12 DLC Chapters</li>
                  <li className="mb-1">• 6 Exclusive Outfits</li>
                  <li>• 2000 Auric Cells</li>
                </ul>
              </div>
              <div className="md:ml-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$49.99</div>
                  <div className="text-sm text-red-500 mb-4">
                    <span className="line-through text-gray-500">$129.99</span> 60% OFF
                  </div>
                  <button className="btn-primary w-full">
                    BUY ULTIMATE EDITION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            VIEW ALL DLC
          </button>
        </div>
      </div>
    </section>
  );
};

export default DLC;