import React,{setState,useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import feedbackBg from "../../Assets/Images/FeedbackBg.png";
import comma from "../../Assets/Images/comma.png"
export default function OldFeedback(){
    
    const dispatch=useDispatch();
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
      function updateViewportHeight() {
        const documentHeight = document.documentElement.clientHeight;
        setViewportHeight(documentHeight);
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', updateViewportHeight);
      updateViewportHeight();
  
      return () => {
        window.removeEventListener('resize', updateViewportHeight);
      };
    }, []);

    const styles = { height: `${viewportHeight}px` };

    return (
    <section className="">

        <section className="mt-[10rem] md:mt-[2.5rem] lg:mt-[4rem]" style={styles}>
            <div className="grid grid-cols-2 content-center  bg-red-200 ">
                <div className="flex flex-row justify-center my-auto items-center col-span-1">
                    Hi
                </div>
                <div className="flex flex-row justify-center items-center col-span-1">
                    <img src={feedbackBg}/>
                </div>

            </div>
        </section>

    </section>
    )
} 