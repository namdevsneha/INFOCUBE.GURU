import React,{useRef,useState,useEffect} from "react";
import Star from "../../../Assets/Images/Star.webp"
import ImagePlaceHolder from "../../../Assets/Images/ImagePlaceholder.webp";
import RightArrowBtn from "../../../Assets/Images/RightArrowBtn2.webp";
import LeftArrowBtn from "../../../Assets/Images/LeftArrowBtn2.webp";
import Testimonoial1 from '../../../Assets/Images/Testimonial1.jpg';
import Testimonoial2 from '../../../Assets/Images/Testimonial2.jpg';
import Testimonoial3 from '../../../Assets/Images/Testimonial3.jpg';

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
        <div className="">

<div className="   w-auto grid grid-cols-8  py-8 ">
  <button className="col-span-1 mb-8 place-self-center "
  onClick={() => slider?.current?.slickPrev()}>
    <img src={LeftArrowBtn} style={{width:`${0.020408*innerWidth+16.347296}px`}}/>
    </button>          
<div className="col-span-6 ">

<Slider  ref={slider} {...settings} >
      <div className=" mb-2  m-auto">
      <div className="w-full relative overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[0.531rem] text-center text-black font-poppins" style={{fontSize:`${0.015306*innerWidth+6.265298}px`}}>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.069rem]">
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      </div>
      <MoreLessComponent className="h-min" fullText="I had an amazing experience with this career counselling website! The counsellors werevknowledgeable and provided tailored advice that really helped me focus on my strengths and interests. I highly recommend this service to anyone unsure about their career path."
                  turncatedText="I had an amazing experience with this career counselling website! The counsellors were knowledgeable and "/>
      
      <div className="flex flex-row items-center justify-start gap-[0.331rem] text-left text-[0.8rem]">
      <img className="relative rounded-[50%] object-cover" style={{width:`${0.015306*innerWidth+28.265298}px`, height:`${0.015306*innerWidth+28.265298}px`}} alt="" src={Testimonoial1} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-roboto font-semibold" style={{fontSize:`${0.007653*innerWidth+8.135549}px`}}>Om Dubey</div>
      <div className="relative leading-[150%] font-roboto" style={{fontSize:`${0.007653*innerWidth+8.135549}px`}}>10th, Student</div>
      </div>
      </div>
      </div>
      </div >
      
      <div className=" mb-2  m-auto">
      <div className="w-full relative overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[0.531rem] text-center text-black font-poppins" style={{fontSize:`${0.015306*innerWidth+6.265298}px`}}>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.069rem]">
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      </div>
      <MoreLessComponent className="h-min" fullText="This college counselling website was a game-changer for my university application process. The team provided insightful guidance on college selections, helped refine my essays, and offered valuable tips for interviews. I got into my dream college, and I couldn't be happier!"
                  turncatedText="This college counselling website was a 
          game-changer for my university application process. The team "/>
      
      <div className="flex flex-row items-center justify-start gap-[0.331rem] text-left text-[0.8rem]">
      <img className="relative rounded-[50%] object-cover" style={{width:`${0.015306*innerWidth+28.265298}px`, height:`${0.015306*innerWidth+28.265298}px`}} alt="" src={Testimonoial2} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-roboto font-semibold" style={{fontSize:`${0.007653*innerWidth+8.135549}px`}}>Prateek Mandloi</div>
      <div className="relative leading-[150%] font-roboto" style={{fontSize:`${0.007653*innerWidth+8.135549}px`}}>12th, Student</div>
      </div>
      </div>
      </div>
      </div >

      <div className=" mb-2  m-auto">
      <div className="w-full relative overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[0.531rem] text-center text-black font-poppins" style={{fontSize:`${0.015306*innerWidth+6.265298}px`}}>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.069rem]">
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      <img className="relative h-[.5rem]" alt="" src={Star} />
      </div>
      <MoreLessComponent className="h-min" fullText="I found the college counselling services here very comprehensive. From selecting the right colleges to preparing for entrance exams, the support I received was top-notch. The counsellors were always available to answer my questions and alleviate my concerns."
                  turncatedText="I found the college counselling services here very comprehensive. From selecting the right"/>
      
      <div className="flex flex-row items-center justify-start gap-[0.331rem] text-left text-[0.8rem]">
      <img className="relative rounded-[50%] object-cover" style={{width:`${0.015306*innerWidth+28.265298}px`, height:`${0.015306*innerWidth+28.265298}px`}} alt="" src={Testimonoial3} />
      <div className="flex flex-col items-start justify-start">
      <div className="relative leading-[150%] font-roboto font-semibold" style={{fontSize:`${0.007653*innerWidth+8.135549}px`}}>Gauri Nigam</div>
      <div className="relative leading-[150%] font-roboto" style={{fontSize:`${0.007653*innerWidth+8.135549}px`}}>12th, Student</div>
      </div>
      </div>
      </div>
      </div >
          
</Slider>

</div>

<button className="col-span-1 mb-8 place-self-center " 
onClick={() => slider?.current?.slickNext()}>
    <img src={RightArrowBtn} style={{width:`${0.020408*innerWidth+16.347296}px`}}/>
    </button> 

</div>
</div>

    )
}

const MoreLessComponent = ({ fullText,turncatedText }) => {
  const [more, setMore] = useState(false);

  return (
      <div
        className="self-stretch relative leading-[140%] font-semibold whitespace-pre-wrap"
      >
        {more?fullText:turncatedText}
        {" "}
    
      <button className="text-blue-400 Roboto underline" style={{fontSize:`${0.015306*innerWidth+3.265298}px`}} onClick={() => setMore(!more)}>
        {more ? 'less' : 'more'}
      </button>
      </div>
  );
};


