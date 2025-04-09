import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLanding from "@/components/sub-component/button-landing";

const eventsData = {
  technical: [
    { imageUrl: "/techno-events-logo/codigo.png", link: "/events/codigo" },
    { imageUrl: "/techno-events-logo/techlab.png", link: "/events/techlab" },
    { imageUrl: "/techno-events-logo/robovation.png", link: "/events/robovation" },
    { imageUrl: "/techno-events-logo/hackathon.png", link: "/events/hackathon" },
    { imageUrl: "/techno-events-logo/aerodrone.png", link: "/events/aerodrone" },
    { imageUrl: "/techno-events-logo/ideathon.png", link: "/events/ideathon" },
  ],
  nonTechnical: [
    { imageUrl: "/techno-events-logo/kalakriti.png", link: "/events/kalakriti" },
    { imageUrl: "/techno-events-logo/spotlightsaga.png", link: "/events/spotlight-saga" },
    { imageUrl: "/techno-events-logo/amongus.png", link: "/events/among-us" },
    { imageUrl: "/techno-events-logo/masterchef.png", link: "/events/master_chef" },
    { imageUrl: "/techno-events-logo/roadies.png", link: "/events/roadies" },
    { imageUrl: "/techno-events-logo/antaragni.png", link: "/events/antaragni" },
    { imageUrl: "/techno-events-logo/gamefusion.png", link: "/events/game-fusion" },
  ],
  aimbiation: [
    { imageUrl: "/aimbiation-events-logo/bizesawaal.png", link: "/events/bizesawaal" },
    { imageUrl: "/aimbiation-events-logo/nexgenstartup.png", link: "/events/nexgenstartup" },
    { imageUrl: "/aimbiation-events-logo/adomania.png", link: "/events/adomania" },
    { imageUrl: "/aimbiation-events-logo/voiceofyouth.png", link: "/events/voiceofyouth" },
    { imageUrl: "/aimbiation-events-logo/reelandroles.png", link: "/events/reelsandroles" },
    { imageUrl: "/aimbiation-events-logo/bullvsbear.png", link: "/events/bullvsbear" },
    { imageUrl: "/aimbiation-events-logo/riwayat.png", link: "/events/riwayat" },
    { imageUrl: "/aimbiation-events-logo/beatbattle.png", link: "/events/beatbattle" },
    { imageUrl: "/aimbiation-events-logo/treasurehunt.png", link: "/events/treasurehunt" },
  ],
};

interface EventSectionProps {
  title: string;
  events: { imageUrl: string; link: string }[];
}

const EventSection: React.FC<EventSectionProps> = ({ title, events }) => (
  <>
    {/* Background image */}
    <div
      className="absolute top-0 left-0 w-full pointer-events-none -z-10"
      id="bg-container"
    >
      <Image
        src="/eventsbg.svg"
        alt="Scrolling Background"
        width={500}
        height={500}
        className="w-full opacity-100"
      />
    </div>
    <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center mt-40">
      {title}
    </h2>
    <p className="mt-4 md:mt-10 w-full md:w-[943px] text-center text-white text-lg md:text-xl font-medium font-['Poppins'] uppercase mx-auto">
      Our fest offers a diverse range of technical and non-technical events,
      ensuring there&apos;s something for everyone. From innovative tech showcases to
      fun and engaging activities, we bring together creativity, skills, and
      excitement for an unforgettable experience!
    </p>
    {/* Responsive grid: two columns by default, three columns on medium screens */}
    <div className="mt-10 md:mt-28 grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
      {events.map((event, index) => (
        <Link key={index} href={event.link} className={`block w-full ${event.link === '/events/game-fusion' ? 'col-start-2' : ''}`}>
          {/* Image container with fixed aspect ratio */}
          <div className="relative w-full aspect-[4/5]">
            <Image
              src={event.imageUrl}
              alt={event.link}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </Link>
      ))}
    </div>
    <ButtonLanding label="Register" link="/dashboard" />
  </>
);

const Page = () => {
  return (
    <div className="events mt-10 md:mt-28 px-4 md:px-0">
      <EventSection title="TECHNICAL EVENTS" events={eventsData.technical} />
      <EventSection title="NON-TECHNICAL EVENTS" events={eventsData.nonTechnical} />
      <EventSection title="aiMBiAtion EVENTS" events={eventsData.aimbiation} />
    </div>
  );
};

export default Page;
