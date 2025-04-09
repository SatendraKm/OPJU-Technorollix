"use client";
import AboutSection from "@/components/aboutSection";
import BackgroundVideo from "@/components/background-video";
import CountdownTimer from "@/components/countdown-timer";
import EventSection from "@/components/eventsSection";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import Sponsors from "@/components/sponsors";
import ButtonLanding from "@/components/sub-component/button-landing";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
        <BackgroundVideo />
        <Image
          src="/technorollix.png"
          alt="technorollix"
          width={909}
          height={265}
          priority
          className="w-full max-w-[850px] md:w-[909px] h-auto p-4 mt-10 md:mt-28 sm:mt-32"
        />
        
        <p className="mt-2 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 tracking-[0.15em] text-center">
          Central India&apos;s Biggest Annual Techno-Cultural Fest
        </p>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Register Button */}
        <ButtonLanding label="Register" link="/auth/login" />
      </div>

      {/* EventsSection */}
      <section className="mt-28">
        <EventSection />
      </section>
      <section className="mx-auto">
        <AboutSection />
      </section>
      <section>
        <Sponsors />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}