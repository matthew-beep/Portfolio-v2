
'use client';
import './fonts.css';
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import Link from 'next/link';
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

/*min-h-[38rem] lg:min-h-[20rem]*/ 

  return (
    <div className='w-11/12 flex flex-col xl:w-6/12 items-start justify-start my-3 py-3 px-3 xl:h-[38rem]'>
      <motion.div 
        className='card flex flex-col px-3 pt-3 gap-3 rounded-lg cursor-pointer h-auto lg:pb-3'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className='w-full h-48 sm:h-52 lg:h-72 rounded-3xl overflow-hidden'
          variants={childVar}
          initial={{border: '3px solid rgba(88, 88, 88, 0.3)'}}
          animate={isHovered ? 'imageHover' : ''}
        >
          <img src={require=(content.image)} className='h-full w-full object-cover rounded-sm'/>
        </motion.div>
        <Link className='flex gap-1 items-end project-title items-center' href={content.link} target='_blank'>
          <h3 id="title" className='font-poppins font-bold sm:text-xl text-lg lg:text-2xl'>{content.name}</h3>          
          <motion.div
          className="h-auto flex items-start"
            variants={childVar}
            initial='initial'
            animate={isHovered ? 'hover' : 'leave'}
          >
            <FontAwesomeIcon className="text-xl arrow-link" icon={faArrowRight}/>
          </motion.div>
        </Link>
        <div className='w-full flex md:flex-col flex-col-reverse'>
          <div className='flex flex-wrap w-auto items-start gap-2'>
              {content.skills.map((skill, i) => (
                  <Pill skills={skill} key={i}/>
              ))}   
          </div>
          <p className='mb-3 md:mb-0 md:mt-3 font-inter text-md sm:text-lg min-h-32'>{content.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
