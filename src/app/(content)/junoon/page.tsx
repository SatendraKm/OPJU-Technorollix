import Image from "next/image";
import EventManagers from "@/components/sub-component/event-managers";

export default function Junoon() {
  const managers = [
    {
      imageUrl: "/managers/Junoon/atulsingh.jpg",
      name: "Atul Singh",
      contact: 9755305060,
    },
    {
      imageUrl: "/managers/Junoon/harshdubey.jpg",
      name: "Harsh Dubey",
      contact: 9340427142,
    },
    {
      imageUrl: "/managers/Junoon/sumitsingh.jpg",
      name: "Sumit Singh",
      contact: 7974944091,
    },
    {
      imageUrl: "/managers/Junoon/soubhagyaranjanpanda.jpg",
      name: "Soubhagya Panda",
      contact: 9827177970,
    },
  ];

  const guests = [
    {
      name: "Vaibhav Gupta",
      role: "Celeb - VAIBHAV GUPTA",
      image: "/junoon/vaibhavgupta.svg",
      description:
        "We are thrilled to announce that Vaibhav Gupta , the illustrious winner of Indian Idol Season 14, will be gracing Junoon 2025 with his presence. Hailing from Kanpur, Vaibhav's musical journey began at a young age, leading him to triumph in the 2024 season of the renowned singing reality show. His soulful voice and captivating performances have garnered him accolades from industry stalwarts and a dedicated fanbase nationwide. Beyond his Indian Idol victory, Vaibhav has achieved significant milestones, including winning 'Kanpur Got Talent' in 2017 and 'Radiocity Super Singer' in 2022. His commitment to reviving the essence of '90s music and his aspirations for Bollywood playback singing reflect his passion and dedication to the art. We eagerly anticipate the magic Vaibhav Gupta will bring to the Junoon 2025 stage.",
      imageOnRight: true,
    },
    {
      name: "Aman Sahu",
      role: "Anchor - Aman Sahu",
      image: "/junoon/amansahu.svg",
      description:
        "Aman Sahu is a Raipur-based award-winning TV and event anchor/presenter. He has an enthusiastic, lively personality filled with a fine mix of confidence, wit, warmth, and talent. He has hosted for brands like Samsung, JSW, Sunburn, etc., and collaborated with Atrangi Band...",
      imageOnRight: false,
      largerImage: true,
    },
    {
      name: "DJ Hemant Sahu",
      role: "Music - DJ Hemant",
      image: "/junoon/hemant.svg",
      description:
        "DJ Hemant brings a unique blend of talent and skill to any event, enhancing the atmosphere. He has great music selection, versatility, and creates memorable moments. He brings people together and has also collaborated with Atrangi Band...",
      imageOnRight: true,
      largerImage: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-600/30 to-pink-600/30 text-white">
      {/* Logo Section */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        <Image
          src="/junoon/junoonlogo.png"
          alt="Junoon Logo"
          width={1000}
          height={1000}
          className="max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[74%] h-auto"
          priority
        />
        <div className="text-center w-full max-w-3xl mt-4">
          <span className="text-[#a97ead] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-['Protest Revolution'] tracking-wide">
            One stage, one night, endless vibes.
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16">
        <div className="w-full lg:w-1/2">
          <Image
            src="/junoon/aboutjunoon.png"
            alt="Junoon Event"
            width={600}
            height={400}
            className="w-full rounded-lg"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E944FF] to-[#FFFFFFFA] shadow-lg mb-6">
            ABOUT JUNOON
          </h2>
          <p className="text-xl font-medium font-['Poppins']">
            OPJU Junoon is an annual cultural extravaganza hosted by the O.P.
            Jindal University in Chhattisgarh, India. This vibrant event
            showcases the diverse talents of people across various domains
            including music and dance. In 2018, we had Shirley Setia. In 2020,
            we had Jubin Nautiyal and Sunburn, and in 2023, we had DJ Perisha.
          </p>
        </div>
      </div>

      {/* Guest Sections */}
      {guests.map((guest, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row ${
            guest.imageOnRight ? "md:flex-row-reverse" : ""
          } items-center justify-center py-16`}
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={guest.image}
              alt={guest.name}
              width={guest.largerImage ? 500 : 400} // Increased size for DJ Hemant
              height={guest.largerImage ? 500 : 400}
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 text-white text-center md:text-left max-w-3xl px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E944FF] to-[#FFFFFFFA] shadow-lg mb-6">
              {guest.role}
            </h2>
            <p className="text-xl font-medium font-['Poppins']">
              {guest.description}
            </p>
          </div>
        </section>
      ))}

      {/* Bottom Padding */}
      <div className="pb-32">
        <EventManagers managers={managers} />
      </div>
    </div>
  );
}
