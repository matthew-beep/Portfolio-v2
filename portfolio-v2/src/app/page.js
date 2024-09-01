
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
  const [initialScroll, setInitialScroll] = useState(true);
  const [pageHeight, setPageHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const ref = useRef(null);

  const [scope, animate] = useAnimate();

  
  const animations = {
    up: {y:-10},
    down: {y:10},
    stop: {y:0}
  };

  const translateY = useTransform(scrollY, [0, 1000], ['0px', translate]);

  const scrollSpring = useSpring(translateY, { stiffness: 300, damping: 100 });

    useEffect(() => { // detect scroll direction
      const handleScroll = () => {
        if (scrollY.get() > prevScrollY) {
          setScrollDirection('down');
          setTranslate('-100px')
          //console.log('Scrolling down');
          animate(scope.current, 
            {y:'-100px'})
        } else {
          setScrollDirection('up');
          setTranslate('100px')
          animate(scope.current, {y:'100px'})
          //console.log('Scrolling up');
        }
        setPrevScrollY(scrollY.get());
      };
  
      handleScroll();
    }, [scrolling, scrollY]);

    useEffect(() => { // detect scrolling
      let scrollTimeout;
  
      const handleScroll = () => {
        console.log('Scroll event detected');
        
        if (!scrolling) {
          console.log('User started scrolling');
          setScrolling(true);
        }
  
        // Clear the previous timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
  
        // Set a new timeout to detect scroll end
        scrollTimeout = setTimeout(() => {
          console.log('User stopped scrolling');
          setScrolling(false);
        }, 150); // Adjust the delay as needed
      };
  
      // Add the scroll event listener
      console.log('Adding scroll event listener');
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listener on component unmount
      return () => {
        console.log('Removing scroll event listener');
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
        console.log("go back to 0");
      }
    }, [scrolling]);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Initial log
      console.log(`Current width: ${window.innerWidth}`);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [width]);

  return (
    
    <div className='bg-[#161B22] relative'>
      
      <NavBar home={'#home'} height={pageHeight} width={width} className="hidden md:block"/>
      <MobileNav home={'#home'} height={pageHeight} width={width} className='z-50 absolute md:hidden top-0 left-0 '/>
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
        <Portfolio onHeightChange={setPageHeight}/>
      </main>
      <Footer />
    </div>
  );
}
