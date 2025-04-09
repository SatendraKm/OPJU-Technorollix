import React from "react";
import Link from "next/link";

const ButtonLanding = ({ label, link }: { label: string; link: string }) => {
  return (
    <div className="flex justify-center mt-12">
      <Link href={link} className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
        <button
          className="relative w-full h-16 sm:h-20 px-8 sm:px-12 rounded-full bg-gradient-to-r from-[#FF2020] via-[#AA0406] to-[#8F0C11] 
                     border-[3px] border-[#f3c786] flex justify-center items-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-2xl sm:text-3xl md:text-4xl font-medium font-['Poppins'] text-center">
            {label}
          </span>
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 rounded-full border-[1px] border-[#FFC85A] opacity-100"></div>
        </button>
      </Link>
    </div>
  );
};

export default ButtonLanding;
