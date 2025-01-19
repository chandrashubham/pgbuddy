
import React from "react";
import RoomList from '@/components/RoomList'

const HeroSection = () => {
  return (
    <>
  <section className="w-full">
  <div className="w-full h-[520px] bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfGFsbHwxfHxob21lfGVufDB8fHx8MTY5MjUyMjcyNg&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
    <div className="text-center">
      <h1 
        className="text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold bg-gray-900 bg-opacity-50 p-4 rounded-md animate-fade-in-down"
      >
        Find Your Perfect PG
      </h1>
      <p 
        className="mt-4 text-white text-lg italic bg-gray-800 bg-opacity-50 p-4 rounded-md animate-fade-in-up"
      >
        "A place to live, grow, and achieve your dreams."
      </p>
    </div>
  </div>
</section>

      <RoomList/>
      
    </>
  );
};
export default HeroSection;



