'use client'

import './fonts.css';
import github from '../../public/img/github.svg';
import linkedin from '../../public/img/linkedin.svg';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';


export default function NavBar({ home, height }) {

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
    <header className='fixed top-2 left-1/2 transform -translate-x-1/2 w-9/12 mt-10 z-50'>
      <AnimatePresence>
        {showNav &&
          <motion.div
          initial={{ 
            y: -200,
            opacity: 0,
          }}
          animate={{ 
            y: 0,
            opacity: 1,
          }} 
          exit={{
            y:-200,
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
                <motion.li
                  className="flex flex-col relative"
                  whileHover="hover"
                >
                  <Link href={home} className="text-white">Home</Link>
                  <motion.div
                    style={{
                      width: '100%',
                      height: '0.125rem',
                      position: 'absolute',
                      backgroundColor: '#7B4EE6',
                      bottom: 0,
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
                >
                  <Link href="/about" className="text-white">About Me</Link>
                  <motion.div
                    style={{
                      width: '100%',
                      height: '0.125rem',
                      position: 'absolute',
                      backgroundColor: '#7B4EE6',
                      bottom: 0,
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
              </motion.div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>
  );
}
