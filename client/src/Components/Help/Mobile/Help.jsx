import React from 'react';
import Help from "../../../Assets/Images/Help.svg"

import Insta from '../../../Assets/Images/InstaColour.svg'
import LinkedIn from '../../../Assets/Images/LinkedInColour.svg'
import Gmail from '../../../Assets/Images/GmailColour.svg'


export default function Body(){
  	return (
    		<div className='my-[2rem]   mx-auto font-im-fell-double-pica inline-block w-full h-full relative bg-white text-left text-[1.5rem] text-black '>
				<div className='mx-[32px] w-full '>
						<img className='h-[15rem] w-auto' src={Help}/>
					</div>

				<div className='center font-im-fell-double-pica'>
						<div className=' text-center'>
						<p className="">
						<span className="text-[2rem]">HELP</span>
						</p>
						<p>
						<span className="text-[2rem]">&</span>
						</p>
						<p className=" ">
							<span className="text-[2rem]">SUPPORT</span>
						</p>
						
						</div>
						<div className='pt-[1rem] mx-[32px] '>
						<span className='text-[1.4rem] text-left '>CONTACT US</span>
							<div className='text-[1rem] font-times-new-roman w-auto grid grid-cols-10'>
								<div className='place-self-center  col-span-1'>
									<img className='w-[30px]' src={Gmail}/>
								</div>
								<div className='place-self-center w-full col-span-9'>
									Infocube.ed@gmail.com


								</div>
							</div>
							<div className='text-[1rem] font-times-new-roman w-auto grid grid-cols-10'>
								<div className='place-self-center  col-span-1'>
									<img className='w-[30px]' src={Insta}/>
								</div>
								<div className='place-self-center w-full col-span-9'>
									<a href='https://www.instagram.com/infocube.ed?igsh=b3k0NGN1MHIxY3cw'>
									Infocube.ed

									</a>

								</div>
							</div>
							<div className='text-[1rem] font-times-new-roman w-auto grid grid-cols-10'>
								<div className='place-self-center  col-span-1'>
									<img className='w-[30px]' src={LinkedIn}/>
								</div>
								
								<div className='place-self-center w-full col-span-9'>
									<a href='https://www.linkedin.com/company/infocube-ed/'>
									Infocube.ed
									</a>
								</div>
							</div>
						</div>
					</div>
			</div>);
};
                              															
                              															