import React from 'react';
import ExpertiseImage from '../../../Assets/Images/expertise.svg'
import RightArrow from '../../../Assets/Images/RightArrow.svg'
import {Link } from 'react-router-dom';

export default function Expertise(){
  	return (
		<div className="w-full relative overflow-hidden flex flex-col items-start 
		justify-start lg:py-[3.75rem] md:py-[1rem] px-[4rem] box-border text-center text-[1rem] text-black font-roboto " id='Alumni'>
			<div className="self-stretch flex flex-row items-center justify-start gap-[4.938rem]">
				<div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
					<div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
						<div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
							<div className="relative leading-[150%] font-semibold">Alumni Center</div>
							<div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left lg:text-[3rem] md:text-[2rem]">
								<b className="self-stretch relative leading-[120%]">Personalized Guidance from Experienced Alumni and Mentors</b>
								<div className="self-stretch relative lg:text-[1.125rem] md:text-[1rem] leading-[150%]">
									Our platform connects you with knowledgeable alumni and mentors who provide personalized guidance in various fields.
									Benefit from their expertise and experience to navigate your career path with confidence.
								</div>
							</div>
						</div>
						<div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[1.5rem] text-left lg:text-[2.875rem] md:text-[1.8rem]">
							<div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
								<div className="self-stretch relative leading-[120%]">Expertise</div>
								<div className="self-stretch relative lg:text-[1rem] md:text-[.75rem] leading-[150%]">Tap into the expertise of our alumni and mentors to 
								gain valuable insights and advice.</div>
							</div>
							<div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
								<div className="self-stretch relative leading-[120%]">Support</div>
								<div className="self-stretch relative lg:text-[1rem] md:text-[.75rem]  leading-[150%]">Our community is always available to provide support
								 and assistance whenever you need it.</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center pt-[1rem] px-[0rem] pb-[0rem] gap-[1.5rem] text-left text-white">
						<div className="w-[6.563rem] rounded-[43px] bg-darkslategray box-border flex flex-row items-center justify-center 
						py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
							<Link to='Login'>
							<button >
							<div className="relative leading-[150%]">Join</div> </button>
							</Link>
						</div>
						<div className="h-[2.25rem] flex flex-row items-center justify-center gap-[0.5rem] text-black">
							<div className="relative leading-[150%]">Learn More</div>
							<img className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0" alt="" src={RightArrow} />
						</div>
					</div>
				</div>
				<img className="flex-1 w-[41.625rem] relative h-[41.625rem] overflow-hidden shrink-0" alt="" src={ExpertiseImage} />
			</div>
		</div>);
};

