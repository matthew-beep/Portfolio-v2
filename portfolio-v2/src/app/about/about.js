
'use client';
// import './fonts.css';
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Journey from './journey';
export default function About({ onHeightChange }) {

  const ref = useRef(null);
  useEffect(() => {
    // Set the height of the element
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      onHeightChange(rect.height); // Call the function
      console.log("about height: " + rect.height);
    }
  }, [onHeightChange]);

  // need to add nav bar outside of main
  return (
    <div ref={ref} className='flex h-screen w-full flex-col-reverse md:flex-row-reverse md:pt-64'>
      <div className="w-full border-2 flex-col flex gap-4">
        <div>
          <h3 className="flex font-inter text-[#7B4EE6] text-2xl mb-1">
            <TypeAnimation
              sequence={[
                'ABOUT ME',
                4000,
              ]}
              speed={20}
              wrapper="span"
              cursor={false}
              className='font-inter text-2xl'
            />
            <motion.div
              className="text-2xl font-bold text-[#7B4EE6] ml-1"
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
          <h1 className="text-white font-poppins font-bold text-5xl">
            My Journey
          </h1>
        </div>
        <Journey />
      </div>
      <div className="w-full border-2 flex items-center justify-center">
        <div className="w-56 relative border-2 h-96">
          <div className="w-56 h-96 rounded-lg bg-white absolute z-40"></div>
          <div className="w-56 h-96 rounded-lg bg-[#7B4EE6] absolute z-30 -rotate-6"></div>
          <div className="w-56 h-96 rounded-lg bg-[#464153] absolute z-20 rotate-6 -translate-y-2"></div>
          <div className="w-56 h-96 rounded-lg bg-[#8474A8] absolute z-10 -translate-y-2 -translate-x-2 -rotate-1"></div>
        </div>
      </div>
    </div>
  );
}
