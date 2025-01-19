"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/api/getroom");
        if (!res.ok) throw new Error("Failed to fetch rooms");
        const data = await res.json();
        setRooms(data.rooms);

        const newIds = data.rooms.map((room) => {
          return room._id;
        });

        console.log(newIds);
    
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
        setError(error.message);
      }
    };

    fetchRooms();
  }, []);

  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!rooms.length) return <div className="text-center">Loading...</div>;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className=" shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative">
              <img
                src={rooms[1].image}
                alt="Room Image"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src={rooms[2].image}
                alt="Room Image"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Room Details */}
          <div className="p-8">
            <h2 className="text-3xl font-bold  mb-4">
              {rooms[1]?.title || "Room Title"}
            </h2>
            <p className=" mb-4">
              {rooms[1]?.description || "Room description here."}
            </p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Price:</span> ₹
                {rooms[1]?.price || "N/A"}
              </li>
              <li>
                <span className="font-semibold">Size:</span> 500 sq ft
              </li>
              <li>
                <span className="font-semibold">Beds:</span> 2 Queen Beds
              </li>
              <li>
                <span className="font-semibold">Amenities:</span> Wi-Fi, TV,
                Mini Bar
              </li>
            </ul>
            <Button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition duration-300">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
