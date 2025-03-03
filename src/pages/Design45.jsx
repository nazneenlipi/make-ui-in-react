import React from "react";
import img1 from "../assets/banner/Image left.jpg";
import img2 from "../assets/banner/Image right.jpg";
import img3 from "../assets/banner/Image bottom left - left.jpg";
import img4 from "../assets/banner/Image bottom left - right.jpg";

const Design45 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto p-6">
      <div className="flex flex-col">
        <div>
            <img src={img1} alt="" />
        </div>
        <div className="flex flex-row">
            <img src={img3} alt="" className="w-[308px]" />
            <img src={img4} alt="" className="w-[308px]"/>
        </div>

      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Design45;
