import React from 'react';
import Image1 from "../../../Assets/Images/image1.jpg";
import Image2 from "../../../Assets/Images/seminar2.jpg";
import Image3 from "../../../Assets/Images/image3.jpg";
import Image4 from "../../../Assets/Images/image5.jpg";
import Image5 from "../../../Assets/Images/seminar3.webp";
// import Image5 from "../../../Assets/Images/seminar3.webp";


export default function ImageComponent(){
    return (

    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start py-[3.75rem] md:px-[2rem] lg:px-[4rem] box-border gap-[2.813rem] text-center text-[3rem] text-black font-roboto">
        <div className="w-[48rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[120%]">Image Gallery</b>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">Capturing Moments of Community Events and Interactions</div>
        </div>
       
         <div className="w-full grid grid-cols-7 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-4">
          <img loading='lazy' alt="first" src={Image1} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 row-span-3">
          <img loading='lazy' alt="Second" src={Image2} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 row-span-3">
          <img loading='lazy' alt="Third" src={Image4} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-4 row-span-3">
          <img loading='lazy' alt="Fourth" src={Image3} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-3 row-span-2">
          <img loading='lazy' alt="Fifth" src={Image5} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>)
}