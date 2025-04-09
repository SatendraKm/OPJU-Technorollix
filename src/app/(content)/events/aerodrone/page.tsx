"use client";
import React,{useState,useEffect} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import EventManagers from "@/components/sub-component/event-managers";
import WhyParticipate from "@/components/sub-component/why-participate";
import Image from "next/image";
import RoundSection from "@/components/sub-component/RoundSection";
import { getRegistrationCount } from "@/actions/event-actions";

const Aerodrone = () => {
  const rounds = [
    {
      title: "Accuracy Test",
      description: "Evaluates drone movement—forward, backward, elevation, and descent."
    },
    {
      title: "Obstacle Avoiding Test",
      description: "Measures how efficiently the drone avoids obstacles and reaches its destination."
    },
    {
      title: "Final Round",
      description: "A race where drones compete to complete the track in the shortest time."
    },
  ];

  const rules = [
    "All participants must arrive at least 30 minutes before the event starts. Latecomers will not be allowed to perform",
    "No student can directly participate in the final round without clearing the previous rounds",
    "Inappropriate or vulgar clothing and songs are not allowed.",
    "Participants must submit their chosen song and background video to the event coordinator one day before their audition and performance.",
    "Students should be fully prepared with their song and outfit before the event.",
    "Performances will be judged based on talent, decency, and discipline.",
    "The judges' decision is final and must be accepted by all participants. No appeals or objections will be entertained.",
    "Participants will be eliminated after each round based on the judges' evaluation.",
    "Participants must respect event coordinators, judges, and fellow contestants at all times. Any misbehavior may lead to disqualification.",
  ];

  const managers = [
    { imageUrl: "/managers/Aerodrone/AnkitMandal.jpg", name: "Ankit Mandal", contact: 9693407573 },
    { imageUrl: "/dallE.png", name: "Bhavana Verma", contact: 9407916405 },
    { imageUrl: "/dallE.png", name: "Manisha Patel", contact: 6268539090 },
  ];

  const participateReasons = [
    "Skill Enhancement: Engage in creative challenges that refine your technical and coordination abilities.",
    "Exposure and Recognition: Showcase your talent to a wider audience and gain accolades.",
    "Networking Opportunities: Connect with industry professionals, peers, and mentors.",
    "Personal Growth: Build confidence and adaptability by stepping out of your comfort zone.",
  ];

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("AERODRONE").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="">
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
      <EventIntro
        imageUrl="/techno-events-logo/aerodrone.png"
        registrations={registrationCount}
        pricepool={20000}
        description="A drone racing event that tests Mechanical, Electrical, and CS skills. Participants' drones will undergo rigorous testing in multiple rounds to showcase their UAVs' full potential."
        time="22-03-25 , 4:00 pm"
        venue="Volley Ball Court"
      />

      {/* Theme Section */}
      <section className="flex flex-col items-center justify-center my-32 px-4">
        <h2 className="w-full max-w-md text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-4xl sm:text-5xl font-medium font-['Poppins'] tracking-[3.75px]">
          THEME
        </h2>
        <div className="w-full max-w-4xl mt-4 text-center text-white text-xl sm:text-2xl font-medium font-['Inter'] tracking-[3.75px]">
          “Innovation, transformation, and vitalizing equipment, knowledge, and skill”
        </div>
      </section>

      {/* Rounds Section */}
      <section className="px-4">
        <RoundSection rounds={rounds} />
      </section>

      {/* Why Participate Section */}
      <WhyParticipate reasons={participateReasons} />

      {/* Rules and Event Managers Section */}
      <RulesAndRegulation rules={rules} />
      <EventManagers managers={managers} />
    </div>
  );
};

export default Aerodrone;
