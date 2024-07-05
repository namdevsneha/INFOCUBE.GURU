import React,{useState, useEffect} from "react";
import Video from "../../../Assets/Videos/startvideo.mp4";

export default function StartVideo(){
    return(
      <video  style={{ filter: 'brightness(0.3)' }} id="video-player" className="bg-grey w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
  }