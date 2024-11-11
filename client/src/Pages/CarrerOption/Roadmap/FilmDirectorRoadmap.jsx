import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import filmDirectorRoadmap from '../../../Assets/Images/filmDirectorRoadmap.png'
import arrowBackIcon from '../../../Assets/Images/arrowBackIcon.png'
import lockIcon from '../../../Assets/Images/lockIcon.png'
import './rightMenu.css'

export default function FilmDirectorRoadmap() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='mt-[3vw] py-[7vw] mx-[2vw] md:mx-[1vw]'>
        <span className='md:ml-[20vw] text-blue-800 cursor-pointer text-smallText'><Link to='../../../'>Home</Link> / Career Paths / Film Director / Roadmap</span>
    <div className='flex font-roboto flex-row gap-[2vw] '>
      <div className='w-[18.75vw] hidden md:block h-full text-regularText'>
      <Link to='../Signup'>
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
        <h2 className='text-h2Text '>
        Narrowed Roadmap<br/>
        To Become Film Director
        </h2>
        
        <span className='font-roboto font-normal text-mediumText'>Step by step guide to become a Film Director in 2024</span>
        <div className='w-full  relative flex flex-col  items-center'>
        <img className='h-[100vw] relative w-auto' src={filmDirectorRoadmap} alt='Film Director Roadmap' />
        <button  className='w-[8vw] h-[3.5vw]  top-[7vw] left-[22.5vw] absolute'></button>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
        </div>
      </div>
      <div className='w-[18.75vw] hidden md:block h-full bg-blue-200'>

      </div>
    </div>
    </div>

  );
}

