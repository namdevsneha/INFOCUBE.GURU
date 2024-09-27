import React,{useRef} from "react";
import RightArrowBtn from "../../../Assets/Images/RightArrowBtn2.webp";
import LeftArrowBtn from "../../../Assets/Images/LeftArrowBtn2.webp";
import Image1 from "../../../Assets/Images/image1.jpg";
import Image2 from "../../../Assets/Images/image3.jpg";
import Image3 from "../../../Assets/Images/seminar2.webp";
import Image5 from "../../../Assets/Images/seminar3.webp";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Image(){
    const slider = React.useRef(null);
          
          const settings = {
            dots: false,
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
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-start gap-[0.938rem] text-center
         text-black font-poppins pb-6">
          <div className=" flex flex-col items-center justify-start gap-[0.625rem]">
            <b className="self-stretch relative leading-[120%]" style={{fontSize: `${0.045918*innerWidth+14.825714}px`}}>Image Gallery</b>
            <div className="self-stretch relative leading-[150%]" style={{fontSize: `${0.007653*innerWidth+8.135549}px`}}>Capturing Moments of Community Events and Interactions</div>
          </div>
          <div className="w-full grid grid-cols-8  ">
            <button className=" col-span-1 place-self-center "
              onClick={() => slider?.current?.slickPrev()}>
              <img src={LeftArrowBtn} style={{width:`${0.020408*innerWidth+16.347296}px`}}/>
            </button> 

            <div className=" col-span-6 items-center  justify-start  " >
            <Slider ref={slider} {...settings}>
              <div className="px-4  w-full flex justify-center items-center" >
                <img className="w-auto m-auto py-auto bg-blue-200" alt="" style={{height:`${0.255102*innerWidth+54.081366}px`}} src={Image1} />
              </div>
              <div className="px-4 w-full  flex justify-center items-center  " >
                <img className="w-auto bg-blue-200 " alt="" style={{height:`${0.255102*innerWidth+54.081366}px`}} src={Image2} />
              </div>
              <div className="px-4 w-full flex justify-center items-center">
                <img className="w-auto object-cover" alt="" style={{height:`${0.255102*innerWidth+54.081366}px`}} src={Image3} />
              </div>
              <div className="px-4 w-full flex justify-center items-center">
                <img className="w-auto object-cover" alt="" style={{height:`${0.255102*innerWidth+54.081366}px`}} src={Image5} />
              </div> 
              
            </Slider>

            </div>

            <button className=" col-span-1 place-self-center " 
              onClick={() => slider?.current?.slickNext()}>
              <img src={RightArrowBtn} style={{width:`${0.020408*innerWidth+16.347296}px`}}/>
            </button> 
          </div>
        </div>
    )
}

{/* */}