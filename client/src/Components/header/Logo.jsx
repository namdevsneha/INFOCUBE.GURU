import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.svg';

export default function Logo() {
  return (
    <Link to='/' className=''>
        <img className='w-28 h-1.75 md:w-40 md:h-10 lg:w-64 lg:h-14' src={logo}/>
    </Link>
  )
}
