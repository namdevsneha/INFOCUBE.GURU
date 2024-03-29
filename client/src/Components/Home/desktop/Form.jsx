import React from "react";

export default function Form(){
    return (
        <div className=" relative overflow-hidden flex flex-row justify-between lg:py-[3.75rem] md:py-[2rem] px-[4rem]
        box-border gap-[5rem] text-justify lg:text-[1.125rem] md:text-[1rem] text-black font-roboto">
            <div className="flex-1 flex flex-col justify-between gap-[1.5rem]">
                
                <div>We are trying to bridge the gap of information and 
                guidance between and your potential and opportunities. We provide narrowed road maps and detailed career paths, 
                personalized guidance from alumni and mentors, and a supportive community to help you succeed.</div>

                
            </div>

            <div className="flex-1 flex flex-col items-start justify-between text-left lg:text-[3.5rem] md:text-[2.5rem]">
            <div className="w-full flex flex-col items-start justify-starta
                box-border gap-[1rem] text-left text-[1rem] text-neutral-dark-gray">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                        <div className="flex-1 bg-gray flex flex-row items-center justify-start p-[0.75rem] border-[1px] border-solid border-black">
                            <div className="flex-1 relative leading-[150%]">Enter your email</div>
                        </div>
                        <div className="rounded-[29px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] 
                        text-white border-[1px] border-solid border-darkslategray">
                            <div className="relative leading-[150%]">Sign up</div>
                        </div>
                    </div>
                    <div className="self-stretch relative text-[0.75rem] leading-[150%] text-black">{`By clicking Sign Up you're confirming that you 
                    agree with our `}
                        <span className="[text-decoration:underline]">Terms and Conditions</span>.
                    </div>
                </div>
            </div>
        </div>
    )
}