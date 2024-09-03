
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
        Basketball and football are two of my favorite sports at the moment. I grew up as a big Patriots fan and would make an effort to watch the game every weekend. 
      </p>
      <p>
        Aside from just watching the game, I try to take physical activity fairly seriously. Over the years, I have played soccer, basketball, track, volleyball, lacrosee, football, and even water polo.
        While I do not play in most of these sports anymore, you might catch me being active in the gym or a local intermural basketball team.
      </p>
    </div>
  );
}
