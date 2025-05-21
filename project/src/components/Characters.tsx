import React, { useState } from 'react';

interface Character {
  id: number;
  name: string;
  role: 'killer' | 'survivor';
  image: string;
  description: string;
}

const Characters: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'killers' | 'survivors'>('killers');
  
  const characters: Character[] = [
    {
      id: 1,
      name: "The Trapper",
      role: "killer",
      image: "https://images.pexels.com/photos/3075890/pexels-photo-3075890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A massive, hulking killer who uses bear traps to capture survivors."
    },
    {
      id: 2,
      name: "The Nurse",
      role: "killer",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A ghostly woman who can teleport short distances to catch survivors."
    },
    {
      id: 3,
      name: "The Huntress",
      role: "killer",
      image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A tall woman who wears a rabbit mask and throws hatchets at survivors."
    },
    {
      id: 4,
      name: "The Executioner",
      role: "killer",
      image: "https://images.pexels.com/photos/8107154/pexels-photo-8107154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A menacing figure capable of inflicting torment and delivering punishment."
    },
    {
      id: 5,
      name: "Meg Thomas",
      role: "survivor",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "An athletic and competitive young woman with perks centered around running."
    },
    {
      id: 6,
      name: "Dwight Fairfield",
      role: "survivor",
      image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A nervous leader with perks focused on helping the team work together."
    },
    {
      id: 7,
      name: "Claudette Morel",
      role: "survivor",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A botany student with perks focused on healing herself and others."
    },
    {
      id: 8,
      name: "Jake Park",
      role: "survivor",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A solitary survivalist with perks centered around stealth and sabotage."
    },
  ];
  
  const filteredCharacters = characters.filter(
    character => character.role === activeTab
  );

  return (
    <section id="characters" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">CHARACTERS</h2>
        <div className="w-20 h-1 bg-red-700 mb-8"></div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg overflow-hidden">
            <button 
              className={`px-8 py-3 font-bold uppercase text-lg transition-colors ${
                activeTab === 'killers' ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('killers')}
            >
              Killers
            </button>
            <button 
              className={`px-8 py-3 font-bold uppercase text-lg transition-colors ${
                activeTab === 'survivors' ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('survivors')}
            >
              Survivors
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCharacters.map(character => (
            <div key={character.id} className="character-card bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{character.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300">{character.description}</p>
                <button className="mt-4 text-red-500 hover:text-red-400 font-bold uppercase text-sm transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            VIEW ALL {activeTab.toUpperCase()}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Characters;