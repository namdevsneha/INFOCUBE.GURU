import React from 'react';
import bg from '../../../Assets/Images/bg.svg';
import {Link} from "react-router-dom";
import SignUp from "../../../Pages/SignUp";

export default function Journey(){
    return (
        <div className="relative h-[37.5rem] w-full bg-cover"  style={{backgroundImage: `url(${bg})`}} >    

        <div className="md:px-[5rem] lg:px-[10rem] py-8  w-full h-full flex flex-col items-center justify-center text-[3rem] text-center text-black font-roboto bg-local">

        <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
    
        <h1 className="self-stretch relative font-bold leading-[120%]">Start Your Journey</h1>

        <div className="w-full relative text-[1.125rem] leading-[150%] font-roboto text-black text-center inline-block">Ready to start a journey of knowing yourself and build a right career for yourself.</div>
        </div>

        <div className="my-[20px] flex flex-row items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[1rem] text-left text-[1rem]">
        <Link to="/SignUp">
        <div className="rounded-23xl bg-graybutton flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-darkslategray">
        
        <div className="relative leading-[150%] text-white">Sign Up</div>
        </div></Link>
        <Link to="/Login">
        <div className="rounded-23xl flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[2px] bg-none border-solid border-darkslategray2 text-black text-bold">
        <div className="relative leading-[150%]">Login</div>
        
        </div>
        </Link>
        </div>
        </div>
        </div>
    )
} 