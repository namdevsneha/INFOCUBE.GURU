import React from 'react';
import Image1 from "../../../Assets/Images/Image1.png";
import Image2 from "../../../Assets/Images/Image2.png";
import Image3 from "../../../Assets/Images/Image3.png";
import Image4 from "../../../Assets/Images/Image4.png";

export default function ImageComponent(){
    return (

    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start py-[3.75rem] md:px-[5rem] lg:px-[10rem] box-border gap-[2.813rem] text-center text-[3rem] text-black font-roboto">
        <div className="w-[48rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[120%]">Image Gallery</b>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">Capturing Moments of Community Events and Interactions</div>
        </div>
        <div className="w-full relative flex flex-row items-start justify-start gap-[2rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2rem]">
                <img alt="first" src={Image1} />
                <img alt="Second" src={Image2} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[2rem]">
                <img  alt="Third" src={Image3} />
                <img  alt="Fourth" src={Image4} />
            </div>
        </div>
    </div>)
}