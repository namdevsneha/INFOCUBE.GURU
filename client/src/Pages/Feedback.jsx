import React,{setState,useState} from "react";
import backgroundImage from '../Assets/Images/Feedback_Bg_image.png';
import infocubelogo from '../Assets/Images/InfoCubeLogo.svg'
import {Link} from "react-router-dom";

export default function Feedback(){
    const [activeIndex, setActiveIndex] = useState('0'); // Initially set the third dot as active

  const handleClick = (index) => {
    setActiveIndex(index);
  };

    return (
        <div className="flex flex-col items-center justify-center bg-purple-feedback h-screen m-auto p-auto " style={{backgroundImage:`url(${backgroundImage})`}}>

        <div className="p-[1rem] justify-center align-item-center "><img className=" w-[5.5rem] h-auto" src={infocubelogo}></img></div>
        <span className="p-[1rem] text-white font-gotham  text-[2rem] text-center inline-block w-[45rem]">How much did our support aid you in your career journey?</span>
        
        <div className="p-[1rem] w-screen">
        <div className="scale-container align-item-center justify-center max-w-[600px] flex p-auto m-auto">
            <div className="scale-label">Ineffective</div>
            <div className="scale-line">
                <div onClick={()=>handleClick('1')} id='1' className={activeIndex==='1'?"scale-dot active":"scale-dot"}></div>
                <div onClick={()=>handleClick('2')} id='2' className={activeIndex==='2'?"scale-dot active":"scale-dot"}></div>
                <div onClick={()=>handleClick('3')} id='3' className={activeIndex==='3'?"scale-dot active":"scale-dot"}></div>
                <div onClick={()=>handleClick('4')} id='4' className={activeIndex==='4'?"scale-dot active":"scale-dot"}></div>
                <div onClick={()=>handleClick('5')} id='5' className={activeIndex==='5'?"scale-dot active":"scale-dot"}></div>
            </div>
            <div className="scale-label ml-[20px]">Significantly</div>
            </div>
            
            </div>
            <div className="justify-center align-item-center m-[1rem]  rounded-[32px] bg-white w-full max-w-[600px] bg-gray p-[0.2rem] border-[1px] border-solid border-black">
            <form>
                    <div className="flex flex-row items-center justify-between">
                    <input type="text" className="outline-none w-full m-2 align-item-center text-gray leading-[150%] " placeholder="Write a Review"/>
                    <div className="rounded-[29px] bg-darkslategray flex flex-row items-center justify-center py-[0.4rem] px-[1.5rem] 
                        text-white border-[1px] border-solid border-darkslategray">                            
                    <div className="relative leading-[150%]">Submit</div>
                        </div>
                        </div>
                        </form>

            </div>
        </div>
    )
} 