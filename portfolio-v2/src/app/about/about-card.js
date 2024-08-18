
'use client';
import '../fonts.css';
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, easeInOut, m } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutCard({content, index, isHovered}) {
  let bgColor = '#FFFFFF';
  const [cardHover, setCardHover] = useState(false);
  console.log("hover: " + isHovered);
  

  /*
    <div className="w-56 relative border-2 h-96 cursor-pointer border-2">
      <div className="rounded-lg bg-white absolute z-40 border-2 overflow-hidden about-card">
        <img src="/img/gradPhoto.jpg" className="w-full h-full object-cover about-img"/>
      </div>
      <div className="about-card rounded-lg bg-[#7B4EE6] absolute z-30 -rotate-6"></div>
      <div className="about-card rounded-lg bg-[#464153] absolute z-20 rotate-6 -translate-y-2"></div>
      <div className="about-card rounded-lg bg-[#8474A8] absolute z-10 -translate-y-2 -translate-x-2 -rotate-1"></div>
    </div>
  */  
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

  const variantAnimation = [initialState.cardOneAnimation, initialState.cardTwoAnimation, initialState.cardThreeAnimation, initialState.cardFourAnimation];
  const variants = [initialState.cardOne, initialState.cardTwo, initialState.cardThree, initialState.cardFour];
  const selectedVariant = variants[index];
  const animatedVariant = variantAnimation[index];


  return (
    <motion.div 
      className='rounded-lg absolute overflow-hidden about-card cursor-pointer'
      style={{
        backgroundColor: ' linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
        border: `2px solid ${content.bgColor}`
      }}
      variants={initialState}
      initial='cardOne'
      animate='cardOneAnimation'
      transition=
      {{
        duration: 0.3, 
        ease: 'easeInOut'
      }}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      
      <h3 className='text-black bg-white h-8'>{cardHover + ""}</h3>
      <img src={content.imageSrc} className='object-cover w-full h-full'/>
      
    </motion.div>
  );
}
