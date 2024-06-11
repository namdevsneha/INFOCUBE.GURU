import React,{useState,useRef, useEffect} from "react";
import Video from "../../../Assets/Videos/startvideo.mp4";
import PlayBtn from "../../../Assets/Images/PlayBtn.webp";
import PauseBtn from "../../../Assets/Images/PauseBtn.webp";
import { useSelector, useDispatch } from 'react-redux';
import { closeDropDown, toogleDropDown } from '../../../Redux/userSlice/navDropDown.js';


export default function StartingVideo() {
 
 
    const videoRef = useRef(null);
    const dispatch=useDispatch();
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
      function updateViewportHeight() {
        // Update viewport height when window is resized or when component mounts
        const documentHeight = document.documentElement.clientHeight;
        setViewportHeight(documentHeight-250);
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', updateViewportHeight);
  
      // Initial update when component mounts
      updateViewportHeight();
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('resize', updateViewportHeight);
      };
    }, []);

    return (
      <div  onWheel={()=>{dispatch(closeDropDown())}} className="relative w-screen  overflow-hidden  shrink-0 
      text-left lg:text-[8rem] md:text-[5rem] mx-[-2rem] text-white font-khand"  style={{marginLeft :`-${0.0813*innerWidth-11.43}px`,height:`${viewportHeight}px`}}
       >
        <video ref={videoRef}  style={{ filter: 'brightness(0.3)' }} id="video-player" className="bg-grey w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
          
          <b className="absolute lg:top-[1.5rem] lg:left-[2.125rem] md:top-[1.1rem] md:left-[1.5rem] leading-[100%] inline-block w-[60rem]  h-auto">
            <p className="m-0">
              <span className="lg:text-[4.75rem] md:text-[3.1rem]">Unlock Your</span>
              <span className="lg:text-[6.375rem] md:text-[4.6rem]">{` `}</span>
              <span className="lg:text-[6.938rem] md:text-[4.8rem]">Potential</span>
              <span className="lg:text-[6.375rem] md:text-[4.6rem]">{` `}</span>
              <span className="lg:text-[4.75rem] md:text-[3.1rem]" >with</span>
              <span className="lg:text-[6.375rem] md:text-[4.6rem]">{` `}</span>
              <span>Personalized</span>
              <span className="lg:text-[6.375rem] md:text-[4.6rem]">{` `}</span>
            </p>
            <p className="m-0 lg:text-[8.125rem] md:text-[5rem]">
              <span className="lg:text-[6.25rem] md:text-[4.6rem]">Career</span>
              <span className="lg:text-[6.375rem] md:text-[4.8rem]">{` `}</span>
              <span>Guidance</span>
            </p>
          </b>

      </div>
    );
  }