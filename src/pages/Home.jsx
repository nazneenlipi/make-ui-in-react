import React from "react";
import bannerImg from "../assets/banner/banner.jpg";
import ellapsImg from "../assets/banner/Ellipse.png";
import homeImg from "../assets/banner/home.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white pt-5 pl-5 lg:pl-16 lg:pt-20 md:pt-10 md:pl-10 rounded-lg mx-auto gap-20">
      {/* Left Section - 40% */}
      <div className="md:w-2/5 flex flex-col justify-center -mt-16">
        <div className="space-y-5">
          <h1 className="text-5xl lg:text-4xl md:text-4xl font-bold">
            We build your dream house with our passion
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet sed id elementum. Quam vel aliquam vel vulputate.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full w-fit hover:bg-gray-800">
            Get started
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mt-16">
          <div className="bg-[#C6D9E1] p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold">178K+</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold">362</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-md flex mt-6">
          <div>
            <h3 className="font-bold">Title</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img
            src={homeImg}
            alt="House"
            className="rounded-lg w-40 h-20 object-cover ml-4"
          />
        </div>
      </div>

      {/* Right Section - 60% */}
      <div className="md:w-3/5 mt-6 md:mt-0 lg:mt-10 relative">
        <img
          src={bannerImg}
          alt="Modern House"
          className="w-full object-cover h-[535px]"
        />
        <div className="absolute -top-20 right-52 rounded-full">
          <img
            src={ellapsImg}
            alt="Modern House"
            className="rounded-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
