import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import RightArrow from '../../Assets/Images/RightArrow.svg'
import Divyansh from '../../Assets/Images/Divyansh.png'
import Utkarsh from '../../Assets/Images/Utkarsh.png'
import Shivam from '../../Assets/Images/Shivam.png'
import Parthiv from '../../Assets/Images/Parthiv.png'
import Vaishnavi from '../../Assets/Images/Vaishnavi.png'
import Sneha from '../../Assets/Images/Sneha.png'





export default function Team() {
  

          const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true, // Enable autoplay
            autoplaySpeed: 100,
            pauseOnHover: true,
            pauseOnFocus: true,
            pauseOnDotsHover: true,
     
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

    <div className="w-full relative [backdrop-filter:blur(147.3px)] h-[47.813rem] overflow-hidden flex flex-col items-center 
    justify-start pt-[3.125rem] px-[1.25rem] pb-[3.75rem] box-border gap-[2.562rem] text-left text-[3.125rem] text-black font-roboto-slab">
      <b className="relative">OUR TEAM</b>

      
    <div className=" w-[81.188rem] items-center justify-start gap-[2rem] text-center text-[1.5rem] font-roboto">
      <Slider {...settings} >
      <div className='pb-8 '>
          <div className="w-[18.25rem]  overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Divyansh} />
          <div className="w-[18.313rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Divyansh Nigam</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About HIm</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='pb-8 '>
          <div className="w-[18.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Utkarsh} />
          <div className="w-[18.313rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Utkarsh Saxena</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About HIm</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='pb-8 '>
          <div className="w-[18.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Shivam} />
          <div className="w-[18.313rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Shivam Kumar</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About HIm</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='pb-8 '>
          <div className="w-[18.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Parthiv} />
          <div className="w-[18.313rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Parthiv Singh Tiwari</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About HIm</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='pb-8 '>
          <div className="w-[18.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Vaishnavi} />
          <div className="w-[18.313rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Vaishnavi Dubey</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About HIm</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='pb-8 '>
          <div className="w-[18.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Sneha} />
          <div className="w-[18.313rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Sneha Namdev</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About HIm</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </Slider></div>
      </div>)}