import React from 'react'
import ExpertiseImage from '../../../Assets/Images/Expertise.png'
import RightArrow from '../../../Assets/Images/RightArrow.webp'
import {Link } from 'react-router-dom';


export default function Expertise() {
  return (
    <div className=" w-auto  mb-[48px] box-border" id='Alumni'>
        <span className='font-semibold font-poppins ' style={{ fontSize:`${0.005102*innerWidth+14.094766}px` }} >Alumni Center</span>
        <img className="drop-shadow-homeImagePhone mt-[10px] mb-[45px] w-full h-auto" alt="" src={ExpertiseImage} />
        <h2 className='font-bold mb-[12px] font-poppins leading-[120%]' style={{  fontSize: `${0.045918*innerWidth+14.825714}px` }} >Personalized Guidance from Experienced Alumni and Mentors</h2>

        <div className='grid grid-cols-2 gap-[16px] py-[16px]' style={{marginBottom:`${0.0223*innerWidth-2.816}px` }}>
          <div className='col-span-1'>
            <h2 className='font-poppins font-medium leading-[120%]' style={{ fontSize: `${0.02041*innerWidth+16.34853}px` }}>Expertise</h2>
            <p className='font-poppins leading-[150%]' style={{ fontSize: `${0.005102*innerWidth+12.082166}px` }}>Tap into the expertise of our alumni and mentors to gain valuable insights and advice.</p>
          </div>
          <div className='col-span-1'>
            <h2 className='font-poppins font-medium leading-[120%]' style={{ fontSize: `${0.02041*innerWidth+16.34853}px` }}>Support</h2>
            <p className='font-poppins leading-[150%]' style={{ fontSize: `${0.005102*innerWidth+12.082166}px` }}>Our community is always available to provide support and assistance whenever you need it.</p>
          </div>
        </div>
					
					<div className="flex flex-row items-center justify-start gap-[1rem] ">
						<Link to='Login'>
						<button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.007653*innerWidth+8.135549}px`, padding:`${8}px ${16.5}px `}}>
							Explore
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
