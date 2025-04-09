"use client";
import React,{useState,useEffect} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import Image from "next/image";
import { getRegistrationCount } from "@/actions/event-actions";

const Page: React.FC = () => {
  const rules = [
    "The competition is open for teams comprising graduate & postgraduate students.",
    "No change of team structure is permitted after the team is registered.",
    "One participant cannot be part of more than one team.",
    "One of the team members should be registered as the team leader.",
    "The business plan should not exceed 15 pages (excluding executive summary, cover page & index).",
    "A maximum of 15 slides of PowerPoint presentation is allowed in the final round.",
    "The Participants must follow font size 12 (Times New Roman) for main text and 14 for headings with a line spacing of 1.5.",
    "A maximum of 15 minutes will be allowed for a team to present their business idea.",
    "Participants must carry their data backup in a laptop or USB drive.",
  ];

  const managers = [
    {
      imageUrl: "/managers/aimbiation/kiranverma.jpg",
      name: "Kiran Verma",
      contact: 7999509911,
    },
    {
      imageUrl: "/managers/aimbiation/riyasharma.jpg",
      name: "Riya Sharma",
      contact: 7987064912,
    },
  ];

  const judgementCriteria = [
    {
      title: "Business Description",
      percentage: 15,
      description: "Clear, reasonable, and scalable concept explanation.",
    },
    {
      title: "Market Analysis",
      percentage: 10,
      description:
        "Identifies genuine need; well-defined target market. Market size and growth discussed. Consumer demand and willingness to pay addressed.",
    },
    {
      title: "Product or Service Analysis",
      percentage: 10,
      description:
        "Clear description, feasibility analyzed. Evaluation of potential duplication and substitutes.",
    },
    {
      title: "Competition",
      percentage: 10,
      description:
        "Identification of competitors, strengths, and weaknesses analyzed effectively.",
    },
    {
      title: "Marketing Strategy",
      percentage: 10,
      description:
        "Well-defined plan covering price, product, place, and promotion. Appropriate resource allocation.",
    },
    {
      title: "Operations",
      percentage: 10,
      description:
        "Discussion on securing resources and maintaining competitive operations.",
    },
    {
      title: "Investment Proposal",
      percentage: 10,
      description:
        "Detailed funding explanation, clear terms and returns. Realistic valuation and feasible exit strategy.",
    },
    {
      title: "Innovation and Creativity",
      percentage: 10,
      description:
        "Unique and original idea with a creative approach. Potential to disrupt the market.",
    },
    {
      title: "Sustainability and Social Impact",
      percentage: 5,
      description:
        "Consideration of environmental and social impact. Long-term sustainability of the business model.",
    },
    {
      title: "Presentation",
      percentage: 20,
      description:
        "Engaging, well-managed time, confident delivery, and impactful conclusion.",
    },
  ];
  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("NEXGEN-STARTUP").then((count) => {
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
          alt="Scrolling Background"
          className="w-full h-auto opacity-150"
        />
      </div>

      {/* Event Intro Section */}
      <section>
        <EventIntro
          imageUrl="/aimbiation-events-logo/nexgenstartup.png"
          registrations={registrationCount}
          pricepool={15000}
          description="Empowering Startups: Your Gateway to Success. Dive into our event tailored for entrepreneurs like you. Discover insider tips, forge valuable connections, and kickstart your business journey. From startup dreams to tangible results, this event is your ultimate resource. Seize this opportunity to fuel your passion and unlock the potential of your startup."
          time="21-03-25, 2:30 PM"
          venue="LIVE CLASSROOM"
        />
      </section>

      {/* About the Event Section */}
      <section className="my-32">
        <h2 className="text-4xl sm:text-5xl font-['Poppins'] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center mb-14">
          ABOUT THE EVENT
        </h2>
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-white text-2xl sm:text-3xl font-medium font-['Inter'] tracking-[3.75px] text-center">
            We invite you to participate in an exclusive event tailored for
            aspiring entrepreneurs. This event provides a platform to gain
            expert insights, establish valuable connections, and translate
            innovative business ideas into reality. Seize this opportunity to
            refine your vision and advance your startup to new heights.
          </p>
        </div>
      </section>

      {/* Judgement Criteria Section */}
      <section className="my-32">
        <h2 className="text-2xl sm:text-5xl font-['Poppins'] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center mb-8">
          JUDGEMENT CRITERIA (100%)
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg mx-auto max-w-5xl text-gray-300">
          <ul className="list-disc text-xl sm:text-2xl space-y-4">
            {judgementCriteria.map((criteria, index) => (
              <li key={index}>
                <b className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
                  {criteria.title} ({criteria.percentage}%):
                </b>{" "}
                {criteria.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prize Details Section */}
      <section className="mt-20 mb-20">
        <h2 className="text-4xl sm:text-5xl font-['Poppins'] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] text-center mb-14">
          PRIZE DETAILS:
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg mx-auto max-w-5xl">
          <ul className="list-decimal pl-5 text-xl sm:text-3xl space-y-6 font-['Inter'] text-gray-300">
            <p className="text-3xl font-bold list-none">Prize Details:</p>
            <li>
              Winner: Cash prize of ₹5000 + Incubation Support + Mentorship from
              industry experts.
            </li>
            <li>Runner up: Cash prize of ₹3000 + Mentorship.</li>
            <li>
              Special Category Awards: Best Social Impact Startup, Most
              Innovative Idea, and Best Pitch Presentation (prizes and benefits
              to be announced).
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom Section: Rules and Event Managers */}
      <section className="">
        <RulesAndRegulation rules={rules} />
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Page;
