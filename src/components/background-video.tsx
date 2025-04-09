import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-50"
      >
        <source src="./background.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.8)_100%)]"></div>
    </div>
  );
};

export default BackgroundVideo;
