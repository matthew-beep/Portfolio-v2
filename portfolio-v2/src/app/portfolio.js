'use client';
import './fonts.css';
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useInView, inView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Card from './card';
import Pill from './pill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link  from 'next/link'
import Projects from './projects';
export default function Portfolio({ onHeightChange, width }) {
  const fullBlur = '30px';
  const fullOpaque = width > 1024 ? '50%' : '75%';
  //const mobileOpaque = '75%';

  const [modalOpacity, setModalOpacity] = useState();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [200, 1000], ['0px', fullBlur]);
  const modal = useTransform(scrollY, [200, 1000], ['0%', fullOpaque]);
  const [blurVal, setBlurVal] = useState(blur);
  const ref = useRef(null);

  /*
  useEffect(() => {
    // Set the height of the element
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      onHeightChange(rect.height); // Call the function
      console.log(rect.height);
    }
  }, [onHeightChange]);
  */

  const projects = 
  [
    {
      name: 'VizDAS',
      description: 'The first ever public facing Distributed Acoustic Sensing research tool. Built in collaboration with UWs Earth and Space Science Department and recognized as a Research Award Finalist at the iSchool Capstone Gala.',
      image: '/img/vizdas.png',
      alt: 'A photo of the ViZDAS project',
      link: 'https://dasway.ess.washington.edu/vizdas/',
      skills: ['React', 'Figma', 'UX Research', 'Wireframing'],
      complete: true
    },
    {
      name: 'IMDb Redesign',
      description: "An analysis of the Internet Movie Database's information architecture. Includes a collection of recommendations for improvement on IMDb's hierarchy of information related to labels, search, navigation, site mapping, etc.",
      image: '/img/imdb_svg.svg',
      alt: 'The imdB logo',
      link: '/files/imdbPres.pdf',
      skills: ['UX Research', 'Personas', 'UX Design', 'Information Architecture'],
      complete: true
    },
    {
      name: 'Blossom',
      description: 'Blossom is a mobile application designed to help encourage young women pursue careers in male dominated STEM fields. A more detailed description of our research, design process, and final prototype can be found in the case study below.',
      image: '/img/blossom.jpg',
      alt: 'A photo of the Blossom project prototype',
      link: '/files/blossom.pdf',
      skills: ['User Testing', 'Personas', 'UX Research', 'Wireframing'],
      complete: true
    },
    {
      name: "What's Your Vibe (In Progress)",
      description: 'A music web app which allows users to connect to their Spotify accounts and efficiently access and discover new music based on their mood.',
      image: '/img/spotify.png',
      alt: 'Spotify Logo',
      link: 'https://github.com/matthew-beep/',
      skills: ['React', 'Figma', 'Spotify API'],
      complete: false
    },
  ];

  const skills = ['HTML', 'CSS', 'JavaScipt', 'React', 'Tailwind', 'NextJS', 'Git','Figma', 'Adobe Illustrator', 'UX Research', 'Wireframing', 'Information Architecture'];
  /*
  useEffect(() => {
   
    console.log('page loaded');
    console.log(blur.get());
    console.log(scrollPos);
    console.log('scrollY:' + scrollY.get());
    
   console.log('test');
   let max = Math.max(window.scrollY, 1000)
   if (window.scrollY > 200) {
    setBlurVal((window.scrollY - 200) / 800);
    setModalOpacity((window.scrollY - 200) / 800);
   }
  }, [])
    */
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  
  useEffect(() => {
    // Check initial scroll position on component mount
    const handleInitialScroll = () => {;
      const initialScrollY = window.scrollY;

      setBlurVal(blur.get());
      setModalOpacity(modal.get());
    };

    // initial scroll check
    if(window.scrollY > 0 ) {
      console.log('load blur');
      handleInitialScroll();
    }

    window.addEventListener('scroll', handleInitialScroll);

    return () => { //unmount
      window.removeEventListener('scroll', handleInitialScroll);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setBlurVal(blur.get());
    setModalOpacity(modal.get());
  })

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '#projects');
  };

 

  return (
    <div className='relative flex flex-col'>
      <section ref={ref} id="home" className="h-screen w-full flex justify-center items-start sticky top-0 z-10 relative overflow-x-clip">
        <motion.div 
          className='z-50 absolute w-screen h-screen'
          style={{
            backdropFilter: `blur(${blurVal})`,
            backgroundColor: `rgba(0, 0, 0,${modalOpacity})`,
            pointerEvents: 'none'
          }}
        >
        </motion.div>
          <div className="w-full h-full flex justify-center items-center img-container md:bg-grid bg-no-repeat bg-center">
            <motion.div 
              className="h-full w-11/12 md:w-9/12 flex flex-col justify-between pt-32 lg:pt-64 lg:pb-10 pb-20"
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
            >
              <div className='flex flex-col lg:h-auto h-3/4'>
                <motion.div 
                  className="flex flex-col h-auto justify-between"
                  initial={{ filter: 'blur(10px)' }}
                  animate={{ filter: 'blur(0px)'}}
                >
                  <h3 className="flex font-inter text-[#7B4EE6] text-2xl mb-3">
                    <TypeAnimation
                      sequence={[
                        'FRONT END DEVELOPER',
                        2000, 
                        'UX DESIGNER', 
                        2000, 
                      ]}
                      wrapper="span"
                      cursor={false}
                      repeat={Infinity}
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
                  <h1 className="font-poppins text-white text-4xl lg:text-5xl mb-3">Hey, I&apos;m <span className="underline">Matt</span> 👋</h1>
                  <p className="text-white font-inter text-lg">I like to <span className="font-inter font-bold text-[#7B4EE6]">design</span> and <span className="font-inter font-bold text-[#7B4EE6]">develop</span> user interfaces.</p>
                </motion.div>
                <div className="xl:w-6/12 w-full h-full rounded-lg relative mt-16 lg:mt-10">
                  <motion.div 
                    className="absolute bg-white rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 gradient-circle z-0"
                    initial={{
                      width: 0,
                      height:0,
                    }}
                    animate={{
                      width: '8rem',
                      height: '8rem',
                    }}
                    transition={{
                      type: 'spring',
                      duration: 0.8,
                      bounce: 0.6
                    }}
                  >
                    <motion.div 
                      className="hidden md:block bg-white rounded-full absolute top-0 left-0 -translate-x-3/4 -translate-y-3/4 gradient-circle z-0"
                      initial={{
                        width: 0,
                        height:0,
                      }}
                      animate={{
                        width: '4rem',
                        height: '4rem',
                      }}
                      transition={{
                        type: 'spring',
                        delay: 0.2,                        
                        duration: 0.8,
                        bounce: 0.6
                      }}
                    >
                    </motion.div>
                    <motion.div className="bg-white rounded-full absolute bottom-0 right-0 translate-x-3/4 translate-y-3/4 gradient-circle z-0 blur-sm"
                      initial={{
                        width: 0,
                        height:0,
                      }}
                      animate={{
                        width: '2rem',
                        height: '2rem',
                      }}
                      transition={{
                        type: 'spring',
                        delay: 0.4,                        
                        duration: 0.8,
                        bounce: 0.6
                      }}                      
                    >
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 gradient-circle z-40"
                    initial={{
                      width: 0,
                      height:0,
                    }}
                    animate={{
                      width: '6rem',
                      height: '6rem',
                    }}
                    transition={{
                      type: 'spring',
                      duration: 0.8,
                      bounce: 0.6
                    }}
                  >
                    <motion.div 
                      className="hidden md:block bg-white rounded-full absolute top-0 right-0 translate-x-3/4 -translate-y-full gradient-circle z-40 blur-sm"
                      initial={{
                        width: 0,
                        height:0,
                      }}
                      animate={{
                        width: '2rem',
                        height: '2rem',
                      }}
                      transition={{
                        delay: 0.2,
                        type: 'spring',
                        duration: 0.8,
                        bounce: 0.6
                      }}                      
                    >
                    </motion.div>
                  </motion.div>
                  <div className='flex flex-col w-full h-full glassmorphic relative z-30 rounded-lg p-4'>
                    <h3 className='text-white text-2xl font-poppins font-semibold pl-3 mb-4'>My Skills</h3>
                    <div className='flex flex-wrap h-full w-full items-center px-3 gap-2 sm:gap-4'>
                      {skills.map((skill, index) => (
                        <Pill 
                        skills={skill}
                        key={index}
                        />
                      ))}        
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className='text-white flex flex-col items-center hover:text-white text-[#8D8F94] duration-75 transition-all ease-in'
                initial={{ 
                  opacity: 0,
                  filter: 'blur(10px)'
                }}
                animate={{
                  opacity: 1,
                  filter: 'blur(0px)'
                }}>
                <motion.div
                  animate={{y:[0, -10, 0]}}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0.5,
                    duration: 1,
                    ease: 'easeInOut',
                    type: 'continuous',
                    direction: 'alternate',
                  }}
                  whileHover={{y: 0}}
                  className='mb-3 font-bold' 
                > 
                  <Link href='#projects' onClick={handleScrollToProjects}>Check Out My Work </Link>
                </motion.div>
                <FontAwesomeIcon icon={faChevronDown} className='text-xl'/>
              </motion.div>
            </motion.div>
            <div className="hidden xl:block absolute w-72 h-72 mb-1 bg-white rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1 gradient-circle z-0"></div>
          </div>
      </section>
      <Projects work={projects}/>
    </div>
  );
}
