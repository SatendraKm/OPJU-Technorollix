"use client";
import React,{useState,useEffect} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import Image from "next/image";
import { getRegistrationCount } from "@/actions/event-actions";

const Page = () => {
  const managers = [
    { imageUrl: "/managers/Among Us/Priyanshu.jpeg", name: "Priyanshu Dash", contact: 9078942095 },
    // { imageUrl: "/dallE.png", name: "Shomya Sinha", contact: 7091799799 },
    { imageUrl: "/managers/Among Us/Mayank Sharma.jpg", name: "Mayank Sharma", contact: 7024189586 },
  ];

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("AMONG-US").then((count) => {
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
        imageUrl="/techno-events-logo/amongus.png"
        registrations={registrationCount}
        pricepool={11000}
        time="21-03-25 , 2:00 pm"
        venue="Open Theatre"
        description="Among Us – Real Life Edition is a thrilling strategy-based event where teams of 5 players compete in real-world gameplay. Each round features two teams (10 players total), with Crewmates completing tasks while Impostors secretly eliminate them. Players hold emergency meetings to discuss suspicions and vote out potential Impostors. The winning team is determined based on task completion, eliminations, or a points-based system. The best teams will advance to the next rounds, leading to a final showdown to crown the champion."
      />

      {/* Rounds Section */}
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-6">
          NUMBER OF ROUNDS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg w-full">
          <p className="text-2xl tracking-[3.75px] text-white">
            <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
              Group Stage + Knockout (Fast & Fair)
            </b>
            <br /><br />
            🕒 Duration: 3 Rounds
            <br /><br />
            <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
              Round 1:
            </b> Group Stage – Teams are divided into groups of 4. Each group plays one match (10 players: 2 teams per match). Top 2 teams advance.
            <br /><br />
            <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
              Round 2:
            </b> Semi-Finals – Winning teams from Round 1 face off in 2 semi-final matches. Top 2 teams advance to the finals.
            <br /><br />
            <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
              Round 3:
            </b> Grand Finale – The final 2 teams play the last match to determine the champion.
          </p>
        </div>
      </div>

      {/* Evaluation Process Section */}
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-6">
          EVALUATION PROCESS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg w-full">
          <p className="text-2xl tracking-[3.75px] text-white">
            <strong className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] uppercase">
              Impostor Team Points:
            </strong>
            <br /><br />
            Each successful elimination: +10 points
            <br /><br />
            Winning the match (if impostors eliminate enough crewmates): +20 points
            <br /><br />
            Each impostor surviving till the end: +5 points
            <br /><br />
            Fooling crewmates in meetings (if no impostor is voted out): +5 points
            <br /><br />
            <strong className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] uppercase">
              Crewmate Team Points:
            </strong>
            <br /><br />
            Each completed task: +5 points per task
            <br /><br />
            Winning the match (if all tasks are completed or impostors are ejected): +20 points
            <br /><br />
            Successfully voting out an impostor: +10 points
            <br /><br />
            Each crewmate surviving till the end: +5 points
          </p>
        </div>
      </div>

      {/* Prize Money Section */}
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-4xl sm:text-5xl text-[#ffad3c] font-medium font-['Poppins'] uppercase tracking-[2.88px] drop-shadow-md mb-6">
          PRIZE MONEY:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg w-full">
          <p className="text-2xl tracking-[3.75px] text-white">
            🥇 Winner (1st Place Team): ₹5,000
            <br /><br />
            🥈 Runner-Up (2nd Place Team): ₹3,000
            <br /><br />
            🥉 3rd Place Team: ₹2,000
            <br /><br />
            🏅 Special Awards: ₹1,000 (Best Impostor, Best Crewmate, or Survivor Award)
          </p>
        </div>
      </div>

      {/* Venue Section */}
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] uppercase tracking-[3.75px] mb-6">
          VENUE: Open Theatre
        </h2>
        <div className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-relaxed tracking-[6.72px] text-white text-center">
          <p>Day 1: Round 1 & Round 2</p>
          <p>Day 2: Remaining Round 2, Semi-final & Final</p>
        </div>
      </div>

      {/* Event Managers */}
      <div className="px-4">
        <EventManagers managers={managers} />
      </div>
    </div>
  );
};

export default Page;
