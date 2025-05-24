import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import BlogCard from '../components/BlogCard';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        setPosts(data || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        // For demo purposes, show sample posts if Supabase isn't connected
        setPosts([
          {
            id: '1',
            title: 'The History of the Black Brunswickers',
            content: 'The Brunswick Ducal Corps, famously known as the "Black Brunswickers," was raised in 1809 by Frederick William, Duke of Brunswick-Wolfenbüttel...',
            created_at: '2023-04-15T14:30:00Z',
            updated_at: '2023-04-15T14:30:00Z',
            author: 'Timothy',
            image_url: 'https://images.pexels.com/photos/6147111/pexels-photo-6147111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: '2',
            title: 'Battle Tactics in the Napoleonic Era',
            content: 'The Napoleonic Wars introduced revolutionary changes to military tactics and strategy. This article explores the key battle formations and tactical innovations...',
            created_at: '2023-04-10T09:15:00Z',
            updated_at: '2023-04-10T09:15:00Z',
            author: '0utflanks',
            image_url: 'https://images.pexels.com/photos/33779/hand-pipe-tobacco-smoke.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: '3',
            title: 'Upcoming Community Events',
            content: 'Join us for our monthly roleplay events! This month, we\'ll be recreating the Battle of Quatre Bras, where the Black Brunswickers played a crucial role...',
            created_at: '2023-04-05T16:45:00Z',
            updated_at: '2023-04-05T16:45:00Z',
            author: 'eastthebeast',
            image_url: 'https://images.pexels.com/photos/87080/war-soldiers-military-wehrmacht-87080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <PageTitle 
        title="Corps Chronicles" 
        subtitle="Stay updated with the latest news, stories, and announcements"
      />
      
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 max-w-xl mx-auto">
              <p className="text-red-400 text-center">{error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {posts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No blog posts available at this time. Check back soon!</p>
                </div>
              )}
            </>
          )}
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest news, event announcements, and historical articles from the Brunswick Ducal Corps.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-navy-800 border border-navy-700 text-gray-200 focus:outline-none focus:border-gold-500"
                />
                <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-medium px-4 py-2 rounded-r-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;