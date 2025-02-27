import { useEffect, useState } from "react";
import close from "../../../Assets/Images/close.png";

export const SideMenu=({isOpen,setIsOpen,id,pageData})=>{

    const data=pageData[id]
  
    useEffect(() => {
      // Disable scroll
      document.body.style.overflow = 'hidden';
  
      // Re-enable scroll on cleanup
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);
  
    const [scrollY, setScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        console.log('Scroll Y Position:', currentScrollY); // Log for verification
        setScrollY(currentScrollY);
      };
  
      // Add event listener
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const closeDialog = () => {
      setIsOpen(false);
    };
    return(
  
          <div className="fixed inset-0 flex z-[100]  justify-end bg-white bg-opacity-0 " >  
            <div className="bg-white font-poppins  ml-auto sticky w-[90vw] md:w-[30vw] px-[1.5vh] md:px-[1.5vw] overflow-y-auto"   style={{paddingTop:scrollY<55?`${64-scrollY}px`:"1vw"}} >
              <div className='  flex flex-row '>
              <h3 className='text-h4.5Text uppercase font-bold leading-[140%]'>{data.title}</h3>
                <img onClick={closeDialog} className='w-auto mt-[.75vw] mb-auto h-[12px] ml-auto cursor-pointer' src={close}/>
              </div>
              <div className='flex flex-col gap-[.5vw]'>
              
              <p className='pt-[.5vw] font-normal text-regularText font-roboto leading-[150%] text-gray-700'>{data.description}</p> 
              <div className='text-green-600 mb-[.5vw] font-roboto mx-auto w-[22.5vw] overflow-hidden text-center'>__________________________________________________________________________________________</div>
            
              </div>
              </div>
            <div className='fixed inset-0 z-30 bg-gray-900 bg-opacity-70 w-[10vw] md:w-[70vw]' onClick={closeDialog}/>  
          </div>
          
          
    )
  }
  