'use client';
import './fonts.css';
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Pill from './pill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link  from 'next/link'
import Projects from './projects';
export default function Portfolio({ width }) {
  const fullBlur = '30px';
  const fullOpaque = width > 1024 ? '50%' : '75%';
  const mobile = width > 1024;
  const [modalOpacity, setModalOpacity] = useState();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [200, 1000], ['0px', fullBlur]);
  const modal = useTransform(scrollY, [200, 1000], ['0%', fullOpaque]);
  const [blurVal, setBlurVal] = useState(blur);
  const ref = useRef(null);

  const projects = 
  [
    {
      name: 'Study Space (In Progress)',
      description: <p>A fully customizable, cozy workspace based around the pomodoro method. Work efficiently with organizable sticky notes and pet companions. Cross platform syncing and user authentication in progress.</p>,
      image: '/img/studyspace.png',
      alt: 'A photo of the Study Space web application',
      link: '/files/blossom.pdf',
      skills: ['UX Design', 'Next.js', 'TypeScript', 'Zustand', 'Supabase'],
      complete: true
    },
    {
      name: 'VizDAS',
      description: <p>First ever data visualization and research tool using Distributed Acoustic Sensing (DAS), developed with UW&apos;s Earth and Space Science Department. Recognized as a Research Award Finalist at the <span><Link href="https://ischool.uw.edu/capstone/projects/2023/interactive-data-visualization-distributed-acoustic-sensing" target="_blank" className='underline-offset-2 underline hover:font-semiBold'>iSchool Capstone Gala</Link></span>. Case study coming soon.</p>,
      image: '/img/vizdas.png',
      alt: 'A photo of the ViZDAS project',
      link: 'https://dasway.ess.washington.edu/vizdas/',
      skills: ['React', 'Figma', 'UX Research', 'Wireframing'],
      complete: true
    },    
    {
      name: "Wedding Website",
      description: <p>A wedding website made for friends. Project designed in Figma and built using React, TypeScript, and Next.js. Includes a user identification sign-in as well as rsvp management/guest tracking utilizing Firebase. Please contact me for access.</p>,
      image: '/img/wedding.gif',
      alt: 'A gif of a wedding website',
      link: 'https://wedding-v2-yot1-git-main-matthewbeeps-projects.vercel.app/',
      skills: ['Figma', 'React', 'Next.js','TypeScript','Firebase'],
      complete: false
    },
    {
      name: 'IMDb Redesign',
      description: <p>An analysis of the Internet Movie Database&apos;s information architecture. Includes a collection of recommendations for related to site mapping, search, navigation, labels, design, etc. A more detailed case study can be found <span><Link href="/files/imdbDoc.pdf" target="_blank" className='underline-offset-2 underline hover:font-semiBold'>here</Link></span>.</p>,
      image: '/img/imdb_svg.svg',
      alt: 'The imdB logo',
      link: '/files/imdbPres.pdf',
      skills: ['UX Research', 'Personas', 'UX Design', 'Information Architecture'],
      complete: true
    }
  ];

  const skills = ['HTML', 'CSS', 'JavaScipt', 'React', 'Tailwind', 'Next.js', 'Node.js', 'TypeScript', 'Firebase', 'PHP', 'SQL', 'Git','Figma', 'Adobe Illustrator', 'UX Research', 'Wireframing', 'Information Architecture'];

  useEffect(() => {
    // Check initial scroll position on component mount
    const handleInitialScroll = () => {;
      const initialScrollY = window.scrollY;

      setBlurVal(blur.get());
      setModalOpacity(modal.get());
    };

    // initial scroll check
    if(window.scrollY > 0 ) {
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
              className="h-full w-11/12 md:w-9/12 flex flex-col justify-between pt-32 md:pt-56 xl:pt-64 lg:pb-10 pb-20"
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
                <div className=" xl:w-6/12 w-full lg:h-full rounded-lg relative mt-16 md:mt-5 md:h-auto">
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
                    <div className='flex flex-wrap h-full w-full items-center px-3 gap-2 sm:gap-3'>
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
      <Projects work={projects} allowLink={mobile}/>
    </div>
  );
}
