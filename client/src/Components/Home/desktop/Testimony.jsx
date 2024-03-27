import React,{useRef} from "react";
import Star from "../../../Assets/Images/Star.svg"
import ImagePlaceHolder from "../../../Assets/Images/ImagePlaceholder.png";
import RightArrowBtn from "../../../Assets/Images/RightArrowBtn2.svg";
import LeftArrowBtn from "../../../Assets/Images/LeftArrowBtn2.svg";

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
                  slidesToShow: 2,
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
        <div className="w-full relative h-[27.681rem] overflow-hidden text-center text-[1.5rem] text-black font-roboto">

<div className="  mx-[4rem] w-[82rem] grid grid-cols-12  ">
  <button className="col-span-1 place-self-center "
  onClick={() => slider?.current?.slickPrev()}>
    <img src={LeftArrowBtn}/>
    </button>          
<div className=" col-span-10 h-[17.681rem]">

<Slider centerMode={true} ref={slider} {...settings} >
      <div className="pb-8">
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2rem]">
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      </div>
      <div className="w-[48rem]">
      <b className="self-stretch relative leading-[140%] whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</b>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left text-[1rem]">
      <img className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover" alt="" src={ImagePlaceHolder} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-semibold">Name Surname</div>
      <div className="relative leading-[150%]">Position, Company name</div>
      </div>
      </div>
        </div>
      </div >
      <div className="pb-8">
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2rem]">
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      </div>
      <div className="w-[48rem]">
      <b className="self-stretch relative leading-[140%] whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</b>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left text-[1rem]">
      <img className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover" alt="" src={ImagePlaceHolder} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-semibold">Name Surname</div>
      <div className="relative leading-[150%]">Position, Company name</div>
      </div>
      </div>
      </div>
      </div>
      <div className="pb-8">
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2rem]">
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      <img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
      </div>
      <div className="w-[48rem]">
      <b className="self-stretch relative leading-[140%] whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</b>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left text-[1rem]">
      <img className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover" alt="" src={ImagePlaceHolder} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-semibold">Name Surname</div>
      <div className="relative leading-[150%]">Position, Company name</div>
      </div>
      </div>
      </div>
      </div>
</Slider>

</div>

<button className="col-span-1 place-self-center " 
onClick={() => slider?.current?.slickNext()}>
    <img src={RightArrowBtn}/>
    </button> 

</div>
</div>

    )
}