import React from "react";

export default function Form(){
    return (

        <div className="w-full relative overflow-hidden flex flex-row items-start justify-start py-[3.75rem] px-[4rem] box-border gap-[5rem] text-justify text-[1.125rem] text-black font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="self-stretch relative leading-[150%]">We are trying to bridge the gap of information and guidance between and your potential and opportunities. We provide narrowed road maps and detailed career paths, personalized guidance from alumni and mentors, and a supportive community to help you succeed.</div>
        <div className="w-[32.063rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border gap-[1rem] text-left text-[1rem] text-neutral-dark-gray">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
        <div className="flex-1 bg-gray flex flex-row items-center justify-start p-[0.75rem] border-[1px] border-solid border-black">
        <div className="flex-1 relative leading-[150%]">Enter your email</div>
        </div>
        <div className="rounded-[29px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] text-white border-[1px] border-solid border-darkslategray">
        <div className="relative leading-[150%]">Sign up</div>
        </div>
        </div>
        <div className="self-stretch relative text-[0.75rem] leading-[150%] text-black">{`By clicking Sign Up you're confirming that you agree with our `}
        <span className="[text-decoration:underline]">Terms and Conditions</span>.
        </div>
        </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-left text-[3.5rem]">
        <b className="self-stretch relative leading-[120%]">Unlock Your Potential with Personalized Career Guidance</b>
        </div>
        </div>

    )
}