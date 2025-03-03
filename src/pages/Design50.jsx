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
      className="flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="w-full px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-relaxed">
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
        <div className="mt-12 flex flex-col md:flex-row lg:flex-row gap-6">
          {/* First div - 40% width */}
          <div className="relative overflow-hidden w-full lg:w-[40%] flex flex-col gap-5">
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
              {/* Image 1 */}
              <div className="relative flex-1">
                <img
                  src={two}
                  alt="Title 1"
                  className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[190px] rounded-3xl object-cover"
                />
                <p className="absolute bottom-0 left-10 w-32 flex items-center justify-center text-black text-sm">
                  Lorem, ipsum dolor sit amet consectetur 
                </p>
              </div>
              {/* Image 2 */}
              <div className="relative flex-1">
                <img
                  src={three}
                  alt="Title 2"
                  className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[190px] rounded-3xl object-cover"
                />
                <p className="absolute bottom-0 left-10 w-32 flex items-center justify-center text-black text-sm">
                  Lorem, ipsum dolor sit amet consectetur 
                </p>
              </div>
            </div>
            {/* Image 3 */}
            <div className="relative">
              <img
                src={one}
                alt="Title 3"
                className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[190px] rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Second div - 40% width */}
          <div className="relative w-full lg:w-[40%]">
            <img
              src={five}
              alt="Title 4"
              className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[400px] rounded-3xl object-cover"
            />
            {/* <p className="absolute top-3 right-0 lg:right-4 flex items-center justify-center text-black font-semibold text-2xl">
              Title 1
            </p> */}
          </div>

          {/* Third div - 20% width */}
          <div className="relative flex flex-col gap-5 w-full lg:w-[20%]">
            {/* Image 5 */}
            <div className="relative">
              <img
                src={froun}
                alt="Title 5"
                className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[190px] rounded-3xl object-cover"
              />
              <p className="absolute bottom-0 left-10 w-32 flex items-center justify-center text-black text-sm">
                Lorem, ipsum dolor sit amet consectetur 
              </p>
            </div>
            {/* Image 6 */}
            <div className="relative">
              <img
                src={sic}
                alt="Title 6"
                className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-full lg:h-[190px] rounded-3xl object-cover"
              />
              <p className="absolute bottom-0 left-10 w-32 flex items-center justify-center text-black text-sm">
                Lorem, ipsum dolor sit amet consectetur 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design50;