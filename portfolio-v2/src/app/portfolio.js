
'use client';
import './fonts.css';
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Portfolio() {
  // need to add nav bar outside of main
  const [blurVal, setBlurVal] = useState(0);
  const [modalOpacity, setModalOpacity] = useState();
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [500, 1000], ['0px', '10px']);
  const modal = useTransform(scrollY, [500, 1000], ['0%', '35%']);
  console.log(blur.get());
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setBlurVal(blur.get());
    setModalOpacity(modal.get());
  })
  /*
  const background = (blurVal) => ({
    filter: `blur(${blur.get()})`,
    width: '100%',
    height: '100%'
  })
  */

  return (
    <div className='relative flex flex-col'>
      <section className="h-screen w-full flex justify-center items-start sticky top-0 z-10">
        <motion.div style = {{ 
          filter: `blur(${blurVal})`,
          width: '100%',
          height: '100%',
          backgroundColor: `rgba(0, 0, 0,${modalOpacity})`}}
          className='flex justify-center items-center img-container md:bg-grid bg-no-repeat bg-center'>
          <div className="w-10/12 h-full flex justify-center items-center">
            <div className="h-full w-full flex flex-col justify-center">
              <div className="flex flex-col h-auto justify-between">
                <h3 className="flex font-inter text-[#7B4EE6] text-2xl mb-3">
                  <span>
                  <TypeAnimation
                    sequence={[
                      'FRONT END DEVELOPER',
                      2000, 
                      'UX DESIGNER', 
                      2000, 
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    className='font-inter text-2xl'
                  />
                  </span>    
                  <motion.div
                    className="text-2xl font-bold text-[#7B4EE6]"
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
                <h1 className="font-poppins text-white text-5xl mb-1">Hey, I'm <span className="underline">Matt</span> 👋</h1>
                <p className="text-white text-base">I like to <span className="font-inter font-bold text-[#7B4EE6]">design</span> and <span className="font-inter font-bold text-[#7B4EE6]">develop</span> user interfaces.</p>
              </div>
              <div className="w-5/12 h-40 rounded-lg mt-9 relative mt-10">
                <div className="w-24 h-24 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 gradient-circle z-30">
                  <div className="w-8 h-8 bg-white rounded-full absolute top-0 right-0 translate-x-3/4 -translate-y-full gradient-circle z-30 blur-sm"></div>
                </div>
                <div className="w-full h-full glassmorphic rounded-lg z-20 relative">
                  test
                </div>
                <div className="w-32 h-32 bg-white rounded-full absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 gradient-circle z-10">
                  <div className="w-16 h-16 bg-white rounded-full absolute top-0 left-0 -translate-x-3/4 -translate-y-3/4 gradient-circle z-30"></div>
                  <div className="w-8 h-8 bg-white rounded-full absolute bottom-0 right-0 translate-x-3/4 translate-y-3/4 gradient-circle z-30 blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <section className='h-screen z-20 flex justify-center items-start pt-64 relative text-white sticky top-0'>
        <div className='bg-[#161B22] w-10/12 h-screen absolute overflow-auto rounded-lg'>
          <h3>My Projects</h3>              
        </div>

      </section>
    </div>
  );
}
