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
      {innerWidth<1024? "":
      <CustomBeforeComponent ></CustomBeforeComponent>}
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
    zIndex: 0,    
  };

  const gradient1 = {
    position: 'absolute',
    top: `${viewportHeight-(-0.1116*innerWidth+614.2857)}px`,
    left: `${0.0781*innerWidth-199.952}px`,
    width: '350px',
    height: '600px',
    background: `radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) 0px 0px / ${350}px ${600}px no-repeat`,
    filter: `blur(${190}px)`,
  };
  const gradient2 = {
    position: 'absolute',
    top: `${viewportHeight-(-0.1116*innerWidth+614.2857)}px`,
    left: `${0.8929*innerWidth-114.368}px`,
    width: '350px',
    height: '600px',
    background: `radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) 0px 0px / ${350}px ${600}px no-repeat`,
    filter: `blur(${190}px)`,
  };

  const gradient3={
    position: 'absolute',
    top: `${viewportHeight+(0.2790*innerWidth+14.32)}px`,
    left: `${0.0781*innerWidth-199.952}px`,
    width: '350px',
    height: '600px',
    background: `
    radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) 0px 0px / ${350}px ${600}px no-repeat
                 `,
    filter: `blur(${190}px)`,
    transform:`rotate(-11.4deg)`,
  }

  const gradient4 = {
    position: 'absolute',
    top: `${viewportHeight+(0.8371*innerWidth+392.768)}px`,
    left: `${0.9821*innerWidth-185.632}px`,
    width: '350px',
    height: '600px',
    background: `
    radial-gradient( rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 100%) 0px 0px / ${351}px ${600}px no-repeat
                 `,
    filter: `blur(${170}px)`,
    transform:`rotate(19.7deg)`,
  };


  const gradient5={
    position: 'absolute',
    top: `${viewportHeight+(0.8036*innerWidth+1127.088)}px`,
    left: `${-(0.0558*innerWidth+92.864)}px`,
    width: '450px',
    height: '600px',
    background: `
    radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) 0px 0px / ${450}px ${600}px no-repeat
                 `,
    filter: `blur(${0.0223*innerWidth+147.184}px)`,
    transform:`rotate(-23.4deg)`,
  }

  const gradient6 = {
    position: 'absolute',
    top: `${viewportHeight+(1.5625*innerWidth+1000)}px`,
    left: `${0.9821*innerWidth-185.632}px`,
    width: '350px',
    height: '600px',
    background: `
    radial-gradient( rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 100%) 0px 0px / ${351}px ${600}px no-repeat
                 `,
    filter: `blur(${170}px)`,
    transform:`rotate(24deg)`,
  };


  return <div >
    <div style={gradient1}/>
    <div style={gradient2}/>
    <div style={gradient3}/>
    <div style={gradient4}/>
    <div style={gradient5}/>
    <div style={gradient6}/>
    <div style={style} />
    </div>;
};
//      700  0.1339*innerWidth-7.09
//     radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) ${-20}% ${viewportHeight+350}px / ${670}px ${1100}px no-repeat

// radial-gradient(circle, rgba(128, 0, 215, 1) 0%, rgba(0, 0, 0, 0) 70%) ${-25}% ${viewportHeight-(0.1674*innerWidth+378.11)}px / ${0.390625*innerWidth}px ${0.5022*innerWidth+35.78}px no-repeat,