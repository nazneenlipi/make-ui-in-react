import React from "react";
import laptop from "../assets/banner/unsplash_muOHbrFGEQY.png";
import shape from "../assets/banner/Shape decor.png";

const Design48 = () => {
  return (
    <div className="bg-[#fbd745] text-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Top Content Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Section */}
        <div className="flex-1 max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">We are</h1>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight italic border border-black rounded-full text-black px-4 py-4 w-48">digital</h2>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">studio</h2>
        </div>

        {/* Middle Section (Image & Button) */}
        <div className="flex-1 flex flex-col items-center space-y-6">
          <img src={shape} alt="Shape" className="h-auto w-60" />
        </div>

        {/* Right Section */}
        <div className="flex-1 max-w-lg space-y-6 text-start">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start space-x-4">
              <h2 className="text-3xl font-bold">0{item}</h2>
              <div>
                <h3 className="text-lg font-bold">Title {item}</h3>
                <p className="text-gray-800 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image with Overlaying Button and Stats */}
      <div className="relative w-full">
        <img src={laptop} alt="Laptop" className="w-screen h-96 object-cover" />

        {/* Get Started Button */}
        <button className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-3 rounded-full font-semibold z-10">
          Get started
        </button>

        {/* Stats Section */}
        <div className="absolute top-4 right-10 transform -translate-x-1/2 flex space-x-6 z-10">
          {["113+", "274K", "179+"].map((stat, index) => (
            <div key={index} className="border border-black px-6 py-3 rounded-full text-lg font-bold bg-white bg-opacity-80">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design48;
