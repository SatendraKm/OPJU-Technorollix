import React from "react";
import ButtonLanding from "./sub-component/button-landing";
import ImageCarousel from "./image-carousel";

const EventSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center font-medium text-center min-h-screen px-4 md:px-0">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        EVENTS
      </h2>
      <p className="mt-10 w-full max-w-[943px] text-center text-white text-xl font-medium font-['Poppins'] ">
        Our fest offers a diverse range of technical and non-technical events,
        ensuring there&apos;s something for everyone. From innovative tech
        showcases to fun and engaging activities, we bring together creativity,
        skills, and excitement for an unforgettable experience!
      </p>
      <ImageCarousel />

      <ButtonLanding label="Explore More" link="/events" />
    </div>
  );
};

export default EventSection;
