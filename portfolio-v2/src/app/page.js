
'use client';
import './fonts.css';
import { useState } from "react";
import Portfolio from './portfolio';
import NavBar from './header';
export default function Home() {
  let typingArr = ["UX DESIGNER", "FRONT END DEVELOPER"]
  const [currWord, setCurrWord] = useState(typingArr[0])
  //       <div className="hidden sm:flex glassmorphic w-10/12 h-20 rounded-full"></div>
  // need to add nav bar outside of main
  return (
    <div className='bg-[#161B22]'>
      
      <NavBar />
      
      <main>
        <Portfolio />
      </main>
    </div>
  );
}
