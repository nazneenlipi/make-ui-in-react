import React from "react";
import backgroundImg from "../assets/banner/unsplash_3Om4DHcaAc0.jpg";
import one from "../assets/banner/Frame 14594.jpg";
import two from "../assets/banner/Rectangle 82.jpg";
import three from "../assets/banner/Rectangle 83.jpg";
import froun from "../assets/banner/Rectangle 85 (1).jpg";
import five from "../assets/banner/Rectangle 85.jpg";
import sic from "../assets/banner/Rectangle 86.jpg";

const Design50 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="w-full px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-relaxed pt-16">
          We deliver beautiful and <br /> reliable designs you need
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel.
        </p>
        <button className="mt-6 mb-6 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-900">
          Get started
        </button>

        {/* Grid Section */}
        <div className="mt-12 flex gap-6">
          {/* First div - 40% width */}
          <div className="relative rounded-lg overflow-hidden shadow-md w-[40%] flex flex-col  gap-5">
            <div className="flex flex-row gap-5">
              <img
                src={two}
                alt="Title 1"
                className="flex-1 w-full h-[144px] rounded-3xl object-cover"
              />
              <img
                src={three}
                alt="Title 1"
                className="flex-1 w-full h-[144px] rounded-3xl object-cover"
              />
            </div>
            <div>
              <img
                src={one}
                alt="Title 1"
                className="w-full h-[144px] rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Second div - 40% width */}
          <div className="relative w-[40%]">
            <img
              src={five}
              alt="Title 2"
              className="w-full h-72 rounded-3xl object-cover"
            />
          </div>

          {/* Third div - 20% width */}
          <div className="relative  flex flex-col gap-5">
            {/* First image block */}
            <div className="relative">
              <img
                src={froun}
                alt="Title 3"
                className="w-full rounded-3xl h-[144px] object-cover"
              />
            </div>

            {/* Second image block */}
            <div className="relative">
              <img
                src={sic}
                alt="Title 3"
                className="w-full h-[144px] rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design50;
