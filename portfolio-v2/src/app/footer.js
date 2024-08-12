
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
    <footer className='flex flex-col w-full h-auto items-center text-white py-10 gap-4 border-2'>
      <section className='w-9/12 flex'>
        <div className='border-2'>
          <div className='font-poppins text-3xl font-bold'>
            Contact Me
          </div>
          <div className='w-full text-md border-2'>
            Feel free to contact me if you want to connect, collaborate with me, or have any questions about my work.
          </div>
        </div>
        <div className='w-1/2 glassmorphic rounded-lg'>
          <form className='w-full h-full p-5'>
            <input type="text" placeholder='Your Name' className='border-2 w-full p-2 focus:ring-[#7B4EE6]' />
            <input type="email" placeholder='Your Email' className='border-2 w-full p-2 mt-4' />
            <textarea placeholder='Your Message' className='border-2 w-full p-2 mt-4' rows='4'></textarea>
            <button className='border-2 w-full p-2 text-white font-bold text-xl bg-[#7B4EE6] hover:bg-[#553B97]'>Send Message</button>
          </form>
        </div>
      </section>
      <section className='w-9/12 flex items-center justify-center'>
        <div>
          Designed in Figma and built with Next.js and Tailwind CSS. 
        </div>
      </section>      

    </footer>
  );
}
