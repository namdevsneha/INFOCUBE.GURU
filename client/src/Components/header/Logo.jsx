import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.svg';

export default function Logo() {
  return (
    <Link to='/' >
        <img className='w-28 h-1.25 md:w-64 md:h-14' src={logo}/>
    </Link>
  )
}
