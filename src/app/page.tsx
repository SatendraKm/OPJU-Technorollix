"use client";

import AboutSection from "@/components/aboutSection";
import EventSection from "@/components/eventsSection";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const heroImages = [
    "/testfile/Hero1.png",
    "/testfile/Hero2.png",
    "/testfile/Hero3.png",
    "/testfile/Hero4.png",
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* PILLAR */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div
          className="
            absolute inset-y-0 left-1/2 w-10/12
            -translate-x-1/2
            sm:-translate-x-[20%]
            lg:-translate-x-[19%]
            -translate-y-[10%]
            lg:-translate-y-[15%]
          "
        >
          <Image
            src="/testfile/pillar.svg"
            alt="Divine Pillar"
            fill
            priority
            className="object-contain"
            style={{ objectPosition: "top center" }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative">
        {/* HERO */}
        <div className="w-full min-h-[100svh] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full min-h-[100svh]">
            {heroImages.map((src, i) => (
              <div
                key={i}
                className={`relative w-full h-full overflow-hidden ${
                  i > 0 ? "hidden md:block" : ""
                } ${i > 1 ? "hidden lg:block" : ""}`}
              >
                <Image
                  src={src}
                  alt={`Hero ${i + 1}`}
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MARQUEE */}
        <div className="w-full overflow-hidden bg-white py-6 sm:py-8">
          <div className="whitespace-nowrap animate-marquee text-black text-3xl sm:text-4xl lg:text-6xl font-serif font-semibold tracking-wide">
            THE DIVINE CORE &nbsp;&nbsp;&nbsp;&nbsp; THE DIVINE CORE
            &nbsp;&nbsp;&nbsp;&nbsp; THE DIVINE CORE
          </div>
        </div>

        {/* SECTIONS */}
        <section className="relative mt-20 sm:mt-28">
          <EventSection />
        </section>

        <section>
          <AboutSection />
        </section>
      </div>

      <Footer />
    </div>
  );
}
