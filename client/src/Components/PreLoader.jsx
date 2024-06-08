import React, { useState, useEffect } from 'react'
import image from '../Assets/Images/InfoCubeLogo.webp';
import './PreLoader.css';
import Video from "../Assets/Videos/startvideo.mp4";
export default function Preloader () {
  const [zoomed, setZoomed] = useState(false);
  const [radial,setRadial]=useState(false);

  useEffect(() => {
    // Set zoomed to true after a delay to trigger the animation
    const timer1 = setTimeout(() => {
      setZoomed(true);
      // Adjust the delay as needed
  
      // Set timer2 after timer1 ends
      const timer2 = setTimeout(() => {
        setRadial(true);
      }, 1000); // Adjust the delay as needed for timer2
  
      return () => clearTimeout(timer2); // Clear timer2 on component unmount
    }, 2500); // Delay for timer1
  
    return () => clearTimeout(timer1); // Clear timer1 on component unmount
  }, []);


  
  return (
    <div className='h-screen w-screen   '>
      <div className='h-full w-full  overflow-hidden   '>
      <div className='absolute top-[50%] left-[50%] z-[3]'>
    <img className={`object-cover   ${zoomed ? 'zoom-in ' : radial?' ':' scale-[3] opacity-[1]'}`}  src={image} alt="Your Image" />

      </div>
      <div className='absolute'>
      <video style={{ filter: 'brightness(0.3)' }} id="video-player" className={`w-screen h-screen object-cover z-[2] ${zoomed ? 'zoom-invideo ' : 'opacity-[0]' }`} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      </div>
      
</div>
  )
}


/*
0 to 1 second radial vibe
1 to 3.5 zoom in 0 to infinity image and video opacity 0 to 1






*/