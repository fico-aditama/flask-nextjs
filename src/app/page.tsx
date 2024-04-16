"use client";

import React,  { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios('http://127.0.0.1:8000/api/user');
        // console.log(result.data);
        setUserData(result.data.name)
      } catch (err) {
        console.log("Something Wrong");
      }
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Next Js Python Flask</h3>
      {userData.map((user, index) => {return <div key={index}>{user}</div>})}
    </main>
  );
}
