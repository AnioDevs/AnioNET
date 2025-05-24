import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../types';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!id) {
          throw new Error('Post ID is required');
        }

        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load the blog post. Please try again later.');
        
        // For demo purposes, set a sample post if Supabase isn't connected
        if (id === '1') {
          setPost({
            id: '1',
            title: 'The History of the Black Brunswickers',
            content: `
# The Black Brunswickers: A Legacy of Courage

The Brunswick Ducal Corps, famously known as the "Black Brunswickers," was raised in 1809 by Frederick William, Duke of Brunswick-Wolfenbüttel. This corps was formed as a direct response to the French occupation of Brunswick-Wolfenbüttel during the Napoleonic Wars.

## Origins and Formation

When Napoleon Bonaparte's forces occupied Brunswick-Wolfenbüttel, Duke Frederick William was forced into exile. Determined to reclaim his homeland, he established the Brunswick Ducal Corps in Bohemia in 1809.

The corps was distinctively clad in black uniforms, symbolizing mourning for their occupied homeland. This striking appearance earned them the nickname "Black Brunswickers" or "Black Legion."

## Military Campaigns

The Black Brunswickers initially fought alongside Austrian forces in the War of the Fifth Coalition. After Austria's defeat, Duke Frederick William led his corps on a remarkable fighting retreat known as the "Black Brunswickers' March to the North Sea."

Their most famous engagements came later during the Hundred Days campaign following Napoleon's escape from Elba:

- **Battle of Quatre Bras** (June 16, 1815): The Brunswickers played a crucial role in holding off Marshal Ney's French forces. It was here that Duke Frederick William was fatally wounded, dying on the battlefield.

- **Battle of Waterloo** (June 18, 1815): The Brunswickers fought valiantly as part of the allied coalition that finally defeated Napoleon.

## Legacy

The Black Brunswickers are remembered for their exceptional courage, loyalty, and determination. Their distinctive black uniforms with skull-and-crossbones insignia became an enduring symbol of resistance against Napoleonic occupation.

Today, the Brunswick Ducal Corps lives on through our community, where we honor their legacy through historical roleplay and education.
            `,
            created_at: '2023-04-15T14:30:00Z',
            updated_at: '2023-04-15T14:30:00Z',
            author: 'Timothy',
            image_url: 'https://images.pexels.com/photos/6147111/pexels-photo-6147111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          });
        } else if (id === '2') {
          setPost({
            id: '2',
            title: 'Battle Tactics in the Napoleonic Era',
            content: `
# Battle Tactics in the Napoleonic Era

The Napoleonic Wars (1803-1815) revolutionized military tactics and strategy, setting standards that would influence warfare for decades to come.

## Infantry Formations

### Line Formation
The line was the standard battle formation, usually deployed three ranks deep. This maximized firepower but was vulnerable to cavalry charges and required disciplined soldiers.

### Column Formation
Columns were primarily used for movement and attacks. While sacrificing firepower, they provided greater mobility and psychological impact when charging enemy positions.

### Square Formation
The infantry square was a defensive formation specifically designed to repel cavalry attacks. Soldiers would form a hollow square facing outward in four directions, presenting a barrier of bayonets to attacking horsemen.

## Combined Arms Tactics

Napoleon's greatest innovation was the effective combination of infantry, cavalry, and artillery:

1. **Artillery** would bombard enemy positions to create gaps and disorder
2. **Infantry** would advance to engage the weakened enemy
3. **Cavalry** would exploit breakthroughs or protect the flanks

## The Corps System

Perhaps Napoleon's most significant tactical innovation was the army corps system. He organized his Grande Armée into self-contained corps, each with:

- Infantry
- Cavalry
- Artillery
- Support units

This allowed for:
- Independent operation
- Rapid movement
- Converging on the battlefield from multiple directions
- The ability to pin enemy forces while waiting for reinforcements

## Brunswick Tactics

The Brunswick Ducal Corps adopted many of these tactical innovations while maintaining their distinctive identity. Known for their discipline and determination, the Black Brunswickers were effective in both line and skirmish formations.

In our community roleplay, we strive to accurately recreate these historical tactics while providing an engaging gameplay experience.
            `,
            created_at: '2023-04-10T09:15:00Z',
            updated_at: '2023-04-10T09:15:00Z',
            author: '0utflanks',
            image_url: 'https://images.pexels.com/photos/33779/hand-pipe-tobacco-smoke.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          });
        } else if (id === '3') {
          setPost({
            id: '3',
            title: 'Upcoming Community Events',
            content: `
# Upcoming Community Events

Join us for our exciting lineup of roleplay events and community activities!

## Battle Reenactment: Quatre Bras
**Date:** June 16, 2023
**Time:** 8:00 PM GMT

We'll be recreating the historic Battle of Quatre Bras, where the Black Brunswickers played a crucial role in holding off Marshal Ney's French forces. This battle is particularly significant for our corps as it was here that Duke Frederick William of Brunswick was fatally wounded.

### Event Details:
- Full battle reenactment with allied communities
- Historically accurate unit compositions and formations
- Command structure reflecting the original chain of command
- Post-battle analysis and discussion

## Training Exercise: Infantry Tactics
**Date:** May 25, 2023
**Time:** 7:00 PM GMT

A specialized training session focusing on Napoleonic infantry tactics, including:
- Line formations
- Column attacks
- Square defense against cavalry
- Skirmishing techniques

This session is perfect for new recruits and veterans looking to refine their skills.

## Historical Lecture Series: The Brunswick Ducal Corps
**Date:** May 20, 2023
**Time:** 6:00 PM GMT

An educational presentation on the history of the original Black Brunswickers, covering:
- Formation and early campaigns
- The March to the North Sea
- Participation in the Waterloo Campaign
- Legacy and historical significance

## Community Game Night
**Date:** Every Friday
**Time:** 9:00 PM GMT

Join us for casual gaming sessions outside our regular roleplay activities. These events are great opportunities to socialize with fellow corps members in a relaxed setting.

---

All events take place on our Discord server. New members are always welcome! For more information or to sign up for specific events, please contact the event coordinators in the Discord server.
            `,
            created_at: '2023-04-05T16:45:00Z',
            updated_at: '2023-04-05T16:45:00Z',
            author: 'eastthebeast',
            image_url: 'https://images.pexels.com/photos/87080/war-soldiers-military-wehrmacht-87080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-navy-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gold-500 hover:text-gold-400 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all posts
          </Link>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
              <p className="text-red-400 text-center">{error}</p>
            </div>
          ) : post ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.image_url && (
                <div className="rounded-lg overflow-hidden shadow-lg mb-8 h-[400px]">
                  <img 
                    src={post.image_url} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="bg-navy-800 rounded-lg shadow-lg p-8 border border-navy-700">
                <h1 className="text-3xl font-serif font-bold text-gold-500 mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center text-gray-400 mb-8 space-x-6">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>By {post.author}</span>
                  </div>
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
              
              <div className="mt-12 bg-navy-800 rounded-lg p-6 border border-navy-700">
                <h3 className="text-xl font-serif font-bold text-gold-500 mb-4">Share Your Thoughts</h3>
                <textarea 
                  className="w-full bg-navy-700 border border-navy-600 rounded-md p-4 text-gray-200 focus:outline-none focus:border-gold-500 transition-colors duration-200 mb-4"
                  placeholder="Write a comment..."
                  rows={4}
                />
                <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-medium px-4 py-2 rounded-md transition-colors duration-300">
                  Post Comment
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">Post not found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;