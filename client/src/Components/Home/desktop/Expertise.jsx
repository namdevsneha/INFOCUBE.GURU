import React from 'react';
import ExpertiseImage from '../../../Assets/Images/Expertise.png'
import RightArrow from '../../../Assets/Images/RightArrow.webp'
import {Link } from 'react-router-dom';

export default function Expertise(){
  	return (
		<section className=" w-auto  lg:mb-[64px] md:pb-[48px] box-border" id='Alumni'>
			<div className=" grid grid-cols-2 items-center justify-start " style={{gap:`${0.1905*innerWidth-165.76}px`}}>
				<div className=" mt-auto col-span-1 items-start justify-start ">
					
					 <span className='font-semibold font-poppins' style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }} >Alumni Center</span>
					 <h2 className='font-bold mb-[12px] font-poppins leading-[120%]' style={{ fontSize: `${0.01905*innerWidth+11.424}px` }} >Personalized Guidance<br/>from Experienced Alumni and Mentors</h2>
					 <p className="leading-[150%]  font-poppins" style={{ fontSize: `${0.00335*innerWidth+11.568}px`,marginBottom:`${0.0223*innerWidth-2.816}px`  }} >Our platform connects you with knowledgeable alumni and mentors who provide personalized guidance in various fields. Benefit from their expertise and experience to navigate your 
						career path with confidence.</p>
					<div className='grid grid-cols-2 gap-[16px]' style={{marginBottom:`${0.0223*innerWidth-2.816}px` }}>
						<div className='col-span-1'>
							<h2 className='font-roboto leading-[120%]' style={{ fontSize: `${0.01905*innerWidth+9.424}px` }}>Expertise</h2>
							<p className='font-poppins leading-[150%]' style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }}>Tap into the expertise of our alumni and mentors to gain valuable insights and advice.</p>
						</div>
						<div className='col-span-1'>
							<h2 className='font-roboto leading-[120%]' style={{ fontSize: `${0.01905*innerWidth+9.424}px` }}>Support</h2>
							<p className='font-poppins leading-[150%]' style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }}>Our community is always available to provide support and assistance whenever you need it.</p>
						</div>
					</div>
					
					<div className="flex flex-row items-center justify-start gap-[1.5rem] ">
						<Link to='Login'>
						<button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.00476*innerWidth+6.8608}px`, padding:`${0.00476*innerWidth+2.8608}px ${0.00476*innerWidth+14.8608}px `}}>
							Explore
						</button>
						</Link>
						<div className=" flex flex-row items-center justify-center gap-[0.2rem] text-black">
							<button className=" leading-[150%] font-roboto" style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }} >Learn More</button>
							<img className="w-auto h-[.8rem] lg:h-[1.2rem] overflow-hidden " alt="" src={RightArrow} />
						</div>
					</div>
				</div>

				<div className='my-auto col-span-1'>
				<img className="drop-shadow-homeImage w-full h-auto" alt="" src={ExpertiseImage} />
				</div>
			</div>
		</section>
		);
};

