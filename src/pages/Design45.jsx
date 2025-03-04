import React from "react";
import img1 from "../assets/banner/a.jpeg";
import img2 from "../assets/banner/b.jpeg";
import img3 from "../assets/banner/c.jpeg";
import img4 from "../assets/banner/d.jpeg";

const Design45 = () => {
  return (
    <section className="bg-[#33333380]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto p-6">
        
        {/* Left Side */}
        <div className="flex flex-col ">
          {/* Large Image with Text */}
          <div className="relative">
            <img src={img1} alt="" className="w-full h-auto" />
            <div className="absolute top-6 px-16 text-white pt-10 space-y-10">
              <h2 className="text-4xl font-bold">Design, create, <br /> and be passionate</h2>
              <p className="text-2xl font-light mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="mt-3 px-4 py-2 bg-white text-black rounded-full">
                Get started
              </button>
            </div>
          </div>

          {/* Two Small Images with Text */}
          <div className="flex flex-row ">
            <div className="relative">
              <img src={img4} alt="" className="w-[308px] h-60" />
              <div className="absolute top-3 left-3  text-[#8b8b8c] px-2 py-1 ">
                <p className="text-3xl font-bold ">02</p>
                <p className="text-sm">Growth your mind</p>
              </div>
            </div>

            <div className="relative">
              <img src={img3} alt="" className="w-[308px] h-60" />
              <div className="absolute top-3 left-3  text-[#8b8b8c] px-2 py-1 ">
                <p className="text-3xl font-bold ">03</p>
                <p className="text-sm">Discover the world</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Large Image with Text */}
        <div className="relative">
          <img src={img2} alt="" className="md:h-[620px] lg:h-[650px] h-auto w-full" />
          <div className="absolute top-6 right-6  text-[#8b8b8c] p-4 ">
            <p className="text-3xl font-bold ">04</p>
            <p className="text-sm">Discover the world</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Design45;
