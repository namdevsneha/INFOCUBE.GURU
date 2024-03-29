import React, { useState, useEffect } from "react";

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
// import VideoMobile from "../Components/Home/mobile/Video.jsx";
import TestimonialMobile from "../Components/Home/mobile/Testimony.jsx";



// mobile function
export function Mobile() {
  return (
    <div>
      {/* <VideoMobile/> */}
            <FormMobile/>
            <ExpertiseMobile/>
            <CheckMobile/>
            <JoinMobile/>
            <TeamMobile/>
            <JourneyMobile/>
            <ImageMobile/>
            <TestimonialMobile/>
    </div>
  )
}


// desktop function
export function Desktop() {
  return (
    <div>
            <Video/>
            <Form/>
            <Expertise/>
            <Check/>
            <Join/>
            <Team/>
            <Journey/>
            <Image/>
            <Testimonial/>
    </div>
  )
}

// main function
export default function Home(){
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
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

