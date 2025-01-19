"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

const pgsPage = () => {
  const [pgs, setPgs] = useState([]);
  const [error, setError] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchpgs = async () => {
      try {
        const res = await fetch("/api/getpg"); //my api endpoint
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

  return (
    <div
      key="pgs"
      className="flex flex-wrap justify-center items-center gap-6 overflow-hidden"
    >
      {pgs.map((pg) => (
        <section key={pg._id} className="body-font">
          <div className="container px-5 w-[28vw] py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="h-full border border-gray-400 shadow-md rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={pg.image}
                  alt="pg"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium mb-3">
                    {pg.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{pg.description}</p>

                  <div className="">
                    <h3 className="text-sm font-medium">Facilities:</h3>
               
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">
                      Location: {pg.location}
                    </h3>
                  </div>

                  {session && session.user ? (
                    <div className="flex items-center flex-wrap mt-3">
                      <Link
                        href={`/room/${pg._id}`} // Dynamic pg page
                        className="inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        <Button className="bg-orange-400 hover:bg-orange-600">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center flex-wrap mt-3">
                      <Link
                        href="/api/auth/signin" // Redirect to sign-in if not logged in
                        className="inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        <Button className="bg-orange-400 hover:bg-orange-600">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default pgsPage;
