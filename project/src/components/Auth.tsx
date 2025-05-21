import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { DbdLogo } from './Icons';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3391930/pexels-photo-3391930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="flex flex-col items-center mb-8">
          <DbdLogo className="h-16 w-auto mb-4" />
          <h1 className="text-4xl font-bold text-white font-teko tracking-wider">
            DEAD BY DAYLIGHT
          </h1>
        </div>

        <div className="bg-gray-900 bg-opacity-95 p-8 rounded-lg shadow-2xl border border-red-900/20">
          <h2 className="text-3xl font-bold text-white mb-6 font-teko tracking-wide text-center">
            {isSignUp ? 'JOIN THE FOG' : 'RETURN TO THE TRIAL'}
          </h2>
          
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-white p-4 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2 font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-700 text-white p-4 rounded font-bold hover:bg-red-800 transition duration-300 disabled:opacity-50 uppercase tracking-wider font-teko text-xl"
            >
              {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-gray-400 hover:text-red-500 transition duration-300"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}