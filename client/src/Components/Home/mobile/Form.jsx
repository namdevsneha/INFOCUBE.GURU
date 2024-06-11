import React from "react";
import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';
import SignUp from "../../../Pages/SignUp";


export default function Form(){
    

    return (
        <div className=' box-border overflow-hidden mb-[48px] pt-[20px] pb-[10px]' id="form" >
            <p className="font-bold  font-khand " >
                <span style={{fontSize:`${0.03316*innerWidth+18.82228}px`}}>Unlock Your</span>
                <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                <span className="leading-[100%]" style={{fontSize:`${0.04827*innerWidth+24.98891}px`}}>Potential</span>
                <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                <span style={{fontSize:`${0.03316*innerWidth+18.82228}px`}}>with</span>
                <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                <span className="leading-[100%]" style={{fontSize:`${0.045*innerWidth+31.985}px`}}>Personalized</span>
                <p className="leading-[100%]" style={{fontSize:`${0.0485*innerWidth+31.3005}px`}}>
                    <span style={{fontSize:`${0.03827*innerWidth+25.03191}px`}}>Career</span>
                    <span style={{fontSize:`${0.04082*innerWidth+24.67606}px`}}>{` `}</span>
                    <span style={{fontSize:`${0.0485*innerWidth+31.3005}px`}}>Guidance</span>
                </p>
            </p>

            <div className="w-auto pt-[24px] pb-[32px] leading-[120%] font-poppins text-justify " style={{fontSize:`${0.005102*innerWidth+14.094766}px`}} >
                We aim to bridge the gap between  potential and opportunities. Our approach involves offering tailored roadmaps and comprehensive career paths, along with personalized advice from our trusted alumni and mentors. We foster a supportive community dedicated to empowering your journey towards success.
                </div>
            <div className="w-full h-auto  flex flex-col items-start justify-start box-border" style={{gap: `${0.007653*innerWidth+8.135549}px`}}>
                <div className="self-stretch flex flex-row items-start justify-start " style={{gap: `${0.007653*innerWidth+8.135549}px`}}>
                    <form  className="bg-white rounded-[32px] flex-1 bg-gray flex flex-row items-center justify-start border-[0.7px] border-solid border-black " 
                    style={{fontSize: `${0.007653*innerWidth+8.135549}px`, padding:`${8}px ${16.5}px `}}>
                                <input className="border-none focus:outline-none w-full"  id="email" type="text" placeholder="Enter your email"/>
                            </form>
                    <KLink to='Signup'>
						<button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
						 border-[1px] border-solid border-black" style={{fontSize: `${0.007653*innerWidth+8.135549}px`, padding:`${8}px ${16.5}px `}}>
							Sign up
						</button>
					</KLink>
                </div>
                <div className="self-stretch relative text-[0.521rem] leading-[150%] text-black">{`By clicking Sign Up you're confirming
                    that you agree with our `}
                    <KLink to="Terms" >
                    <span className="[text-decoration:underline]">Terms and Conditions</span></KLink>.
                </div>
            </div>
            
        </div>
    )
}