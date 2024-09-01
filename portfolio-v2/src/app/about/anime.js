
'use client';
// import './fonts.css';
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
export default function Anime() {

  // need to add nav bar outside of main
  return (
    <div className="text-white flex flex-col gap-4 font-inter text-md xl:text-lg w-11/12 w-full md:w-10/12">
      <p>
        Anime has been a huge part of my life ever since I was born. I can still remember the first film I ever saw in theaters being <span className="text-[#7B4EE6] font-bold">Howl's Moving Castle</span>.
        Some of my favorite shows of all time are <span className="text-[#7B4EE6] font-bold">One Piece</span>, <span className="text-[#7B4EE6] font-bold">Gurren Laggann</span>, 
        <span className="text-[#7B4EE6] font-bold"> Naruto</span>, and <span className="text-[#7B4EE6] font-bold">Haikyuu</span>
      </p>
      <p>
        Currently, I am working as a User Interface Engineer, for <span className="text-[#7B4EE6] font-semiBold">ATS Automation</span>, where I design interface standards and templates for 
        over 500 employees across the country as well as develop UIs for buildings based on user rrequirements and needs. Within my time, 
        I have worked with and built interfaces for clients such as the <span className="text-[#7B4EE6] font-semiBold">Seattle Public Schools</span> system and <span className="text-[#7B4EE6] font-semiBold">Fred Hutch Cancer Center Campus</span>. 
      </p>
    </div>
  );
}
