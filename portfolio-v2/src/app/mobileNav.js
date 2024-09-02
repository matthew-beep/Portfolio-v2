'use client'

import './fonts.css';
import github from '../../public/img/github.svg';
import linkedin from '../../public/img/linkedin.svg';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';


export default function MobileNav({ home, height }) {

  const [showNav, hideNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hovered, setHovered] = useState('/');
  const pathname = usePathname();
  const controls = useAnimation();



  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if(currentScrollPos > prevScrollPos && currentScrollPos > (height + 40)){
        hideNav(false);
    } else {
        hideNav(true);
    }
    setPrevScrollPos(currentScrollPos);
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos])
  

  return (
    <header className='w-full absolute h-32 flex z-50 block md:hidden justify-center pt-5'>
      <nav className="flex w-10/12 h-20 py-3 justify-between items-center block md:hidden h-1/2">
          <div className='border-2 h-10 flex justify-center items-center aspect-square text-lg md:text-2xl font-poppins font-bold border-white text-white rounded-full'>
            <Link href={home} className='text-base'>
              MH
            </Link>
          </div>
          <ul className="flex justify-center items-center space-x-4 font-inter font-semiBold text-lg">
          <motion.li
            className="flex flex-col relative"
            whileHover="hover"
            initial={{color:  pathname === '/' ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255, 0.5)'}}
          >
            <Link href={home} className="hover:text-white duration-200 ease-in">
              <FontAwesomeIcon icon={faHome} className='flex md:hidden text-3xl'/>
            </Link>
            <motion.div
              style={{
                width: '100%',
                height: '0.125rem',
                position: 'absolute',
                backgroundColor: '#7B4EE6',
                bottom: 0,
                y: 5
              }}
              initial={{ scaleX: pathname === '/' ? 1 : 0 }}  // Initially show the line for the active link
              variants={{
                hover: { scaleX: 1 },  // Scale on hover
              }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>
          </motion.li>
          <motion.li
            className="flex flex-col relative"
            whileHover="hover"
            initial={{color:  pathname === '/about' ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255, 0.5)'}}
          >
            <Link href="/about" className="hover:text-white duration-200 ease-in">
              <FontAwesomeIcon icon={faUser} className='flex md:hidden text-3xl'/>
            </Link>
            <motion.div
              style={{
                width: '100%',
                height: '0.125rem',
                position: 'absolute',
                backgroundColor: '#7B4EE6',
                bottom: 0,
                y: 5
              }}
              initial={{ scaleX: pathname === '/about' ? 1 : 0 }}  // Initially show the line for the active link
              variants={{
                hover: { scaleX: 1 },  // Scale on hover
              }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>
          </motion.li>
          </ul>
      </nav>
    </header>
  );
}
