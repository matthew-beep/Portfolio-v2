
'use client';
// import './fonts.css';
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
export default function Sports() {

  // need to add nav bar outside of main
  return (
    <div className="text-white flex flex-col gap-4 font-inter text-lg w-11/12 md:w-10/12">
      <p>
        Health and fitness is a part of my life that I take fairly seriously. Over the years, I have played soccer, basketball, track, volleyball, lacrosee, football, and even water polo.
      </p>
      <p>
        Currently, I am working as a User Interface Engineer, for <span className="text-[#7B4EE6] font-semiBold">ATS Automation</span>, where I design interface standards and templates for 
        over 500 employees across the country as well as develop UIs for buildings based on user rrequirements and needs. Within my time, 
        I have worked with and built interfaces for clients such as the <span className="text-[#7B4EE6] font-semiBold">Seattle Public Schools</span> system and <span className="text-[#7B4EE6] font-semiBold">Fred Hutch Cancer Center Campus</span>. 
      </p>
    </div>
  );
}
