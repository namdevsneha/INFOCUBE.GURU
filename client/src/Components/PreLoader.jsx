import React, { useState, useEffect } from 'react'
import image from '../Assets/Images/InfoCubeLogo.png';
import './PreLoader.css';
export default function Preloader () {
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    // Set zoomed to true after a delay to trigger the animation
    const timer = setTimeout(() => {
      setZoomed(true);
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);
  return (
    <div className='h-[100vh] flex justify-center items-center'>
    <img className={`w-[5rem] ${zoomed ? 'radial-vibe' : ''}`}  src={image} alt="Your Image" />
  </div>
  )
}

