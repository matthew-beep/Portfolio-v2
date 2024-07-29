
'use client';
import Image from "next/image";
import './fonts.css';
import { useState } from "react";

export default function Home() {
  let typingArr = ["UX DESIGNER", "FRONT END DEVELOPER"]
  const [currWord, setCurrWord] = useState(typingArr[0])

  // need to add nav bar outside of main
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 bg-[#161B22]">
      <div className="hidden sm:flex glassmorphic w-10/12 h-20 rounded-full"></div>
      <div className="w-10/12 h-auto flex-grow">
          <div className="md:bg-grid bg-[size:95%_95%] bg-auto bg-center bg-no-repeat bg-contain w-full h-screen py-24 flex flex-col bg-origin-border bg-center bg-cover bg-no-repeat p-8 border-white border-solid border-2">
            <div className="flex flex-col border-white border-solid border-2 h-auto justify-between">
              <h3 className="font-inter text-[#7B4EE6] text-2xl mb-3">{currWord}</h3>
              <h1 className="font-poppins text-white text-5xl mb-1">Hey, I'm <span className="underline">Matt</span> 👋</h1>
              <p className="text-white text-base">I like to <span className="font-inter font-bold text-[#7B4EE6]">design</span> and <span className="font-inter font-bold text-[#7B4EE6]">develop</span> user interfaces.</p>
            </div>
            <div className="w-5/12 h-40 rounded-lg mt-9 relative">
              <div className="w-full h-full glassmorphic rounded-lg z-20 relative">
                test
              </div>
              <div className="w-32 h-32 bg-white rounded-full absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 gradient-circle z-10">
              
              </div>
            </div>
          </div>
      </div>
 


    </main>
  );
}
