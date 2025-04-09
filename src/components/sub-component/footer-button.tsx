import React from "react";
import Link from "next/link";

const FooterButton = ({ label, link }: { label: string; link: string }) => {
  return (
    <div className="flex justify-center">
      <Link href={link} className="w-full max-w-xs sm:max-w-md">
        <button
          className="relative w-full h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#7B1113] to-[#450000] 
                     border-[3px] border-[#D4A256] flex justify-center items-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] 
                     transition-transform duration-300 ease-in-out hover:scale-105 focus:ring-4 focus:ring-[#D4A256]"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-b from-[#FEC86A] to-[#A6660D] 
                       text-lg sm:text-xl font-medium font-['Poppins'] text-center"
          >
            {label}
          </span>

          {/* Outer Glow Effect */}
          <div className="absolute inset-0 rounded-full border-[1px] border-[#FFC85A] opacity-70"></div>
        </button>
      </Link>
    </div>
  );
};

export default FooterButton;
