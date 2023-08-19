import React from 'react'
import Link from 'next/link'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Hero = () => {
  const contactUsLink = "https://api.whatsapp.com/send?phone="  // Add phone number after contactUsLink
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-center bg-cover hero-bg-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]' />
        <div className='py-5 text-white z-[2]'>
            <Link href={contactUsLink} target="_blank">
                <button className='px-16 py-4 uppercase rounded-full bg-[var(--primary-color)] border-none text-black font-bold hover:opacity-90 hover:bg-[#fa0] text-1xl md:text-2xl flex items-center justify-center'><AiOutlineWhatsApp className='text-1xl mr-2'/> Contact Us</button>
            </Link>
        </div>
        <div className='py-5 text-white z-[2] w-[50%] text-center text-bold text-2xl'>
            <p>It is obtained from the high altitude plateaus of Kayseri, away from environmental pollution. This honey, which has a unique vitamin value made by our bees using a basic honeycomb, has a very high pollen value.</p>
        </div>
    </div>
  )
}

export default Hero