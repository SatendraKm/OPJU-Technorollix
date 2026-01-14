"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa"

const FooterSection = () => {
  return (
    <footer className="w-full bg-black text-white px-16 py-20 relative">

      {/* MAIN WRAPPER */}
      <div className="flex justify-between items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8">

          {/* TEXT LINKS (EVENTS etc) */}
          <div className="space-y-2 text-gray-400 text-sm">
            <p className="hover:text-white cursor-pointer">EVENTS</p>
            <p className="hover:text-white cursor-pointer">SCHEDULE</p>
            <p className="hover:text-white cursor-pointer">ABOUT US</p>
            <p className="hover:text-white cursor-pointer">JUNOON</p>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
            <Link href="/team" className="hover:text-gray-400">Team</Link>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          {/* SOCIAL MEDIA ICONS */}
<div className="flex space-x-6">

  <Link href="https://www.facebook.com/share/15rh7M4fp4/" target="_blank">
    <FaFacebookF className="text-white hover:text-red-400 transition" size={22} />
  </Link>

  <Link href="https://wa.me/+918839171099" target="_blank">
    <FaWhatsapp className="text-white hover:text-red-400 transition" size={22} />
  </Link>

  <Link href="https://www.instagram.com/technorollix?igsh=NTFybXp2bmVuOWFo" target="_blank">
    <FaInstagram className="text-white hover:text-red-400 transition" size={22} />
  </Link>

</div>


        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[200px]">
          <Image
            src="/testfile/techno footer.png"
            alt="Techno Footer"
            width={300}
            height={300}
            className="object-contain w-full"
          />
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-20 border-t border-white/10 pt-6 text-sm text-gray-500">
        © 2026 TechnoAmbiation. All rights reserved.
      </div>

    </footer>
  )
}

export default FooterSection
