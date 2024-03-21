import React from 'react'
import logo from '../Assets/Images/logo.svg';
import {Link} from 'react-router-dom';
import Alumini from '../Pages/Alumini';
import Career from '../Pages/Career';
import Feedback from '../Pages/Feedback';
import Help from '../Pages/Help';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import downArrow from '../Assets/Images/downArrow.svg';

export default function Header() {
  return (
   
   <div className="w-full relative box-border h-[4.5rem] overflow-hidden flex flex-col items-center justify-center py-[0rem] px-[2.5rem] text-left text-[1rem] text-black font-roboto ">
   <div className="w-[87.5rem] relative h-[2.563rem]">
   <div className="absolute top-[0rem] left-[0rem] w-[16.375rem] h-[2.563rem]" />


   <div className="absolute top-[0.031rem] left-[37.875rem] flex flex-row items-center justify-center gap-[2rem]">
   <div className="overflow-hidden flex flex-row items-start justify-start gap-[2rem]">
      <Link to="/Alumini">
   <div className="relative leading-[150%] font-medium">ALUMNI</div>
      </Link>
      <Link to="/Career">
   <div className="relative leading-[150%] font-medium">CAREER PATHS</div>
      </Link>
      <Link to="/Feedback">
   <div className="relative leading-[150%] font-medium">FEEDBACK</div>
      </Link>
      <Link to="/Help">
   <div className="flex flex-row items-center justify-center gap-[0.25rem]">
   <div className="relative leading-[150%] font-medium">HELP AND SUPPORT</div>
   <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={downArrow} />
   </div>
     </Link>
   </div>
   
   <Link to="/SignUp">
   <div className="flex flex-row items-center justify-center gap-[1rem]">
   <div className="rounded-xl flex flex-row items-center justify-center py-[0.5rem] px-[1.25rem] border-[1px] border-solid border-black">
   <div className="relative leading-[150%] font-medium">Sign UP</div>
   </div>

   <div className="w-[6.125rem] rounded-xl bg-darkslategray box-border flex flex-row items-center justify-center py-[0.5rem]  text-white border-[1px] border-solid border-darkslategray">
   <div className="relative leading-[150%] font-medium">Login</div>
   </div>
   </div>
   </Link>

   </div>
            <Link to="/">
            <div className="absolute top-[-0.969rem] left-[1.438rem] w-[16.75rem] h-[4.905rem]  ">

            <img className="absolute  object-cover" alt="" src={logo} />

            </div>
            </Link>

   </div>
   </div>

  )
}





