
'use client';
import './fonts.css';
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useInView, inView, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Card from './card';
import Pill from './pill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link  from 'next/link'


export default function Projects({ work }) {

  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.01}); // gonna need to check scroll position too
  const [type, startType] = useState(false);
  const [file, showFile] = useState(false);
  
  useEffect(() => {
    //console.log("projects: " + isInView);
    if(isInView == true) {
      showFile(true);
    } else {
      showFile(false);
    }
    
  }, [isInView])

  // need to add nav bar outside of main
  return (
    <section ref={ref}  id="projects" className='min-h-screen h-auto z-20 flex justify-center items-start pt-64 pb-20 relative text-white sticky top-0 border-2'>
      {file &&
        <motion.div 
          id="file"
          className='flex flex-col gap-2 project-section bg-[#161B22] w-11/12 md:w-9/12 h-auto rounded-lg md:py-10 md:px-10 py-5 border-2'
          initial={{
            y: '400px',
          }}
          animate={{ 
            y: '0px',
          }}
          transition={{
            type: 'spring',
            duration: 1,
            bounce: 0.50
          }}
          onViewportEnter={() => startType(true)}
        >
          <h3 className="flex font-inter text-[#7B4EE6] text-2xl mb-1">
            {type && <TypeAnimation
              sequence={[
                'MY PORTFOLIO',
                4000,
              ]}
              speed={20}
              wrapper="span"
              cursor={false}
              className='font-inter text-lg'
            />}
            <motion.div
              className="text-xl font-bold text-[#7B4EE6] ml-1"
              animate={{ opacity: [1, 0, 1] }} // Animate opacity from 1 to 0 and back to 1
              transition={{
                duration: 0.75, // Duration for one blink cycle
                repeat: Infinity, // Repeat indefinitely
                repeatType: 'loop', // Loop the animation
                ease: [0.42, 0, 0.58, 1], // Smooth animation
              }}
            >
              |
            </motion.div>
          </h3>
          <h2 className='font-poppins font-bold text-5xl'>Projects</h2>
          <div className='m-auto w-full flex-col items-center flex md:flex-row xl:justify-between justify-center h-auto flex-wrap'>
            {work.map((project, i) => (
              <Card content={project} key={i}/>
            ))}              
          </div>
        </motion.div>
      }
    </section>
  );
}
