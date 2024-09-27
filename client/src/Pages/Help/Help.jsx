import React, { useState, useEffect } from "react";
import Body from "./Desktop/Help.jsx"
import FAQ from "./Desktop/FAQ.jsx"
import BodyMobile from "./Mobile/Help.jsx"
import FAQMobile from './Mobile/FAQ.jsx'
import { useLocation } from "react-router-dom";




export function MobileHelp() {
    return (
      <div>
        <FAQMobile/>
              <BodyMobile/>
              
      </div>
    )
  }
  
  
  // desktop function
  export function DesktopHelp() {
    return (
      <div><FAQ/>
              <Body/>
              
      </div>
    )
  }

export default function Help(){
    const [isMobile, setIsMobile] = useState(false);
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
      setShow(true);
      return () => setShow(false);
    }, [location]);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 768); // Change the threshold according to your needs
      }
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className={`page ${show ? 'page1-enter-active' : 'page1-exit-active'}`}>
      <div className="sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]">
        {isMobile ? <MobileHelp /> : <DesktopHelp />}
      </div>
      </div>
    );
  }
  