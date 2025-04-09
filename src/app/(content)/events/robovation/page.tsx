"use client";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
// import RulesAndRegulation from "@/components/sub-component/rule-regulation"; // no longer needed here
import SubEventCard from "@/components/sub-component/sub-event-card";
import Image from "next/image";
import React,{useState,useEffect} from "react";
import { BsRobot } from "react-icons/bs";
import { FaFlagCheckered } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import { getRegistrationCount } from "@/actions/event-actions";

const Page = () => {
  const managers = [    
    { imageUrl: "/managers/Robovation/Harsh tiwari.jpg", name: "Harsh Tiwari", contact: 8815612698 },
    { imageUrl: "/managers/Robovation/Nikhil Prasad.jpg", name: "Nikhil Prasad", contact: 7488057104  },
    { imageUrl: "/managers/Robovation/Kushal Kumar.jpg", name: "Kushal Kumar Barsiwal", contact: 7987829224  },
    { imageUrl: "/managers/Robovation/udit vardhan.jpg", name: "Udit vardhan singh", contact: 8298558875 },
  ];

  // Define the PDF file path (ensure the file is available in your public folder)
  const pdfPath = "/rulebookrobovation.pdf";

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("ROBOVATION").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="relative flex flex-col">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
          src="/background.svg"
          className="w-full h-auto opacity-100"
          alt="Scrolling Background"
          width={500}
          height={500}
        />
      </div>
      
      <EventIntro
        venue="BAPUJI CHOWK (OPJU)"
        time="21-03-25 , 10:00 am"
        imageUrl="/techno-events-logo/robovation.png"
        registrations={registrationCount}
        pricepool={36000}
        description="OPJU invites you to an electrifying robotics showdown, where innovation meets precision and strategy turns into dominance. Step into Robovation and let your bots conquer the arena!"
      />
      
      {/* Spacing */}
      <div className="my-8 sm:my-16" />

      {/* Sub Events Header */}
      <h1 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mb-6 sm:mb-14">
        SUB EVENTS
      </h1>
      <p className="text-lg sm:text-2xl font-['Inter'] leading-relaxed tracking-[3.75px] text-white text-center max-w-5xl mx-auto px-4 mb-20">
        Robovation features three exciting sub-events. Robo Race tests speed and precision as robots navigate an obstacle-filled track. Robo Soccer challenges teams to score goals using their self-built bots. Robo War is a fierce battle where combat robots fight to dominate the arena.
      </p>
      
      {/* Sub-Events Cards */}
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 px-4">
        <SubEventCard
          Icon={BsRobot}
          title="ROBO WAR"
          description="Robo war is the most exciting challenge of this event. It celebrates the sport of robotic combat through battling machines. This challenge gives youngsters the opportunity to design, build, and control combat robots to demonstrate their creativity, engineering skills, and driving ability. The most rewarding part of designing bots is that students have fun and work together as a team."
        />
        <SubEventCard
          Icon={FaFlagCheckered}
          title="ROBO RACE"
          description="Design a robot with wireless or Bluetooth control within the specified dimensions that can be operated manually and navigate every turn of the track. The robot that completes the task in the least time will be the winner, without skipping any obstacles."
        />
        <SubEventCard
          Icon={IoFootballOutline}
          title="FAST LINE FOLLOWER"
          description="Build an autonomous robot within the specified dimensions to achieve maximum speed on the given track and reach the destination in minimum time. The robot must start behind the starting point and is considered to have finished if any part crosses the line on a full lap. It must follow the black line, and the competition area has a designated zone for operation."
        />
        <SubEventCard
          Icon={BsRobot}
          title="ROBO SOCCER"
          description="Robo soccer is one of the famous challenges of Robovation. In this event, teams compete with a single robot that chases a ball around a large arena to score more goals than the opponent. This challenge encourages solving robotic problems, building creative bots, and learning engineering technology. It tests flipping, kicking, maneuvering skills, and robot control, and consists mainly of two rounds."
        />
      </div>

      {/* Custom Rules & Regulation Section with Download Button */}
      <section className="mt-8 sm:mt-20 px-4">
        <div className="text-white my-20 sm:my-40 px-4 text-center">
          <h2 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[3.75px] mb-10 sm:mb-14">
            RULES & REGULATION
          </h2>
          <div className="bg-[#33010140] p-4 sm:p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
            <p className="text-xl sm:text-2xl mb-6">
              Download the PDF file for a detailed view of the rules and regulations.
            </p>
            <a
              href={pdfPath}
              download="rules-and-regulation.pdf"
              className="bg-[#FFAE3D] text-white py-2 px-4 rounded inline-block"
            >
              Download PDF
            </a>
          </div>
        </div>

        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Page;
