import React,{setState,useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function OldFeedback(){
    
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


    return (
    <section className="mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]">

        <section className="" style={{height:`${viewportHeight}px`}}>
            <div className="grid grid-cols-2 ">
                <div className="col-span-1">
                    Hi
                </div>
                <div className="col-span-1">
                    Hello
                </div>

            </div>
        </section>

    </section>
    )
} 