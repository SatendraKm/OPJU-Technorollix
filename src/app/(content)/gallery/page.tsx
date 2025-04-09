import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const events = [
  "aerodrone",
  "antaragni",
  "hackathon",
  "ideathon",
  "junoon",
  "kalakriti",
  "masterchef",
  "roadies",
  "robovation",
  "techlab",
];

const images: Record<string, string[]> = {
  aerodrone: [
    "/gallery/aerodrone/1.jpg",
    "/gallery/aerodrone/2.jpg",
    "/gallery/aerodrone/3.jpg",
  ],
  antaragni: [
    "/gallery/antaragni/1.jpg",
    "/gallery/antaragni/2.jpg",
    "/gallery/antaragni/3.jpg",
  ],
  hackathon: [
    "/gallery/hackathon/1.jpg",
    "/gallery/hackathon/2.jpg",
    "/gallery/hackathon/3.jpg",
  ],
  ideathon: [
    "/gallery/ideathon/1.jpg",
    "/gallery/ideathon/2.jpg",
    "/gallery/ideathon/3.jpg",
  ],
  junoon: [
    "/gallery/junoon/1.jpg",
    "/gallery/junoon/2.jpg",
    "/gallery/junoon/3.jpg",
  ],
  kalakriti: [
    "/gallery/kalakriti/1.jpg",
    "/gallery/kalakriti/2.jpg",
    "/gallery/kalakriti/3.jpg",
  ],
  masterchef: [
    "/gallery/masterchef/1.jpg",
    "/gallery/masterchef/2.jpg",
    "/gallery/masterchef/3.jpg",
  ],
  roadies: [
    "/gallery/roadies/1.jpg",
    "/gallery/roadies/2.jpg",
    "/gallery/roadies/3.jpg",
  ],
  robovation: [
    "/gallery/robovation/1.jpg",
    "/gallery/robovation/2.jpg",
    "/gallery/robovation/3.jpg",
  ],
  techlab: [
    "/gallery/techlab/1.jpg",
    "/gallery/techlab/2.jpg",
    "/gallery/techlab/3.jpg",
  ],
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Gallery Title */}
        <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium text-center mt-16 mb-12">
          Technorollix Event Gallery
        </h1>

        {events.map((event) => (
          <div key={event} className="mb-24">
            {/* Event Title */}
            <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium mb-4 text-center capitalize">
              {event}
            </h2>

            {/* Image Carousel */}
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                {images[event].map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <div className="w-full max-w-[900px] h-[400px] relative">
                      <Image
                        src={src}
                        alt={`${event} image`}
                        fill
                        className="shadow-xl border-4 border-transparent bg-clip-padding object-cover"
                        style={{
                          borderImage:
                            "linear-gradient(to bottom right, #FBDA7A, #7C5114) 1",
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}
