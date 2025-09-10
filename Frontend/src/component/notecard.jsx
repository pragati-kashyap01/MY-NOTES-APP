import React from 'react';

export default function NoteCard({ note, onEdit, onDelete, onPin }) {
  return (
    <div className={`p-5 rounded-xl shadow-md flex flex-col h-full border ${note.isPinned ? 'bg-green-900 border-green-600' : 'bg-gray-700 border-gray-600'}`}>
      <h3 className="text-xl font-bold text-gray-100 mb-2 break-words">{note.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow overflow-hidden">{note.content}</p>
      <div className="flex justify-end space-x-2 mt-3">
        <button onClick={onPin} title="Pin" className="text-gray-200 hover:text-green-300 p-2 rounded">
          {note.isPinned ? '📌' : '📍'}
        </button>
        <button onClick={onEdit} title="Edit" className="text-gray-200 hover:text-yellow-300 p-2 rounded">✏️</button>
        <button onClick={onDelete} title="Delete" className="text-gray-200 hover:text-red-400 p-2 rounded">🗑️</button>
      </div>
    </div>
  );
}
