
'use client';
import NavBar from '../header'
import About from './about'
import Footer from '../footer'
import { useState } from "react";
export default function Home() {
  const [pageHeight, setPageHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  return (
    
    <div className='bg-[#161B22] flex flex-col'>
      <NavBar home={'/'} height={pageHeight}/>
      <main>
        <About onHeightChange={setPageHeight}/>
      </main>
      <Footer />  
    </div>
  );
}
