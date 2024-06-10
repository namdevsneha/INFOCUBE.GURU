import React from 'react'
import RightArrow from '../../../Assets/Images/RightArrow.webp'
import Join1 from '../../../Assets/Images/Join1.png'
import Join2 from '../../../Assets/Images/Join2.png'
import Join3 from '../../../Assets/Images/Join3.png'

import {Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className="w-auto mt-[100px] overflow-hidden box-border text-center"  id='About'>
      <span className='font-semibold font-roboto' style={{ fontSize: `${0.00335*innerWidth+11.568}px`,  }} >Career Counselling And Coaching</span>
      < h2 className='font-bold mb-[12px] font-poppins leading-[120%]' style={{ fontSize: `${0.01905*innerWidth+11.424}px`,margin:`${10}px 0px`  }} >Unlock Your Potential with <br/> Personalized Guidance</ h2>
      <p className="leading-[150%]  font-poppins" style={{ fontSize: `${0.00335*innerWidth+11.56}px`,marginBottom:`${0.0223*innerWidth-2.816}px` }}>At our platform, we provide you with tailored road maps and detailed career paths to help you<br/> navigate your chosen field. 
        Our community of alumni and mentors are always available to offer<br/> personalized guidance and support. Stay updated with the 
        latest news and reminders in your<br/> field of interest.</p>

      <div className="grid grid-cols-3 font-poppins  justify-start "style={{marginBottom:`${0.0223*innerWidth-2.816}px`, gap:`${0.02857*innerWidth-6.8574}px`  }}  >
        <div className='col-span-1'>
          <img className='mx-auto' style={{scale:`${0.0004464*innerWidth+0.1429}`}} src={Join1}></img>
          <h2 className='font-bold leading-[130%]' style={{fontSize: `${0.00893*innerWidth+14.8}px`, marginBottom:`${0.01429*innerWidth-3.4288}px`}}> Tailored Road Maps for Success</h2>
          <p className=' leading-[150%]' style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }}> Our platform offers narrowed road maps and detailed career paths to guide you towards success in your chosen field.</p>
           </div>
           <div className='col-span-1'>
           <img className='mx-auto' style={{scale:`${0.0004464*innerWidth+0.1429}`}} src={Join2}></img>
          <h2 className='font-bold leading-[130%]' style={{fontSize: `${0.00893*innerWidth+14.8}px`, marginBottom:`${0.01429*innerWidth-3.4288}px`}}> Personalized Guidance from Experts</h2>
          <p className=' leading-[150%]' style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }}> Get personalized guidance and support from our community of alumni and mentors who are experts in their respective fields.</p>
           </div>
           <div className='col-span-1'>
           <img className='mx-auto' style={{scale:`${0.0004464*innerWidth+0.1429}`}} src={Join3}></img>
          <h2 className='font-bold leading-[130%]' style={{fontSize: `${0.00893*innerWidth+14.8}px`, marginBottom:`${0.01429*innerWidth-3.4288}px`}}> Stay Connected with a Supportive Community</h2>
          <p className=' leading-[150%]' style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }}>Join our community of like-minded individuals who are always available to help and support you on your journey.</p>
           </div>
      </div>
      
      <div className=" flex flex-row items-center justify-center gap-[1.5rem] ">
						<Link to='Login'>
						<button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.00476*innerWidth+6.8608}px`, padding:`${0.00476*innerWidth+2.8608}px ${0.00476*innerWidth+14.8608}px `}}>
							Join
						</button>
						</Link>
						<div className=" flex flex-row items-center justify-center gap-[0.2rem] text-black">
							<button className=" leading-[150%] font-roboto" style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }} >Learn More</button>
							<img className="w-auto h-[.8rem] lg:h-[1.2rem] overflow-hidden " alt="" src={RightArrow} />
						</div>
					</div>
    </div>
  )
}
