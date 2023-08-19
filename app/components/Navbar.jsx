"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import {FaBars, FaTimesCircle } from "react-icons/fa";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const nav = document.querySelector("nav");
        const headerTitle = document.querySelector("#headerTitle");
        const checkScroll = () => {
            if(window.scrollY > 80) {
                nav.classList.add("bg-black/40");
                headerTitle.classList.remove("text-black");
                headerTitle.classList.add("text-[var(--primary-color)]");
            } else {
                nav.classList.remove("bg-black/40");
                headerTitle.classList.add("text-black");
                headerTitle.classList.remove("text-[var(--primary-color)]");
            }
    
        }
        window.addEventListener('scroll', checkScroll)
        
    }) 

  return (
    <nav className="w-full bg-[var(--primary-color)] text-white fixed top-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-6xl">
            <div className="flex justify-between items-center py-3 md:py-6">
                <Link href="/">
                    <h2 id="headerTitle" className="text-3xl text-black font-bold uppercase md:text-2xl">BalSefası</h2>
                </Link>
                <div className="md:hidden">
                    <button className="p-2 rounded-md outline-none text-2xl text-black" onClick={() => setNavbar(!navbar)}>
                        {navbar ? <FaTimesCircle/> : <FaBars/>}
                    </button>
                </div>
            </div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
            <ul className="h-screen justify-end items-center md:h-auto md:flex">
                <li className="text-left p-3 uppercase front-bold text-2xl md:text-[18px] md:px-4 hover:text-black cursor-pointer">
                    <Link href="https://en.wikipedia.org/wiki/Bee" target="_blank" onClick={() => setNavbar(!navbar)}>About</Link>
                </li>
                <li className="text-left p-3 uppercase front-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer">
                    <Link href="/#bee" onClick={() => setNavbar(!navbar)}>Products</Link>
                </li>
                <li className="text-left p-3 uppercase front-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer">
                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>Contact</Link>
                </li>
            </ul>
        </div>
        </div>
       
    </nav>
  )
}

export default Navbar;