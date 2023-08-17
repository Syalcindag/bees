import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-center bg-cover hero-bg-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
        <div className='py-5 text-white z-[2]'>
            <Link href="https://www.nwf.org/Educational-Resources/Wildlife-Guide/Invertebrates/Bees" target="_blank">
                <button className='px-16 py-4 uppercase rounded-full bg-[var(--primary-color)] border-none text-white font-bold hover:opacity-90 hover:bg-[#fa0] text-1xl md:text-2xl'>order free samples</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero