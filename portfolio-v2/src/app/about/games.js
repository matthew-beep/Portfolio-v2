
'use client';
// import './fonts.css';
import Link from "next/link";
export default function Games() {

  // need to add nav bar outside of main
  return (
    <div className="text-white flex flex-col gap-4 font-inter text-lg w-11/12 md:w-10/12">
      <p>
        Another hobby I enjoy is gaming. Some of my favorite games I used to play were <span className="text-[#7B4EE6] font-bold"> Destiny</span>, <span className="text-[#7B4EE6] font-bold"> Skyrim</span>,
        and <span className="text-[#7B4EE6] font-bold"> Civilization</span>. I have recently been spending a lot of time on the new <span className="text-[#7B4EE6] font-bold"> College Football 25</span> game, rebuilding 
        the University of Hawaii&apos;s football program. I also recently built my first ever <Link href='https://pcpartpicker.com/user/matt6700/saved/#view=kCXGjX' target="_blank" className=" decoration-2 underline underline-offset-4 hover:font-semiBold"> Gaming PC</Link> so 
        you might be able to catch me playing <span className="text-[#7B4EE6] font-bold"> League of Legends</span> or <span className="text-[#7B4EE6] font-bold"> Valorant</span>.
      </p>
    </div>
  );
}
