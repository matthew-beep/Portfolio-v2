
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
import img from '../../public/img/VizDAS-home.png'
export default function Portfolio() {
  // need to add nav bar outside of main
  const fullBlur = '30px';
  const fullOpaque = '50%';
  // const hash = window.location.hash;
  const [blurVal, setBlurVal] = useState(0);
  const [modalOpacity, setModalOpacity] = useState();
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [400, 1000], ['0px', fullBlur]);
  const modal = useTransform(scrollY, [400, 1000], ['0%', fullOpaque]);

  console.log('blur: ' + blurVal)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setBlurVal(blur.get());
    setModalOpacity(modal.get());
  })
  
  useEffect(() => {
    // Check initial scroll position on component mount
    const handleInitialScroll = () => {
      console.log("Initial scroll");
      const initialScrollY = window.scrollY;
      setBlurVal(blur.get());
      setModalOpacity(modal.get());
    };

    // Trigger the initial scroll check
    console.log(window.scrollY);
    if(window.scrollY > 0 ) {
      console.log('load blur');
      handleInitialScroll();
    }

    // Add event listener to handle scroll updates
    window.addEventListener('scroll', handleInitialScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleInitialScroll);
    };
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '#projects');
  };

  const projects = 
  [
    {
      name: 'VizDAS',
      description: 'The first ever public facing Distributed Acoustic Sensing research tool. Built in collaboration with UW\'s Earth and Space Science Department and recognized as a Research Award Finalist at the iSchool Capstone Gala.',
      image: '/img/vizdas.png',
      link: 'https://github.com/matthew-beep/project1'
    },
    {
      name: 'IMDb Redesign',
      description: 'An analysis of the Internet Movie Database\'s information architecture. Includes a collection of recommendations for improvement on IMDb\'s hierarchy of information related to labels, search, navigation, site mapping, etc.',
      image: '/img/imdb_svg.svg',
      link: 'https://github.com/matthew-beep/'
    },
    {
      name: 'VizDAS',
      description: 'The first ever public facing Distributed Acoustic Sensing research tool. Built in collaboration with UW\'s Earth and Space Science Department and recognized as a Research Award Finalist at the iSchool Capstone Gala.',
      image: '/img/vizdas.png',
      link: 'https://github.com/matthew-beep/project1'
    },
    {
      name: 'IMDb Redesign',
      description: 'An analysis of the Internet Movie Database\'s information architecture. Includes a collection of recommendations for improvement on IMDb\'s hierarchy of information related to labels, search, navigation, site mapping, etc.',
      image: '/img/imdb_svg.svg',
      link: 'https://github.com/matthew-beep/'
    }
  ];

  const skills = ['HTML', 'CSS', 'JavaScipt', 'React', 'Tailwind', 'Figma', 'Illustrator', 'UX Research', 'Wireframing', 'Information Architecture'];
;  /*
  const background = (blurVal) => ({
    filter: `blur(${blur.get()})`,
    width: '100%',
    height: '100%'
  })
  */

  return (
    <div className='relative flex flex-col'>
      <section id="home" className="h-screen w-full flex justify-center items-start sticky top-0 z-10 relative overflow-x-clip">
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
              className="h-full w-11/12 md:w-9/12 flex flex-col justify-between pt-64 pb-10"
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1
              }}

            >
              <div className='flex flex-col'>
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
                  <h1 className="font-poppins text-white text-5xl mb-3">Hey, I'm <span className="underline">Matt</span> 👋</h1>
                  <p className="text-white font-inter text-lg">I like to <span className="font-inter font-bold text-[#7B4EE6]">design</span> and <span className="font-inter font-bold text-[#7B4EE6]">develop</span> user interfaces.</p>
                </motion.div>
                <div className="md:w-6/12 w-full min-h-52 h-auto rounded-lg mt-9 relative mt-10">
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
                  <div className='flex flex-col w-full h-full glassmorphic relative z-30 rounded-lg py-4'>
                    <h3 className='text-white text-2xl font-poppins font-semibold pl-3 mb-2'>My Skills</h3>
                    <div className='flex flex-wrap h-full w-full items-center px-3 gap-4'>
                      {skills.map(skill => (
                        <Pill skills={skill}/>
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
            <div className="hidden md:block absolute w-72 h-72 mb-1 bg-white rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1 gradient-circle z-0"></div>
          </div>
      </section>
      
      <section id="projects" className='min-h-screen h-auto z-20 flex justify-center items-start pt-64 pb-20 relative text-white sticky top-0'>
        <div id="file"className='flex flex-col gap-2 project-section bg-[#161B22] w-11/12 md:w-9/12 h-auto rounded-lg md:py-10 md:px-20 py-5'>
          <h3 className='pl-5 border-2 border-white border-solid font-poppins font-bold text-3xl'>My Projects</h3>
          <div className='border-2 m-auto w-full flex-col items-center flex md:flex-row xl:justify-between justify-center h-auto flex-wrap'>
            {projects.map((project, i) => (
              <Card content={project} key={i}/>
            ))}              
          </div>
        </div>
      </section>

    </div>
  );
}
