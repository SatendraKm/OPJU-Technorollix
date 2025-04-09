import { motion } from "framer-motion";
import Image from "next/image";

const SponsorMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex items-center space-x-12 md:space-x-48"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        whileHover={{ transition: { x: { duration: 0 } } }}
      >
        <div className="h-40 md:h-64 flex-shrink-0">
          <Image
            src="/logo_white.svg"
            alt="Sponsor 1"
            width={200}
            height={66}
            className="object-contain"
          />
        </div>
        <div className="h-40 md:h-64 flex-shrink-0">
          <Image
            src="/logo_white.svg"
            alt="Sponsor 2"
            width={200}
            height={66}
            className="object-contain"
          />
        </div>
        <div className="h-40 md:h-64 flex-shrink-0">
          <Image
            src="/logo_white.svg"
            alt="Sponsor 3"
            width={200}
            height={66}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SponsorMarquee;
