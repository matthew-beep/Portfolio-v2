
'use client';
import './fonts.css';

export default function Pill({skills}) {



  return (
    <div className='font-poppins cursor-pointer ease-in duration-100 hover:font-bold hover:bg-[#7B4EE6] lg:text-base text-base flex border-2 border-solid border-[#7B4EE6] rounded-full justify-center items-center text-white w-auto py-1 px-3 min-w-24'>
      {skills}
    </div>
  );
}
