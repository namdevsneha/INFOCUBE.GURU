import React from "react";
import {Link} from "react-router-dom";
import SignUp from "../../../Pages/SignUp";

export default function Form(){
    return (
        <div className=" relative overflow-hidden flex flex-row justify-between lg:py-[3.75rem] md:py-[2rem] px-[4rem]
        box-border gap-[5rem] text-justify lg:text-[1.125rem] md:text-[1rem] text-black font-roboto">
            <div className="flex-1 flex flex-col justify-between gap-[1.5rem]">
                
                <div>We aim to bridge the gap between  potential and opportunities. Our approach involves offering tailored roadmaps and comprehensive career paths, along with personalized advice from our trusted alumni and mentors. We foster a supportive community dedicated to empowering your journey towards success.</div>

                
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
                            <Link to="/SignUp">
                            <div className="relative leading-[150%]">Sign up</div>
                            </Link>
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