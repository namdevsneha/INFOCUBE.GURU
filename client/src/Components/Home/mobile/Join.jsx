import React from 'react'
import RightArrow from '../../../Assets/Images/RightArrow.webp'
import Image from "../../../Assets/Images/JoinImage.webp"
import {Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className='' id='About'> 
      <div className="relative w-full h-full flex flex-col items-start justify-start gap-[2.5rem] text-center
        text-[0.875rem] text-black font-roboto">
        <div className="w-auto flex flex-col items-center justify-start gap-[1rem]">
          <div className="relative leading-[150%] font-semibold" >Career Counselling And Coaching
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] text-[2rem]">
            <b className="self-stretch relative leading-[120%]">Unlock Your Potential with Personalized Guidance</b>
            <div className="self-stretch relative text-[1rem] leading-[150%]">At our platform, we provide you with narrowed 
            road maps and detailed career paths to help you navigate your chosen field. Our community of alumni and mentors 
            are always available to offer personalized guidance and support. Stay updated with the latest news and reminders 
            in your field of interest.
            </div>
          </div>
        </div>
        {/* <div className="w-auto flex flex-col items-center justify-start gap-[0.938rem] text-[2rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.938rem]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.938rem]">
                <b className="self-stretch relative leading-[130%]">Narrowed Road Maps for Success</b>
                <div className="self-stretch relative text-[1rem] leading-[150%]">Our platform offers narrowed road maps and 
                detailed career paths to guide you towards success in your chosen field.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.938rem]">
                <b className="self-stretch relative leading-[130%]">Personalized Guidance from Experts</b>
                <div className="self-stretch relative text-[1rem] leading-[150%]">Get personalized guidance and support from our
                  community of alumni and mentors who are experts in their respective fields.
                  </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.938rem]">
                <b className="self-stretch relative leading-[130%]">Stay Connected with a Supportive Community</b>
                <div className="self-stretch relative text-[1rem] leading-[150%]">Join our community of like-minded individuals 
                who are always available to help and support you in your journey.
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className=' m-auto'> 
            <img src={Image}/>
          </div>

          <div className="m-auto flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[1.5rem] text-left
          text-[1rem] text-white">
            
            <div className="w-[6.438rem] rounded-[38px] bg-darkslategray box-border h-[2.375rem] flex flex-row items-center 
            justify-center py-[0.5rem] px-[0.938rem] border-[1px] border-solid border-darkslategray">
              <Link to='Login'>
              <div className="relative leading-[150%]">Join
              </div></Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.5rem] text-[0.688rem] text-black">
              <button className="relative leading-[150%]">Learn More</button>
              <img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="hi" src={RightArrow}/>
            </div>
          </div>
      </div>
    </div>
  )
}
