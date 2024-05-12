import React from 'react'
import { X ,ChevronDown} from "lucide-react";
// import { Link } from 'react-router-dom';
// import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar,closeNav } from '../../Redux/IsOpenSlice';

const Navlink = () => {
  
    return(
      <div className="text-[.75rem] md:text-[.8rem] lg:text-[1rem] font-sans items-center ml-[10px]">
      <Link to='About' spy={true} smooth={true} duration={1000} offset={10} className=" mx-[3px] md:mx-[4px] lg:mx-[5px]">ABOUT US</Link>
      
      <Link to='Alumni' spy={true} smooth={true} duration={800} offset={50} className="mx-[3px] md:mx-[4px] lg:mx-[5px]">ALUMNI</Link>
      
      <KLink to='Career' className="mx-[3px] md:mx-[4px] lg:mx-[5px]">CAREER PATH</KLink>
      
      <KLink to='Help' className="mx-[3px] md:mx-[4px] lg:mx-[5px]">HELP & SUPPORT</KLink>
    </div>
    )
}

export default function Nav() {
    const isOpen = useSelector((state) => state.navbar.isOpen);
    const dispatch = useDispatch();
    const {currentUser}=useSelector((state)=>state.user)
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
            {currentUser?(
               <div>
               <KLink to="Profile">
                <img className='rounded-full h-[2.5rem] ' src={currentUser.avatar}/>
                </KLink>
             </div>
            ):(
              <div>
                <KLink to='SignUp'>
                <button className='rounded-xl py-[.4rem] px-[1rem] lg:py-[.5rem] lg:px-[1.25rem] font-roboto mr-[10px] lg:mr-[16px] border-[1px]
                   border-solid border-black
                 text-[10px] md:text-[14px] lg:text-[16px]'>Sign UP</button>
                </KLink>
                <KLink to='Login'>
                <button className=' text-white font-roboto border-[1px] py-[.4rem] px-[1rem] lg:py-[.5rem] lg:px-[1.25rem]  border-solid border-darkslategray rounded-xl 
                bg-graybutton box-border items-center justify-center md:text-[14px] lg:text-[16px]'>Login</button> 
                </KLink>
              </div>
            )
            }
            
            
        </div>

        <div className="flex  justify-between md:hidden">
          <button className='h-[1.5rem] mt-[.25rem]' onClick={handleToggleNavbar}>{isOpen ? <X /> : <ChevronDown />}</button>
          {
            currentUser?
            (<KLink to="Profile"><img className='rounded-full h-[1.875rem] w-[1.875rem]' src={currentUser.avatar}/>
            </KLink>):
            (<KLink to='Login'>
            <button className='h-[1.5rem] text-white font-normal font-roboto border-[1px] my-[0.1rem] py-[0.262rem] px-[1rem] text-left text-[0.525rem]
             border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center  '>Login</button> 
          </KLink>)
          }
          
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
