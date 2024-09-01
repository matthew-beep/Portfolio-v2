
'use client';
import NavBar from '../header'
import About from './about'
import Footer from '../footer'
import { useState } from "react";
import MobileNav from '../mobileNav';
export default function Home() {
  const [pageHeight, setPageHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  return (
    
    <div className='bg-[#161B22] flex flex-col'>
      <NavBar home={'/'} height={pageHeight}/>
      <MobileNav home={'/'} height={pageHeight} width={width} className='z-100 md:hidden top-0 left-0 '/>
      <main>
        <About onHeightChange={setPageHeight}/>
      </main>
      <Footer />  
    </div>
  );
}
