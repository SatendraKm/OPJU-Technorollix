"use client"
import React from "react"
import Image from "next/image"

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-gray-200 px-16 py-20 flex items-start">

      <div className="w-full flex justify-between items-start">

        {/* LEFT CONTENT */}
        <div className="w-[50%] space-y-10">

          {/* HEADING */}
          <h1 className="text-5xl font-bold text-black">
            About
          </h1>

          {/* ⭐ BIG STAR IMAGE */}
          <Image
            src="/testfile/star.png"
            alt="star"
            width={260}
            height={260}
            className="mb-6"
          />

          {/* CONTENT */}
          <p className="text-gray-700 text-2xl leading-relaxed max-w-xl">
            Technorollix is Central Indias biggest techno-cultural extravaganza, bringing together innovation, creativity, and entertainment on a grand scale.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
<div className="w-[45%] h-[500px] overflow-hidden rounded-xl">
  <Image
    src="/testfile/about me.png"
    width={600}
    height={600}
    alt="about"
    className="w-full h-full object-cover"
  />
</div>


      </div>

    </section>
  )
}

export default AboutSection
