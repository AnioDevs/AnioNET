import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Truncate content for preview
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-[1.02]">
      {post.image_url && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image_url} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-gold-400 text-sm mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{formatDate(post.created_at)}</span>
        </div>
        
        <h3 className="text-xl font-serif font-bold mb-2 text-white">
          <Link to={`/blog/${post.id}`} className="hover:text-gold-500 transition-colors duration-200">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm">
          {truncateContent(post.content)}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-400">By {post.author}</span>
          <Link 
            to={`/blog/${post.id}`}
            className="text-gold-500 hover:text-gold-300 text-sm font-medium transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;