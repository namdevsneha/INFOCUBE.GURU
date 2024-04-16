import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.svg';
import infocubeLogo from '../../Assets/Images/InfoCubeLogo.svg'
import infocube from "../../Assets/Images/infocube.svg";


export default function Logo() {
  
  return (
    <Link to='/' className=''>
        <div className='flex flex-row gap-[10px] mg:gap-[15px] lg:gap-[20px] items-center'> 
        <img className='basis-1/4 w-auto h-8 md:w-auto md:h-9 lg:w-auto lg:h-12' src={infocubeLogo}/>
        <img className='basis-3/4 w-auto h-5 md:w-auto md:h-6 lg:w-auto lg:h-7' src={infocube}/>
          </div>
    </Link>
  )
}
