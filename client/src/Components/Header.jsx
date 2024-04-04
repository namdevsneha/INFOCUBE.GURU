import React from 'react'
import Logo from '../Components/header/Logo';
import Nav from '../Components/header/Nav';
import {Link} from 'react-router-dom';
import SignUp from '../Pages/SignUp';

export default function Header() {
  return (
    <header className=' top-0 z-[1] mx-auto flex  w-full flex-wrap md:shrink items-center  border-b border-black bg-white text-black  p-[1rem] font-bold uppercase text-text-primary backdrop-blur-[100px] '>
      <Logo/>
      <div className='m-auto'></div>
      <Nav/>
      
    </header>
  )
}