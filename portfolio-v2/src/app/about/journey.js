
'use client';
// import './fonts.css';
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
export default function Journey() {

  // need to add nav bar outside of main
  return (
    <div className="text-white flex flex-col gap-4 font-inter text-md xl:text-lg w-11/12 w-full md:w-10/12">
      <p>
          Hey, my name is Matthew Herradura. I am a UX Designer and Front End Developer based out of Seattle, Washington. 
          I graduated from the <span className="text-[#7B4EE6] font-bold">University of Washington</span> (Go dawgs!) and earned a degree in Human Computer Interaction 
          from the iSchool where I learned the best practices of intersecting humans with technology through user research, 
          design, and front end development.
      </p>
      <p>
        Currently, I am working as a User Interface Engineer, for <span className="text-[#7B4EE6] font-bold">ATS Automation</span>, where I design and develop interface standards and templates for 
        over 500 employees across the country. My role  also involves building out intuitive UIs for building management and data visualization, tailored to meet diverse user requirements. Within my time, 
        I have worked with and built interfaces for prominent clients such as the <span className="text-[#7B4EE6] font-bold">Seattle Public Schools</span> system and the <span className="text-[#7B4EE6] font-bold">Fred Hutch Cancer Center Campus</span>. 
      </p>
    </div>
  );
}
