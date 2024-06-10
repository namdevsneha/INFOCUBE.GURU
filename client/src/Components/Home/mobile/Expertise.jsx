import React from 'react'
import ExpertiseImage from '../../../Assets/Images/Expertise.png'
import RightArrow from '../../../Assets/Images/RightArrow.webp'
import {Link } from 'react-router-dom';


export default function Expertise() {
  return (
    <div className='' id='Alumni'>
      <div className="w-full relative h-full text-center text-[1rem] text-black font-roboto">
        <img className="w-auto h-auto " alt="" src={ExpertiseImage} />
        <div className=" w-auto flex flex-col items-start justify-start gap-[0.96rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.64rem]">
            <div className="relative leading-[150%] font-semibold">Alumni Center</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.28rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.96rem] text-left text-[2rem]">
                <b className="self-stretch relative leading-[120%]">Personalized Guidance from Experienced Alumni and Mentors</b>
                <div className="self-stretch relative text-[1rem] leading-[150%]">Our platform connects you with knowledgeable alumni and mentors
                 who provide personalized guidance in various fields. Benefit from their expertise and experience to navigate your career path with
                  confidence.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.32rem] px-[0rem] gap-[0.96rem] text-left text-[1.5rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.32rem]">
                <div className="self-stretch relative leading-[120%]">Expertise</div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">Tap into the expertise of our alumni and mentors to gain 
                valuable insights and advice.
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.32rem]">
                <div className="self-stretch relative leading-[120%]">Support
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">Our community is always available to provide support and 
                assistance whenever you need it.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center pt-[0.64rem] px-[0rem] pb-[0rem] gap-[0.96rem] text-left text-[0.64rem] 
          text-white">
            <div className="w-[4.201rem] rounded-[27.53px] bg-darkslategray box-border flex flex-row items-center justify-center py-[0.5rem] 
            px-[0.938rem] border-[0.6px] border-solid border-black">
              <Link to='Login'>
              <div className="relative leading-[150%]">Join</div>
              </Link>
            </div>
            <div className="h-[1.441rem] flex flex-row items-center justify-center gap-[0.32rem] text-[0.688rem] text-black">
              <div className="relative leading-[150%]">Learn More</div>
              <img className="w-[0.961rem] relative h-[0.961rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
