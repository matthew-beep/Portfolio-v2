
'use client';
import './fonts.css';
import github from '../../public/img/github.svg';
import linkedin from '../../public/img/linkedin.svg';
import { useState } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Footer() {

  // need to add nav bar outside of main
  return (
    <footer className='flex flex-col w-full h-auto items-center text-white pt-20 gap-4 border-2'>
      <section className='w-9/12 flex'>
        <div className='flex flex-col gap-4'>
          <div className='font-poppins text-3xl font-bold'>
            Contact Me
          </div>
          <p className='w-8/12 text-xl'>
            Feel free to contact me if you want to connect, collaborate with me, or have any questions about my work.
          </p>
          <p className='w-8/12 text-xl'>
            You can also directly email me at matthew.herradura@gmail.com. Leave me a message and I will get back to you as soon as I can!
          </p>
        </div>
        <div className='w-1/2 relative'>
          <div className='w-full h-full relative z-40 glassmorphic rounded-lg'>
            <form className='w-full h-full p-5 text-white font-poppins relative z-20'>
              <input type="text" placeholder='Your Name' className='w-full p-2 focus:ring-[#7B4EE6] rounded-lg' />
              <input type="email" placeholder='Your Email' className='w-full p-2 mt-4 rounded-lg' />
              <textarea placeholder='Your Message' className='w-full p-2 mt-4 rounded-lg' rows='4'></textarea>
              <button className='w-full p-2 mt-2 text-white font-bold text-xl bg-[#7B4EE6] hover:bg-[#553B97] rounded-full duration-500'>Send Message</button>
            </form>
          </div>
          <motion.div className="bg-white rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 gradient-circle z-40"
            initial={{
              width: 0,
              height:0,
            }}
            animate={{
              width: '3rem',
              height: '3rem',
            }}
            transition={{
              type: 'spring',
              delay: 0.4,                        
              duration: 0.8,
              bounce: 0.6
            }}                      
          >
          </motion.div>
          <motion.div 
            className="absolute bg-white rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 gradient-circle z-0"
            initial={{
              width: 0,
              height:0,
            }}
            animate={{
              width: '8rem',
              height: '8rem',
            }}
            transition={{
              type: 'spring',
              duration: 0.8,
              bounce: 0.6
            }}
          >
            <motion.div className="bg-white rounded-full absolute bottom-0 right-0 translate-x-3/4 translate-y-3/4 gradient-circle z-0 blur-sm"
              initial={{
                width: 0,
                height:0,
              }}
              animate={{
                width: '2rem',
                height: '2rem',
              }}
              transition={{
                type: 'spring',
                delay: 0.4,                        
                duration: 0.8,
                bounce: 0.6
              }}                      
            >
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className='w-9/12 flex items-center justify-center py-10 mt-10'>
        <div>
          Designed in <span className='font-bold'>Figma</span> and built with <span className='font-bold'>Next.js</span> and Tailwind CSS. Brought to life with <span className='font-bold'>Framer Motion</span>.
        </div>
      </section>      

    </footer>
  );
}
