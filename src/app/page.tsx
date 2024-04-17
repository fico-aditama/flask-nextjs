"use client";

import React,  { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/get-follower-count', { username, password });
      
      setUserData(response.data.follower_count);
      // Handle follower count data
    } catch (error) {
      console.error('Error:', error);
    }
  };
    
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Instagram Unfollower</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={handleClick}>
            Get Unfollower List
          </button>
        </form>

        <div className="mt-4">
        <ul className="overflow-y-auto max-h-60">
          {userData.map((user, index) => (
            <li key={index} className="text-gray-700 text-base">{user}</li>
          ))}
        </ul>
      </div>
      </div>
    </main>
  );
}
