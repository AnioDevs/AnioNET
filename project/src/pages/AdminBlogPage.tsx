import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import PageTitle from '../components/PageTitle';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { BlogPost } from '../types';

const AdminBlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: ''
  });
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
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
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For demo purposes, we'll just simulate the creation/update
      alert(editingPostId 
        ? `Post updated successfully: ${formData.title}` 
        : `Post created successfully: ${formData.title}`);
      
      // Reset form after submission
      setFormData({
        title: '',
        content: '',
        image_url: ''
      });
      setEditingPostId(null);
      
      // In a real implementation, we would use Supabase to create/update the post
      // and then refresh the posts list
    } catch (err) {
      console.error('Error submitting post:', err);
      alert('Failed to save the post. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      content: post.content,
      image_url: post.image_url || ''
    });
    setEditingPostId(post.id);
    
    // Scroll to the form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }
    
    try {
      // For demo purposes, we'll just simulate the deletion
      alert(`Post deleted successfully: ID ${id}`);
      
      // In a real implementation, we would use Supabase to delete the post
      // and then refresh the posts list
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Failed to delete the post. Please try again later.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <PageTitle 
        title="Admin Blog Management" 
        subtitle="Create, edit, and manage blog posts for the Brunswick Ducal Corps"
      />
      
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy-800 rounded-lg shadow-lg p-8 border border-navy-700 mb-12">
              <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6">
                {editingPostId ? 'Edit Post' : 'Create New Post'}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="title" className="block text-white font-medium mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full bg-navy-700 border border-navy-600 rounded-md p-3 text-white focus:outline-none focus:border-gold-500 transition-colors duration-200"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="content" className="block text-white font-medium mb-2">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="w-full bg-navy-700 border border-navy-600 rounded-md p-3 text-white focus:outline-none focus:border-gold-500 transition-colors duration-200"
                    rows={10}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="image_url" className="block text-white font-medium mb-2">
                    Image URL (optional)
                  </label>
                  <input
                    type="url"
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    className="w-full bg-navy-700 border border-navy-600 rounded-md p-3 text-white focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-4">
                  {editingPostId && (
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          title: '',
                          content: '',
                          image_url: ''
                        });
                        setEditingPostId(null);
                      }}
                      className="px-4 py-2 border border-navy-600 rounded-md text-gray-300 hover:bg-navy-700 focus:outline-none transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Saving...' : editingPostId ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </form>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6 flex items-center">
              <span className="mr-2">Manage Posts</span>
              <span className="bg-navy-700 text-xs text-gray-300 px-2 py-1 rounded-full">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
              </span>
            </h2>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
              </div>
            ) : error ? (
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div 
                    key={post.id}
                    className="bg-navy-800 rounded-lg p-4 border border-navy-700 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-white font-medium">{post.title}</h3>
                      <div className="text-gray-400 text-sm">
                        By {post.author} | {formatDate(post.created_at)}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 text-gray-300 hover:text-gold-500 transition-colors duration-200"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors duration-200"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
                
                {posts.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-400">No posts available. Create your first post!</p>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md text-navy-900 bg-gold-500 hover:bg-gold-400 focus:outline-none transition-colors duration-300"
                    >
                      <Plus size={16} className="mr-2" />
                      Create Post
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBlogPage;