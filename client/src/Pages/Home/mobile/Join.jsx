import React from 'react'
import RightArrow from '../../../Assets/Images/RightArrow.webp'
import Join1 from '../../../Assets/Images/Join1.png'
import Join2 from '../../../Assets/Images/Join2.png'
import Join3 from '../../../Assets/Images/Join3.png'
import {Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className="w-auto mb-[48px]  overflow-hidden box-border text-center font-poppins"  id='About'>
      <span className='font-semibold font-roboto' style={{ fontSize: `${0.005102*innerWidth+12.082166}px`,  }} >Career Counselling And Coaching</span>
      < h2 className='font-bold font-poppins leading-[120%]' style={{ fontSize: `${0.045918*innerWidth+14.825714}px` ,margin:`${10}px 0px`  }} >Unlock Your Potential with Personalized Guidance</ h2>

      <div className='my-[16px]'>

          <img className='mx-auto' style={{scale:`${.7}`}} src={Join1}></img>
          <h2 className='font-medium leading-[110%]' style={{fontSize: `${0.02041*innerWidth+16.34853}px`, marginBottom:`${0.01429*innerWidth-3.4288}px`}}> Tailored Road Maps for Success</h2>
   
           <img className='mx-auto' style={{scale:`${.7}`}} src={Join2}></img>
           <h2 className='font-medium leading-[110%]' style={{fontSize: `${0.02041*innerWidth+16.34853}px`, marginBottom:`${0.01429*innerWidth-3.4288}px`}}> Personalized Guidance from Experts</h2>
      
           <img className='mx-auto' style={{scale:`${.7}`}} src={Join3}></img>
           <h2 className='font-medium leading-[110%]' style={{fontSize: `${0.02041*innerWidth+16.34853}px`, marginBottom:`${0.01429*innerWidth-3.4288}px`}}> Stay Connected with a Supportive Community</h2>
           </div>
           <div className="flex flex-row items-center justify-center gap-[1rem] ">
						<Link to='Login'>
						<button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.007653*innerWidth+8.135549}px`, padding:`${8}px ${24.5}px `}}>
							Join
						</button>
						</Link>
						<div className=" flex flex-row items-center justify-center gap-[0.2rem] text-black">
							<button className=" leading-[150%] font-roboto" style={{ fontSize: `${0.007653*innerWidth+8.135549}px` }} >Learn More</button>
							<img className="w-auto h-[.8rem] lg:h-[1.2rem] overflow-hidden " alt="" src={RightArrow} />
						</div>
					</div>
    </div>
  )
}
