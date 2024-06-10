import React,{useState,useRef}  from "react";
import StayUpdatedImage from '../../../Assets/Images/StayUpdated.png'
import { Link } from "react-scroll";
export default function Check(){
   
    return (
        <div className="w-auto  overflow-hidden   box-border " style={{margin:`${0.03333*innerWidth-4}px 0px `}}>
                <div className="grid grid-cols-2 items-center justify-start " style={{gap:`${0.1905*innerWidth-165.76}px`}}>
                        <div className="col-span-1 my-auto overflow-hidden" >
                        <img className="w-full h-auto overflow-hidden " alt="" src={StayUpdatedImage} />
                        </div>
                        <div className="my-auto col-span-1 w-auto  items-start justify-center">
                                <h2 className='font-bold mb-[12px] font-poppins leading-[120%]' style={{ fontSize: `${0.01905*innerWidth+11.424}px`,marginBottom:`${0.0223*innerWidth-2.816}px`  }} >Stay Updated with the <br/>Latest News and Reminders in Your Field</h2>
                                <p className="leading-[150%] w-auto  font-roboto " style={{ fontSize: `${0.00335*innerWidth+11.568}px`, marginBottom:`${0.0223*innerWidth-2.816}px`  }}>Stay informed with real-time updates and timely reminders 
                                        tailored to your specific field. Explore the latest news, trends, and insights to keep ahead in your industry. Welcome to our comprehensive section dedicated to keeping
                                        you informed and up-to-date with the latest news and reminders relevant to your field.
                                </p>
                                <Link to='Login'>
                                <button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
                                        border-[1px] border-solid border-black" style={{fontSize: `${0.00476*innerWidth+6.8608}px`, padding:`${0.00476*innerWidth+2.8608}px ${0.00476*innerWidth+14.8608}px `}}>
                                        CHECK OUT
                                </button>
                                </Link>
                        </div>
                </div>
        </div>)

}
