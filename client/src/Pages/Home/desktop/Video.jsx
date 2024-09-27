import React,{useState, useEffect, Suspense} from "react";


import { useDispatch } from 'react-redux';
import { closeDropDown, toogleDropDown } from '../../../Redux/userSlice/navDropDown.js';
// const StartVideo = React.lazy(() => import('./StartVideo.jsx'));
const StartVideo = React.lazy(() => import('./StartVideo.jsx'));
export default function StartingVideo() {
 
 
    const dispatch=useDispatch();
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
      function updateViewportHeight() {
        const documentHeight = document.documentElement.clientHeight;
        setViewportHeight(documentHeight-250);
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', updateViewportHeight);
      updateViewportHeight();
  
      return () => {
        window.removeEventListener('resize', updateViewportHeight);
      };
    }, []);

    

    const handleWheel = () => {
      dispatch(closeDropDown());
    };


  const containerStyles = {
    maxHeight: "1080px",
    fontSize: `${0.046875 * innerWidth + 38}px`,
    marginLeft: `-${0.0813 * innerWidth - 11.43}px`,
    height: `${viewportHeight}px`,
  };

  const spanStyles1 = { fontSize: `${0.029464 * innerWidth + 19.47872}px` };
  const spanStyles2 = { fontSize: `${0.031696 * innerWidth + 41.14208}px` };
  const spanStyles3 = { fontSize: `${0.0381696 * innerWidth + 37.707072}px` };
  const spanStyles4 = { fontSize: `${0.046875 * innerWidth + 38}px` };
  const spanStyles5 = { fontSize: `${0.029464 * innerWidth + 43.47872}px` };


    return (
       <div
      onWheel={handleWheel}
      className="relative w-screen  shrink-0 text-left mx-[-2rem] text-white font-khand bg-grey"
      style={containerStyles}
    >
      <Suspense fallback={<div  className="bg-grey w-full h-full object-cover"></div>}>
        <StartVideo/>      

      </Suspense>
        

      <div className={`absolute font-bold lg:top-[1.5rem] lg:left-[2.125rem] md:top-[1.1rem] md:left-[1.5rem] leading-[100%] inline-block lg:w-[60rem] lg:max-w-[60rem] h-auto`}>
          <span style={spanStyles1}> Unlock Your</span>
          <span style={spanStyles2}>{` `}</span>
          <span style={spanStyles3}>Potential</span>
          <span style={spanStyles2}>{` `}</span>
          <span style={spanStyles1}>with</span>
          <span style={spanStyles2}>{` `}</span>
          <span style={spanStyles4}>Personalized</span>
          <span style={spanStyles2}>{` `}</span>
          <br/>

          <span style={spanStyles5}>Career</span>
          <span style={spanStyles2}>{` `}</span>
          <span style={spanStyles2}>Guidance</span>
      </div>
    </div>
    );
  }

  