
'use client';
import '../fonts.css';
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, easeInOut, useAnimation } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutCard({content, index, isHovered, onClick, revert}) {
  const controls = useAnimation();
  const [firstCard, setFirstCard] = useState(index == 0);
  const initialState = {
    cards: [
      { rotate: 0, translateX: 0, translateY: 0, zIndex: 40 }, // cardOne
      { rotate: -6, translateX: 0, translateY: 0, zIndex: 30 }, // cardTwo
      { rotate: 6, translateX: 0, translateY: -8, zIndex: 20 }, // cardThree
      { rotate: -1, translateX: -8, translateY: -8, zIndex: 10 } // cardFour
    ],
    animations: [
      { rotate: 24, translateY: 32, translateX: 150 }, // cardOneAnimation
      { rotate: 8, translateY: 8, translateX: 50 },    // cardTwoAnimation
      { rotate: -8, translateY: 8, translateX: -50 },  // cardThreeAnimation
      { rotate: -24, translateY: 32, translateX: -150 } // cardFourAnimation
    ]
  };
  
  // const titles = Object.keys(initialState)
  const selectedVariant = initialState.cards[index];
  const animatedVariant = initialState.animations[index];

  useEffect(() => {
    console.log("card : " + index + " " + isHovered);
    if (isHovered) {
      controls.start(animatedVariant)
    } else {
      controls.start(selectedVariant)
    }
  }, [isHovered]);

  useEffect(() => {
    if (revert) {
      controls.start(selectedVariant);
    }
  }, [revert]);

  /*
        <motion.div className='w-full'
        style={{
          height: firstCard ? '0%' : '100%',
          backgroundColor: content.bgColor
        }}
        whileHover={{
          height: '0%',
          transition: { 
            duration: 0.3,
            ease: [0.42, 0, 0.58, 1] 
          },
        }}
      >
  */

  return (
    <motion.div 
      className='rounded-lg absolute overflow-hidden aspect-[5/7] sm:w-[20rem] w-[15rem] cursor-pointer'
      style={{
        border: `3px solid ${content.bgColor}`,
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%), url(${content.imageSrc}) no-repeat center center`,
        backgroundSize: 'cover'
      }}
      animate={controls}
      whileHover={{
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)'
      }}
      transition=
      {{
        duration: 0.3, 
        ease: 'easeInOut'
      }}
      onMouseEnter={() => {
        if (isHovered) {
          controls.start({
            translateY: animatedVariant.translateY - 50,
            transition: { duration: 0.3 },
          });
        }
      }}
      onMouseLeave={() => {
        if (isHovered) {
          controls.start({
            translateY: animatedVariant.translateY,
            transition: { duration: 0.3 },
          });
        }
      }}
      onClick={(e) => {
        onClick(e);
        // Revert back to the initial state
      }}
    >
      <h3 className='text-white font-poppins text-2xl p-3 absolute'>{content.title}</h3>

      
    </motion.div>
  );
}
