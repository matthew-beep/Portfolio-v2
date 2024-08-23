
'use client';
import '../fonts.css';
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, easeInOut, m } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutCard({content, index, isHovered}) {
  let bgColor = '#FFFFFF';
  const [cardHover, setCardHover] = useState(false);
  
  const initialState = {
    cardOne: {
      rotate:0,
      translateX:0,
      translateY:0,
      zIndex: 40,
    },
    cardTwo: {
      rotate: -6,
      translateX:0,
      translateY:0,
      zIndex: 30,
    },
    cardThree: {
      rotate: 6,
      translateX: 0,
      translateY: -8,
      zIndex: 20,
    },
    cardFour: {
      rotate: -1,
      translateY: -8,
      translateX:-8,
      zIndex: 10,
    },
    cardOneAnimation: {
      rotate: 24,
      translateY: 32,
      translateX: 150,
    },
    cardTwoAnimation: {
      rotate: 8,
      translateY: 8,
      translateX: 50,
    },
    cardThreeAnimation: {
      rotate: -8,
      translateY: 8,
      translateX: -50,

    },
    cardFourAnimation: {
      rotate: -24,
      translateY: 32,
      translateX: -150,
    },
  }

  const titles = Object.keys(initialState)
  const selectedVariant = titles[index];
  const animatedVariant = titles[index + 4];


  return (
    <motion.div 
      className='rounded-lg absolute overflow-hidden about-card cursor-pointer'
      style={{
        backgroundColor: ' linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
        border: `2px solid ${content.bgColor}`
      }}
      variants={initialState}
      initial={selectedVariant}
      animate={isHovered ? animatedVariant : selectedVariant}
      transition=
      {{
        duration: 0.3, 
        ease: 'easeInOut'
      }}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      whileHover=
      {{
        translateY: '-10%',
        transition: {
          duration: 0.3, // duration of the transition in seconds
          ease: 'easeInOut', // easing function for the transition
        },
      }}
    >
      
      <h3 className='text-black bg-white h-8'>{cardHover + ""}</h3>
      <img src={content.imageSrc} className='object-cover w-full h-full'/>
      
    </motion.div>
  );
}
