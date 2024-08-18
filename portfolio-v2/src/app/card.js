
'use client';
import './fonts.css';
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Pill from './pill';

export default function Card({content}) {
  const [isHovered, setIsHovered] = useState(false);
  
  const childVar = {
    initial: {
      rotate: -45
    },
    hover: {
      y: -5,
      x: 5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.6, 1]
      }
    },
    leave: {
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.6, 1]
      }
    },
    imageHover: {
      border: '3px solid rgba(88, 88, 88, 1)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.6, 1]
      }
    }
  }

  return (
    <div className='w-11/12 flex flex-col xl:w-6/12 sm:px-10 items-start justify-center'>
      <motion.div 
        className='card flex flex-col p-3 gap-4 rounded-lg cursor-pointer my-5'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className='w-full h-72 rounded-3xl overflow-hidden'
          variants={childVar}
          initial={{border: '3px solid rgba(88, 88, 88, 0.3)'}}
          animate={isHovered ? 'imageHover' : ''}
        >
          <img src={require=(content.image)} className='h-full w-full object-cover rounded-sm'/>
        </motion.div>
        <div className='flex gap-1 items-end project-title items-center'>
          <h3 id="title" className='font-poppins font-bold text-2xl'>{content.name}</h3>          
          <motion.div
          className="h-auto flex items-start"
            variants={childVar}
            initial='initial'
            animate={isHovered ? 'hover' : 'leave'}
          >
            <FontAwesomeIcon className="text-xl arrow-link" icon={faArrowRight}/>
          </motion.div>
        </div>
        <div className='flex flex-wrap h-full w-full items-center gap-4'>
            {content.skills.map((skill, i) => (
                <Pill skills={skill} key={i}/>
            ))}   
        </div>
    
        <p className='mt-3 font-inter text-lg min-h-32 max-h-36'>{content.description}</p>
      </motion.div>
    </div>
  );
}
