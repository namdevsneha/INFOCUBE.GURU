import React,{useRef} from "react";
import Star from "../../../Assets/Images/Star.webp"
import ImagePlaceHolder from "../../../Assets/Images/ImagePlaceholder.webp";
import RightArrowBtn from "../../../Assets/Images/RightArrowBtn2.webp";
import LeftArrowBtn from "../../../Assets/Images/LeftArrowBtn2.webp";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





export default function Testimonial(){
  const slider = React.useRef(null);
          
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
            ]
          };

    return (
        <div className="px-[15px] py-[20px]">

<div className="   w-auto grid grid-cols-8  ">
  <button className="w-[1.7rem] col-span-1 place-self-center "
  onClick={() => slider?.current?.slickPrev()}>
    <img src={LeftArrowBtn}/>
    </button>          
<div className="col-span-6 h-[14rem]">

<Slider  ref={slider} {...settings} >
      <div className="pb-4  m-auto">
      <div className="w-full relative overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[0.531rem] text-center text-[.9rem] text-black font-roboto">
<div className="overflow-hidden flex flex-row items-start justify-start gap-[0.069rem]">
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
</div>
<div className="self-stretch relative leading-[140%] font-semibold whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</div>
<div className="flex flex-row items-center justify-start gap-[0.331rem] text-left text-[0.8rem]">
<img className="relative rounded-[50%] h-[2.5rem] object-cover" alt="" src={ImagePlaceHolder} />
<div className="flex flex-col items-start justify-start">
<div className="relative leading-[150%] font-semibold">Name Surname</div>
<div className="relative leading-[150%]">Position, Company name</div>
</div>
</div>
</div>
      </div >
      <div className="pb-4  m-auto">
      <div className="w-full relative overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[0.531rem] text-center text-[.9rem] text-black font-roboto">
<div className="overflow-hidden flex flex-row items-start justify-start gap-[0.069rem]">
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
</div>
<div className="self-stretch relative leading-[140%] font-semibold whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</div>
<div className="flex flex-row items-center justify-start gap-[0.331rem] text-left text-[0.8rem]">
<img className="relative rounded-[50%] h-[2.5rem] object-cover" alt="" src={ImagePlaceHolder} />
<div className="flex flex-col items-start justify-start">
<div className="relative leading-[150%] font-semibold">Name Surname</div>
<div className="relative leading-[150%]">Position, Company name</div>
</div>
</div>
</div>
      </div >
      <div className="pb-4  m-auto">
      <div className="w-full relative overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[0.531rem] text-center text-[.9rem] text-black font-roboto">
<div className="overflow-hidden flex flex-row items-start justify-start gap-[0.069rem]">
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
<img className="relative h-[.5rem]" alt="" src={Star} />
</div>
<div className="self-stretch relative leading-[140%] font-semibold whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</div>
<div className="flex flex-row items-center justify-start gap-[0.331rem] text-left text-[0.8rem]">
<img className="relative rounded-[50%] h-[2.5rem] object-cover" alt="" src={ImagePlaceHolder} />
<div className="flex flex-col items-start justify-start">
<div className="relative leading-[150%] font-semibold">Name Surname</div>
<div className="relative leading-[150%]">Position, Company name</div>
</div>
</div>
</div>
      </div >
</Slider>

</div>

<button className="w-[1.7rem] col-span-1 place-self-center " 
onClick={() => slider?.current?.slickNext()}>
    <img src={RightArrowBtn}/>
    </button> 

</div>
</div>

    )
}