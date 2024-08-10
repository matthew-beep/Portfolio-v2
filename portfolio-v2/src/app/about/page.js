
'use client';
import NavBar from '../header'
import About from './about'
export default function Home() {


  return (
    
    <div className='bg-[#161B22]'>
      <NavBar home={'/'}/>
      <main>
        <About />
      </main>
    </div>
  );
}
