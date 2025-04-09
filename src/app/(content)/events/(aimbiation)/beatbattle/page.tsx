"use client";
import React,{useState, useEffect} from 'react';
import EventIntro from '@/components/sub-component/event-intro';
import EventManagers from '@/components/sub-component/event-managers';
import Image from 'next/image';
import RoundSection from '@/components/sub-component/RoundSection';
import { getRegistrationCount } from '@/actions/event-actions';

const Page = () => {
  const managers = [
    { imageUrl: "/managers/aimbiation/PreetiSingh.jpg", name: "Preeti Singh", contact: 7587377049},
    { imageUrl: "/managers/aimbiation/rampritkour.jpg", name: "Ramprit Kour", contact: 7656887717 },
  ];
  
  const rounds = [
    { 
      title: "ROUND 1: BOLLYWOOD BEAT CLASH",
      description: "Two contestants battle head-to-head, dancing to a Bollywood DJ remix mashup. Each participant gets 45 seconds to perform. No pre-planned choreography—pure freestyle energy! Dancers must adapt to the beats. Judge’s votes will decide the winner of each battle. Only one from each battle moves forward to the next round." 
    },
    { 
      title: "ROUND 2: BOLLYWOOD TADKA MIX",
      description: "This will be revealed later"
    },
  ];
  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("BEAT-BATTLE").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="relative flex flex-col space-y-8 container mx-auto px-4">
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

      {/* Event Introduction */}
      <EventIntro
        imageUrl="/aimbiation-events-logo/beatbattle.png"
        registrations={registrationCount}
        pricepool={7000}
        time="21-03-2025, 2:30 PM"
        venue="Babuji Chawk"
        description="This is not just a dance competition—it’s a high-energy battle where only the best dancers can shine! Get ready for exciting challenges, head-to-head battles, and nonstop fun as you show off your skills, creativity, and confidence.
        Open for all departments and even outsiders! If you love dancing and have the moves to impress, this is your chance to step up, own the stage, and become the ‘Beat Battle champion!’"
      />

      {/* Rules Section */}
      <section className="pt-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8 uppercase tracking-[3.75px]">
          RULES OF THE EVENT:
        </h2>
        <div className="bg-[#33010140] p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-disc text-2xl tracking-[3.75px] space-y-2">
            <li>Solo participation only (no duets or groups).</li>
            <li>Participants must register before the deadline.</li>
            <li>Props are not allowed unless provided by organizers.</li>
            <li>No offensive or inappropriate moves; maintain event decorum.</li>
          </ul>
        </div>
      </section>

      {/* Event Formats & Rounds */}
      <section className="mx-4 text-center">
        <RoundSection rounds={rounds} />
      </section>

      {/* Judging Criteria */}
      <section className="py-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-8 uppercase tracking-[3.75px]">
          JUDGING CRITERIA
        </h2>
        <div className="bg-[#33010140] p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl mx-auto text-white">
          <ul className="list-disc text-2xl leading-9 tracking-[3.75px] space-y-3">
            <li>
              <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                Musicality & Rhythm (25%):
              </b>{" "}
              How well the dancer syncs with the beats.
            </li>
            <li>
              <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                Creativity & Originality (25%):
              </b>{" "}
              Unique moves and transitions.
            </li>
            <li>
              <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                Energy & Stage Presence (20%):
              </b>{" "}
              Confidence, engagement, and crowd interaction.
            </li>
            <li>
              <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                Execution & Technique (20%):
              </b>{" "}
              Precision, footwork, and body control.
            </li>
            <li>
              <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                Overall Impact (10%):
              </b>{" "}
              Wow factor and performance memorability.
            </li>
          </ul>
        </div>
      </section>

      {/* Manager Section */}
      <EventManagers managers={managers} />
    </div>
  );
};

export default Page;
