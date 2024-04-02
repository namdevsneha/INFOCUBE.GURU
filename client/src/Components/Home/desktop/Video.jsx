import React,{useState,useRef} from "react";
import Video from "../../../Assets/Videos/startvideo.mp4";
import PlayBtn from "../../../Assets/Images/PlayBtn.svg";
import PauseBtn from "../../../Assets/Images/PauseBtn.svg";



export default function StartingVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    
    const togglePlay = () => {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying(!isPlaying);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div className="relative w-full max-w-full overflow-hidden lg:h-[38.688rem] md:h-[25rem] shrink-0 
      text-left lg:text-[8rem] md:text-[5rem] text-white font-khand" 
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <video ref={videoRef}  style={{ filter: 'brightness(0.3)' }} id="video-player" className="w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* {isHovered && 
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white 
          px-4 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-300" onClick={togglePlay}>
            {videoRef.current && videoRef.current.paused ? 
              <img src={PlayBtn} alt="Play"></img> : <img src={PauseBtn} alt="Pause"></img>}
          </button> }  */}
          
          <b className="absolute lg:top-[1.5rem] lg:left-[2.125rem] md:top-[1.1rem] md:left-[1.5rem] leading-[100%] inline-block  h-auto">
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