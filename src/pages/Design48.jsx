import React from "react";
import laptop from "../assets/banner/unsplash_muOHbrFGEQY.png";
import shape from "../assets/banner/Shape decor.png";
import circle from "../assets/banner/font Circle.png";
import { BsTwitter } from "react-icons/bs";
import { Facebook, Youtube } from "lucide-react";
import { PiInstagramLogo } from "react-icons/pi";
const Design48 = () => {
  return (
    <div className="bg-[#fbd745] text-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Top Content Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Section */}
        <div className="flex-1 max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We
            <span className="text-4xl md:text-5xl lg:text-5xl font-normal leading-tight pl-5">
              are
            </span>
          </h1>
          <a
            href="#_"
            class="relative inline-block px-6 py-3 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black rounded-full group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-[#fbd745] border-2 border-black rounded-full group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white text-4xl md:text-5xl lg:text-4xl font-bold">
              digital
            </span>
          </a>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            studio
          </h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus imperdiet sed id elementum.
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
        <div className="absolute top-3 right-10 transform -translate-x-1/2 flex items-center space-x-6 z-10 px-8 py-4 bg-transparent gap-10 rounded-full  before:absolute before:inset-0 before:border-2 before:border-black before:rounded-full before:-translate-x-1 before:-translate-y-1 after:absolute after:inset-0 after:border-2 after:border-black after:rounded-full after:translate-x-1 after:translate-y-1 w-80 h-16">
  {["113+", "274K", "179+"].map((stat, index) => (
    <div key={index} className="text-lg font-bold text-black">
      {stat}
    </div>
  ))}
</div>


        <img
          src={circle}
          alt=""
          className="absolute bottom-10 right-72 transform -translate-x-1/2 -translate-y-1/2  rounded-full z-10"
        />
        <div className="flex gap-3 absolute bottom-6 right-44 transform -translate-x-1/2 -translate-y-1/2  rounded-full z-10">
          <BsTwitter className="size-8 bg-white rounded-full m-2 p-2" />
          <Facebook className="size-8 bg-white rounded-full m-2 p-2" />
          <Youtube className="size-8 bg-white rounded-full m-2 p-2" />
          <PiInstagramLogo className="size-8 bg-white rounded-full m-2 p-2" />
        </div>
      </div>
    </div>
  );
};

export default Design48;
