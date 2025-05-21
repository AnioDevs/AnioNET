import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="game" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3391930/pexels-photo-3391930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Dead by Daylight gameplay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
          DEATH IS NOT AN ESCAPE
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary">
            PLAY FREE NOW*
          </button>
          <button className="btn-secondary">
            WATCH TRAILER
          </button>
        </div>
        <p className="text-sm mt-4 text-gray-400">
          *Free to play on select platforms. In-game purchases available.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;