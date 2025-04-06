"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const PgsPage = () => {
  const [pgs, setPgs] = useState([]);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchpgs = async () => {
      try {
        const res = await fetch("/api/getpg"); // API endpoint
        if (!res.ok) throw new Error("Failed to fetch pgs");
        const data = await res.json();
        setPgs(data.pgs);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchpgs();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!pgs.length) return <div>Loading pgs...</div>;

  // Handle Book Now button click
  const handleBookNow = (slug) => {
    if (session && session.user) {
      router.push(`/roomList`); // redirect to detail page
    } else {
      router.push("/api/auth/signin"); // redirect to login
    }
  };

  return (
    <div
      key="pgs"
      className="flex flex-wrap justify-center items-center gap-6 overflow-hidden"
    >
      {pgs.map((pg) => (
        <section
          key={pg._id}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md p-4"
        >
          <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-[1.02] overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                className="w-full h-56 object-cover object-center transition-all duration-300 group-hover:scale-105"
                src={pg.image}
                alt="PG accommodation"
              />
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                PG
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {pg.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                {pg.description}
              </p>

              {/* Facilities */}
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Facilities:
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>WiFi</li>
                  <li>Meals</li>
                  <li>Laundry</li>
                </ul>
              </div>

              {/* Location */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Location: <span className="font-normal">{pg.location}</span>
                </h3>
              </div>

              {/* Book Now Button */}
              <div className="text-center">
                <Button
                  onClick={() => handleBookNow()} 
                  className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PgsPage;
