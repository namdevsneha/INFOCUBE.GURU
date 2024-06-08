import React from "react";
import bg from '../../../Assets/Images/bg.webp';
import {Link} from "react-router-dom";
import SignUp from "../../../Pages/SignUp";

export default function Journey(){
    return (
        <div className="relative h-[10rem] w-full bg-center bg-cover bg-no-repeat"  style={{backgroundImage: `url(${bg})`}}>

        <div className="px-[1.75rem] py-[3rem] w-full h-full flex flex-col  items-center justify-center  text-center text-black font-roboto ">

        <div className="self-stretch flex flex-col items-center justify-start gap-[.3rem]">
    
        <b className="self-stretch relative text-[1.125rem] font-bold leading-[150%]">Start Your Journey</b>

        <p className=" text-[0.7rem] leading-[150%]  inline-block">Ready to start a journey of knowing yourself and build a right career for yourself.</p>
        </div>

        <div className="mt-[10px] flex flex-row items-start justify-start pt-[.5rem] px-[0rem] pb-[0rem] gap-[.5rem] text-center text-white text-[.428rem]">
        <Link to="/SignUp">
        <div className=" rounded-[2rem] bg-darkslategray flex flex-row items-center justify-center py-[0.5rem] px-[.937rem] 
        border-[.5px] border-solid border-darkslategray">
        <div className=" relative leading-[150%]  ">Sign Up</div>
        </div>
        </Link>
        <Link to="/Login">
        <div className=" rounded-[2rem] bg-darkslategray2 border-solid border-darkslategray2 flex flex-row items-center justify-center
          py-[0.5rem] px-[.937rem] border-[.5px] ">
        <div className="relative leading-[150%]">Login</div>
        </div>
        </Link>
        </div>
        </div>
        </div>
    )
}