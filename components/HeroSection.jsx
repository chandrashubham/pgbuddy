'use client'
import React, { useEffect, useState } from 'react';
import RoomList from '@/components/RoomList';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1702675301342-cac2dc3ef15a?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?w=600&auto=format&fit=crop&q=60"
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [pgs, setPgs] = useState([]);
  const [filteredPgs, setFilteredPgs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const fetchAllPGs = async () => {
    try {
      const res = await fetch("/api/getpg");
      const data = await res.json();
      setPgs(data.pgs);
      setFilteredPgs(data.pgs);
    } catch (err) {
      setError("Failed to fetch PGs.");
    }
  };

  useEffect(() => {
    fetchAllPGs();
  }, []);

  // Improved strict matching function
  const deepMatch = (pg, term) => {
    const lowerTerm = term.toLowerCase().trim(); // Normalizing search term
    const fieldsToCheck = [
      pg.title, pg.location, pg.address, pg.type,
      pg.sharingType, pg.status, pg.phone, pg.email, ...(pg.amenities || [])
    ].filter(Boolean); // Remove null/undefined values

    return fieldsToCheck.some(field => field.toLowerCase().includes(lowerTerm));
  };

  // Improved Filtering Logic
  const filterPGs = () => {
    const cleanedSearchTerm = searchTerm.trim().toLowerCase();

    if (!cleanedSearchTerm) {
      setFilteredPgs([]); // If empty, don't show all PGs
      setNoResult(false);
      return;
    }

    const matches = pgs.filter(pg => deepMatch(pg, cleanedSearchTerm));

    if (matches.length > 0) {
      setFilteredPgs(matches); // Show only matching PGs
      setNoResult(false);
    } else {
      setFilteredPgs([]); // Show empty result
      setNoResult(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      filterPGs(); // Trigger search on Enter key press
    }
  };

  useEffect(() => {
    filterPGs(); // Trigger search whenever searchTerm updates
  }, [searchTerm]);

  return (
    <>
      <section
        className="w-full h-screen relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 transition-all duration-1000 ease-in-out" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down">
            Discover Your Ideal PG Space
          </h1>
          <p className="text-lg md:text-xl italic mb-8 bg-white bg-opacity-10 px-6 py-3 rounded-xl animate-fade-in-up">
            "Comfortable, Convenient & Crafted for Students"
          </p>

          <div className="w-full max-w-xl">
            <div className="flex items-center rounded-full shadow-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-orange-500 animate-fade-in">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search by location, name, type, or amenities..."
                className="w-full px-6 py-3 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 dark:placeholder-gray-400 outline-none"
              />
              <button
                onClick={filterPGs}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 transition-all"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 px-4 bg-orange-50 dark:bg-gray-900 min-h-[50vh] transition-all duration-500">
        {error && <p className="text-center text-red-500">{error}</p>}

        {noResult ? (
          <p className="text-center text-xl text-gray-700 dark:text-gray-300 mt-10">
            No PGs found for "<strong>{searchTerm}</strong>". Try a different search.
          </p>
        ) : (
          <RoomList pgs={filteredPgs} />
        )}
      </div>
    </>
  );
};

export default HeroSection;