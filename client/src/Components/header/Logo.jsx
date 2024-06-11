import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.webp';
import infocubeLogo from '../../Assets/Images/InfoCubeLogo.webp';
import Infocube from '../../Assets/Images/Infocube_black.webp'

export default function Logo() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {

    
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Change the threshold according to your needs
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Link to='/' className=''>
        <div className='flex flex-row gap-[4.5px] md:gap-[6px] lg:gap-[8px] items-center'> 
        <img className='basis-1/4 w-auto h-[1.406rem] ' style={isMobile?{height:`${22.496}px`}:{height:`${0.010714*innerWidth+19.428572}px`}} src={infocubeLogo}/>
        <img className='basis-3/4 w-auto h-[0.706rem]  ' style={isMobile?{height:`${11.296}px`}:{height:`${0.00625*innerWidth+8}px`}} src={Infocube}/>
          </div>
    </Link>
  )
}
