import React, { useEffect, useState } from 'react'
import Logo from '../Components/header/Logo';
import Nav from '../Components/header/Nav';


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
  const headerStyles = {
    paddingLeft: isMobile ? `${0.0383 * innerWidth - 0.6239}px` : `${0.0813 * innerWidth - 11.43}px`,
    paddingRight: isMobile ? `${0.0383 * innerWidth - 0.6239}px` : `${0.0813 * innerWidth - 11.43}px`,
    gap: `${0.0536 * innerWidth - 22.91}px`,
  };

   return (
    <header className="absolute top-0 py-1 z-10 lg:py-1.25 flex w-full flex-wrap items-center justify-between border-b border-black bg-white text-black font-bold backdrop-blur-100px" style={headerStyles}>
    <Logo />
    <Nav />
  </header>
   )
 }