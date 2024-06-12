import React, { useState, useEffect } from "react";
import {showHeader} from "../Redux/userSlice/loginSlice.js";
import { useSelector, useDispatch } from 'react-redux';
// desktop components
import Form from "../Components/Home/desktop/Form.jsx";
import Expertise from "../Components/Home/desktop/Expertise.jsx";
import Check from "../Components/Home/desktop/Check.jsx";
import Join from "../Components/Home/desktop/Join.jsx";
import Journey from "../Components/Home/desktop/Journey.jsx";
import Image from "../Components/Home/desktop/Image.jsx";
import Team from "../Components/Home/desktop/Team.jsx";
import Video from '../Components/Home/desktop/Video.jsx'
import Testimonial from "../Components/Home/desktop/Testimony.jsx";
// mobile components

import FormMobile from "../Components/Home/mobile/Form.jsx"
import ExpertiseMobile from "../Components/Home/mobile/Expertise.jsx";
import CheckMobile from "../Components/Home/mobile/Check.jsx";
import JoinMobile from "../Components/Home/mobile/Join.jsx";
import JourneyMobile from "../Components/Home/mobile/Journey.jsx";
import ImageMobile from "../Components/Home/mobile/Image.jsx";
import TeamMobile from "../Components/Home/mobile/Team.jsx";
import VideoMobile from "../Components/Home/mobile/Video.jsx";
import TestimonialMobile from "../Components/Home/mobile/Testimony.jsx";
import { notVerifiedPass, verifyStart } from "../Redux/userSlice/verifyPass.js";
import Services from "../Components/Home/desktop/Services.jsx";
import Counselling from "../Components/Home/desktop/Counselling.jsx";
import CounsellingMobile from "../Components/Home/mobile/Counselling.jsx";
import ServiesMobile from "../Components/Home/mobile/Services.jsx";
import { useLocation } from "react-router-dom";


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
            <Counselling/>
            <Services/>
            <Expertise/>
            <Check/>
            <Join/>
            {/* <Team/> */}
            {/* <Journey/> */}
            <Image/>
            <Testimonial/>
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
 
  return (
    <div className={`page ${show ? 'page1-enter-active' : 'page1-exit-active'}`}>
    <div className={`${isMobile?"":''} sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]`} style={isMobile?{paddingLeft:`${0.0383*innerWidth-0.6239}px`, paddingRight:`${0.0383*innerWidth-0.6239}px`}:{paddingLeft :`${0.0813*innerWidth-11.43}px`,paddingRight:`${0.0813*innerWidth-11.43}px`, gap:`${0.0536*innerWidth-22.91}px`}}>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
    </div>
  );
}

