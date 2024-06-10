import React, { useEffect, useState } from 'react'
import Logo from '../Components/header/Logo';
import Nav from '../Components/header/Nav';
import {Link} from 'react-router-dom';
import SignUp from '../Pages/SignUp';

export default function Header() {
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
     <header className='absolute top-0 py-[.25rem] z-[1] flex w-full  flex-wrap items-center justify-between border-b border-black
      bg-white text-black font-bold  text-text-primary backdrop-blur-[100px] ' 
      style={{paddingLeft :`${0.0813*innerWidth-11.43}px`,paddingRight:`${0.0813*innerWidth-11.43}px`, gap:`${0.0536*innerWidth-22.91}px`}}>
       <Logo />
       <Nav />
     </header>
   )
 }