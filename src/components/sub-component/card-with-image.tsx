import React from "react";
import Image from "next/image";

interface CardwithImageProps {
  imageUrl: string;
  title: string;
  scale?: number;
}

const CardwithImage: React.FC<CardwithImageProps> = ({ imageUrl, title, scale = 100 }) => {
  return (
    <div className="group flex justify-center">
      {/* Wrapper handles scale prop, while hover effect is on this div */}
      <div
        className="h-96 w-80 flex flex-col items-center rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl"
        style={{ background: "url(/card.png)", backgroundSize: "cover", transform: `scale(${scale / 100})` }}
      >
        <div className="relative mt-12 w-[238px] h-[200px]">
          <Image
            src={imageUrl}
            width={238}
            height={200}
            alt="inside image"
            className="rounded-xl object-cover mx-auto"
          />
        </div>
        <h5 className="w-[200px] h-[55px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#ffd23d] via-[#f7e7ac] to-[#A6660D] text-4xl font-bold font-['Inria Serif'] mt-4">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default CardwithImage;
