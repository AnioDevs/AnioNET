import React from 'react';

interface NewsItemProps {
  image: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, title, date, category, excerpt }) => {
  return (
    <div className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-900/30 hover:shadow-xl">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-2 py-1">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{date}</p>
        <p className="text-gray-300 line-clamp-3">{excerpt}</p>
        <button className="mt-4 text-red-500 hover:text-red-400 font-bold uppercase text-sm transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const newsItems = [
    {
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The Rift: Unfathomable Cravings Now Open",
      date: "October 10, 2023",
      category: "RIFT",
      excerpt: "The Fog stirs with new memories for Survivors and Killers to uncover. The latest Rift is now open, filled with both free and premium rewards."
    },
    {
      image: "https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Dead by Daylight | Mid-Chapter Update",
      date: "October 3, 2023",
      category: "PATCH NOTES",
      excerpt: "This update brings several balance changes to various Killers and Survivors, as well as a number of bug fixes and quality of life improvements."
    },
    {
      image: "https://images.pexels.com/photos/5769392/pexels-photo-5769392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The Chiller Collection Available Now",
      date: "September 28, 2023",
      category: "COSMETICS",
      excerpt: "A new collection of skins has arrived in the Dead by Daylight Store. Dress your favorite Survivors and Killers in these bone-chilling new outfits."
    },
  ];

  return (
    <section id="news" className="py-20 bg-black bg-opacity-70">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">LATEST NEWS</h2>
        <div className="w-20 h-1 bg-red-700 mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsItem 
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              category={item.category}
              excerpt={item.excerpt}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            VIEW ALL NEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;