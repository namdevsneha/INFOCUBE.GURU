import React,{useRef} from "react";
import RightArrowBtn from "../../../Assets/Images/RightArrowBtn2.webp";
import LeftArrowBtn from "../../../Assets/Images/LeftArrowBtn2.webp";
import Image1 from "../../../Assets/Images/image1.jpg";
import Image2 from "../../../Assets/Images/image3.jpg";
import Image3 from "../../../Assets/Images/seminar2.webp";
import Image4 from "../../../Assets/Images/image5.jpg";
import Image5 from "../../../Assets/Images/seminar3.webp";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Image(){
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
      <div className=''>
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-start gap-[0.938rem] text-center
         text-[2rem] text-black font-roboto">
          <div className="w-[20.698rem] flex flex-col items-center justify-start gap-[0.625rem]">
            <b className="self-stretch relative leading-[120%]">Image Gallery</b>
            <div className="self-stretch relative text-[0.625rem] leading-[150%]">Capturing Moments of Community Events and Interactions</div>
          </div>
          <div className="w-full grid grid-cols-8  ">
            <button className="w-[1.7rem] col-span-1 place-self-center "
              onClick={() => slider?.current?.slickPrev()}>
              <img src={LeftArrowBtn}/>
            </button> 

            <div className=" col-span-6 items-center  justify-start  h-[14rem]">
              <Slider ref={slider} {...settings} >
                  <div className=" w-full items-center ">
                      <img className="m-auto w-auto h-[11.5rem]  object-cover" alt="" src={Image1} />
                  </div>
                  <div className=" ">
                      <img className=" m-auto w-auto h-[11.5rem]  object-cover" alt="" src={Image2} />
                  </div>
                  <div className=" ">
                      <img className="m-auto w-auto h-[11.5rem]  object-cover" alt="" src={Image3} />
                  </div>
                
                  <div className=" ">
                      <img className="m-auto w-auto h-[11.5rem]  object-cover" alt="" src={Image5} />
                  </div>
              </Slider>
            </div>

            <button className="w-[1.7rem] col-span-1 place-self-center " 
              onClick={() => slider?.current?.slickNext()}>
              <img src={RightArrowBtn}/>
            </button> 
          </div>
        </div>
      </div>
    )
}