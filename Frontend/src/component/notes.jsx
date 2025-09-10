import React, { useEffect, useState } from 'react';
import { getNotes, createNote, updateNote, deleteNote, togglePin } from '../api';
import NoteForm from './noteform';
import NoteCard from './notecard';

export default function Notes({ onLogout }) {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function loadNotes(q = '') {
    setLoading(true);
    try {
      const data = await getNotes(q);
      setNotes(data);
    } catch (err) {
      console.error(err);
      if (err && err.error === 'No token, authorization denied') {
        // token expired or missing — logout
        onLogout();
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  const handleSearch = (e) => {
    const v = e.target.value;
    setQuery(v);
    loadNotes(v);
  };

  const handleSave = async (title, content) => {
    try {
      if (editing) {
        await updateNote(editing._id, { title, content });
        setMessage('Note updated');
      } else {
        await createNote(title, content);
        setMessage('Note created');
      }
      setEditing(null);
      loadNotes(query);
      setTimeout(() => setMessage(''), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this note?')) return;
    await deleteNote(id);
    loadNotes(query);
  };

  const handlePin = async (id) => {
    await togglePin(id);
    loadNotes(query);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-200">Your Notes</h2>
        <div className="flex items-center space-x-3">
          <input placeholder="Search notes..." value={query} onChange={handleSearch} className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600" />
          <button onClick={() => { localStorage.removeItem('notes_token'); localStorage.removeItem('notes_user'); onLogout(); }} className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-lg">Logout</button>
        </div>
      </div>

      <NoteForm onSave={handleSave} editing={editing} onCancel={() => setEditing(null)} />

      {message && <div className="text-sm text-green-400 my-2">{message}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {loading ? <div className="text-gray-400">Loading...</div> : (
          notes.length === 0 ? <div className="text-gray-500 col-span-full">No notes found.</div> : notes.map(n => (
            <NoteCard key={n._id} note={n} onEdit={() => setEditing(n)} onDelete={() => handleDelete(n._id)} onPin={() => handlePin(n._id)} />
          ))
        )}
      </div>
    </div>
  );
}
