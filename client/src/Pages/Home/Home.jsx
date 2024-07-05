import React, { useState, useEffect, Suspense } from "react";
import {showHeader} from "../../Redux/userSlice/loginSlice.js";
import { useSelector, useDispatch } from 'react-redux';
import { notVerifiedPass, verifyStart } from "../../Redux/userSlice/verifyPass.js";
import { useLocation } from "react-router-dom";
import './Gradient.css'


// desktop components

import Form from "./desktop/Form.jsx";
import Expertise from "./desktop/Expertise.jsx";
import Check from "./desktop/Check.jsx";
import Join from "./desktop/Join.jsx";
import Journey from "./desktop/Journey.jsx";
import Image from "./desktop/Image.jsx";
import Team from "./desktop/Team.jsx";
import Video from './desktop/Video.jsx'
import Testimonial from "./desktop/Testimony.jsx";
import Services from "./desktop/Services.jsx";
import Counselling from "./desktop/Counselling.jsx";

// mobile components

import FormMobile from "./mobile/Form.jsx"
import ExpertiseMobile from "./mobile/Expertise.jsx";
import CheckMobile from "./mobile/Check.jsx";
import JoinMobile from "./mobile/Join.jsx";
import JourneyMobile from "./mobile/Journey.jsx";
import ImageMobile from "./mobile/Image.jsx";
import TeamMobile from "./mobile/Team.jsx";
import VideoMobile from "./mobile/Video.jsx";
import TestimonialMobile from "./mobile/Testimony.jsx";
import CounsellingMobile from "./mobile/Counselling.jsx";
import ServiesMobile from "./mobile/Services.jsx";


// mobile function
export function Mobile() {
 
  return (
    <div>
            <VideoMobile/>
            <FormMobile/>
            <CounsellingMobile/>
            <ServiesMobile/>
            <ExpertiseMobile/>
            <CheckMobile/>
            <JoinMobile/>
            {/* <TeamMobile/> */}
            {/* <JourneyMobile/> */}
            <ImageMobile/>
            <TestimonialMobile/>
    </div>
  )
}


// desktop function
export function Desktop() {
  return (
    <div className="gradient-corner1">
            <Video/>
            <Form/>
            <Suspense fallback={<div></div>}>
            <Counselling/>
            <Services/>
            <Expertise/>
            <Check/>
            <Join/>
            {/* <Team/> */}
            {/* <Journey/> */}
            <Image/>
            <Testimonial/>
            </Suspense>
    </div>
  )
}

// main function
export default function Home(){
  const [isMobile, setIsMobile] = useState(false);
  const {innerWidth,outerWidth,innerHeight,outerHeight}=useSelector((state)=>state.screenSize);
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [location]);

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeader());
    dispatch(notVerifiedPass())
    
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Change the threshold according to your needs
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const parentStyle = {
    position: 'relative',
    // other styles for the parent component
  };
 
  return (
    <div className={`page ${show ? 'page1-enter-active' : 'page1-exit-active'}`}>
    <div style={parentStyle}>
      <CustomBeforeComponent ></CustomBeforeComponent>
    <div className={`${isMobile?"":""}  sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]`} style={isMobile?{paddingLeft:`${0.0383*innerWidth-0.6239}px`, paddingRight:`${0.0383*innerWidth-0.6239}px`}:{paddingLeft :`${0.0813*innerWidth-11.43}px`,paddingRight:`${0.0813*innerWidth-11.43}px`, gap:`${0.0536*innerWidth-22.91}px`}}>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
    </div>
    </div>
  );
}

const CustomBeforeComponent = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  useEffect(() => {
    function updateViewportHeight() {
      const documentHeight = document.documentElement.clientHeight;
      setViewportHeight(documentHeight);
    }

    // Add event listener for window resize
    window.addEventListener('resize', updateViewportHeight);
    updateViewportHeight();

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);
  console.log(viewportHeight)
  const style = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
    radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) ${-25}% ${viewportHeight-(0.1674*innerWidth+378.11)}px / ${0.390625*innerWidth}px ${0.5022*innerWidth+35.78}px no-repeat,
    radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) ${130}% ${viewportHeight-(0.1674*innerWidth+378.11)}px / ${0.390625*innerWidth}px ${0.5022*innerWidth+35.78}px no-repeat,
    radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) ${-20}% ${viewportHeight+250}px / ${0.3013*innerWidth+91.02}px ${0.5580*innerWidth+26.24}px no-repeat
     
                 `,
    filter: `blur(${0.1339*innerWidth-7.09}px)`,
    zIndex: 0,    
  };
  
  const style2 = {
    content: '""',
    position: 'absolute',
    top: 2600,
    left: 1860,
    width: '350px',
    height: '600px',
    background: `
    radial-gradient( rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 50%) 0px 0px / ${351}px ${600}px no-repeat
                 `,
    filter: `blur(${50}px)`,
    zIndex: -1,
    transform:`rotate(18deg)`,
    
  };

  return <div >
    <div style={style2}/>
    <div style={style} />
    </div>;
};
//      700  0.1339*innerWidth-7.09
//     radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) ${-20}% ${viewportHeight+350}px / ${670}px ${1100}px no-repeat