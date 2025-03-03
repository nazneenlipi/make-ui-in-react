import React from "react";
import sun from "../assets/banner/Circle bg.png"
import space from "../assets/banner/unsplash_fn--TuQvBZ0.png"
const Design44 = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="max-w-md space-y-4 relative z-50">
        <img src={sun} alt="Sun" className="absolute bottom-10 right-60 w-64 z-10" />
          <h1 className="text-5xl font-bold">
            <span className="text-white">Go beyond and  </span> <br />create your space
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed idt.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
            Get started
          </button>
        </div>
        <div className="relative">
          <img src={space} alt="Solar System" className="w-[500px]" />
          <div className="absolute bottom-10 left-10 text-center">
            <h2 className="text-2xl font-bold">986K+</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>
          <div className="absolute top-10 right-10 text-center">
            <h2 className="text-2xl font-bold">256B+</h2>
            <p className="text-sm">Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
      
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg text-start">
            <div className="text-lg font-bold">★ Title</div>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design44;
