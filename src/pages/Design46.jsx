import React from 'react';
import backgroundImg from "../assets/banner/bg.jpg";

const Design46 = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center w-full h-screen min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <div className="max-w-lg text-center mb-16 items-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Walk through the world with us
        </h1>
        
        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cursus imperdiet sed id elementum. Quam vel aliquam sit 
          vulputate. Faucibus nec gravida ipsum pulvinar vel.
        </p>
        
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Get started
        </button>
      </div>
    </div>
  );
};
export default Design46;