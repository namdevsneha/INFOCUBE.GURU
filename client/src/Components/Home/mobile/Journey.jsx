import React from "react";
import bg from '../../../Assets/Images/bg.svg';
import {Link} from "react-router-dom";
import SignUp from "../../../Pages/SignUp";

export default function Journey(){
    return (
        <div>
            <div className="relative h-full w-full bg-cover"  style={{backgroundImage: `url(${bg})`}} >    

        <div className="px-4 py-4 w-full h-full flex flex-col  items-center justify-center text-[1.5rem] text-center text-black font-roboto bg-local">

        <div className="self-stretch flex flex-col items-center justify-start gap-[.3rem]">
    
        <h1 className="self-stretch relative font-bold leading-[120%]">Start Your Journey</h1>

        {/* <div className="self-stretch relative text-[1rem] leading-[150%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div> */}
        </div>

        <div className="mt-[10px] flex flex-row items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[.5rem] text-left text-[1rem]">
        <Link to="/SignUp">
        <div className="mr-[5px] rounded-[17.95px] bg-darkslategray flex flex-row items-center justify-center py-[0.6rem] px-[1.2rem] border-[1px] border-solid border-darkslategray">
        
        <div className=" relative leading-[150%] text-[1rem] text-white">Sign Up</div>
        </div>
        </Link>
        <Link to="/SignUp">
        <div className=" rounded-[17.95px] flex flex-row items-center justify-center  py-[0.6rem] px-[1.2rem] border-[1px] border-solid border-black text-black">
        <div className="relative leading-[150%]">Login</div>
        </div>
        </Link>
        </div>
        </div>
        </div>
        </div>
    )
}