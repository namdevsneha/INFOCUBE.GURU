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
      <div className="relative w-full max-w-full overflow-hidden h-[32rem] shrink-0" 
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <video ref={videoRef} id="video-player" className="w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {isHovered && 
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white 
          px-4 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-300" onClick={togglePlay}>
            {videoRef.current && videoRef.current.paused ? 
              <img src={PlayBtn} alt="Play"></img> : <img src={PauseBtn} alt="Pause"></img>}
          </button> } 
      </div>
    );
  }