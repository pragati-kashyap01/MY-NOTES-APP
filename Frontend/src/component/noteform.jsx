import React, { useEffect, useState } from 'react';

export default function NoteForm({ onSave, editing, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setContent(editing.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSave(title.trim(), content.trim());
    setTitle('');
    setContent('');
  };

  return (
    <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">{editing ? 'Edit Note' : 'Add a New Note'}</h3>
      <form onSubmit={submit} className="space-y-3">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note Title" className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Note Content" rows={4} className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white" />
        <div className="flex justify-end space-x-2">
          {editing && <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>}
          <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">{editing ? 'Update Note' : 'Save Note'}</button>
        </div>
      </form>
    </div>
  );
}
