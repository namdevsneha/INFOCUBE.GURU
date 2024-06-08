import React from "react";
import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';
import SignUp from "../../../Pages/SignUp";

export default function Form(){
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        });
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
         dispatch(signInStart());
         const res=await fetch('/api/auth/login',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json',
             },
             body: JSON.stringify(formData),
         });
         const data= await res.json();
         console.log(data);
         if(data.success===false){
            dispatch(signInFailure(data.message));
            console.log("Sign in failed")
            return;
          
        }
        dispatch(signInSuccess(data));
        console.log("Success")
        navigate('/');

        } catch (error) {
         dispatch(signInFailure(error.message));
        }
    }
    return (
        <div className=" relative overflow-hidden flex flex-row justify-between lg:py-[3.75rem] md:py-[2rem] md:px-[5rem] lg:px-[10rem]
        box-border gap-[5rem] text-justify lg:text-[1.125rem] md:text-[1rem] text-black font-roboto">
            <div className="flex-1 flex flex-col gap-[1.5rem]">
                
                <p className="leading-[150%] font-medium whitespace-normal">We aim to bridge the gap between  potential and opportunities. Our approach involves offering tailored roadmaps and comprehensive career paths, along with personalized advice from our trusted alumni and mentors. We foster a supportive community dedicated to empowering your journey towards success.</p>

                
            </div>

            <div className="flex-1 flex flex-col items-start justify-between text-left lg:text-[3.5rem] md:text-[2.5rem]">
            <div className="w-full flex flex-col items-start justify-starta
                box-border gap-[1rem] text-left text-[1rem] text-neutral-dark-gray ">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] ">
                        <form onSubmit={handleSubmit} className="rounded-[32px] flex-1 bg-gray flex flex-row items-center justify-start p-[0.75rem] border-[1px] border-solid border-black ">
                            <div className="flex-1 relative leading-[150%]"><input onChange={handleChange} id="email" type="text" placeholder="Enter your email"/></div>
                        </form>
                        <div className="rounded-[29px] bg-graybutton flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] 
                        text-white border-[1px] border-solid border-darkslategray">
                            <KLink to="SignUp">
                            <div className="relative leading-[150%]">Sign up</div>
                            </KLink>
                        </div>
                    </div>
                    <div className="self-stretch relative text-[0.75rem] leading-[150%] text-black">{`By clicking Sign Up you're confirming that you 
                    agree with our `}
                    <KLink to="Terms"><span className="[text-decoration:underline]">Terms and Conditions.</span>
                    </KLink>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}