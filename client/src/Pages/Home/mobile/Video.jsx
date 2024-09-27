import React,{useState,useRef} from "react";
import Video from "../../../Assets/Videos/startvideoMobile.mp4";
import {Link} from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar,closeNav } from '../../../Redux/IsOpenSlice';
import { closeDropDown } from "../../../Redux/userSlice/navDropDown";


export default function StartingVideo() {
    
    const isOpen = useSelector((state) => state.navbar.isOpen);

    const baseClass = 'relative font-bold top-[40px] font-khand  text-white ';


    const dispatch = useDispatch();

    
  const handleWheel = () => {
    dispatch(closeNav());
    dispatch(closeDropDown());
  };


    return (
   
      
      <Link to="form" spy={true} smooth={true} activeClass="active" duration={700} offset={20} >
      <div onTouchStart={handleWheel}
      style={{marginLeft :`-${0.0383*innerWidth-0.6239}px` ,touchAction: 'pan-y' }} className=" w-screen bg-grey h-screen object-cover  overflow-hidden shrink-0 
      text-left text-white font-khand" >
        
        <video style={{ filter: 'brightness(1)' }} id="video-player" className="z-[-1]  absolute top-[0px] w-screen h-screen object-fill" height="100%" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
          
          <p className={baseClass}  style={{paddingLeft:`${0.0383*innerWidth-0.6239}px`}}>
          <span style={{fontSize:`${0.03316*innerWidth+18.82228}px`}}>Unlock Your</span>
                <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                <span className="leading-[100%]" style={{fontSize:`${0.04827*innerWidth+24.98891}px`}}>Potential</span>
                <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                <span style={{fontSize:`${0.03316*innerWidth+18.82228}px`}}>with</span>
                <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                <span className="leading-[100%]" style={{fontSize:`${0.045*innerWidth+31.985}px`}}>Personalized</span>
                <p className="leading-[100%]" style={{fontSize:`${0.0485*innerWidth+31.3005}px`}}>
                    <span style={{fontSize:`${0.03827*innerWidth+25.03191}px`}}>Career</span>
                    <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                    <span style={{fontSize:`${0.0485*innerWidth+31.3005}px`}}>Guidance</span>
                </p>
            </p>
      </div>
      </Link>
    );
  }

  