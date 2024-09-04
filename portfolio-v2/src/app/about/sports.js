
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
        Basketball and football are two of my favorite sports at the moment. I grew up as a big <span className="text-[#7B4EE6] font-bold">Patriots </span> fan and would make an effort to watch the game every weekend. 
      </p>
      <p>
        Aside from just watching sports, I try to be very physically active. Growing up, I have played various sports such as basketball, track, volleyball, lacrosee,  and even water polo.
        Nowadays, I mainly stick to <span className="text-[#7B4EE6] font-bold">lifting </span> and <span className="text-[#7B4EE6] font-bold">hooping </span> at the local LA Fitness in my spare time
      </p>
    </div>
  );
}
