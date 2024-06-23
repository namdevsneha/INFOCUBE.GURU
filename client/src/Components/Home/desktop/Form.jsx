import React from "react";
import {Link as KLink} from 'react-router-dom';



export default function Form(){
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        });
    };


    return (
        
        <div className="grid grid-cols-2 relative overflow-hidden justify-between md:py-[32px] lg:py-[50px] 
         box-border text-black  " style={{gap:`${0.0536*innerWidth-22.91}px`}}>
            <div className=" col-span-1 font-poppins">             
                <p className="leading-[150%] w-auto text-justify " style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>We aim to bridge the gap between  potential and opportunities. Our approach
                     involves offering tailored roadmaps and comprehensive career paths, along with personalized advice from our trusted alumni and
                      mentors. We foster a supportive community dedicated to empowering your journey towards success.</p>
            </div>

            <div className="col-span-1  items-start justify-between text-left font-roboto ">
                <div className="w-full flex flex-col items-start justify-start box-border  md:text-[14px] lg:text-[16px]  text-neutral-dark-gray" style={{gap:`${0.00693*innerWidth+2.71}px`}}>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[.5rem] " style={{gap:`${0.00693*innerWidth+2.71}px`}}>
                            <form  className="bg-white rounded-[32px] flex-1 bg-gray flex flex-row items-center justify-start md:py-[.6rem] lg:py-[0.75rem] px-[0.75rem] border-[1px] border-solid border-black ">
                                <input className="border-none focus:outline-none w-full" onChange={handleChange} id="email" type="text" placeholder="Enter your email"/>
                            </form>
                            <KLink to='Signup'>
						<button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.00476*innerWidth+6.8608}px`, padding:`${0.00476*innerWidth+2.8608}px ${0.00476*innerWidth+14.8608}px `}}>
							Sign up
						</button>
						</KLink>
                        </div>
                        <div className="self-stretch relative lg:text-[12px] md:text-[10px] leading-[150%] text-black">
                            <span>By clicking Sign Up you're confirming that you 
                        agree with our </span>
                        <KLink to="Terms"><span className="[text-decoration:underline]">Terms and Conditions.</span>
                        </KLink>
                            
                        </div>
                    </div>
            </div>
        </div>
        
    )
}