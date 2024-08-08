
'use client';
import './fonts.css';
import { useState } from "react";

export default function Home() {
  let typingArr = ["UX DESIGNER", "FRONT END DEVELOPER"]
  const [currWord, setCurrWord] = useState(typingArr[0])

  // need to add nav bar outside of main
  return (
    <div className='flex'>
      <div>
        Picture
      </div>
      <div>
        Image
      </div>
    </div>
  );
}
