import Image from "next/image";

const teamSections = [
  {
    title: "Information, Publicity & Invitation",
    members: [
      {
        name: "Ajay Patel",
        contact: "+91 8839171099",
        image: "/teams/information-publicity-invitation/ajay.png",
      },
      {
        name: "Shikhar Pandey",
        contact: "+91 7765996678",
        image: "/placeholder-pic.jpeg",
      },
    ],
  },
  {
    title: "Design, Print & Media",
    members: [
      {
        name: "Ritul Raj Bhagat",
        contact: "+91 9432875971",
        image: "/placeholder-pic.jpeg",
      },
      {
        name: "Naresh Mourya",
        contact: "+91 9430160416",
        image: "/teams/design-print-media/naresh.png",
      },
    ],
  },
  {
    title: "Registration & Reception",
    members: [
      {
        name: "Vishal Singh",
        contact: "+91 7488041613",
        image: "/teams/registration-reception/vishal.png",
      },
      {
        name: "Megha Sahu",
        contact: "+91 9348561048",
        image: "/placeholder-pic.jpeg",
      },
    ],
  },
  {
    title: "Accommodation",
    members: [
      {
        name: "Vishal Pandey",
        contact: "+91 6207005596",
        image: "/teams/accommodation/vishal.png",
      },
      {
        name: "Anjali Sidar",
        contact: "+91 7647041265",
        image: "/teams/accommodation/anjali.png",
      },
    ],
  },
  {
    title: "Stage, Light, Sound & Stall",
    members: [
      {
        name: "Parth Singh Thakur",
        contact: "+91 8889055521",
        image: "/teams/stage-light-sound-stall/parth.png",
      },
      {
        name: "Pranjal Sharma",
        contact: "+91 9343667806",
        image: "/teams/stage-light-sound-stall/pranjal.png",
      },
    ],
  },
  {
    title: "Catering",
    members: [
      {
        name: "Jayant Shekhar Singh",
        contact: "+91 9123147552",
        image: "/teams/catering/jayant.png",
      },
      {
        name: "Jagriti Singh",
        contact: "+91 8603889959",
        image: "/teams/catering/jagriti.png",
      },
    ],
  },
  {
    title: "Venue Preparation",
    members: [
      {
        name: "Atul Singh",
        contact: "+91 9755305060",
        image: "/teams/venue-preparation/atul.png",
      },
      {
        name: "Barkha Singh",
        contact: "+91 8871694247",
        image: "/teams/venue-preparation/barkha.png",
      },
    ],
  },
  {
    title: "Transportation",
    members: [
      {
        name: "Vaibhav Singh",
        contact: "+91 9109016426",
        image: "/teams/transportation/vaibhav.png",
      },
      {
        name: "Udit Shukla",
        contact: "+91 7415885039",
        image: "/teams/transportation/udit.png",
      },
    ],
  },
  {
    title: "Hospitality",
    members: [
      {
        name: "Navneet Tripathi",
        contact: "+91 7489462029",
        image: "/teams/hospitality/navneet.png",
      },
      {
        name: "Garima Mishra",
        contact: "+91 7047039028",
        image: "/teams/hospitality/garima.png",
      },
    ],
  },
  {
    title: "Website Maintenance",
    members: [
      {
        name: "Nikhil Patel",
        contact: "+91 8305216569",
        image: "/teams/website-maintenance/nikhil.png",
      },
      {
        name: "Vanmayie Singh",
        contact: "+91 9016087977",
        image: "/teams/website-maintenance/vanmayie.png",
      },
    ],
  },
  {
    title: "Certificate & Prize",
    members: [
      {
        name: "Shivam Sharma",
        contact: "+91 9179165697",
        image: "/teams/certificate-prize/shivam.png",
      },
      {
        name: "Vishnu Gupta",
        contact: "+91 7544000243",
        image: "/teams/certificate-prize/vishnu.png",
      },
    ],
  },
  {
    title: "Discipline",
    members: [
      {
        name: "Saubhagya Ranjan Panda",
        contact: "+91 8839171099",
        image: "/teams/discipline/saubhagya.png",
      },
      {
        name: "Madhav Jha",
        contact: "+91 8839171099",
        image: "/teams/discipline/madhav.png",
      },
    ],
  },
  {
    title: "Stationery & Logistics",
    members: [
      {
        name: "Ranveer Singh",
        contact: "+91 6200858567",
        image: "/teams/stationery-logistics/ranveer.png",
      },
      {
        name: "Shubham Thakur",
        contact: "+91 9304749918",
        image: "/teams/stationery-logistics/shubham.png",
      },
    ],
  },
  {
    title: "Health & First Aid",
    members: [
      {
        name: "Durgesh Kumar",
        contact: "+91 9201437384",
        image: "/placeholder-pic.jpeg",
      },
      {
        name: "Swasti Behra",
        contact: "+91 9755275427",
        image: "/placeholder-pic.jpeg",
      },
    ],
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      {/* Centered Content with Left & Right Margin */}
      <div className="mx-auto max-w-6xl">
        {/* Main Heading */}
        <h1 className="text-7xl font-medium font-['Poppins'] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] mb-24 mt-24">
          Team Behind Technorollix
        </h1>

        {/* Team Sections */}
        {teamSections.map((section, index) => (
          <div
            key={index}
            className={`flex font-['Poppins'] flex-col md:flex-row items-center md:items-start mb-48 gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Section Title - Positioned to Align with Cards */}
            <h2 className="text-4xl mt-6 md:text-5xl uppercase font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] md:w-1/2 w-full text-center md:text-left flex items-center justify-center md:justify-start md:pl-8 break-words whitespace-normal">
              {section.title}
            </h2>

            {/* Profile Cards - Positioned to Align with Next Section Title */}
            <div className="grid md:grid-cols-2 gap-10 md:w-2/3 md:pr-8">
              {section.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-3xl shadow-xl border-4 border-yellow-500 w-72 h-96 flex flex-col"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={350}
                    className="rounded-2xl mb-1"
                  />
                  <h3 className="text-2xl font-medium text-center">{member.name}</h3>
                  <p className="text-md text-gray-400 mt-2 pl-4">
                    Contact: <br/>{member.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
