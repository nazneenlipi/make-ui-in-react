import React from "react";
import img1 from "../assets/banner/a.jpeg";
import img2 from "../assets/banner/b.jpeg";
import img3 from "../assets/banner/c.jpeg";
import img4 from "../assets/banner/d.jpeg";

const Design45 = () => {
  return (
    <section className="bg-[#33333380]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto p-6">
      <div className="flex flex-col">
        <div>
            <img src={img1} alt="" />
        </div>
        <div className="flex flex-row">
            <img src={img3} alt="" className="w-[308px] h-60" />
            <img src={img4} alt="" className="w-[308px] h-60"/>
        </div>

      </div>
      <div>
        <img src={img2} alt="" className="md:h-[620px] lg:h-[650px] h-auto w-full" />
      </div>
    </div>
    </section>
  );
};

export default Design45;
