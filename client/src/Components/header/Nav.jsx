import React from 'react'
import { useState, useEffect } from "react";
import { X ,ChevronDown} from "lucide-react";
// import { Link } from 'react-router-dom';
// import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';

const Navlink = () => {
    return(
        <>
          
            <Link to='About' spy={true} smooth={true} offset={100} className='cursor-pointer text-[10px] md:text-[14px] lg:text-[16px] font-sans' >ABOUT US</Link>
            <Link to='Alumni' spy={true} smooth={true} offset={100} className='cursor-pointer text-[10px] md:text-[14px] lg:text-[16px] font-sans'>ALUMNI</Link>
            <KLink to='Career' className=' text-[10px] md:text-[14px] lg:text-[16px] font-sans'>CAREER PATH</KLink>
            <KLink to='Help' className='cursor-help text-[10px] md:text-[14px] lg:text-[16px] font-sans'>HELP & SUPPORT</KLink>
          
        </>
    )
}

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
 
  return (
    <>
    <nav className=' flex shrink items-center overflow-hidden text-xs md:text-base'>
        <div className="hidden justify-end items-center md:flex  md:gap-2 lg:gap-4 gap-1 text-xs md:text-base">
            <Navlink />
            <Link to='SignUp'>
            <button className='rounded-xl font-roboto border-[1px] p-1 md:p-2  border-solid border-black text-[10px] md:text-[14px] lg:text-[16px]'>Sign UP</button>
            </Link>
            <Link to='SignUp'>
            <button className=' text-white font-roboto border-[1px] p-1 md:py-2 md:px-4 border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center text-[10px] md:text-[14px] lg:text-[16px]'>Login</button> 
            </Link>
            
        </div>

        <div className="flex  justify-between md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <ChevronDown />}</button>
          <Link to='SignUp'>
            <button className=' text-white font-roboto border-[1px] p-1 md:py-2 md:px-4 border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center text-[10px] md:text-[14px] lg:text-[16px]'>Login</button> 
          </Link>
        </div>
    </nav>

    {isOpen && (
            <div className='flex gap-1 flex-col items-center basis-full'>
                <Navlink/>
            </div>
    )}
    </>
  )
}
