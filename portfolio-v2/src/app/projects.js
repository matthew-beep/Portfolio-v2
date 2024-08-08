
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
    <footer className='border-2 border-white border-solid w-full h-24'>
      <section className='border-white border-solid border-2'>
        Contact Me!
      </section>
      <section className='border-white border-solid border-2'>
        Designed in Figma and built with Nex.js and Tailwind CSS. 
      </section>      

    </footer>
  );
}
