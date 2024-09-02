
'use client';
import './fonts.css';
import github from '../../public/img/github.svg';
import linkedin from '../../public/img/linkedin.svg';
import { useState, useRef } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


export default function Footer() {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    const serviceId = 'service_wqgk8vf';
    const templateId = 'template_pa4w379';
    const publicId = 'U0yaErYpcP3hZrNCh';

    emailjs.sendForm(serviceId, templateId, form.current, publicId)
      .then((result) => {
          console.log("Email Was Sent");
          setIsEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  // need to add nav bar outside of main
  return (
    <footer className='flex flex-col w-full h-auto items-center text-white pt-20 gap-4 overflow-x-hidden'>
      <section className='w-9/12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-4 mb-10 lg:mb-0 w-full lg:w-1/2 font-inter'>
          <div className='font-poppins text-3xl font-bold underline decoration-[#7B4EE6] underline-offset-8'>
            Contact Me
          </div>
          <p className='lg:w-8/12 text-lg w-full font-inter'>
            Feel free to contact me if you want to connect, collaborate with me, or have any questions about my work.
          </p>
          <p className='lg:w-8/12 text-lg w-full font-inter'>
            You can also email me at matthew.herradura@gmail.com. Leave me a message and I will get back to you as soon as I can!
          </p>
          <div className='flex gap-4 font-poppins font-normal md:mt-7'>
            <Link 
              href="https://www.linkedin.com/in/matthewherradura/" 
              className='border-[#7B4EE6] border-2 py-1 px-3 rounded-full flex items-center gap-1 hover:bg-[#7B4EE6] duration-200 transition-all'
              target='_blank'
            >
              <div>LinkedIn</div>
              <FontAwesomeIcon icon={faArrowRight} className='-rotate-45'/>
            </Link>
            <Link 
              href="https://github.com/matthew-beep" 
              className='border-[#7B4EE6] border-2 py-1 px-3 rounded-full flex items-center gap-1 hover:bg-[#7B4EE6] duration-200 transition-all'
              target='_blank'
            >
              <div>GitHub</div>
              <FontAwesomeIcon icon={faArrowRight} className='-rotate-45'/>
            </Link>
          </div>
        </div>
        <div className='w-full lg:w-1/2 relative'>
          <div className='w-full h-full relative z-40 glassmorphic rounded-lg'>
            <form className='w-full h-full p-5 text-[#fff] font-poppins relative z-20 flex flex-col' ref={form} onSubmit={sendEmail}>
              <input 
                type="text" 
                placeholder='Your Name' 
                className='ring-0 w-full p-2 rounded-lg bg-[#2F3843] focus:outline-none focus:ring focus:ring-[#7B4EE6] duration-200 transition-all easeInOut placeholder:text-[#95a1af]' 
                name='name'
                required
              />
              <input 
                type="email" 
                placeholder='Your Email' 
                className='w-full p-2 mt-4 rounded-lg bg-[#2F3843] focus:outline-none focus:ring focus:ring-[#7B4EE6] duration-200 transition-all easeInOut placeholder:text-[#95a1af]'
                name='email'
                required 
              />
              <textarea 
                placeholder='Your Message' 
                className='w-full p-2 mt-4 rounded-lg bg-[#2F3843] flex-grow focus:outline-none focus:ring focus:ring-[#7B4EE6] duration-200 transition-all easeInOut placeholder:text-[#95a1af]' 
                rows='4'
                name='message'
                required
              >
              </textarea>
              <button className='w-full p-2 mt-4 text-white font-bold text-xl bg-[#7B4EE6] hover:bg-[#553B97] rounded-lg duration-500'>Send Message</button>
            </form>
          </div>
          <motion.div className="hidden g-white rounded-full md:absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 gradient-circle z-40"
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
      <section className='w-9/12 flex items-center justify-center py-10 mt-10 flex-col'>
        <p className='text-center'>
          Designed in <span className='font-bold text-[#7B4EE6]'>Figma</span> and built with 
          <span className='font-bold text-[#7B4EE6]'> Next.js</span> and 
          <span className='font-bold text-[#7B4EE6]'> Tailwind CSS</span>. Brought to life with 
          <span className='font-bold text-[#7B4EE6]'> Framer Motion</span>. All by Matthew Herradura
        </p>
      </section>      

    </footer>
  );
}
