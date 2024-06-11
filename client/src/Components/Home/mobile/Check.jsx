import React from "react";
import { Link } from "react-scroll";
import StayUpdatedImage from '../../../Assets/Images/StayUpdated.png'

export default function Check() {
  

  return (
        <div className="w-auto box-border mb-[48px] ">
        <div className="items-center justify-start " >
        <span className='font-semibold font-poppins ' style={{ fontSize:`${0.005102*innerWidth+14.094766}px` }} >Update Center</span>
        <img className="w-full drop-shadow-homeImagePhone  mt-[10px] mb-[45px] h-auto  " alt="" src={StayUpdatedImage} />
        <h2 className='font-bold mb-[12px] font-poppins leading-[120%]' style={{  fontSize: `${0.045918*innerWidth+14.825714}px` }} >Stay Updated with the Latest News and Reminders in Your Field</h2>
        <p className="leading-[150%] w-auto  font-poppins mb-[16px] " style={{  fontSize:`${0.005102*innerWidth+14.094766}px` }}>Stay informed with real-time updates and timely reminders 
                tailored to your specific field. Explore the latest news, trends, and insights to keep ahead in your industry. Welcome to our comprehensive section dedicated to keeping
                you informed and up-to-date with the latest news and reminders relevant to your field.
        </p>
        <Link to='Login'>
        <button className="font-roboto leading-[150%] w-auto rounded-[43px] text-white bg-graybutton box-border 
                border-[1px] border-solid border-black" style={{fontSize: `${0.007653*innerWidth+8.135549}px`, padding:`${8}px ${16.5}px `}}>
                CHECK OUT
        </button>
        </Link>
        </div>
</div>
  )
}
