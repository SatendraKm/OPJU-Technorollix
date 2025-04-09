import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLanding from "./sub-component/button-landing";

const AboutSection = () => {
  return (
    <div className="text-white flex flex-col text-center items-center mt-32 min-h-screen px-4 md:px-0">
      {/* Title */}
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        ABOUT
      </h2>
      <p className="w-full max-w-[943px] pt-10 text-xl uppercase">
        A fusion of technology, culture, and fun-filled activities, crafted to
        inspire and engage every participant!
      </p>

      {/* First Event: Technorollix 2025 */}
      <div className="flex flex-col md:flex-row mt-10 mx-6 items-center justify-center text-center md:text-left">
        <div className="mr-0 md:mr-20 mb-10 md:mb-0 w-full max-w-[500px]">
          <Image
            src="/technorollixlogo.png"
            alt="Technorollix 2025 Logo"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="text-center md:text-left">
          <h5 className="text-4xl font-medium">TECHNOROLLIX 2025</h5>
          <p className="text-xl font-medium tracking-[3.4px] text-[#CFCFCF] mt-4 w-full max-w-[578px]">
            Technorollix is Central India&apos;s biggest techno-cultural
            extravaganza, bringing together innovation, creativity, and
            entertainment on a grand scale. With a diverse mix of technical
            competitions, cultural performances, and engaging workshops, it’s a
            platform where technology meets artistry. Join us for an
            electrifying experience that pushes boundaries and celebrates the
            spirit of innovation! 
            <Link href="/about">
              <b className="text-[#FF9D00] cursor-pointer ml-2 hover:underline">Read more</b>
            </Link>
          </p>
        </div>
      </div>

      {/* Second Event: About OPJU */}
      <div className="flex flex-col md:flex-row mt-14 mb-8 mx-8 items-center justify-center text-center md:text-left">
        <div className="order-1 md:order-2 ml-0 md:ml-20 mb-10 md:mb-0 w-full max-w-[600px]">
          <Image
            src="/opjucampus.jpg"
            alt="OPJU Campus "
            width={600}
            height={400}
            className="border-[6px] border-transparent bg-clip-padding object-cover"
            style={{
              borderImage:
                "linear-gradient(to bottom right, #FBDA7A, #7C5114) 1",
            }}
          />
        </div>

        <div className="order-2 md:order-1 text-center md:text-left">
          <h5 className="text-4xl font-medium">ABOUT OPJU</h5>
          <p className="text-xl font-medium tracking-[3.4px] text-[#CFCFCF] mt-4 w-full max-w-[578px]">
            Founded by the Jindal Education and Welfare Society, OP Jindal University (OPJU) was set up to bring high-quality education to its students based on a world-class curriculum, the latest teaching methodology, and committed faculty members. The multidisciplinary university aims to develop young professionals and future leaders who will not only power growth and development in the state but also make a mark globally.  
            <Link href="/about">
              <b className="text-[#FF9D00] cursor-pointer ml-2 hover:underline">Read more</b>
            </Link>
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <ButtonLanding label="Know More" link="/about" />
    </div>
  );
};

export default AboutSection;
