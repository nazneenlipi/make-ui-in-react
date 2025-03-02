import React from 'react';
import picture from "../assets/banner/Picture.png"
const Design49 = () => {
  return (
    <div className="relative bg-yellow-200 min-h-screen flex items-center p-6">
      {/* Small logo/icon in top left */}
      <div className="absolute top-8 left-8">
        <div className="rounded-full border border-black p-3 w-12 h-12 flex items-center justify-center relative">
          <div className="text-xs text-black absolute inset-0 flex items-center justify-center">
            <span className="transform -rotate-45 block absolute text-[8px] w-full text-center">JOIN THE JOURNEY</span>
          </div>
          <div className="h-5 w-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto">
        {/* Left side content */}
        <div className="flex flex-col justify-center space-y-6 p-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
            Let yourself shine through
          </h1>
          
          <p className="text-black max-w-md font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Faucibus in libero risus semper 
            habitant arcu eget. Et integer.
          </p>
          
          <div>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Get started
            </button>
          </div>
        </div>
        
        {/* Right side image area - using placeholder */}
        <div className="relative flex justify-center">
          {/* This would be where the image would go */}
          <div className="relative">
            <img 
              src={picture}
              alt="Person with flower crown" 
              className="rounded-lg"
            />
            
            {/* Curved text at bottom right */}
            <div className="absolute bottom-16 right-0 transform rotate-12">
              <div className="bg-yellow-100 p-2 rounded shadow-sm text-xs max-w-[180px]">
                <p className="text-black font-light">
                  Be yourself. Let who you are, what you are, speak for itself.
                </p>
              </div>
            </div>
            
            {/* Curved text at bottom left */}
            <div className="absolute bottom-32 left-0 transform -rotate-12">
              <div className="bg-yellow-100 p-2 rounded shadow-sm text-xs max-w-[180px]">
                <p className="text-black font-light">
                  Beauty is about enhancing what you have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design49;