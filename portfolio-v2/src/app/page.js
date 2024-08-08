
'use client';
import './fonts.css';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import Portfolio from './portfolio';
import NavBar from './header';
import Link from 'next/link';
import Footer from './footer';
export default function Home() {
  const { scrollY } = useScroll();
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [translate, setTranslate] = useState('-100px');
  const [initialScroll, setInitialScroll] = useState(true);
  const [pageHeight, setPageHeight] = useState(0);


  

    const translateY = useTransform(scrollY, [0, 1000], ['0px', translate]);

    const scrollSpring = useSpring(translateY, { stiffness: 300, damping: 100 });

    useEffect(() => {
      const handleScroll = () => {
        if (scrollY.get() > prevScrollY) {
          setScrollDirection('down');
          setTranslate('-100px')
          
        } else {
          setScrollDirection('up');
          setTranslate('100px')
        }
        setPrevScrollY(scrollY.get());
      };
  
      handleScroll();
    }, [scrolling, scrollY]);

    // Update scrolling state based on scroll activity
    useEffect(() => {
      const handleScroll = () => {
        setScrolling(true);
        setInitialScroll(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setScrolling(false);
        }, 100);
      };
  
      let scrollTimeout;
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }, []);

  return (
    
    <div className='bg-[#161B22] relative'>
      
      <NavBar home={'#home'}/>
      <motion.div 
        className='hidden md:block glassmorphic py-1 px-1 rounded-l-lg right-0 fixed z-50 right-0 top-1/2'
        style={{y:initialScroll ? '0px' : scrollSpring}}
        initial={{
          x: 100,
          filter:'blur(10px)',
          opacity: 0
        }}
        animate={{
          x: 0,
          filter:'blur(0px)',
          opacity: 1
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        >
        <ul className='flex flex-col justify-between items-center gap-y-2'>
          <li>
            <Link href="https://github.com/matthew-beep" target='_blank'className="text-white hover:text-[#7B4EE6] text-4xl ease-in duration-200"><FontAwesomeIcon icon={faGithub} /></Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/matthewherradura/" target='_blank' className="text-white hover:text-[#7B4EE6] text-4xl ease-in duration-200"><FontAwesomeIcon icon={faLinkedin}  /></Link>
          </li>
        </ul>
      </motion.div>
      <main id='home'className='z-10'>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
