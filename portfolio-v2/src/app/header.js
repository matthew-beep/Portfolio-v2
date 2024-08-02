
'use client';
import './fonts.css';
import github from '../../public/img/github.svg';
import linkedin from '../../public/img/linkedin.svg';
import { useState } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function NavBar() {

  // need to add nav bar outside of main
  return (
    <header className='fixed top-2 left-1/2 transform -translate-x-1/2 w-10/12 mt-10 px-1 z-30'>
      <motion.div
      initial={{ y: -200,
        opacity: 0,
        filter: 'blur(10px)'
      }} // Center initially
      animate={{ y: 0,
        opacity: 1,
        filter: 'blur(0px)'  // Fade in and remove blur after animation
      }} // Center while animating
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='m-auto'
      >
        <nav className="hidden sm:flex glassmorphic w-full h-20 py-3 pl-3 pr-10 rounded-full justify-between items-center">
          <div className='h-full flex justify-center items-center aspect-square text-white text-2xl font-poppins font-bold bg-[#7B4EE6] rounded-full p-3'>MH</div>
          <ul className="flex justify-center items-center space-x-4 font-inter font-semiBold text-lg border-2 border-white border-solid">
            <li>
              <Link href="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white">About Me</Link>
            </li>
            <li>
              <Link href="https://github.com/matthew-beep" target='_blank'className="text-white hover:text-[#7B4EE6] text-2xl ease-in duration-200"><FontAwesomeIcon icon={faGithub} /></Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/matthewherradura/" target='_blank' className="text-white hover:text-[#7B4EE6] text-2xl ease-in duration-200"><FontAwesomeIcon icon={faLinkedin}  /></Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
