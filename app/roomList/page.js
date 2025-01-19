"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react"; // Import useSession hook for authentication
import { useRouter } from "next/navigation"; // Import useRouter for redirect

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const { data: session } = useSession(); // Get user session info
  const router = useRouter(); // Router to handle navigation

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/api/getroom"); // API to fetch rooms data
        if (!res.ok) throw new Error("Failed to fetch rooms");
        const data = await res.json();
        setRooms(data.rooms); // Populate the rooms data
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
        setError(error.message);
      }
    };

    fetchRooms();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!rooms.length) return <div>Loading...</div>;

  // Handle the "Show More" button click
  const handleShowMore = (roomId) => {
    if (session && session.user) {
      // If the user is authenticated, redirect to the room's details page
      router.push(`/room/${roomId}`);
     
    } else {
      // If the user is not authenticated, redirect to the sign-in page
      router.push("/api/auth/signin");
    }
  };

  return (
    <ul className="flex flex-wrap justify-center items-center gap-6 overflow-hidden">
      {rooms.map((room) => (
        <li key={room._id} className="body-font">
          <div className="container px-5 w-[28vw] py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div>
                <div className="h-full border border-gray-400 shadow-md rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={room.image}
                    alt="PG Room"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium mb-3">
                      {room.name}
                    </h1>
                    <p className="leading-relaxed mb-3">{room.description}</p>
                    <div className="mt-4">
                      <h3 className="text-sm font-medium">Location:</h3>
                      <p className="text-sm">{room.location}</p>
                    </div>

                    <div className="flex items-center flex-wrap">
                      <button
                      
                        onClick={() => handleShowMore(room._id)}// Trigger the handleShowMore function on click
                        className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Show More...
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
