
'use client';
import './fonts.css';
import { useState } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  let typingArr = ["UX DESIGNER", "FRONT END DEVELOPER"]
  const [currWord, setCurrWord] = useState(typingArr[0])

  // need to add nav bar outside of main
  return (

    <motion.div
    initial={{ width: '8.333%'}} // Center initially
    animate={{ width: '83.333%'}} // Center while animating
    transition={{ duration: 0.75, ease: 'easeInOut' }}
    className='m-auto'
    >
    <nav className="hidden sm:flex glassmorphic w-full h-20 rounded-full justify-center items-center">
      <ul className="flex justify-center space-x-4 font-inter font-semiBold text-lg">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white">About Me</Link>
        </li>
      </ul>
    </nav>
    </motion.div>
  );
}
