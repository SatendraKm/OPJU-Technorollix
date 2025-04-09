import Image from 'next/image'
import React from 'react'

const BackgroundScroll = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      <Image
      width={500}
      height={500}
        src="/background.svg"
        className="w-full h-auto opacity-100"
        alt="Scrolling Background"
      />
    </div>
  )
}

export default BackgroundScroll