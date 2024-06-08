import React,{useState,useRef}  from "react";
import video from '../../../Assets/Videos/newvideo.mp4';
import PlayBtn from "../../../Assets/Images/PlayBtn.webp";
import PauseBtn from "../../../Assets/Images/PauseBtn.webp";


export default function Check(){
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
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center 
        lg:py-[3.75rem] md:py-[2rem] md:px-[5rem] lg:px-[10rem] box-border text-left text-[3rem] text-black font-roboto">
                <div className="flex flex-row items-center justify-start gap-[5rem]">
                        <div className="flex-1 item-center justify-center h-auto w-auto overflow-hidden" 
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <video ref={videoRef} id="video-player"  autoPlay muted loop>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                </video>
                        {isHovered && 
                        <button className="absolute top-[50%] left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white 
                        px-4 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-300" onClick={togglePlay}>
                                {videoRef.current && videoRef.current.paused ? 
                                <img src={PlayBtn} alt="Play"></img> : <img src={PauseBtn} alt="Pause"></img>}
                        </button> }
                        </div>
                        <div className="w-auto flex-1 flex-col items-start justify-center gap-[1.5rem]">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="w-[5rem] relative  overflow-hidden shrink-0" />
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                                                <b className="self-stretch relative leading-[120%] lg:text-[3.5rem] md:text-[2rem]">Stay Updated with the Latest News and Reminders in Your Field</b>
                                                <div className="self-stretch relative lg:text-[1.125rem] md:text-[1rem] leading-[150%] ">Stay informed with real-time updates and timely reminders 
                                        tailored to your specific field. Explore the latest news, trends, and insights to keep ahead in your industry. Welcome to our comprehensive section dedicated to keeping
                                         you informed and up-to-date with the latest news and reminders relevant to your field.
                                                </div>
                                        </div>
                                </div>
                                <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem] text-[1rem] text-white">
                                        <div className="rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem]">
                                                <button className="relative leading-[150%]">CHECK OUT
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>)

}
