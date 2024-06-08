import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.webp';
import infocubeLogo from '../../Assets/Images/InfoCubeLogo.webp';
import Infocube from '../../Assets/Images/Infocube_black.webp'

export default function Logo() {
  
  return (
    <Link to='/' className=''>
        <div className='flex flex-row gap-[4.5px] md:gap-[6px] lg:gap-[8px] items-center'> 
        <img className='basis-1/4 w-auto h-[1.406rem]  md:h-[1.9em]  lg:h-[2.5rem]' src={infocubeLogo}/>
        <img className='basis-3/4 w-auto h-[0.706rem]  md:h-[0.90rem] lg:h-[1.25rem]' src={Infocube}/>
          </div>
    </Link>
  )
}
