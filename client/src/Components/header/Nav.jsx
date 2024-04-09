import React from 'react'
import { X ,ChevronDown} from "lucide-react";
// import { Link } from 'react-router-dom';
// import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar,closeNav } from '../IsOpenSlice';

const Navlink = () => {
    return(
        <>
          
            <Link to='About' spy={true} smooth={true} duration={1000} offset={10} className='cursor-pointer text-[10px] md:text-[14px] lg:text-[16px] font-sans' >ABOUT US</Link>
            <Link to='Alumni' spy={true} smooth={true} duration={800} offset={50} className='cursor-pointer text-[10px] md:text-[14px] lg:text-[16px] font-sans'>ALUMNI</Link>
            <KLink to='Career' className=' text-[10px] md:text-[14px] lg:text-[16px] font-sans'>CAREER PATH</KLink>
            <KLink to='Help' className='cursor-help text-[10px] md:text-[14px] lg:text-[16px] font-sans'>HELP & SUPPORT</KLink>
          
        </>
    )
}

export default function Nav() {
    const isOpen = useSelector((state) => state.navbar.isOpen);
    const dispatch = useDispatch();
  
    const handleToggleNavbar = () => {
      dispatch(toggleNavbar());
    };
    const closeNavbar = () => {
      dispatch(closeNav());
    };
  return (
    <>
    <nav className=' flex shrink items-center overflow-hidden text-xs md:text-base'>
        <div className="hidden justify-end items-center md:flex  md:gap-2 lg:gap-4 gap-1 text-xs md:text-base">
            <Navlink />
            <KLink to='SignUp'>
            <button className='rounded-xl font-roboto border-[1px] p-1 md:p-2  border-solid border-black text-[10px] md:text-[14px] lg:text-[16px]'>Sign UP</button>
            </KLink>
            <Link to='SignUp'>
            <button className=' text-white font-roboto border-[1px] p-1 md:py-2 md:px-4 border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center text-[10px] md:text-[14px] lg:text-[16px]'>Login</button> 
            </Link>
            
        </div>

        <div className="flex  justify-between md:hidden">
          <button onClick={handleToggleNavbar}>{isOpen ? <X /> : <ChevronDown />}</button>
          <Link to='SignUp'>
            <button className=' text-white font-roboto border-[1px] py-1 px-1  md:py-2 md:px-4 border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center text-[13px] md:text-[14px] lg:text-[16px]'>Login</button> 
          </Link>
        </div>
    </nav>

    {isOpen && (
            <div onWheelCapture={closeNavbar} className=' flex gap-1 flex-col items-center basis-full'>
                <Navlink/>
            </div>
    )}
    </>
  )
}
