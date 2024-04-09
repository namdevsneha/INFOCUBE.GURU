import React,{useState,useRef} from "react";
import Video from "../../../Assets/Videos/startvideoMobile.mp4";
import {Link} from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar,closeNav } from '../../IsOpenSlice';


export default function StartingVideo() {
    
    const isOpen = useSelector((state) => state.navbar.isOpen);

    const baseClass = 'fixed px-[15px] py-[20px] leading-[100%] font-khand text-white text-left text-[3.363rem]';
    const conditionalClass = isOpen ? 'top-[110px] h-auto' : 'top-[40px]';

    // Combine base class and conditional class based on isOpen
    const combinedClass = `${baseClass} ${conditionalClass}`;

    const dispatch = useDispatch();
  
    const closeNavbar = () => {
      
    }; // Optional: Use smooth scrolling

    const handleWheelScroll = (e,height) => {
      dispatch(closeNav());
      // Prevent default behavior to avoid sudden jumps on wheel scroll
      // e.preventDefault();
      
      // // Determine the direction of the scroll
      // const deltaY = e.deltaY;
      // const scrollSpeed = window.innerHeight+100; // Adjust scroll speed as needed
  
      // // Calculate the distance to scroll based on scroll speed and direction
      // const scrollDistance = deltaY > 0 ? scrollSpeed : -scrollSpeed;
  
      // // Get the current scroll position
      // const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      // // Smoothly scroll to the new position
      // window.scrollTo({
      //   top: currentPosition + scrollDistance,
      //   behavior: 'smooth',
      // });


    };
    
    

    return (
   
      
      <Link to="form" spy={true} smooth={true} activeClass="active" duration={700} offset={20} >
      <div onWheel={handleWheelScroll} 
      style={{ touchAction: 'pan-y' }} className=" w-screen h-screen object-cover  overflow-hidden shrink-0 
      text-left text-white font-khand" >
        <video style={{ filter: 'brightness(0.3)' }} id="video-player" className="z-[-1] absolute top-[0px] w-screen h-screen object-fill" height="100%" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
          
          <b className={combinedClass}>
                        <p className="m-0">
                            <span className="text-[1.95rem]">Unlock Your</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span className="text-[2.694rem]">Potential</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span className="text-[1.95rem]">with</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span>Personalized</span>
                            <span className="text-[2.5rem]">{` `}</span>
                        </p>
                        <p className="m-0 text-[3.094rem]">
                            <span className="text-[2.463rem]">Career</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span>Guidance</span>
                        </p>
                    </b>
      </div>
      </Link>
    );
  }