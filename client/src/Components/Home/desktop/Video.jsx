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
        const documentHeight = document.documentElement.clientHeight;
        setViewportHeight(documentHeight-250);
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', updateViewportHeight);
      updateViewportHeight();
  
      return () => {
        window.removeEventListener('resize', updateViewportHeight);
      };
    }, []);

    return (
      <div  onWheel={()=>{dispatch(closeDropDown())}} className="relative w-screen  overflow-hidden  shrink-0 
      text-left  mx-[-2rem] text-white font-khand"  style={{fontSize:`${0.046875*innerWidth+38}px`, marginLeft :`-${0.0813*innerWidth-11.43}px`,height:`${viewportHeight}px`}}>
        
        {/* <video ref={videoRef}  style={{ filter: 'brightness(0.3)' }} id="video-player" className="bg-grey w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        
          
            <p className="absolute font-bold lg:top-[1.5rem] lg:left-[2.125rem] md:top-[1.1rem] md:left-[1.5rem] leading-[100%] inline-block  lg:w-[60rem]  h-auto" >
              <p >
              <span style={{fontSize:`${0.029464*innerWidth+19.47872}px`}}> Unlock Your</span>
              <span style={{fontSize:`${0.031696*innerWidth+41.14208}px`}}>{` `}</span>
              <span style={{fontSize:`${0.0381696*innerWidth+37.707072}px`}}>Potential</span>
              <span style={{fontSize:`${0.031696*innerWidth+41.14208}px`}}>{` `}</span>
              <span style={{fontSize:`${0.029464*innerWidth+19.47872}px`}} >with</span>
              <span style={{fontSize:`${0.031696*innerWidth+41.14208}px`}}>{` `}</span>
              <span style={{fontSize:`${0.046875*innerWidth+38}px`}}>Personalized</span>
              <span style={{fontSize:`${0.031696*innerWidth+41.14208}px`}}>{` `}</span>
              </p>
            
              <p className="m-0 lg:text-[8.125rem] md:text-[5rem]" >
              <span style={{fontSize:`${0.029464*innerWidth+43.47872}px`}}>Career</span>
              <span style={{fontSize:`${0.031696*innerWidth+41.14208}px`}}>{` `}</span>
              <span style={{fontSize:`${0.031696*innerWidth+41.14208}px`}}>Guidance</span>
              </p>
            </p>

      </div>
    );
  }