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

  const getPosition = (index: number): "center" | "left" | "right" | "hidden" => {
  const total = cards.length;
  if (index === active) return "center";
  if (index === (active - 1 + total) % total) return "left";
  if (index === (active + 1) % total) return "right";
  return "hidden";
};

  return (
    <section className="relative z-20 w-full h-screen bg-black text-white px-16 py-14 overflow-hidden">

      {/* TOP LEFT TEXT */}
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="text-gray-400">
          From innovative tech showcases to fun and engaging activities, we bring together creativity, skills, and excitement for an unforgettable experience!
        </p>
      </div>

      {/* SLIDER AREA */}
      <div className="relative mt-24 w-full h-96 flex items-center justify-center">

        {/* ⬅️ LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 z-40 bg-white/10 hover:bg-white/20 backdrop-blur p-3 rounded-full"
        >
          <ChevronLeft size={32} />
        </button>

        {/* ➡️ RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 z-40 bg-white/10 hover:bg-white/20 backdrop-blur p-3 rounded-full"
        >
          <ChevronRight size={32} />
        </button>

        {/* CARD STAGE */}
        <div className="relative w-full h-72 flex items-center justify-center">

          {cards.map((card, i) => {
            const pos = getPosition(i);

            return (
              <div
                key={i}
                className={`
                  absolute transition-all duration-700 ease-in-out
                  ${pos === "center" && "z-30 scale-110 translate-x-0 opacity-100"}
                  ${pos === "left" && "z-20 scale-95 -translate-x-72 opacity-70"}
                  ${pos === "right" && "z-20 scale-95 translate-x-72 opacity-70"}
                  ${pos === "hidden" && "opacity-0"}
                `}
              >
                {/* CARD */}
                <div
                  className={`
                    relative p-6 transition-all duration-700 rounded-xl
                    ${
                      pos === "center"
                        ? "bg-gray-900/40 text-white shadow-2xl border-4 border-yellow-600/20 w-[340px] h-[220px]"
                        : "bg-gray-600/40 text-gray-300 backdrop-blur border border-white/10 w-[300px] h-[180px]"
                    }
                  `}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-xl" />

                  {/* Text */}
                  <div className="relative z-10 flex flex-col justify-end h-full">
                    <h2 className="text-xl font-bold">{card.title}</h2>
                    <p className="mt-1 text-sm text-gray-300">{card.desc}</p>
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
