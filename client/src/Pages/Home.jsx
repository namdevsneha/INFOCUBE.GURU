import React from "react";
import Form from "../Components/Home/Form.jsx";
import Expertise from "../Components/Home/Expertise.jsx";
import Check from "../Components/Home/Check.jsx";
import Join from "../Components/Home/Join.jsx";
import Journey from "../Components/Home/Journey.jsx";
import Image from "../Components/Home/Image.jsx";
import Team from "../Components/Home/Team.jsx";
import Video from '../Components/Home/Video.jsx'
import Testimonial from "../Components/Home/Testimony.jsx";
export default function Home(){
    return (
        <div className="" >
            <Video/>
            <Form/>
            <Expertise/>
            <Check/>
            <Join/>
            <Team/>
            {/* <Journey/> */}
            <Image/>
            <Testimonial/>
        </div>
        
    )
} 