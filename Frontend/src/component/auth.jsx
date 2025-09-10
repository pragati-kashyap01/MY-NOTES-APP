import React, { useState } from 'react';
import { login, signup } from '../api';

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = mode === 'login' ? await login(username, password) : await signup(username, password);
      // res has token and user
      onAuth(res.token, res.user);
    } catch (error) {
      setErr(error?.error || (error?.errors && error.errors[0]?.msg) || 'Auth failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4 text-center">{mode === 'login' ? 'Login' : 'Sign up'}</h2>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {err && <div className="text-sm text-red-400">{err}</div>}
        <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg">
          {loading ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Create account')}
        </button>
      </form>

      <div className="mt-4 text-center text-gray-400">
        {mode === 'login' ? (
          <span>Don't have an account? <button onClick={() => setMode('signup')} className="text-blue-400">Sign up</button></span>
        ) : (
          <span>Already have an account? <button onClick={() => setMode('login')} className="text-blue-400">Login</button></span>
        )}
      </div>
    </div>
  );
}
