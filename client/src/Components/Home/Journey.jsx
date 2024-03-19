import React from 'react';

export default function Journey(){
    return (
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-start py-[7rem] px-[4rem] box-border bg-[url('CTA_.png')] bg-cover bg-no-repeat bg-[top] text-center text-[3rem] text-white font-roboto">
        <div className="w-[48rem] flex flex-col items-center justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
        <b className="self-stretch relative leading-[120%]">Start Your Journey</b>
        <div className="self-stretch relative text-[1.125rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
        </div>
        <div className="flex flex-row items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[1rem] text-left text-[1rem]">
        <div className="rounded-23xl bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-darkslategray">
        <div className="relative leading-[150%]">Sign Up</div>
        </div>
        <div className="rounded-23xl flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-white">
        <div className="relative leading-[150%]">{`Log in `}</div>
        </div>
        </div>
        </div>
        </div>
    )
}