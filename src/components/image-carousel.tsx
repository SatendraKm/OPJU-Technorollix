import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  { src: "/techno-events-logo/codigo.png", event: "codigo" },
  { src: "/techno-events-logo/antaragni.png", event: "antaragni" },
  { src: "/techno-events-logo/techlab.png", event: "techlab" },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (i: number) => {
    const totalImages = images.length;
    const relativeIndex = (i - index + totalImages) % totalImages;
    const spacing = 450;
    return {
      x: (relativeIndex - Math.floor(totalImages / 2)) * spacing,
      scale: relativeIndex === Math.floor(totalImages / 2) ? 1.2 : 0.9,
      zIndex: relativeIndex === Math.floor(totalImages / 2) ? 2 : 1,
      opacity: 1,
    };
  };

  return (
    <div className="carousel-container relative flex items-center justify-center w-full h-[600px] overflow-hidden">
      {images.map((image, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={getPosition(i)}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Link href={`/events/${image.event}`}>
            <Image
              src={image.src}
              alt={`Image ${i + 1}`}
              width={400}
              height={440}
              className="rounded-lg"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCarousel;