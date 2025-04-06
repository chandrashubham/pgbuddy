"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoomDetails() {
  const { slug } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`/api/getroom/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch room");
        const data = await res.json();
        setRoom(data.room);
      } catch (error) {
        console.error("Error fetching room:", error.message);
        setError(error.message);
      }
    };

    if (slug) fetchRoom();
  }, [slug]);

  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (!room) return <div className="text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              {room.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-36 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold text-gray-800">{room.title}</h2>
              <span className="text-xl font-semibold text-orange-500">
                ₹{room.price}/month
              </span>
            </div>

            <p className="text-gray-600">{room.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
              <div>
                <span className="font-semibold">Location:</span> {room.location}
              </div>
              <div>
                <span className="font-semibold">Address:</span> {room.address}
              </div>
              <div>
                <span className="font-semibold">Sharing Type:</span> {room.sharingType}
              </div>
              <div>
                <span className="font-semibold">Gender:</span> {room.type}
              </div>
              <div>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`font-medium ${
                    room.status === "Available" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {room.status}
                </span>
              </div>
              <div>
                <span className="font-semibold">Slug:</span> {room.slug}
              </div>
            </div>

            {/* Contact */}
            <div className="border-t pt-6 text-gray-800">
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <div className="flex flex-col gap-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone size={16} /> {room.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> {room.email}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> {room.location}
                </p>
              </div>
            </div>

            {/* Amenities */}
            {room.amenities?.length > 0 && (
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
                  {room.amenities.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-200 px-3 py-1 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 mt-6 rounded-full transition duration-300">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
