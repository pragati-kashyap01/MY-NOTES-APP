import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Notes from './components/Notes';

export default function App() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('notes_user');
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (!user) {
      localStorage.removeItem('notes_token');
      localStorage.removeItem('notes_user');
    }
  }, [user]);

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Notes</h1>
          <p className="text-gray-400">A simple, beautiful way to capture your thoughts.</p>
        </header>

        {!user ? (
          <Auth onAuth={(token, userObj) => {
            localStorage.setItem('notes_token', token);
            localStorage.setItem('notes_user', JSON.stringify(userObj));
            setUser(userObj);
          }} />
        ) : (
          <Notes onLogout={() => setUser(null)} />
        )}
      </div>
    </div>
  );
}
