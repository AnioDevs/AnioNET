import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  thumbnail: string;
  videoId?: string;
  title: string;
}

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'screenshots' | 'videos'>('screenshots');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'The Nurse stalking her prey'
    },
    {
      id: 2,
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/5699997/pexels-photo-5699997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'The Hatch - The last hope for survivors'
    },
    {
      id: 3,
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/7919635/pexels-photo-7919635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'The Fog - Where all trials take place'
    },
    {
      id: 4,
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/8107184/pexels-photo-8107184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'The Campfire - Where survivors gather'
    },
    {
      id: 5,
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/3964319/pexels-photo-3964319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      videoId: '6wJlZroxPfc',
      title: 'Dead by Daylight | Official Gameplay Trailer'
    },
    {
      id: 6,
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/7919452/pexels-photo-7919452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      videoId: '6wJlZroxPfc',
      title: 'Dead by Daylight | The Archives Tome 16: Resonance'
    }
  ];
  
  const filteredMedia = mediaItems.filter(
    item => (activeTab === 'screenshots' && item.type === 'image') || 
            (activeTab === 'videos' && item.type === 'video')
  );
  
  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  return (
    <section id="media" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">MEDIA</h2>
        <div className="w-20 h-1 bg-red-700 mb-8"></div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg overflow-hidden">
            <button 
              className={`px-8 py-3 font-bold uppercase text-lg transition-colors ${
                activeTab === 'screenshots' ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('screenshots')}
            >
              Screenshots
            </button>
            <button 
              className={`px-8 py-3 font-bold uppercase text-lg transition-colors ${
                activeTab === 'videos' ? 'bg-red-700 text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map(media => (
            <div 
              key={media.id} 
              className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openMedia(media)}
            >
              <div className="relative">
                <img 
                  src={media.thumbnail} 
                  alt={media.title}
                  className="w-full h-56 object-cover"
                />
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-700 bg-opacity-80 flex items-center justify-center">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{media.title}</h3>
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
      
      {/* Modal */}
      {modalOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.thumbnail} 
                  alt={selectedMedia.title}
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-0 pb-[56.25%] relative">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${selectedMedia.videoId}`}
                      title={selectedMedia.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{selectedMedia.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Media;