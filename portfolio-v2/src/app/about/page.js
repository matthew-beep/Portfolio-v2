
'use client';
import NavBar from '../header'
import About from './about'
import Footer from '../footer'
import { useState, useEffect } from "react";
import MobileNav from '../mobileNav';
export default function Home() {
  const [pageHeight, setPageHeight] = useState(0);
  const [width, setWidth] = useState();

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
