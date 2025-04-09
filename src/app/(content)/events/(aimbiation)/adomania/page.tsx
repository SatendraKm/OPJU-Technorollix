"use client";
import React,{ useState, useEffect } from "react";
import EventIntro from "@/components/sub-component/event-intro";
import WhyParticipate from "@/components/sub-component/why-participate";
import EventManagers from "@/components/sub-component/event-managers";
import Image from "next/image";
import RoundSection from "@/components/sub-component/RoundSection";
import { getRegistrationCount } from "@/actions/event-actions";

const Page = () => {
  const managers = [
    { imageUrl: "/managers/aimbiation/nawalparmar.jpg", name: "Nawal Parmar", contact: 7024603976 },
    { imageUrl: "/managers/aimbiation/namankumarroy.jpg", name: "Naman Kumar Roy", contact: 7440877921 },
  ];

  const reasons = [
    "Exciting prizes up to ₹20000",
    "Opportunity for funding innovative gaming projects (as per OPJU Innovation Centre terms)",
    "Recognition certificates for all participating universities",
    "Participation certificates for all participants.",
    "Special category-wise winning prizes",
    "Hands-on experience in creative advertising, strategy and teamwork ",
    "Reimbursement of one-way Sleeper class fare for outside participants",
  ];

  const rounds = [
    {
      title: "ROUND 1: GENUINE COMPANY",
      description: `Name of a genuine company will be given to each team on which they have to make an advertisement. The product name will be given on the spot.
      
Time to Present: 30-60 seconds
Time for Preparation: 15 minutes

Companies: Nescafe, Coffee; Maggie; Birla Opus Paints; HP Computers; iPhone 16; Dominos; Coca Cola; BOAT Earbuds; Britannia; Cake; Glow & Lovely; Policy Bazar; Lens Kart.

Judgment Criteria: (10) Creativity, (10) Originality, (10) Own Tagline, (20) Presentation.
Total Points: 50.
Only 6-8 teams will be selected for the next round based on points.`,
    },
    {
      title: "ROUND 2",
      description: `A product name will be provided through a chit system to each team on which they must create a full-fledged advertisement showcasing all important features.
      
Time to Present: 60 seconds
Time for Preparation: One Day

Products: Sunglasses; Protein Shake; Matrimonial Site; Cosmetic and Beauty Product; Travelling Bags; Clothing Brands; Home Cleaning Chemical; Electronic Appliance; Men Care Products; Shoes.

Judgment Criteria: (10) Creativity, (10) Originality, (10) Presentation, (10) Tagline, (10) Brand Name.
Total Points: 50.`,
    },
  ];

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("AD-O-MANIA").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
          src="/background.svg"
          alt="Scrolling Background"
          width={500}
          height={500}
          className="w-full h-auto opacity-150 object-cover"
        />
      </div>

      {/* Event Intro Section */}
      <section className="">
        <EventIntro
          imageUrl="/aimbiation-events-logo/adomania.png"
          registrations={registrationCount}
          pricepool={8000}
          time="20-03-2025, 11:30 AM"
          venue="Live Class Room (G-15)"
          description="A creative marketing competition where teams must design and present an advertisement or marketing campaign for a given product or brand."
        />
      </section>

      {/* Rounds Section using RoundSection Component */}
      <RoundSection rounds={rounds} />

      {/* Judging Criteria Section */}
      <section className="my-32 mx-auto max-w-5xl px-4">
        <h2 className="text-5xl sm:text-6xl font-['Poppins'] font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] mb-16">
          Judging Criteria
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg">
          <ul className="list-disc pl-5 text-2xl sm:text-3xl space-y-2 font-['Inter'] leading-relaxed tracking-[3.75px] text-white">
            <li>Creativity</li>
            <li>Originality</li>
            <li>Presentation</li>
            <li>Tagline and Brand Name</li>
          </ul>
        </div>
      </section>


      {/* Event Managers Section */}
      <section className="mx-auto max-w-5xl px-4">
        <WhyParticipate reasons={reasons} />
      </section>

      {/* Bottom Section: Why Participate */}
      <section className="mx-auto max-w-5xl px-4 my-10">
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Page;
