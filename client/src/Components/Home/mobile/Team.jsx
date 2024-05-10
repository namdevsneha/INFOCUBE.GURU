  import React from 'react'
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';


  import Divyansh from '../../../Assets/Images/Divyansh.png'
  import Utkarsh from '../../../Assets/Images/Utkarsh.png'
  import Shivam from '../../../Assets/Images/Shivam.png'
  import Parthiv from '../../../Assets/Images/Parthiv.png'
  import Vaishnavi from '../../../Assets/Images/Vaishnavi.png'
  import Sneha from '../../../Assets/Images/Sneha.png'

  import RightArrow from '../../../Assets/Images/RightArrow.svg'


  export default function Team() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      centerMode: true, 
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 100,
      pauseOnFocus: true,
      pauseOnDotsHover: true,

      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1.25,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      
      ]
    };
    return (
      <div className=' py-[20px]'>
        <div className="w-full relative  h-[29rem] overflow-hidden flex flex-col items-center justify-start py-[0rem] 
        box-border gap-[0.938rem] text-left text-[2rem] text-black font-roboto-slab">
          <b className="relative">OUR TEAM</b>
          <div className=" w-full items-center justify-start gap-[1.292rem] text-center text-[1rem] font-roboto">
            <Slider {...settings} >
              <div className='pb-4'>
                <div className="w-[11.813rem] h-[22.875rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img className="w-[11.762rem] relative h-[13.333rem] object-cover max-w-[12.117rem]" alt="" src={Divyansh} />
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.938rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.969rem]">
                <b className="self-stretch relative leading-[140%]">Divyansh Nigam</b>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  <p>CEO</p>
                  <p>UI/UX designer</p>
                  <p>@INFOCUBE</p>
                </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[0.688rem]">
                <div className="flex flex-row items-center justify-center gap-[0.323rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[0.969rem] relative h-[0.969rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
                </div>
                </div>
                </div>
                </div>
              </div>
              <div className='pb-4'>
                <div className="w-[11.813rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img className="w-[11.762rem] relative h-[13.333rem] object-cover max-w-[12.117rem]" alt="" src={Utkarsh} />
                <div className="w-[11.834rem] flex flex-col items-center justify-start gap-[0.938rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.969rem]">
                <b className="self-stretch relative leading-[140%]">Utkarsh Saxena</b>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                <p>Web and App</p>
                  <p>Developer</p>
                  <p>@INFOCUBE</p>
                </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[0.688rem]">
                <div className="flex flex-row items-center justify-center gap-[0.323rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[0.969rem] relative h-[0.969rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
                </div>
                </div>
                </div>
                </div>
              </div>
              <div className='pb-4'>
                <div className="w-[11.813rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img className="w-[11.762rem] relative h-[13.333rem] object-cover max-w-[12.117rem]" alt="" src={Shivam} />
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.938rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.969rem]">
                <b className="self-stretch relative leading-[140%]">Shivam Kumar</b>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                <p>Data/Research</p>
                  <p>Analyst</p>
                  <p>@INFOCUBE</p>
                </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[0.688rem]">
                <div className="flex flex-row items-center justify-center gap-[0.323rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[0.969rem] relative h-[0.969rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
                </div>
                </div>
                </div>
                </div>
              </div>
              <div className='pb-4'>
                <div className="w-[11.915rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img className="w-[11.901rem] relative h-[13.329rem] object-cover max-w-[12.117rem]" alt="" src={Parthiv} />
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.938rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.969rem]">
                <b className="self-stretch relative leading-[140%]">Parthiv Singh Tiwari</b>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                <p>Data/Research</p>
                  <p>Analyst</p>
                  <p>@INFOCUBE</p>
                </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[0.688rem]">
                <div className="flex flex-row items-center justify-center gap-[0.323rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[0.969rem] relative h-[0.969rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
                </div>
                </div>
                </div>
                </div>
              </div>
              <div className='pb-4'>
                <div className="w-[11.915rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img className="w-[11.901rem] relative h-[13.329rem] object-cover max-w-[12.117rem]" alt="" src={Vaishnavi} />
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.938rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.969rem]">
                <b className="self-stretch relative leading-[140%]">Vaishnavi Dubey</b>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                <p>Graphic Designer,</p>
                  <p>Content Creator</p>
                  <p>@INFOCUBE</p>
                </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[0.688rem]">
                <div className="flex flex-row items-center justify-center gap-[0.323rem]">
                <div className="relative leading-[150%]">About Her</div>
                <img className="w-[0.969rem] relative h-[0.969rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
                </div>
                </div>
                </div>
                </div>
              </div>
              <div className='pb-4'>
                <div className="w-[11.956rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img className="w-[11.936rem] relative h-[13.329rem] object-cover max-w-[12.117rem]" alt="" src={Sneha} />
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.938rem]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.969rem]">
                <b className="self-stretch relative leading-[140%]">Sneha Namdev</b>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                <p>Web Developer,</p>
                  <p>Content Creator</p>
                  <p>@INFOCUBE</p>
                </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[0.646rem]">
                <div className="flex flex-row items-center justify-center gap-[0.323rem]">
                <div className="relative leading-[150%]">About Her</div>
                <img className="w-[0.969rem] relative h-[0.969rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
                </div>
                </div>
                </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    )
  }
