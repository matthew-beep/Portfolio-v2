
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
        Anime has been a huge part of my life ever since I was born. I can still remember the first film I ever saw in theaters being <span className="text-[#7B4EE6] font-bold">Howl&apos;s Moving Castle</span>.
        Some of my favorite shows of all time are <span className="text-[#7B4EE6] font-bold">One Piece</span>, <span className="text-[#7B4EE6] font-bold">Gurren Laggann</span>, 
        <span className="text-[#7B4EE6] font-bold"> Naruto</span>, and <span className="text-[#7B4EE6] font-bold">Haikyuu</span>
      </p>
      <p>
        Currently, you might find me catching up on some older shows such as <span className="text-[#7B4EE6] font-bold"> Hajime No Ippo</span> and <span className="text-[#7B4EE6] font-bold"> Reborn!</span>. 
        I've also picked up reading manga in my spare time and have been busy reading <span className="text-[#7B4EE6] font-bold"> Blue Lock</span> as well as <span className="text-[#7B4EE6] font-bold"> Jujutsu Kaisen</span>.
        
      </p>
    </div>
  );
}
