import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

import arrowBackIcon from '../../../Assets/Images/arrowBackIcon.png'
import lockIcon from '../../../Assets/Images/lockIcon.png'
import './rightMenu.css'
import FilmDirectorSvg from './svgFile/FilmDirectorSvg';
import VeterinarySVG from './svgFile/VeterinarySVG';
import AnimatorSvg  from './svgFile/AnimatorSvg';
import ActuarySVG from './svgFile/ActuarySvg';

export default function Roadmap({title}) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const toggleMenu = (event) => {
    setIsOpen(!isOpen);
    setId(event.target.id);
  };
  
  const roadmapComponents = {
    "Film Director":<FilmDirectorSvg/>,
    "Veterinary": <VeterinarySVG/>,
    "Animator": <AnimatorSvg/>,
    "Actuary": <ActuarySVG/>
  } 

  const SpecificComponent = roadmapComponents[title];
  
  return (
    <div id='mainsection' className='  mt-[20px] md:mt-[3vw] py-[7vw] mx-[2vw] md:mx-[1vw]'>
        <span className='hidden md:block md:ml-[20vw] text-blue-800 cursor-pointer text-smallText'><Link to='./../../../'>Home</Link> / <Link to='./../../'>Career Paths</Link> / Film Director / Roadmap</span>
    <div className='hidden md:flex  font-roboto flex-row gap-[2vw] '>
      <div className='w-[18.75vw] hidden md:block h-full text-regularText'>
      <Link to='./../../../'>
        <div className='py-[.75vw] flex flex-row cursor-pointer'>
          <h6 className='relative  font-bold text-h6Text'>Home</h6>
          <img className='ml-auto h-[1.5vw] w-auto  ' onClick={()=>{}} src={arrowBackIcon} alt='Arrow Back Icon' />
        </div>
        </Link>
        <div className='py-[.75vw] flex flex-row'>
          <span className='relative '>About</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row'>
          <span className='relative   '>Educational Skillset</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row'>
          <span className='relative   '>Skills Required</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row'>
          <span className='relative   '>Institutes For Filmaking</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row cursor-pointer'>
          <span className='relative   '>Roadmap</span>
        </div>
        
        
      </div>
      <div className='md:w-auto w-full   font-bold flex flex-col gap-[1.5vw] '>
        <h2 className='text-h2Text font-poppins leading-[120%] font-bold '>
        Narrowed <span className='text-darkorchid'>Roadmap</span><br/>
        To Become <span className='text-darkorchid'>{title}</span>
        </h2>
        
        <span className='font-roboto font-normal leading-[150%] text-mediumText'>Step by step guide to become a {title} in 2024</span>
        <div className='w-[60vw] h-auto  relative   items-center'>
        {SpecificComponent}
        </div>
      </div>
      <div className='w-[18.75vw] hidden md:block h-full '>

      </div>
      
    </div>
    <div className='flex flex-col flex-grow  md:hidden '>
    <div className='px-[4vh] py-[5vh]'>
    <span className=' text-blue-800 cursor-pointer text-smallText'><Link to='./../../../'>Home</Link> / <Link to='./../../'>Career Paths</Link> / Film Director / Roadmap</span>
    
    <h2 className='text-h2Text font-poppins leading-[120%] font-semibold'>
    Narrowed <span className='text-darkorchid'>Roadmap</span><br/>
    To Become <span className='text-darkorchid'>{title}</span>
        </h2>
        
        <span className='font-roboto font-normal leading-[150%] text-mediumText'>Step by step guide to become a {title} in 2024</span>
        </div>
    <div className='flex flex-col items-center relative'>
    <div className='w-[90vw] h-auto relative'>
    {SpecificComponent}
    </div>


    </div>
    </div>
    </div>

  );
}