import React,{useState,useRef}  from "react";
import video from '../../../Assets/Videos/newvideo.mp4';
import PlayBtn from "../../../Assets/Images/PlayBtn.svg";
import PauseBtn from "../../../Assets/Images/PauseBtn.svg";

export default function Check() {
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
    <div className='px-[15px] py-[20px]'>
      <div className="relative w-full flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1rem] text-black font-roboto">
        <b className="relative text-[1.2rem] leading-[120%]">Updates Center</b>
                <div className="item-center justify-center h-[auto] w-auto overflow-hidden shrink" 
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <video ref={videoRef} id="video-player"  autoPlay muted loop>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                        </video>
                        {isHovered && 
                        <button className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white 
                        px-4 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-300" onClick={togglePlay}>
                                {videoRef.current && videoRef.current.paused ? 
                                <img src={PlayBtn} alt="Play"></img> : <img src={PauseBtn} alt="Pause"></img>}
                        </button> }
                </div>
        <div className="w-auto flex flex-col items-start justify-center pt-[1.563rem] px-[0rem] pb-[0rem] box-border gap-[0.961rem] 
        text-[2rem]">
                <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                                        <b className="self-stretch relative leading-[120%]">Stay Updated with the Latest News and Reminders in 
                                        Your Field
                                        </b>
                                        <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
                                        mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                        </div>
                                </div>
                        </div>
                </div>
                <div className="flex flex-row items-center justify-start pt-[0.638rem] px-[0rem] pb-[0rem] text-[0.638rem] text-white">
                        <div className="rounded-[28.07px] bg-darkslategray flex flex-row items-center justify-center py-[0.5rem] px-[0.938rem]">
                                <div className="relative leading-[150%]">CHECK OUT</div>
                        </div>
                </div>
        </div>
        </div>
    </div>
  )
}
