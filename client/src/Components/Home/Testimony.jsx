import React,{useRef} from "react";
import Star from "../../Assets/Images/Star.svg"
import ImagePlaceHolder from "../../Assets/Images/ImagePlaceholder.png";
import RightArrowBtn from "../../Assets/Images/RightArrowBtn2.svg";
import LeftArrowBtn from "../../Assets/Images/LeftArrowBtn2.svg";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Testimonial(){

 
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <img src={LeftArrowBtn} alt="Previous" />
      </button>
    );
};
  
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <img src={RightArrowBtn} alt="Next" />
      </button>
    );
};

          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
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
        <div className="bg-red-200 w-full relative h-[27.681rem] overflow-hidden text-center text-[1.5rem] text-black font-roboto">
<div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[82rem] h-[17.681rem]">

<Slider {...settings} >
      <div>
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
      <div>
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
      <div>
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
</div>

    )
}