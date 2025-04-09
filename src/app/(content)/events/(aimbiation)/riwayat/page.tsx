"use client";
import React, { useEffect, useState } from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import Image from "next/image";
import RoundSection from "@/components/sub-component/RoundSection";
import { getRegistrationCount } from "@/actions/event-actions";

const SectionTitle = ({ text }: { text: string }) => (
  <h2 className="text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8 uppercase tracking-[3.75px]">
    {text}
  </h2>
);

const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#33010140] p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
    {children}
  </div>
);

const Page = () => {
  const managers = [
    {
      imageUrl: "/managers/riwayat/soumyayadavriwayat.jpg",
      name: "Somya Yadav",
      contact: 7389067920,
    },
    {
      imageUrl: "/managers/riwayat/priyasinghriwayat.jpg",
      name: "Priya Singh",
      contact: 9893723614,
    },
  ];

  const reasons = [
    {
      title: "Skill Enhancement",
      description:
        "Engage in creative challenges that refine your design, modeling, and event coordination abilities.",
    },
    {
      title: "Exposure and Recognition",
      description:
        "Showcase your talent to a broader audience, gaining visibility and potential accolades.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals, peers, and mentors, fostering valuable relationships.",
    },
    {
      title: "Personal Growth",
      description:
        "Build confidence, resilience, and adaptability by stepping out of your comfort zone.",
    },
    {
      title: "Career Advancement",
      description:
        "Achievements in such events can enhance your portfolio, making you stand out to potential employers or collaborators.",
    },
  ];
  const rounds= [
   { title:"Round-1",
            description:"Introduction + Outfit Info"
          
  },{title:"Round-2",
            description:"Introduction + Outfit Info + Task"
         
          },{            title:"Round-3",
            description:"Ramp walk"}
  ]

  // Registration Counter
  const [registrationCount, setRegistrationCount] = useState(0);
  useEffect(() => {
    getRegistrationCount("RIWAYAT-(FASHION-SHOW)").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="relative container mx-auto px-4">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
        width={500}
        height={500}
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/aimbiation-events-logo/riwayat.png"
          registrations={registrationCount}
          pricepool={18000}
          description="The fashion show is a celebration of the perfect blend of style and intellect. It displays fashion as a symbol of confidence, creativity, and empowerment—a platform to showcase your talent and present yourself as a perfect example of beauty with brain."
          time="20-03-25, 7:00 pm"
          venue="Final Round, GROUND"
        />
      </section>

      {/* Why Participate Section */}
      <section className="space-y-8 mt-32">
        <SectionTitle text="WHY PARTICIPATE" />
        <ContentContainer>
          <ul className="list-disc pl-5 text-base sm:text-xl md:text-2xl font-inter leading-relaxed tracking-wide text-white space-y-4">
            {reasons.map((item, index) => (
              <li key={index}>
                <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                  {item.title}:
                </b>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </ContentContainer>
      </section>

      {/* Rounds Title */}
      <section className="text-center">
        <RoundSection rounds={rounds}/>
      </section>

      {/* Sub-Events Cards Section */}
      <section>
        
        
      </section>

      {/* Event Managers Section */}
      <section>
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Page;
