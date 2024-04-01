import React,{useState,useRef} from "react";
import Video from "../../../Assets/Videos/startvideoMobile.mp4";
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
      <div className=" w-auto h-full object-cover overflow-hidden shrink-0  h-[10rem]
      text-left text-white font-khand" >
      {/* // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  */}
        <video ref={videoRef} style={{ filter: 'brightness(0.3)' }} id="video-player" className=" w-auto h-full object-cover" height="100%" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* {isHovered && 
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white 
          px-4 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-300" onClick={togglePlay}>
            {videoRef.current && videoRef.current.paused ? 
              <img src={PlayBtn} alt="Play"></img> : <img src={PauseBtn} alt="Pause"></img>}
          </button> }  */}
          
          <b className="absolute px-[15px] py-[20px] top-[20px] leading-[100%] inline-block  h-auto font-khand text-white text-left h-[11.375rem] text-[3.363rem]">
                        <p className="m-0">
                            <span className="text-[1.95rem]">Unlock Your</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span className="text-[2.694rem]">Potential</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span className="text-[1.95rem]">with</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span>Personalized</span>
                            <span className="text-[2.5rem]">{` `}</span>
                        </p>
                        <p className="m-0 text-[3.094rem]">
                            <span className="text-[2.463rem]">Career</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span>Guidance</span>
                        </p>
                    </b>
      </div>
  
    );
  }