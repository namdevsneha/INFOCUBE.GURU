import React from 'react';
import Help from "../../../Assets/Images/Help.svg"

import Insta from '../../../Assets/Images/InstaColour.svg'
import LinkedIn from '../../../Assets/Images/LinkedInColour.svg'
import Gmail from '../../../Assets/Images/GmailColour.svg'


export default function Body(){
  	return (
    		<div className='my-4 mx-[64px] w-full h-full relative bg-white text-left text-[1.5rem] text-black font-roboto'>
				<div className=' grid grid-cols-2'>
					<div className='col-span-1  font-im-fell-double-pica'>
						<div className=' text-center'>
						<p className="">
						<span className="text-[3.563rem]">HELP</span>
						</p>
						<p>
						<span className="text-[3.563rem]">&</span>
						</p>
						<p className=" ">
							<span className="text-[3.563rem]">SUPPORT</span>
						</p>
						
						</div>
						<div className='pt-[1rem]'>
						<span className='text-[2.104rem] text-left '>CONTACT US</span>
							<div className='text-[2.196rem] font-times-new-roman w-auto grid grid-cols-10'>
								<div className='place-self-center  col-span-1'>
									<img className='' src={Gmail}/>
								</div>
								<div className='place-self-center w-full col-span-9'>
									Infocube.ed@gmail.com

								</div>
							</div>
							<div className='text-[2.196rem] font-times-new-roman w-auto grid grid-cols-10'>
								<div className='place-self-center  col-span-1'>
									<img className='' src={Insta}/>
								</div>
								<div className='place-self-center w-full col-span-9'>
									Infocube.ed@gmail.com

								</div>
							</div>
							<div className='text-[2.196rem] font-times-new-roman w-auto grid grid-cols-10'>
								<div className='place-self-center  col-span-1'>
									<img className='' src={LinkedIn}/>
								</div>
								<div className='place-self-center w-full col-span-9'>
									Infocube.ed@gmail.com

								</div>
							</div>
						</div>
					</div>
					<div className='mx-[64px] h-[28.269rem] col-span-1 place-self-center'>
						<img className='h-[32.269rem] w-[32.269rem]' src={Help}/>
					</div>
				</div>
			</div>);
};
                              															
                              															