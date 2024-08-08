'use client'

import './fonts.css';
import github from '../../public/img/github.svg';
import linkedin from '../../public/img/linkedin.svg';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';


export default function NavBar({ home }) {
  /*
  const router = useRouter();
  useEffect(() => {
    // Function to handle redirection based on URL hash
    const handleRedirect = () => {
      const hash = window.location.hash;

      if (hash === '#projects') {
        // Redirect to /#home
        router.push('/#home');
      }
    };

    // Check on initial load
    handleRedirect();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleRedirect);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleRedirect);
    };
  }, [router]);
  */

  return (
    <header className='fixed top-2 left-1/2 transform -translate-x-1/2 w-9/12 mt-10 z-50'>
      <motion.div
      initial={{ 
        y: -200,
        opacity: 0,
      }}
      animate={{ 
        y: 0,
        opacity: 1,
      }} 
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='m-auto'
      >
        <nav className="hidden sm:flex glassmorphic w-full h-20 py-3 pl-3 pr-10 rounded-full justify-between items-center">
          <motion.div 
            className='w-full h-full rounded-full flex justify-between items-center'
            initial={{ 
              filter: 'blur(10px)',
            }}
            animate={{ 
              filter: 'blur(0px)',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}              
          >
            <div className='h-full flex justify-center items-center aspect-square text-white text-2xl font-poppins font-bold bg-[#7B4EE6] rounded-full p-3'>
              <Link href={home}>
                MH
              </Link>
            </div>
            <ul className="flex justify-center items-center space-x-4 font-inter font-semiBold text-lg">
              <li>
                <Link href={home} className="text-white">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white">About Me</Link>
              </li>
            </ul>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
}
