import React,{setState,useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import feedbackBg from "../../Assets/Images/FeedbackBg.png";
import comma from "../../Assets/Images/comma.png";
import starColoured from "../../Assets/Images/StarColoured.webp";
import starUncoloured from "../../Assets/Images/StarUncoloured.webp";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css";
import Testimonoial3 from "../../Assets/Images/Testimonial3.jpg";

const testimonials = [
  "Testimonial 1: Great service!",
  "Testimonial 2: Highly recommend!",
  "Testimonial 3: Will use again!",
  "Testimonial 4: Fantastic experience!",
  "Testimonial 5: Very satisfied!",
  "Testimonial 6: Outstanding quality!",
  "Testimonial 7: Professional staff!",
  "Testimonial 8: Excellent communication!",
  "Testimonial 9: Will come back for sure!",
];

const testimonial2=[
  "Testimonial 1: Great",
  "Testimonial 2: Nice",
  "Testimonial 3: Will use again",
  "Testimonial 4: Fantastic",
  "Testimonial 5: Satisfied"
]


export default function OldFeedback(){
    
    const dispatch=useDispatch();
    const [viewportHeight, setViewportHeight] = useState(0);

    const [centerIndex, setCenterIndex] = useState(0);
    const [centerIndex2, setCenterIndex2] = useState(0);

    useEffect(() => {
      function updateViewportHeight() {
        const documentHeight = document.documentElement.clientHeight;
        setViewportHeight(documentHeight-50);
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', updateViewportHeight);
      updateViewportHeight();
  
      return () => {
        window.removeEventListener('resize', updateViewportHeight);
      };
    }, []);

    const styles = { height: `${viewportHeight}px` };
    
    const settings = {
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      infinity:true,
      autoplay:true,
      pauseOnHover: false,
      speed: 500,
      afterChange: (current) => {
        const newCenterIndex = (current) % testimonials.length; // Adjust based on how many slides you have visible
        setCenterIndex(newCenterIndex);
        console.log("Current Center Index:", newCenterIndex);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      beforeChange: (current, next) => {
        document.querySelectorAll('.slick-slide').forEach((slide) => {
          slide.style.transition = 'transform 0.5s, opacity 0.5s';
        });
      },
    };

    const settings2 = {
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      infinity:true,
      autoplay:false,
      pauseOnHover: false,
      speed: 500,
      afterChange: (current) => {
        const newCenterIndex2 = (current) % testimonial2.length; // Adjust based on how many slides you have visible
        setCenterIndex2(newCenterIndex2);
        console.log("Current Center Index2:", newCenterIndex2);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      beforeChange: (current, next) => {
        document.querySelectorAll('.slick-slide').forEach((slide) => {
          slide.style.transition = 'transform 0.5s, opacity 0.5s';
        });
      },
    };
    return (
    <section className="mt-[10rem] md:mt-[2.5rem] lg:mt-[4rem] ">

        <section className=" " style={styles}>
            <div className="flex justify-center items-center grid grid-cols-2 gap-[76px] h-full ">
                <div className="ml-[170px] col-span-1">
                    <img className="ml-[-60px] h-[70px]" src={comma}/>
                    <h2 className="font-poppins text-[56px] font-bold">What Students Say<br/> About Their Career<br/> Journey</h2>
                    <span className="font-roboto text-[16px] font-bold text-feedbackgray">Your Feedback Helps Us to Improve Our Services</span>

                    <div className="mt-[28px] font-roboto relative w-[515px]">
                    <div className="absolute  items-center  w-full ">
                        <input  id="review" className="input w-full  px-5 pr-12 py-[25px] 
                        text-[16px] font-bold leading-[150%] font-feedbackgray border-black border-[1px] rounded-full 
                        transition duration-300 ease-in-out" type="text" placeholder="Write a review" style={{ boxShadow: 'inset 1px 2px 10px rgba(0, 0, 0, 0.25)' }}/>                     
                    </div>
                    <div className="  mr-[0px] mx-auto absolute  w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[104px]  bg-darkslategray   relative ">
                            <button  className="text-white px-[48px] py-[26px] text-[20px]  ">Review</button>
                        </div>  
                    </div>
                    
                    
                </div>
                <div className="col-span-1">
                    <img className="w-[840px] h-auto" src={feedbackBg}/>
                </div>

            </div>
        </section>

        <section className="my-[40px] ">

          <h2 className=" flex flex-row justify-center items-center text-[64px] font-poppins font-bold">
            See What They Say
          </h2>

          <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-[56px] py-[120px]">
            <div className="shadow-[0px_4px_49.3px_rgba(0,_0,_0,_0.25)] font-inter rounded-[9px] w-[280px] p-[28px]  ">
              <div className="flex flex-row">
                <img className="w-[23px] h-auto" src={starColoured}/>
                <img className="w-[23px] h-auto" src={starColoured}/>
                <img className="w-[23px] h-auto" src={starColoured}/>
                <img className="w-[23px] h-auto" src={starUncoloured}/>
                <img className="w-[23px] h-auto" src={starUncoloured}/>
              </div>
              <div className="my-[28px]">
              <h3 className="text-[28px] font-bold">Review title</h3>
              <p className="text-[18px]">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torqu...
              </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left ">
                <img className="relative rounded-[50%] w-[46px] h-auto  object-center object-cover"  alt="" src={Testimonoial3} />
                <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[140%] font-semibold text-[18px]" >Student Name</div>
                <div className="relative leading-[140%] text-[18px]" >Date</div>
          </div>
          </div>
            </div>
            </div>
          ))}
          </Slider>
        </section>
        {/* <section className="mb-[100px]">
          <h2 className="flex flex-row justify-center items-center text-[64px] font-poppins font-bold">
          Testimonial
          </h2>
          <div className="grid grid-cols-2 mx-[56px]">
            
            <div className=" justify-center items-center col-span-1 ">
              
            </div>
            <div className="flex justify-center items-center col-span-1">

            </div>
          </div>
        </section> */}

    </section>
    )
} 