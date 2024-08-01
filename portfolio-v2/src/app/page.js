
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
    <div className='relative bg-[#161B22] h-screen flex flex-col'>
      <div className="absolute inset-0 img-container md:bg-grid bg-center bg-no-repeat w-screen-h-screen z-0 p-10"></div>
      <header className='border-2 border-white border-solid py-10 relative z-10'>
        <NavBar />
      </header>
      <main className="flex flex-grow flex-col items-center justify-between border-2 border-white border-solid relative z-10">
        <Portfolio />
      </main>
    </div>
  );
}
