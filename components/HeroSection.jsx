'use client'
import React from "react";
import RoomList from '@/components/RoomList';
import { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFpZCUyMGd1ZXN0JTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1702675301342-cac2dc3ef15a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaWQlMjBndWVzdCUyMHJvb21zfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBhaWQlMjBndWVzdCUyMHJvb21zfGVufDB8fDB8fHww"
 
];



const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
 <section
      className="w-full h-screen relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-all duration-1000 ease-in-out" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down">
          Discover Your Ideal PG Space
        </h1>
        <p className="text-lg md:text-xl italic mb-8 bg-white bg-opacity-10 px-6 py-3 rounded-xl animate-fade-in-up">
          "Comfortable, Convenient & Crafted for Students"
        </p>

        {/* Search Box */}
        <div className="w-full max-w-xl">
          <div className="flex items-center rounded-full shadow-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-orange-500 animate-fade-in">
            <input
              type="text"
              placeholder="Search by location, college, or area..."
              className="w-full px-6 py-3 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 dark:placeholder-gray-400 outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 transition-all">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>



      <RoomList/>
      
    </>
  );
};
export default HeroSection;



