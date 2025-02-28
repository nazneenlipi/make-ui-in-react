// Button.js
import React from 'react';

const Button = ({ text }) => {
    return (
        <button className="group relative bg-[#1a1a1a] text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-black transition-colors">
            <span className='text-white'>{text}</span>
            <div className="w-2 h-2 bg-[#982f3f] rounded-full" />
        </button>
    );
};

export default Button;
