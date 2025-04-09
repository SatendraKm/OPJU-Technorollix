"use client";
import ButtonLanding from "@/components/sub-component/button-landing";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
      <div className="absolute top-0 w-full h-full pointer-events-none bg-fit -z-10 ">
          <Image
            width={500}
            height={500}
            src="/homebackground.svg"
            className="w-full h-auto absolute opacity-100"
            alt="Scrolling Background"
          />
        </div>
        <Image
          src="/aimbiation-logo.svg"
          alt="aimbiation-logo"
          width={909}
          height={265}
          priority
          className="w-full max-w-[850px] md:w-[909px] h-auto p-4 mt-10 md:mt-28 sm:mt-32"
        />
        
        <p className="mt-2 text-2xl md:text-4xl font-protest-revolution text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 tracking-[0.15em] text-center">
          Where Strategy Meets Celebration
        </p>

        {/* Register Button */}
        <ButtonLanding label="Register" link="/auth/login" />
      </div>

      {/* EventsSection */}
      <section className="mt-4">
      <div className="text-white flex flex-col items-center justify-center font-medium text-center min-h-screen px-4 md:px-0">
      <h2 className="text-5xl mt-16 bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        EVENTS
      </h2>
      <p className="mt-10 w-full max-w-[943px] text-center text-white text-xl font-medium font-['Poppins'] ">
        Our fest offers a diverse range of technical and non-technical events,
        ensuring there&apos;s something for everyone. From innovative tech
        showcases to fun and engaging activities, we bring together creativity,
        skills, and excitement for an unforgettable experience!
      </p>
    {/* here three events of aimbiation will be added */}
      <div className="flex flex-col md:flex-row justify-center items-center">
      <Image
        src="/aimbiation-events-logo/reelandroles.png"
        width={500}
        height={500}
        alt="Events"
        className="w-full max-w-[450px] h-auto mt-10"
      />
      <Image
        src="/aimbiation-events-logo/riwayat.png"
        width={500}
        height={500}
        alt="Events"
        className="w-full max-w-[500px] h-auto mt-10"
      />
      <Image
        src="/aimbiation-events-logo/adomania.png"
        width={500}
        height={500}
        alt="Events"
        className="w-full max-w-[450px] h-auto mt-10"
      />
      </div>
      <ButtonLanding label="Explore More" link="/events" />
    </div>
      </section>
      <section className="mx-auto my-40">
        <div className="flex flex-col md:flex-row mt-10 mx-6 items-center justify-center text-center md:text-left">
                <div className="mr-0 md:mr-20 mb-10 md:mb-0 w-full max-w-[500px]">
                  <Image
                    src="/aimbiation-poster.svg"
                    alt="aimbiation poster"
                    width={500}
                    height={300}
                    className="object-contain"
                  />
                </div>
        
                <div className="text-center md:text-left">
                  <h5 className="text-4xl text-white font-semibold">aiMBiAtion 2025</h5>
                  <p className="text-xl font-medium tracking-[3.4px] text-[#CFCFCF] mt-4 w-full max-w-[578px]">
                  aiMBiAtion isn&apos;t just a management fest—it&apos;s a space where ideas take flight, creativity finds it&apos;s voice, and competition turns into camaraderie. Hosted by OP Jindal University,  t&apos;s a perfect blend of business, culture, and fun, bringing together dreamers, doers, and disruptors for an experience 
                    <Link href="/about">
                      <b className="text-[#FF9D00] cursor-pointer ml-2 hover:underline">Read more</b>
                    </Link>
                  </p>
                </div>
              </div>
      </section>
    </div>
  );
}