"use client";
import React,{useEffect,useState} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import Image from "next/image";
import { getRegistrationCount } from "@/actions/event-actions";

const Roadies = () => {
  const managers = [
    {
      imageUrl: "/managers/Roadies/Pranjal.jpg",
      name: "Pranjal Shrivastav",
      contact: 9078942095,
    },
  ];

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("ROADIES").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="relative space-y-10 px-4 py-8">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
                  src="/background.svg"
                  alt="Scrolling Background"
                  width={500}
                  height={500}
                  className="w-full h-auto opacity-150"
                />
      </div>

      {/* Event Intro Section */}
      <EventIntro
        venue="Bus Parking Area"
        time="20-03-25, 1:30 am"
        imageUrl="/techno-events-logo/roadies.png"
        registrations={registrationCount}
        pricepool={10000}
        description="Welcome to Roadies, the ultimate test of skill and endurance! Join us at the University for an adrenaline-packed event filled with sports-inspired challenges. From obstacle courses to team relays, Roadies promises to push your limits and ignite your competitive spirit. Are you ready to conquer the road ahead?"
      />

      {/* Theme Section */}
      <section className="text-center mx-auto max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-[poppins] mb-8">
          THEME
        </h1>
        <p className="text-2xl font-['Inter'] leading-relaxed tracking-[3.75px] text-white">
          Adventure / Survival
        </p>
      </section>

      {/* Rounds Section */}
      <section className="mt-20 mx-auto max-w-5xl px-4">
        <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-[poppins] text-center mb-8">
          ROUNDS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg">
          <ul className="list-disc pl-5 text-2xl sm:text-3xl space-y-2 font-['Inter'] leading-relaxed tracking-[3.75px] text-white">
            <li>There will be 5 rounds</li>
            <li>Tasks for each round will be declared on the spot.</li>
          </ul>
        </div>
      </section>

      {/* Judgement Criteria Section */}
      <section className="mb-20 mx-auto max-w-5xl px-4">
        <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-[poppins] text-center mb-8">
          JUDGEMENT CRITERIA:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg">
          <ul className="list-disc pl-5 text-2xl sm:text-3xl space-y-2 font-['Inter'] leading-relaxed tracking-[3.75px] text-white">
            <li>Evaluation will be based on the following parameters:</li>
            <li>Physical ability of the participant.</li>
            <li>Adaptability to different challenges.</li>
          </ul>
        </div>
      </section>

      {/* Event Managers Section */}
      <section className="mx-auto max-w-5xl px-4">
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Roadies;
