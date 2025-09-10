const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

function getToken() {
  return localStorage.getItem('notes_token');
}

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data;
  return data;
}

export async function signup(username, password) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return handleResponse(res);
}

export async function login(username, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return handleResponse(res);
}

export async function getNotes(q = '') {
  const token = getToken();
  const url = `${API_BASE}/notes${q ? '?q=' + encodeURIComponent(q) : ''}`;
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return handleResponse(res);
}

export async function createNote(title, content) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ title, content })
  });
  return handleResponse(res);
}

export async function updateNote(id, data) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  return handleResponse(res);
}

export async function deleteNote(id) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/notes/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return handleResponse(res);
}

export async function togglePin(id) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/notes/${id}/pin`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return handleResponse(res);
}
