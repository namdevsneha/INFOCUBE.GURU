import React,{useRef} from 'react'
import RightArrow from '../../Assets/Images/RightArrow.svg'
import Divyansh from '../../Assets/Images/Divyansh.png'
import Utkarsh from '../../Assets/Images/Utkarsh.png'
import Shivam from '../../Assets/Images/Shivam.png'
import Parthiv from '../../Assets/Images/Parthiv.png'
import Vaishnavi from '../../Assets/Images/Vaishnavi.png'
import Sneha from '../../Assets/Images/Sneha.png'
import RigthArrowBtn from '../../Assets/Images/RightArrowBtn.svg';
import LeftArrowBtn from '../../Assets/Images/LeftArrowBtn.svg';


export default function Team() {

  const contentRef = useRef(null);

  const scrollLeft = () => {
    if (contentRef.current) {
      const containerWidth = contentRef.current.offsetWidth;
      contentRef.current.scrollBy({
        left: -containerWidth/4, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      const containerWidth = contentRef.current.offsetWidth;
      contentRef.current.scrollBy({
        left: containerWidth/4,
        behavior: 'smooth',
      });
    }
  };

  return (

    <div className="w-full relative [backdrop-filter:blur(147.3px)] h-[47.813rem] overflow-hidden flex flex-col items-center 
    justify-start pt-[3.125rem] px-[1.25rem] pb-[3.75rem] box-border gap-[2.562rem] text-left text-[3.125rem] text-black font-roboto-slab">
      <b className="relative">OUR TEAM</b>

      

      <div className="w-[81.188rem] overflow-x-auto scrollbar-hide flex flex-row items-center justify-start gap-[2rem] text-center text-[1.5rem] 
      font-roboto" ref={contentRef}>
        <div className="w-[18.25rem] h-[31.757rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.201rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Divyansh}/>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Divyansh Nigam</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
              varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
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
        <div className="w-[18.25rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.313rem] relative h-[20.632rem] object-cover max-w-[18.75rem]" alt="" src={Shivam} />
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Shivam Kumar</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[18.438rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.415rem] relative h-[20.625rem] object-cover max-w-[18.75rem]" alt="" src={Parthiv} />
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Parthiv Singh Tiwari</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[18.438rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.415rem] relative h-[20.625rem] object-cover max-w-[18.75rem]" alt="" src={Vaishnavi} />
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Vaishnavi Dubey</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About Him</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[18.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <img className="w-[18.47rem] relative h-[20.625rem] object-cover max-w-[18.75rem]" alt="" src={Sneha} />
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[140%]">Sneha Namdev</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-left text-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="relative leading-[150%]">About Her</div>
                <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left arrow */}
        <div className="absolute left-[2.5%] top-[40%] transform -translate-y-1/2 flex items-center justify-center">
          <button className="opacity-50 hover:opacity-100 transition-opacity duration-300 w-[2.5rem] h-[2.5rem]" onClick={scrollLeft}>
            <img src={LeftArrowBtn} className="w-full h-full"></img>
          </button>
        </div>
      {/* Right arrow */}
        <div className="absolute right-[2.5%] top-[40%] transform -translate-y-1/2 flex items-center justify-center">
          <button className="opacity-50 hover:opacity-100 transition-opacity duration-300 w-[2.5rem] h-[2.5rem]" onClick={scrollRight}>
            <img src={RigthArrowBtn} className="w-full h-full"></img>
          </button>
        </div>
    </div>)}