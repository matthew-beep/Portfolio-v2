
'use client';
import './fonts.css';
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, useScroll, useTransform, useSpring, useAnimate} from 'framer-motion';
import Portfolio from './portfolio';
import NavBar from './header';
import MobileNav from './mobileNav';
import Link from 'next/link';
import Footer from './footer';
export default function Home() {
  const { scrollY } = useScroll();
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [translate, setTranslate] = useState('-100px');
  const [pageHeight, setPageHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  const [scope, animate] = useAnimate();

  
  const animations = {
    up: {y:-10},
    down: {y:10},
    stop: {y:0}
  };
  
  const translateY = useTransform(scrollY, [0, 1000], ['0px', translate]);
    useEffect(() => { // detect scroll direction
      const handleScroll = () => {
        if (scrollY.get() > prevScrollY) {
          setScrollDirection('down');
          setTranslate('-100px')
          animate(scope.current, 
            {y:'-100px'})
        } else {
          setScrollDirection('up');
          setTranslate('100px')
          animate(scope.current, {y:'100px'})
        }
        setPrevScrollY(scrollY.get());
      };
  
      handleScroll();
    }, [scrolling, scrollY]);

    useEffect(() => { // detect scrolling
      let scrollTimeout;
  
      const handleScroll = () => {
        if (!scrolling) {
          setScrolling(true);
        }
  
        // Clear the previous timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
  
        // Set a new timeout to detect scroll end
        scrollTimeout = setTimeout(() => {
          setScrolling(false);
        }, 150); // Adjust the delay as needed
      };
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      };
    }, [scrolling]);

    useEffect(() => {
      if (!scrolling) {
        animate(scope.current, {
          y:'0px',              
          transition: {
            type:"spring",
            duration: 1,
            ease: 'easeOut'
          }
        })
      }
    }, [scrolling]);

    useEffect(() => { 
      if (typeof window !== 'undefined') {
        // This code will only run on the client-side
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
  
        window.addEventListener('resize', handleResize);
        setWidth(window.innerWidth);
  
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);

  return (
    
    <div className='bg-[#161B22] relative'>
      
      <NavBar home={'#home'} height={pageHeight} width={width} className="hidden md:block"/>
      <MobileNav home={'#home'} height={pageHeight} width={width} className='z-100 md:hidden top-0 left-0 '/>
      <motion.div 
        className='hidden md:block glassmorphic py-1 px-1 rounded-l-lg right-0 fixed z-50 right-0 top-1/2'
        ref={scope}
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
      <main id='home'className='relative z-10'>
        <Portfolio onHeightChange={setPageHeight} width={width}/>
      </main>
      <Footer />
    </div>
  );
}
