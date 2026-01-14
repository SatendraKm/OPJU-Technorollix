"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { title: "Hackathon", desc: "24-hour coding battle" },
  { title: "Tech Talk", desc: "Industry expert session" },
  { title: "Design Sprint", desc: "UI/UX challenge" },
];

const EventsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setActive((p) => (p + 1) % cards.length);

  const getPosition = (
    index: number
  ): "center" | "left" | "right" | "hidden" => {
    const total = cards.length;
    if (index === active) return "center";
    if (index === (active - 1 + total) % total) return "left";
    if (index === (active + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-14 lg:py-20 overflow-hidden">
      {/* TOP TEXT */}
      <div className="max-w-xl space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Events</h1>
        <p className="text-gray-400 text-sm sm:text-base">
          From innovative tech showcases to fun and engaging activities, we
          bring together creativity, skills, and excitement for an unforgettable
          experience!
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative mt-16 sm:mt-24 w-full h-[320px] sm:h-96 flex items-center justify-center">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur p-2 sm:p-3 rounded-full"
        >
          <ChevronLeft size={24} className="sm:hidden" />
          <ChevronLeft size={32} className="hidden sm:block" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur p-2 sm:p-3 rounded-full"
        >
          <ChevronRight size={24} className="sm:hidden" />
          <ChevronRight size={32} className="hidden sm:block" />
        </button>

        {/* CARD STAGE */}
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, i) => {
            const pos = getPosition(i);

            return (
              <div
                key={i}
                className={`
                  absolute transition-all duration-700 ease-in-out

                  ${
                    pos === "center" &&
                    `
                      z-50
                      scale-110 sm:scale-125
                      -translate-y-4 sm:-translate-y-6
                      opacity-100
                    `
                  }

                  ${
                    pos === "left" &&
                    `
                      z-20
                      -translate-x-44 sm:-translate-x-72
                      scale-95
                      opacity-60
                    `
                  }

                  ${
                    pos === "right" &&
                    `
                      z-20
                      translate-x-44 sm:translate-x-72
                      scale-95
                      opacity-60
                    `
                  }

                  ${pos === "hidden" && "opacity-0"}
                `}
              >
                {/* CARD */}
                <div
                  className={`
                    relative transition-all duration-700 rounded-2xl overflow-hidden

                    ${
                      pos === "center"
                        ? `
                            w-[260px] h-[170px]
                            sm:w-[380px] sm:h-[240px]
                            bg-gray-900/60
                            border-4 border-yellow-500/30
                            shadow-2xl
                          `
                        : `
                            w-[220px] h-[150px]
                            sm:w-[300px] sm:h-[190px]
                            bg-gray-700/40
                            border border-white/10
                          `
                    }
                  `}
                >
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* TEXT */}
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end h-full">
                    <h2 className="text-lg sm:text-2xl font-bold">
                      {card.title}
                    </h2>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
