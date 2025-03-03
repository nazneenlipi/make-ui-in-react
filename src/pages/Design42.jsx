import React from "react";
import { FaStar } from "react-icons/fa";
import imageMain from "../assets/banner/Image.png";
import image1 from "../assets/banner/1 (1).png";
import image2 from "../assets/banner/2 (1).png";
import image3 from "../assets/banner/3 (1).png";
import men1 from "../assets/banner/Ellipse 169 (1).png";
import men2 from "../assets/banner/Ellipse 169.png";
import star from "../assets/banner/Soft Star.png";

const Design42 = () => {
    const customShadow = "10px 10px 5px 0px rgba(0,0,0,0.75)";
  return (
    <div className="relative bg-white max-w-6xl mx-auto py-12 ">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="flex items-center gap-2 text-sm text-gray-600 lg:justify-start justify-center">
            <span className="text-lg">✦</span>
            <span>Travel · Discover</span>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            Find your <br /> perfect place <br /> to experience <br /> the city
          </h1>
          
          <p className="text-gray-700 w-60 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
          
          <div>
            <button className="bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>
      
        </div>
        
        {/* Middle Section (Main Image) with Star */}
        <div className="relative flex-1">
          <img src={star} alt="Star decoration" className="absolute -left-12 top-0 w-20 h-20" />
          
          <div className="border-2 rounded-t-full p-4 border-black  absolute right-6 w-[428px] h-full z-0"></div>
          
          <div className="relative z-10">
            <img src={imageMain} alt="Japanese temple with cherry blossoms" className="rounded-lg w-96 h-[450px] mx-auto my-6" />
            
            {/* Floating Comments */}
            <div className="absolute top-60 -left-16 bg-white bg-opacity-80 p-3 rounded-lg shadow-md w-52 border border-black">
              <div className="flex items-start gap-2">
                <img src={men1} alt="User" className="w-6 h-6 rounded-full" />
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            
            <div className="absolute top-[20%] -right-10 bg-white p-3 rounded-lg shadow-md w-52 bg-opacity-80 border border-black">
              <div className="flex items-start gap-2">
                <img src={men2} alt="User" className="w-6 h-6 rounded-full" />
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section (Small Images) */}
        <div className="flex flex-col gap-6">
          <img src={image1} alt="Architectural doorway" className="rounded-lg w-32 h-32 object-cover" />
          <img src={image2} alt="Glass ceiling structure" className="rounded-lg w-32 h-32 object-cover" />
          <img src={image3} alt="Ornate interior" className="rounded-lg w-32 h-32 object-cover" />
        </div>
      </div>
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-center text-start gap-24 mt-12">
          <div 
          className="bg-blue-100 p-6 rounded-2xl w-72  flex flex-row text-start border border-black"
          style={{ boxShadow: customShadow }}
        >
          <p className="text-xl font-bold mr-2">351K</p>
          <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div 
          className="bg-yellow-200 p-6 rounded-2xl w-72  flex flex-row text-start border border-black"
          style={{ boxShadow: customShadow }}
        >
          <p className="text-xl font-bold mr-2">99%</p>
          <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div 
          className="bg-pink-200 p-6 rounded-2xl w-72  flex flex-row text-start border border-black"
          style={{ boxShadow: customShadow }}
        >
          <div className="flex items-center mr-2">
            <FaStar className="text-yellow-500 mr-1" />
            <p className="text-xl font-bold">4.89</p>
          </div>
          <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Design42;