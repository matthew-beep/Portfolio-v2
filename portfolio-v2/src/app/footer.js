
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
    <footer className='flex flex-col w-full h-24 items-center'>
      <section className='border-2 w-9/12 text-3xl text-white font-poppins'>
        <div className=''>
          Contact Me
        </div>
        
      </section>
      <section className='border-2 w-9/12'>
        Designed in Figma and built with Nex.js and Tailwind CSS. 
      </section>      

    </footer>
  );
}
