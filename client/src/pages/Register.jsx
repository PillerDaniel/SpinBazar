// Register.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      setError('Minden mező kitöltése kötelező!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/auth/register', { userName, email, password });

      localStorage.setItem('token', response.data.data);  // JWT
      localStorage.setItem('userName', response.data.userName);  // Felhasználói név

      setMessage(response.data.message);
      setError('');
      navigate('/');  // Átirányítás a főoldalra
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Hiba történt a regisztráció során.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4 text-center">Regisztrációs oldal</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg">Felhasználónév</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Jelszó</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
            Regisztráció
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
