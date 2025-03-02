import React from "react";
import hero from "../assets/banner/hero image.png";
import { titleData } from "../lib/data";
import ellips from "../assets/banner/Ellipse.png"
const Design47 = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full  py-12 md:py-16 lg:py-20 max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Design products
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-black pl-10">
                Deliver experience
              </h2>
            </div>

            <div className="border-l-4 border-black pl-7">
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
                Faucibus nec gravida ipsum pulvinar vel.
              </p>
              <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-900">
                Get started
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <img src={hero} alt="Polaroid Camera" className="w-96 h-auto" />
            <img src={ellips} alt="" className="rounded-full h-20 w-20"/>
          </div>
         
        </div>
        {/* Titles Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {titleData.map((item) => (
            <div
              key={item.id}
              className={`p-6 ${item.bgColor} rounded-lg shadow-sm`}
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design47;
