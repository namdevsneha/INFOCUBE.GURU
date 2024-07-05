import React from 'react';


export default function Services(){
    return (
        <div>
            <div className=" relative overflow-hidden py-[3rem] box-border font-poppins">

            <span className='text-darkorchid font-semibold text-[14px]' style={{ fontSize: `${0.0045*innerWidth+9.4286}px` }}>What you need </span>
            <h2 className="font-bold whitespace-nowrap md:my-[4px] lg:my-[8px] " style={{ fontSize: `${0.0246*innerWidth+16.768}px` }}> What We Offer</h2>
            
            <div className='flex flex-row gap-[.5rem] items-center' style={{ fontSize: `${0.0045*innerWidth+9.4286}px` }}>
            <span className='text-darkorchid font-semibold flex-0 whitespace-nowrap 'style={{ whiteSpace: 'nowrap' }}>We are here to help you</span>
            <div className=" w-full relative box-border  border-t-[2px] border-solid border-darkorchid" />
            </div>
            
        </div>
        </div>
    )
} 