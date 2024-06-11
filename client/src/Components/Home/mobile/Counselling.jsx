import React from 'react';
import CounsellingImage from '../../../Assets/Images/CounsellingImage.png'
import Horn from '../../../Assets/Images/horn.png'


export default function Counselling(){
    return (

        <div className="relative justify-between  w-full box-border justify-between  items-center font-poppins " style={{gap:`${0.1384*innerWidth-25.4}px`}}>
          <img  className="absolute" alt="Counselling" src={Horn} style={{top:`${-95}px`,left:`${-65}px`, scale:`${0.00028*innerWidth+0.28524}`, rotate:"3.31deg" }}/>

            <h className=" font-bold whitespace-nowrap " style={{ fontSize: `${0.045918*innerWidth+14.825714}px` }}>College Applications</h>
            <h2 className=" font-extralight " style={{ fontSize: `${0.02041*innerWidth+16.34853}px`,marginBottom:`${40}px` }}> Get Your Dream College</h2>
            <span className='leading-[150%]' style={{ fontSize:`${0.005102*innerWidth+14.094766}px`}}>Connect with us for all college Counselling<br/></span>
            <span className='leading-[150%] font-medium ' style={{ fontSize:`${0.005102*innerWidth+14.094766}px` }}>MPDTE | JOSAA | CSAB | ALL STATE LEVEL COUNSELLING<br/></span>
             <div className="relative w-full  mx-auto">
      <div className="relative">
        <img
          className="w-full h-auto"
          alt="Counselling"
          src={CounsellingImage}
          style={{ height: `${innerWidth - (0.22959 * innerWidth + 43.86047)}px` }}
        />
        <a href='https://forms.gle/GLiuC6NgMNAGh8my9 ' >
        <button
          className="absolute top-0 left-0 z-10 font-roboto leading-[150%] mt-[8px] w-auto rounded-[43px] text-white bg-graybutton box-border border-[1px] border-solid border-black"
          style={{
            fontSize: `${0.007653 * innerWidth + 8.135549}px`,
            padding: '8px 16.5px',
          }}
        >
          Raise a Request &gt;
        </button></a>
      </div>
    </div>
        </div>
    )
} 