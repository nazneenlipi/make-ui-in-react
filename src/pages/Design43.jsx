import React from "react";
import design1 from "../assets/banner/design1.png";
import { cardData } from "../lib/data";
import ellips  from "../assets/banner/Ellipse.png";
const Design43 = () => {
  return (
    <div className="flex justify-center items-end min-h-screen bg-[#efaf64] relative text-white">
      <div className="container flex flex-col md:flex-row items-center relative z-50">
        {/* 70% Section */}
        <div className="w-full md:w-[70%] flex flex-col justify-center text-center md:text-left p-8">
          <div className="flex items-center gap-5 ">
            <h2 className="text-7xl font-normal leading-snug">Design </h2>
            <img src={ellips} alt="" className="rounded-full top-0 w-24 h-24" />
          </div>
          <h2 className="text-6xl font-normal leading-snug">what you love</h2>
          <p className="mt-6 text-lg max-w-xl text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam vel
            aliquam sit vulputate consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Quam vel aliquam sit
            vulputate.
          </p>
          <button className="w-40 bg-orange-500 px-8 py-3 rounded-full mt-6 text-lg hover:bg-orange-600 transition">
            Get started
          </button>
          <div className="flex gap-6 mt-10">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#faefe3] p-6 rounded-xl shadow-md w-40 hover:shadow-lg transition"
              >
                <h2 className="text-orange-600 "> {card.icon}</h2>
                <h3 className="font-bold text-lg text-orange-600">
                  {card.title}
                </h3>
                {/* </div> */}
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 30% Section */}
        <div className="relative flex flex-col items-center">
          {/* Gradient background */}
          <div className="w-full md:w-[27vw] h-[500px] flex justify-center items-center bg-gradient-to-b from-[#f0b672] to-[#f8dcbb] rounded-b-full -mb-64"></div>
          {/* Image below gradient div */}
          <img src={design1} alt="Character" className="max-w-sm -mt-24" />
        </div>
      </div>

      {/* White background at bottom */}
      <div className="bg-white w-full h-28 absolute bottom-0 z-0"></div>
    </div>
  );
};

export default Design43;
