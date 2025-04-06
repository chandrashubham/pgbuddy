"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/api/getroom");
        if (!res.ok) throw new Error("Failed to fetch rooms");
        const data = await res.json();
        setRooms(data.rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
        setError(error.message);
      }
    };

    fetchRooms();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!rooms.length) return <div>Loading...</div>;

  // Redirect to single room page
  const handleShowMore = (slug) => {
    if (session && session.user) {
      router.push(`/room/${slug}`);
    } else {
      router.push("/api/auth/signin");
    }
  };

  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 py-12">
      {rooms.map((room) => (
        <li key={room._id}>
          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out">
            {/* Room Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={room.image}
                alt="PG Room"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{room.name}</h2>

              {/* Price & Sharing */}
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>💸 ₹{room.price}/month</span>
                <span>👥 {room.sharingType}</span>
              </div>

              {/* Location */}
              <div className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                <svg
                  className="w-4 h-4 text-orange-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 21l-4.243-4.343m5.657-2.829a4 4 0 11-5.657-5.657 4 4 0 015.657 5.657z"
                  />
                </svg>
                {room.location}
              </div>

              {/* Amenities Preview */}
              <div className="flex flex-wrap gap-2 text-xs mt-2">
                {room.amenities.slice(0, 3).map((item, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 dark:bg-orange-400/20 text-orange-600 dark:text-orange-300 px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
                {room.amenities.length > 3 && (
                  <span className="text-gray-400 dark:text-gray-500">+ more</span>
                )}
              </div>

              {/* Show More Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleShowMore(room.slug)} // ✅ use slug instead of _id
                  className="group/showmore relative flex items-center text-orange-500 font-semibold text-sm hover:text-orange-600 transition"
                >
                  Show More
                  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full border border-orange-500 group-hover/showmore:bg-orange-500 transition-transform duration-300 transform group-hover/showmore:rotate-90">
                    <svg
                      className="w-3 h-3 text-orange-500 group-hover/showmore:text-white transition"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
