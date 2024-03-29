import React from "react";

export default function Form(){
    return (
        <div className='px-[15px] py-[20px]'>
            <div className="relative w-auto flex flex-col items-center justify-start gap-[2.25rem] text-left 
            text-[3.05rem] text-black font-khand">
                <div className="flex flex-col items-center justify-start gap-[1.5rem]">
                    <b className="w-auto relative leading-[120%] inline-block h-auto shrink-0">
                        <p className="m-0">
                            <span className="text-[1.95rem]">Unlock Your</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span className="text-[2.694rem]">Potential</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span className="text-[1.95rem]">with</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span>Personalized</span>
                            <span className="text-[2.5rem]">{` `}</span>
                        </p>
                        <p className="m-0 text-[3.094rem]">
                            <span className="text-[2.463rem]">Career</span>
                            <span className="text-[2.5rem]">{` `}</span>
                            <span>Guidance</span>
                        </p>
                    </b>
                    <div className="w-auto relative text-[1rem] leading-[150%] font-roboto text-justify inline-block">
                        We are trying to bridge the gap of information and guidance between and your potential and opportunities.
                         We provide narrowed road maps and detailed career paths, personalized guidance from alumni and mentors, 
                         and a supportive community to help you succeed.
                    </div>
                </div>
                <div className="w-full h-[3.563rem] flex flex-col items-start justify-start gap-[0.694rem] text-[0.694rem] 
                text-neutral-dark-gray font-roboto">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.694rem]">
                        <div className="flex-1 bg-gray flex flex-row items-center justify-start p-[0.521rem] border-[0.7px] border-solid 
                        border-black">
                            <div className="flex-1 relative leading-[150%]">Enter your email</div>
                        </div>
                        <div className="rounded-[20.14px] bg-darkslategray flex flex-row items-center justify-center py-[0.521rem] 
                        px-[1.042rem] text-white border-[0.7px] border-solid border-darkslategray">
                            <div className="relative leading-[150%]">Sign up</div>
                        </div>
                    </div>
                    <div className="self-stretch relative text-[0.521rem] leading-[150%] text-black">{`By clicking Sign Up you're confirming
                     that you agree with our `}
                        <span className="[text-decoration:underline]">Terms and Conditions</span>.
                    </div>
                </div>
            </div>
        </div>
    )
}