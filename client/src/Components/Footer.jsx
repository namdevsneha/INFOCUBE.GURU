import React from 'react'

import Infocube from '../Assets/Images/infocube.svg';
import LinkedIn from '../Assets/Images/LinkedIn.svg';
import facebook from '../Assets/Images/facebook.svg';
import Instagram from '../Assets/Images/Instagram.svg';
import X from '../Assets/Images/X.svg';
import Youtube from '../Assets/Images/Youtube.svg';

import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';

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

export default function Footer() {
  return (
    <>

    {/* Mobile view */}
    <div className='block md:hidden lg:hidden xl:hidden '>
        
    <div className="relative bg-gray w-full h-[12.563rem] overflow-hidden flex flex-col items-center justify-start py-[1.363rem] px-[1.094rem] box-border gap-[0.544rem] text-left text-[0.426rem] text-black font-roboto bg-black">
    <div className="w-full bg-white h-[9.563rem] flex flex-col items-start justify-start p-[0.819rem] box-border ">
    <div className="w-[14.738rem] overflow-hidden flex flex-col items-start justify-start ">
    <img className="w-[5.938rem] relative h-[1.25rem] pl-0.8d object-cover" src={Infocube} />
    <div className="self-stretch flex flex-col items-start justify-start ">
    <div className="self-stretch flex flex-col items-start justify-start">
    <p className="m-0">.</p>
    <p className="m-0">.</p>

    </div>

    <div className="self-stretch flex flex-col items-start justify-start relative leading-[150%]  text-[0.688rem]">
    <div className="self-stretch relative leading-[150%] font-semibold">Contact:</div>
    <div className="self-stretch relative  leading-[150%]">
    <p className="">7067778515</p>
    <p className="">infocube.ed@gmail.com</p>
    </div>
    </div>


    <div className=" flex flex-row items-start justify-start gap-[0.575rem]">
    <img className="  overflow-hidden shrink-0" alt="facebook" src={facebook} width={"20"} />
    <a href="https://www.instagram.com/infocube.ed?utm_source=qr&igsh=b3k0NGN1MHIxY3cw">
    <img className=" overflow-hidden shrink-0" alt="Instagram" src={Instagram} width={"20"}/>
    </a>
    <img className=" overflow-hidden shrink-0" alt="X" src={X} width={"20"} />
    <a href='https://www.linkedin.com/company/infocube-ed/'>
    <img className=" overflow-hidden shrink-0" alt="Linkedin" src={LinkedIn } width={"20"} />
    </a>
    <img className=" overflow-hidden shrink-0" alt="Youtube" src={Youtube} width={"20"}/>
    </div>
    </div>
    </div>
    <div className="self-stretch  overflow-hidden shrink-0" />
    </div>
    <div className="self-stretch flex flex-col items-start justify-start text-[0.4] text-white">
    <div className="self-stretch flex flex-row items-start justify-between">
    <div className="relative leading-[150%]">All rights reserved.</div>
    <div className="flex flex-row items-start justify-start gap-[0.406rem]">
    <div className="relative [text-decoration:underline] leading-[150%]">Privacy Policy</div>
    <div className="relative [text-decoration:underline] leading-[150%]">Terms of Service</div>
    <div className="relative [text-decoration:underline] leading-[150%]">Cookies Settings</div>
    </div>
    </div>
    </div>
    </div>
    </div>



    {/* Desktop view */}
    <div className='hidden md:block '>
    
    <div className="lg:py-[4rem] md:py-[2rem] md:px-[3rem] md:gap-[1rem] lg:gap-[2rem] md:text-[0.875rem] relative bg-gray w-full  flex flex-col items-center justify-start  box-border text-left text-black font-roboto bg-black">

  <div className="p-2 w-full  bg-white flex flex-row items-start justify-start box-border grid-cols-3 ">

  <div className="  flex col-span-1 flex-col items-start justify-start ">

  <img className="md:w-[12.813rem] relative md:h-[2.688rem] object-cover" alt="" src={Infocube} />

  <div className="self-stretch flex flex-col items-start justify-start md:gap-[1.5rem]">


  <div className="self-stretch flex flex-col items-start justify-start">
  <div className="self-stretch relative leading-[150%] font-semibold">

  <p className="m-0">.</p>
  <p className="m-0">.</p>
  </div>
  </div>


  <div className="self-stretch flex flex-col items-start justify-start md:gap-[0.25rem]">
  <div className="self-stretch relative leading-[150%] font-semibold">Contact:</div>
  <div className="self-stretch relative leading-[150%]">
  <p className="m-0">7067778515</p>
  <p className="m-0">infocube.ed@gmail.com</p>
  </div>
  </div>


  <div className="w-auto flex flex-row items-start justify-start md:gap-[1.187rem]">
  <img className="lg:h-[2rem] lg:w-[2rem] md:w-[1.5rem] relative md:h-[1.5rem] overflow-hidden shrink-0" alt="" src={facebook} />
  <a href="https://www.instagram.com/infocube.ed?utm_source=qr&igsh=b3k0NGN1MHIxY3cw">
  <img className="lg:h-[2rem] lg:w-[2rem] md:w-[1.5rem] relative md:h-[1.5rem] overflow-hidden shrink-0" alt="" src={Instagram} /></a>
  <img className="lg:h-[2rem] lg:w-[2rem] md:w-[1.5rem] relative md:h-[1.5rem] overflow-hidden shrink-0" alt="" src={X} />
  <a href='https://www.linkedin.com/company/infocube-ed/'>
  <img className="lg:h-[2rem] lg:w-[2rem] md:w-[1.5rem] relative md:h-[1.5rem] overflow-hidden shrink-0" alt="" src={LinkedIn} /></a>
  <img className="lg:h-[2rem] lg:w-[2rem] md:w-[1.5rem] relative md:h-[1.5rem] overflow-hidden shrink-0" alt="" src={Youtube} />
  </div>


  </div>
  </div>

  <div className='col-span-1 m-auto p-auto'> </div>

  <div className="col-span-1 overflow-hidden justify-items-end  md:text-[1rem]">

  <div className="flex-1 flex flex-col  justify-end md:gap-[0.75rem] pt-[2rem] pr-[5rem]">
    <Link to='About' spy={true} smooth={true} duration={1000} offset={10}>
  <div className="self-stretch relative leading-[150%] font-semibold">About Us</div>
  </Link>
  <Link to='Alumni' spy={true} smooth={true} duration={800} offset={50} >
  <div className="self-stretch relative leading-[150%] font-semibold">Alumini</div>
  </Link>
  <div className="self-stretch relative leading-[150%] font-semibold">Career Path</div>
  <div className="self-stretch relative leading-[150%] font-semibold">Help & Support</div>
  </div>
  </div>


  </div>


  <div className="self-stretch flex flex-col items-start justify-start text-white">
  <div className="self-stretch flex flex-row items-start justify-between">

  <div className="relative leading-[150%]">All rights reserved.</div>

  <div className="flex flex-row items-start justify-start md:gap-[1.5rem]">
  <div className="relative [text-decoration:underline] leading-[150%]">Privacy Policy</div>
  <div className="relative [text-decoration:underline] leading-[150%]">Terms of Service</div>
  <div className="relative [text-decoration:underline] leading-[150%]">Cookies Settings</div>
  </div>
  </div>
  </div>

  </div>
  </div>
  </>
  )
}
