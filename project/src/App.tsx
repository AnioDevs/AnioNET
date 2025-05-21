import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';
import { DbdLogo } from './components/Icons';
import Auth from './components/Auth';

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <DbdLogo className="h-10 w-auto" />
            <span className="text-xl font-bold font-teko uppercase tracking-wider">
              Dead by Daylight
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-gray-300">{session.user.email}</span>
            <button
              onClick={() => supabase.auth.signOut()}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded transition duration-300 uppercase tracking-wider font-teko"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gray-900 rounded-lg p-8 shadow-lg border border-red-900/20">
          <h2 className="text-3xl font-bold mb-6 font-teko">Welcome to The Fog</h2>
          <p className="text-gray-300 mb-4">
            You've successfully entered the realm. Your journey begins here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;