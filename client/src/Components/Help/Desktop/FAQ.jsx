import React, { useState } from 'react';
import FAQImg from '../../../Assets/Images/FAQ.svg'
import Arrow from '../../../Assets/Images/ArrowDown.svg'
import './faq.css';
export default function FAQ(){
    const data = [
        { question: "1. What is Infocube ?" },
        { question: "2. How do I download and install Infocube be ?" },
        { question: "3. Will Infocube be  available for both iOS and Android devices?" },
        { question: "4. Do I need to create an account to use Infocube ?" },
        { question: "5. How do I reset my password if I forget it?" },
        { question: "6. How can I contact customer support for assistance?" },
      ];

    return (
        <div className='m-4 w-full relative bg-white text-left text-[2.196rem] text-black font-roboto'>
                <img className=" w-[37rem] h-[23.875rem] object-cover" alt="" src={FAQImg} />
                <div className="mx-16 top-[32.563rem] left-[4rem] flex flex-col items-start justify-start gap-[0.54rem] text-[1.5rem]">
        			<div className="flex flex-row justify-end relative gap-[0.54rem]">
          				<div className="w-[82.03rem] relative inline-block h-[2.054rem] shrink-0 z-[0]">1. What is Infocube ?</div>
                        <button >
            			    <img className=" justify-end  top-[0rem] right-[0] z-[1]" alt="" src={Arrow} />
                        </button>
                       
            		</div>
                    <div className="flex flex-row items-center justify-start relative gap-[0.54rem]">
          				<div className="w-[82.03rem] relative inline-block h-[2.054rem] shrink-0 z-[0]">2. How do I download and install
                         Infocube be ?</div>
            			<img className="  top-[0rem] right-[0] z-[1]" alt="" src={Arrow} />
            		</div>
                    <div className="flex flex-row items-center justify-start relative gap-[0.54rem]">
          				<div className="w-[82.03rem] relative inline-block h-[2.054rem] shrink-0 z-[0]">3. Will Infocube be  available for
                         both iOS and Android devices?</div>
            			<img className="  top-[0rem] right-[0] z-[1]" alt="" src={Arrow} />
            		</div>
                    <div className="flex flex-row items-center justify-start relative gap-[0.54rem]">
          				<div className="w-[82.03rem] relative inline-block h-[2.054rem] shrink-0 z-[0]">4. Do I need to create an account
                         to use Infocube ?</div>
            			<img className="  top-[0rem] right-[0] z-[1]" alt="" src={Arrow} />
            		</div>
                    <div className="flex flex-row items-center justify-start relative gap-[0.54rem]">
          				<div className="w-[82.03rem] relative inline-block h-[2.054rem] shrink-0 z-[0]">5. How do I reset my password if I
                         forget it?</div>
            			<img className="  top-[0rem] right-[0] z-[1]" alt="" src={Arrow} />
            		</div>
                    <div className="flex flex-row items-center justify-start relative gap-[0.54rem]">
          				<div className="w-[82.03rem] relative inline-block h-[2.054rem] shrink-0 z-[0]">6. How can I contact customer support
                         for assistance?</div>
            			<img className="  top-[0rem] right-[0] z-[1]" alt="" src={Arrow} />
            		</div>
                    </div>

        </div>
    )
}