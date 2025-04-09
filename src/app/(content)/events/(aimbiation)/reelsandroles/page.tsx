"use client";
import React,{useState,useEffect} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import SubEventCard from "@/components/sub-component/sub-event-card";
import { BsAward } from "react-icons/bs";
import EventManagers from "@/components/sub-component/event-managers";
import Image from "next/image";
import RoundSection from "@/components/sub-component/RoundSection";
import { getRegistrationCount } from "@/actions/event-actions";

interface Manager {
  imageUrl: string;
  name: string;
  contact: number;
}

interface EventDetail {
  title: string;
  description: string;
}

const managers: Manager[] = [
  {
    imageUrl: "/managers/aimbiation/garimavastrakar.jpg",
    name: "Garima Vastrakar",
    contact: 8839171099,
  },
];

const subEvents: EventDetail[] = [
  {
    title: "Round-1: A day at corporates",
    description:
      "Make reels on corporate life from wearing formals to attending meetings.",
  },
  {
    title: "Round-2: cinematic ads shooting –",
    description: "Make cinematic ads of the product of your choice.",
  },
  {
    title: "Round-3: cinematic shoot of OPJU",
    description: "Bring the best out of the campus in a cinematic shoot.",
  },
];

const timings = [
  {
    title: "Time duration of Reel:",
    items: [
      "Minimum - 30sec",
      "Maximum - 1min",
      "Mode of submission: virtual mode",
      "Post the video on your id in collaboration with OPJU official Instagram account.",
    ],
  },
  {
    title: "Timing duration of role play:",
    items: ["Minimum 3 min", "Maximum 5 min"],
  },
];

const rounds = [
  {
    title: "Round-1",
    description: "Top 15 reels with highest likes will qualify for round 2.",
  },
  {
    title: "Round-2",
    description:
      "Top 10 reels with best cinematography will qualify for round 3.",
  },
  {
    title: "Round-3",
    description: "Top 3 reels as decided by the judges will be the winners.",
  },
];

const EventPage = () => {

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("REELS-AND-ROLES").then((count) => {
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
      <EventIntro
        imageUrl="/aimbiation-events-logo/reelandroles.png"
        registrations={registrationCount}
        pricepool={8000}
        description="The School of Management is thrilled to present Reels and Roles Play, an exciting event that combines creativity, photography, cinematography, and management skills. Reels and Roles Play is a unique event where participants will have the opportunity to showcase their photography and cinematography skills by creating short reels on various management-related themes. Additionally, participants will engage in role-plays that simulate real-world management scenarios, such as job interviews, board meetings, and shareholder meetings."
        time="20-03-25, 2:00 pm "
        venue="MP Hall"
      />

      <section className="my-16 sm:my-20 md:my-32">
        <SectionTitle text="Reels - Rounds" />

        {/* Sub-Events Cards Section */}
        <EventCards eventDetails={subEvents} />

        {/* Time Duration Sections */}
        {timings.map((timing, index) => (
          <TimeDurationSection
            key={index}
            title={timing.title}
            items={timing.items}
          />
        ))}

        {/* Judgement Section */}
        <SectionTitle text="Judgement" />
        <RoundSection rounds={rounds} />

        {/* Prize Detail Section */}
        <SectionTitle text="Prize Detail" />
        <PrizeDetail />

        {/* Event Managers Section */}
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => (
  <div className="mb-8 text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-wide">
    {text}
  </div>
);

interface EventCardsProps {
  eventDetails: EventDetail[];
}

const EventCards = ({ eventDetails }: EventCardsProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
    {eventDetails.map((event, index) => (
      <SubEventCard
        key={index}
        Icon={BsAward}
        title={event.title}
        description={event.description}
      />
    ))}
  </div>
);

interface TimeDurationSectionProps {
  title: string;
  items: string[];
}

const TimeDurationSection = ({ title, items }: TimeDurationSectionProps) => (
  <section className="mb-16">
    <h2 className="mb-6 text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-3xl sm:text-4xl md:text-5xl font-medium uppercase">
      {title}
    </h2>
    <div className="bg-[#33010140] p-4 sm:p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <ul className="list-disc text-base sm:text-xl md:text-2xl space-y-3 font-['Inter'] leading-relaxed tracking-wide text-white">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

const PrizeDetail = () => (
  <div className="bg-[#33010140] p-4 sm:p-6 mb-16 rounded-lg shadow-lg max-w-5xl mx-auto">
    <ul className="list-disc text-base sm:text-xl md:text-2xl space-y-3 font-['Inter'] leading-relaxed tracking-wide text-white">
      <li>First prize: 6000</li>
      <li>Second prize: 4000</li>
      <li>Third prize: 2000</li>
    </ul>
  </div>
);

export default EventPage;
