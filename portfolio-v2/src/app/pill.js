
'use client';
import './fonts.css';

export default function Pill({skills}) {



  return (
    <div className='cursor-pointer ease-in duration-100 hover:font-bold hover:bg-[#7B4EE6] text-base flex border-2 border-solid border-[#7B4EE6] rounded-full justify-center items-center text-white w-auto py-1 px-2 min-w-24'>
      {skills}
    </div>
  );
}
