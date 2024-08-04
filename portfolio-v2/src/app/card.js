
'use client';
import './fonts.css';
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Card({content}) {


  return (
    <div className='card text-white w-5/12 flex flex-col p-5 gap-4 h-auto rounded-md'>
      <div className='w-full h-72'>
        <img src={require=(content.image)} className='h-full w-full rounded-3xl object-cover'/>
      </div>
      <h3 className='font-poppins font-bold text-2xl'>{content.name}</h3>
      <p className='font-inter text-lg'>{content.description}</p>
    </div>
  );
}
