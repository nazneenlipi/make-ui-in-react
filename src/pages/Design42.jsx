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
    <div className="relative bg-white max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-8 lg:gap-14">
        {/* Left Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="flex items-center gap-2 text-sm text-gray-600 justify-center lg:justify-start">
            <span className="text-lg">✦</span>
            <span>Travel · Discover</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            Find your <br /> perfect place <br /> to experience <br /> the city
          </h1>

          <p className="text-gray-700 w-full sm:w-60 mx-auto lg:mx-0 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>

          <div>
            <button className="bg-black text-white px-8 sm:px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>
        </div>

        {/* Middle Section (Main Image) with Star */}
        <div className="relative flex-1 mt-10 lg:mt-0 w-full flex justify-center">
          <img
            src={star}
            alt="Star decoration"
            className="absolute -left-4 sm:-left-12 top-0 w-16 sm:w-20 h-16 sm:h-20"
          />

          <div className="hidden md:hidden lg:block border-2 rounded-t-full p-4 border-black absolute right-0 sm:right-6 w-full max-w-xs sm:max-w-sm md:w-[405px] h-full z-0"></div>

          <div className="relative z-10">
            <img
              src={imageMain}
              alt="Japanese temple with cherry blossoms"
              className="rounded-lg w-full max-w-xs sm:max-w-sm sm:w-[350px] h-auto sm:h-[450px] mx-auto my-6"
            />
            {/* Floating Comments */}
            <div className="absolute lg:top-60 md:top-40 top-52 lg:-left-24 md:-left-24 -left-16 bg-white bg-opacity-80 p-2 sm:p-3 rounded-lg shadow-md w-40 sm:w-52 border border-black">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <img src={men1} alt="User" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
                <p className="text-xs sm:text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="absolute top-[20%] lg:-right-14 md:-right-24 -right-10 bg-white p-2 sm:p-3 rounded-lg shadow-md w-40 sm:w-52 bg-opacity-80 border border-black">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <img
                  src={men2}
                  alt="User"
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full"
                />
                <p className="text-xs sm:text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Small Images) */}
        <div className="flex flex-row sm:flex-col gap-3 sm:gap-6 mt-8 lg:mt-0">
          <img
            src={image1}
            alt="Architectural doorway"
            className="rounded-lg w-24 sm:w-32 h-32 sm:h-40 object-cover"
          />
          <img
            src={image2}
            alt="Glass ceiling structure"
            className="rounded-lg w-24 sm:w-32 h-32 sm:h-40 object-cover"
          />
          <img
            src={image3}
            alt="Ornate interior"
            className="rounded-lg w-24 sm:w-32 h-32 sm:h-40 object-cover"
          />
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-32  mt-12">
        <div
          className="bg-blue-100 p-4 sm:p-6 rounded-2xl w-full sm:w-72 flex flex-row text-start border border-black mx-auto"
          style={{ boxShadow: customShadow }}
        >
          <p className="text-lg sm:text-xl font-bold mr-2">351K</p>
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div
          className="bg-yellow-200 p-4 sm:p-6 rounded-2xl w-full sm:w-72 flex flex-row text-start border border-black mx-auto"
          style={{ boxShadow: customShadow }}
        >
          <p className="text-lg sm:text-xl font-bold mr-2">99%</p>
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div
          className="bg-pink-200 p-4 sm:p-6 rounded-2xl w-full sm:w-72 flex flex-row text-start border border-black mx-auto sm:col-span-2 lg:col-span-1"
          style={{ boxShadow: customShadow }}
        >
          <div className="flex items-center mr-2">
            <FaStar className="text-yellow-500 mr-1" />
            <p className="text-lg sm:text-xl font-bold">4.89</p>
          </div>
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design42;