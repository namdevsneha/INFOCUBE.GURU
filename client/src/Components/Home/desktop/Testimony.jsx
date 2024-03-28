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
        <div className="px-[4rem] w-auto relative lg:h-[27.681rem] md:h[35rem] overflow-hidden text-center lg:text-[1.5rem] md:text-[1rem] text-black font-roboto">

<div className="   w-auto grid lg:grid-cols-12 md:grid-cols-10  ">
  <button className="col-span-1 place-self-center "
  onClick={() => slider?.current?.slickPrev()}>
    <img src={LeftArrowBtn}/>
    </button>          
<div className=" lg:col-span-10 md:col-span-8 h-[18rem]">

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
      <div className="lg:w-[48rem] md:w-auto">
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
      <div className="lg:w-[48rem] md:w-auto">
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
      <div className="lg:w-[48rem] md:w-auto">
      <b className="self-stretch relative leading-[140%] whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</b>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left lg:text-[1rem] md:text-[.8rem]">
      <img className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover" alt="" src={ImagePlaceHolder} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-semibold">Name Surname</div>
      <div className="relative leading-[150%]">Position, Company name</div>
      </div>
      </div>
        </div>
      </div >
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