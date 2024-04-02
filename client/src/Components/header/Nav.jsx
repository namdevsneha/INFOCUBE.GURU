import React from 'react'
import { useState, useEffect } from "react";
import { X ,ChevronDown} from "lucide-react";
import { Link } from 'react-router-dom';

const Navlink = () => {
    return(
        <>
            <Link to='About' className='text-xs md:text-base' >ABOUT US</Link>
            <Link to='Alumni' className='text-xs md:text-base'>ALUMNI</Link>
            <Link to='Career' className='text-xs md:text-base'>CAREER PATH</Link>
            <Link to='Help' className='text-xs md:text-base'>HELP & SUPPORT</Link>
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
    <nav className=' flex  items-center justify-end overflow-hidden font-roboto text-xs md:text-base'>
        <div className="hidden w-full justify-end items-center md:flex md:gap-4 sm:gap-1 text-xs md:text-base">
          <Navlink />
            <Link to='SignUp'>
            <button className='rounded-xl font-roboto border-[1px] p-1 md:p-2  border-solid border-black text-sm md:text-base'>Sign UP</button>
            </Link>
            <Link to='SignUp'>
            <button className=' text-white font-roboto border-[1px] p-1 md:p-2 border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center text-sm md:text-base'>Login</button> 
            </Link>
        </div>

        <div className="flex  justify-between md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <ChevronDown />}</button>
        </div>
    </nav>

    {isOpen && (
            <div className='flex flex-col items-center basis-full'>
                <Navlink/>
            </div>
    )}
    </>
  )
}
