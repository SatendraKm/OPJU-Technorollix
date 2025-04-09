import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import FooterButton from "./sub-component/footer-button";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-10 w-full">
      <div className="container mx-auto flex  md:flex-row items-center justify-around text-center md:text-left gap-4">
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <Link href="https://www.facebook.com/share/15rh7M4fp4/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 text-xl">
            <FaFacebookF />
          </Link>
          <Link href="https://wa.me/+918839171099" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 text-xl">
            <FaWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/technorollix?igsh=NTFybXp2bmVuOWFo" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 text-xl">
            <FaInstagram />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/team" className="hover:text-gray-400">Team</Link>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <FooterButton label="Contact Us" link="https://wa.me/+918839171099" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-500 my-6 w-5/6 mx-auto" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
