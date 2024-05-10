import React from 'react'
import Logo from '../Components/header/Logo';
import Nav from '../Components/header/Nav';
import {Link} from 'react-router-dom';
import SignUp from '../Pages/SignUp';

export default function Header() {
   return (
     <header className=' top-0 py-[.25rem] z-[1] px-[2.5rem] md:px-[5rem] lg:px-[10rem]  flex w-full  flex-wrap items-center justify-between border-b border-black bg-white text-black font-bold uppercase text-text-primary backdrop-blur-[100px] '>
       <Logo />
       <Nav />
     </header>
   )
 }