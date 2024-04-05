import React, { useState, useEffect } from "react";
import Body from "../Components/Help/Desktop/Help.jsx"
import FAQ from "../Components/Help/Desktop/FAQ.jsx"
import BodyMobile from "../Components/Help/Mobile/Help.jsx"
import FAQMobile from '../Components/Help/Mobile/FAQ.jsx'




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
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 768); // Change the threshold according to your needs
      }
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className="">
        {isMobile ? <MobileHelp /> : <DesktopHelp />}
      </div>
    );
  }
  