import React from 'react';
import CounsellingImage from '../../../Assets/Images/CounsellingImage.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

export default function Counselling(){
    return (

        <div className="lg:pb-[60px] md:pb-[32px] justify-between w-full box-border justify-between 
            grid grid-cols-2 overflow-hidden  items-center  " style={{gap:`${0.1384*innerWidth-25.4}px`}}>
            <div className='grid col-span-1 font-poppins mt-auto'>
                <h className=" font-bold whitespace-nowrap " style={{ fontSize: `${0.0246*innerWidth+16.768}px` }}>College Applications</h>
                <h2 className=" font-extralight " style={{ fontSize: `${0.00893*innerWidth+14.86}px`,marginBottom:`${0.0714*innerWidth-25.088}px` }}> Get Your Dream College</h2>
            <span className='leading-[150%]' style={{ fontSize: `${0.00893*innerWidth+6.864}px` }}>Connect with us for all college Counselling</span>
            <span className='leading-[150%] font-medium' style={{ fontSize: `${0.00893*innerWidth+6.864}px`,marginBottom:`${0.0223*innerWidth-2.816}px` }}>MPDTE | JOSAA | CSAB | ALL STATE LEVEL COUNSELLING</span>
						<a href='https://forms.gle/GLiuC6NgMNAGh8my9'><button  className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.00476*innerWidth+6.8608}px`, padding:`${0.00476*innerWidth+2.8608}px ${0.00476*innerWidth+14.8608}px `}}>
							Raise a Request &gt;
						</button>
                        </a>
            </div>

            <div className='col-span-1'>
            <img className="flex-1 w-full h-full overflow-hidden " alt="" src={CounsellingImage} />
            </div>
        </div>
    )
} 