"use client";
import React,{useState,useEffect} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import WhyParticipate from "@/components/sub-component/why-participate";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import EventManagers from "@/components/sub-component/event-managers";
import RoundSection from "@/components/sub-component/RoundSection";
import Image from "next/image";
import { getRegistrationCount } from "@/actions/event-actions";

const Page = () => {
  const managers = [
    {
      imageUrl: "/managers/aimbiation/omkumarsingh.jpg",
      name: "Om Kumar Singh",
      contact: 7999425422,
    },
    {
      imageUrl: "/managers/aimbiation/satyendravishwakarma.jpg",
      name: "Satyendra Vishwakar..",
      contact: 7024332255,
    },
  ];

  const rules = [
    "Teams need to register themselves before or till the last date of registration. After which no registrations would be entertained.",
    "Only the team leader will be able to register his/her team through unstop.",
    "Teams can be formed with minimum 3 members and maximum 4 members.",
    "The online quiz will consist of objective type or short answer type questions.",
    "The questions will revolve around business knowledge.",
    "Only team leaders can register and play the online quiz round on the team's behalf.",
    "All the questions have to be answered within 15 mins. However, there is no negative marking.",
    "Participants must secure a reliable internet connection; any delay due to connectivity issues will not be entertained.",
    "If any participant is found using unfair means or committing misconduct, their team will be disqualified at the discretion of the Core Team of Biz-E-Sawaal, OPJU.",
    "All disputes will be resolved by the Core Team of Biz-E-Sawaal, OPJU, whose decision will be final.",
  ];

  const reasons = [
    "Enhancing Business Acumen and Critical Thinking: Deepen your knowledge of business, finance, and corporate affairs while honing critical thinking and decision-making skills.",
    "Encouraging Competitive Learning and Networking: Connect with like-minded individuals, showcase your talent, and gain recognition through healthy competition.",
  ];
  const rounds = [{
    title:"Round 1",
    description:"Online Quiz Round"
  },{
    title:"Round 2",
    description:"Offline Round"
}]
const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("BIZ-E-SAWAAL").then((count) => {
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
      <section>
        <EventIntro
          imageUrl="/aimbiation-events-logo/bizesawaal.png"
          registrations={registrationCount}
          pricepool={6000}
          description="Biz E Sawaal is an engaging and competitive quiz event designed to test participants' knowledge of the business world, including finance, economics, startups, and corporate trends."
          time="22-03-25, 1:30 PM."
          venue="MP Hall"
        />
      </section>

      {/* Rounds Section */}
      <section>
        <RoundSection rounds={rounds} />
      </section>

      {/* Rewards and Prizes Section */}
      <section className="mx-auto max-w-5xl my-32">
        <h2 className="text-4xl sm:text-5xl font-['Poppins'] font-medium uppercase text-center mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
          Rewards and Prizes
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg">
          <ul className="list-disc text-xl sm:text-2xl space-y-4  leading-[32px] tracking-[3px] text-white">
            <li className="text-3xl font-bold font-[Inter] list-none">Prize Details:</li>
            <li>1st Prize - Rs. 3,000 + Goodies (worth Rs. 1,000) + Certificates</li>
            <li>2nd Prize - Rs. 2,000 + Goodies (worth Rs. 500) + Certificates</li>
            <li>3rd Prize - Rs. 1,000 + Goodies (worth Rs. 500) + Certificates</li>
            <li>Consolation Prizes to finalists - Goodies (Total worth Rs. 2,000)</li>
          </ul>
        </div>
      </section>

      {/* Bottom Section: Why Participate, Rules, and Event Managers */}
      <section className="">
        <WhyParticipate reasons={reasons} />
        <RulesAndRegulation rules={rules} />
        <EventManagers managers={managers} />
      </section>
    </div>
  );
};

export default Page;
