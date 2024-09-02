
'use client';
// import './fonts.css';
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation  } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Journey from './journey';
import Anime from './anime';
import Sports from './sports';
import Games from './games';
import AboutCard from './about-card';
export default function About({ onHeightChange }) {
  const hoverWidth = 1024;
  const ref = useRef(null);
  const [displayed, setDisplay] = useState(<Journey/>); // set text based on first card
  const [cardHover, setCardHover] = useState(false);
  const [width, setWidth] = useState(0);
  const [text, setText] = useState('');
  const [revert, setRevert] = useState(false);
  const [hoverDisabled, setHoverDisabled] = useState(false);
  const [cards, setCards] = useState(
    [
      { 
        id: 1, 
        bgColor: '#FFFFFF', 
        imageSrc: '/img/gradresize.jpg', 
        altText: 'A Picture of Matthew Herradura',
        title: 'My Journey' 
      },
      { 
        id: 2, 
        bgColor: '#7B4EE6', 
        imageSrc: '/img/simontest.gif', 
        altText: 'A Gif of Luffy',
        title: 'Anime' 
      },
      { 
        id: 3, 
        bgColor: '#464153', 
        imageSrc: '/img/ncaa.png', 
        altText: 'A Picture of Matthew Herradura',
        title: 'Video Games' 
      },
      { 
        id: 4, 
        bgColor: '#8474A8', 
        imageSrc: '/img/giphy.gif', 
        altText: 'A Picture of Matthew Herradura',
        title: 'Sports' 
      },
    ]
  )

  const controls = useAnimation();
  const handleCardClick = (id) => {
    // Find the index of the clicked card
    console.log("card clicked");
    setHoverDisabled(true);
    setRevert(true); 
    const cardIndex = cards.findIndex(card => card.id === id);
    // Remove the clicked card from its current position
    const [clickedCard] = cards.splice(cardIndex, 1);
    // Insert the clicked card at the front of the array
    const newCardsArray = [clickedCard, ...cards];
    // Update the state with the new array
    setCards(newCardsArray);
    setTimeout(() => {
      setRevert(false);
      //setCardHover(false); // Turn off the revert state
    }, 100);
    setTimeout(() => {
      setHoverDisabled(false);
    }, 1000)
  };

  useEffect(() => {
    console.log(cards)
  }, [cards]);

  useEffect(() => {
    // Step 1: Animate opacity to 0
    controls.start({ opacity: 0, filter: 'blur(2px)', transition: { duration: 0.1, ease: 'easeIn' } }).then(() => {
      // Step 2: Update the displayed component based on the first card's id
      if (cards[0].id === 1) {
        setDisplay(<Journey />);
      } else if (cards[0].id === 2) {
        setDisplay(<Anime />);
      } else if (cards[0].id === 3) {
        setDisplay(<Games />);
      } else {
        setDisplay(<Sports />);
      }

      // Step 3: Animate opacity back to 1
      controls.start({ opacity: 1, filter: 'blur(0px)',transition: { duration: 0.1, ease: 'easeIn' } });
    });
  }, [cards])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This code will only run on the client-side
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      setWidth(window.innerWidth);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // need to add nav bar outside of main
  return (
    <div ref={ref} className='flex h-auto sm:min-h-screen w-9/12 m-auto lg:m-0 lg:w-full flex-col-reverse lg:flex-row-reverse pb-10 pt-10 lg:pb-0 md:pt-64 gap-20 lg:gap-0'>
      <div className="w-full flex-col flex gap-4 w-9/12">
        <div>
          <h3 className="flex font-inter text-[#7B4EE6] text-xl lg:text-2xl mb-1">
            <TypeAnimation
              sequence={[
                'ABOUT ME',
                4000,
              ]}
              speed={20}
              wrapper="span"
              cursor={false}
              className='font-inter text-2xl'
            />
            <motion.div
              className="text-2xl font-bold text-[#7B4EE6] ml-1"
              animate={{ opacity: [1, 0, 1] }} // Animate opacity from 1 to 0 and back to 1
              transition={{
                duration: 0.75, // Duration for one blink cycle
                repeat: Infinity, // Repeat indefinitely
                repeatType: 'loop', // Loop the animation
                ease: [0.42, 0, 0.58, 1], // Smooth animation
              }}
            >
              |
            </motion.div>
          </h3>
          <h1 className="text-white font-poppins font-bold lg:text-5xl text-4xl">
            {cards[0].title}
          </h1>
        </div>
        <motion.div
          initial ={{opacity: 0}}
          animate={controls}
        >
          {displayed}
        </motion.div>
      </div>
      <div className="w-full flex items-center lg:items-start justify-center gap-10 mt-36 md:mt-0">
        <div 
          className="rounded-md bg-[#3E484C] p-1 hover:bg-[#7B4EE6] duration-200 transition-all cursor-pointer lg:hidden flex items-center justify-center h-10"
          onClick={() => {
            if(cards[0].id == 1){ 
              handleCardClick(cards[cards.length - 1].id);
            } else {
              handleCardClick(cards[0].id - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} className='text-3xl rotate-90 text-white'/>
        </div>
        <motion.div 
          className="w-auto lg:w-[34rem] flex justify-center items-start aspect-[5/7] w-[15rem] lg:aspect-[5/5.2]"
          onMouseEnter={() => {
            if(width >= hoverWidth) {
              setCardHover(true);
            }
          }}
          onMouseLeave={() => {
            if(width >= hoverWidth) {
              setCardHover(false);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <div className="sm:w-[17rem] xl:w-[20rem] w-[15rem] h-auto">
            {cards.map((card, index) => (
              <AboutCard 
              className="-translate-x/2"
              content={card} 
              key={card.id} 
              index={index} 
              isHovered={cardHover && !hoverDisabled }
              onClick={() => handleCardClick(card.id)}
              revert={revert}
              />
            ))}
          </div>
        </motion.div>
        <div 
          className="rounded-md bg-[#3E484C] p-1 hover:bg-[#7B4EE6] duration-200 transition-all cursor-pointer lg:hidden flex items-center justify-center h-10"
          onClick={() => {
              if(cards[0].id == cards.length) { 
                handleCardClick(1);
              } else {
                handleCardClick(cards[0].id + 1);
              }
          }}
          >
          <FontAwesomeIcon icon={faChevronDown} className='text-3xl -rotate-90 text-white'/>
        </div>
      </div>
    </div>
  );
}
