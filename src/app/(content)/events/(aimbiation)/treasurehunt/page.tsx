"use client";
import React,{useState,useEffect} from "react";
import EventIntro from "@/components/sub-component/event-intro";
import EventManagers from "@/components/sub-component/event-managers";
import RulesAndRegulation from "@/components/sub-component/rule-regulation";
import Image from "next/image";
import RoundSection from "@/components/sub-component/RoundSection";
import { getRegistrationCount } from "@/actions/event-actions";

const Page = () => {
  const managers = [
    { imageUrl: "/managers/aimbiation/BhavanaVerma.jpg", name: "Bhavana Verma", contact: 9407916405 },
    { imageUrl: "/managers/aimbiation/ManishaPatel.jpg", name: "Manisha Patel", contact: 6268539090 },
  ];
  const rules = [
    "Every team must have a leader and a cool team name!",
    "Your squad must have exactly 5 members—no more, no less!",
    "Respect the coordinators, no misbehavior allowed!",
    "No outside help—use your own brains! ",
    "No splitting up! The team moves as one.",
  ];
  const rounds=[
    {title:"ROUND 1",
      description:"The Unseen Twist"},
            
              {title:"ROUND 2",
                description:"Hold It, Solve It!"},
            
              {title:"ROUND 3",
                description:"Decode or Die!"}
  ]

  const [registrationCount, setRegistrationCount] = useState(0)
  useEffect(() => {
    getRegistrationCount("TREASURE-HUNT").then((count) => {
      setRegistrationCount(count)
    })
  }, [])

  return (
    <div className="flex flex-col space-y-8">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <Image
        width={500}
        height={500}
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>

      <EventIntro
        imageUrl="/aimbiation-events-logo/treasurehunt.png"
        registrations={registrationCount}
        pricepool={6000}
        time="20-03-25, 2:30 PM"
        venue="Opposite the CDC office garden"
        description={`Get ready for an exciting Treasure Hunt! Follow the clues, solve tricky puzzles, and race to find the hidden treasure. It’s not just about speed—it’s about using your brain, working with your team, and staying sharp. Expect surprises, challenges, and maybe even a few sneaky traps along the way. Think you’ve got what it takes to crack the code and claim the prize? Let the hunt begin! 
        
        Treasure Hunt Event is open for everyone—insiders and outsiders alike! If you’re ready for an adventure full of clues, challenges, and surprises, join the hunt and claim the prize!`}
      />
      <br />
      <br />

      <RoundSection rounds={rounds}/>
      <RulesAndRegulation rules={rules} />
      <EventManagers managers={managers} />
      
    </div>
  );
};

export default Page;
