//Importing Library
import React,{setState,useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedbackSaveFailure, feedbackSaveStart, feedbackSaveSuccess } from "../../Redux/userSlice/userSlice";
import axios from "axios";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseURL } from "../../url";
import { format } from 'date-fns';

//Importing Assets
import feedbackBg from "../../Assets/Images/FeedbackBg.png";
import comma from "../../Assets/Images/comma.png";
import starColoured from "../../Assets/Images/StarColoured.webp";
import starUncoloured from "../../Assets/Images/StarUncoloured.webp";

import "./feedback.css";
import Testimonoial3 from "../../Assets/Images/Testimonial3.jpg";



const reviewTitle={
  '1':"Poor",
  '2':"Fair",
  '3':"Good",
  '4':"Very Good",
  '5':"Awesome"
}
const testimonials1 = [
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



export default function OldFeedback(){
    
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [centerIndex, setCenterIndex] = useState(0);
  
    const {currentUser}=useSelector((state)=>state.user);
    const [formData,setformData]=useState({email:currentUser.email,feedback:'',rating:'3',page:1});
    const [testimonials, setTestimonials] = useState([]);
    const dispatch=useDispatch();
    //Refreshing screen when screen width changes
    useEffect(() => {
      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function to remove the event listener
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);


    //Testimonials Fetching
    useEffect(() => {
      const handleFeedback =async(e) =>{
        try{
          const res= await axios.post(`${baseURL}/api/feedback/fetch`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data= await res.data;
        console.log("data ",data)
        const newData = [...testimonials];
        for(let i=0;i<data.length;i++){
          const email=data[i].email;
          if(email){
            try{
                const res=await axios.post(`${baseURL}/api/feedback/fetchUserData`, {email}, {
                headers: {
                        'Content-Type': 'application/json'
                        }
                });
                const userData= await res.data;
                // Important
                newData.push({name:userData.username,feedback:data[i].feedback,rating:data[i].stars, avatar:userData.avatar, date:data[i].time})
            }catch(error){
            console.log(error)
             }}
        }
        
        setTestimonials(newData);
        }catch(error){
          console.log(error)
        }
        
      }
      handleFeedback();
    },[formData]);
    console.log(testimonials)
      //Testimonial Slick Slider settings
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
      ]
    };
    
 
    
    return (
    <section className="mt-[2.3rem] md:mt-[3rem] lg:mt-[3rem] ">
        
        
        <section className="  h-[100%]" style={{marginTop:`${100}px`, marginBottom:`${100}px`}} >
            <div className="flex justify-center items-center grid grid-cols-2 gap-[40px] h-full " style={{gap:`${0.0377*innerWidth+1.294}px`}}>
                <div className="col-span-1" style={{ marginLeft: `${0.0733*innerWidth+14.566}px`  }}>
                    <img className="h-[40px]" style={{ marginLeft: `-${0.0262*innerWidth+3.084}px`, height:`${0.0314*innerWidth+8}px` }} src={comma}/>
                    <h2 className="font-poppins text-[36px] font-bold" style={{ fontSize: `${0.0251*innerWidth+6.49}px` }}>What Students Say<br/> About Their Career<br/> Journey</h2>
                    <span className="font-roboto font-bold text-feedbackgray" style={{ fontSize: `${0.00476*innerWidth+6.8608}px` }}>Your Feedback Helps Us to Improve Our Services</span>
                    <div className="font-roboto relative " style={{ marginTop: `${0.01256*innerWidth+3.075}px`, width:`${0.2465*innerWidth+26.33}px` }}>
                    <div className="absolute  items-center  w-full ">
                        <input  id="review" className="input w-full  px-5 pr-12 
                         font-bold leading-[150%] font-feedbackgray border-black border-[1px] rounded-full 
                        transition duration-300 ease-in-out" style={{paddingTop:`${0.0136*innerWidth-1.928}px`,paddingBottom:`${0.0136*innerWidth-1.928}px`, fontSize: `${0.00476*innerWidth+6.8608}px`,boxShadow: 'inset 1px 2px 10px rgba(0, 0, 0, 0.25)' }} type="text"  placeholder="Write a review"/>                     
                    </div>
                    <div className="  mr-[0px] mx-auto absolute flex justify-center rounded-[104px]  bg-darkslategray   relative " style={{width:`${0.0628*innerWidth+35.056}px`}}>
                            <button  className="text-white  " style={{paddingTop:`${0.0127*innerWidth+.5}px`,paddingBottom:`${0.0127*innerWidth+.5}px`,fontSize:`${0.00524*innerWidth+9.6148}px`}}>Review</button>
                        </div>  
                    </div>
                    
                    
                </div>
                <div className="col-span-1">
                    <img className="h-auto" style={{width:`${0.408*innerWidth+30.16}px`}} src={feedbackBg}/>
                </div>

            </div>
        </section>

        <section className="my-[40px] " style={{marginLeft:innerWidth>1023?`${0.0943*innerWidth-97.894}px`:`${0.354*innerWidth-272.982}px`, 
        marginRight:innerWidth>1023?`${0.0943*innerWidth-97.894}px`:`${0.354*innerWidth-272.982}px` }}>

          <h2 className=" flex flex-row justify-center items-center font-poppins font-bold" style={{ fontSize: `${0.0246*innerWidth+16.768}px` }}>
            See What They Say
          </h2>

          <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const stars = Array(parseInt(testimonial.rating,10)).fill(null); 
            const nostars = Array(5-parseInt(testimonial.rating,10)).fill(null);
           
            const formattedDate = format(new Date(testimonial.date), 'dd-MM-yyyy');
            
           
            return(
            <div key={index} className={`px-[32px] py-[120px]`} >
            <div className="shadow-[0px_4px_49.3px_rgba(0,_0,_0,_0.25)] font-inter rounded-[9px] " style={{width:innerWidth>1023?`${0.1256*innerWidth+30.912}px`:"180px", padding:`${0.01255*innerWidth+3.145}px`}}>
              <div className="flex flex-row">
                
                
              {stars.map((_, index) => ( <img key={index} className="h-auto" style={{ width: `${0.00836 * innerWidth + 6.4352}px` }} src={starColoured} alt={`star-${index}`}/> ))}
               {nostars.map((_,index)=>( <img key={index} className="h-auto" style={{width:`${0.00836*innerWidth+6.4352}px`}} src={starUncoloured}/>))} 
                
              </div>
              <div  style={{paddingTop:`${0.01674*innerWidth-5.1612}px`,paddingBottom:`${0.01674*innerWidth-5.1612}px`}}>
              <h3 className="text-[18px] mb-[10px] font-bold " style={{fontSize:`${0.01047*innerWidth+7.2454}px`}}>{reviewTitle[testimonial.rating]}</h3>
              <p className=" overflow-hidden  text-ellipsis"style={{height:innerWidth>1023?`${150}px`:`${0.07874*innerWidth+19.5}px`, fontSize: `${0.00628*innerWidth+5.5664}px` }}>{testimonial.feedback}</p>
              </div>

              <div className="flex flex-row items-center justify-start text-left "style={{gap:`${0.00836*innerWidth+3.4472}px`}}>
                <img className="relative rounded-[100%]  object-center object-cover" style={{width:`${0.01465*innerWidth+16.933}px`,height:`${0.01465*innerWidth+16.933}px`}}  alt="" src={testimonial.avatar} />
                <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[140%] font-semibold " style={{ fontSize: `${0.00628*innerWidth+5.5664}px` }}>{testimonial.name}</div>
                <div className="relative leading-[140%] "style={{ fontSize: `${0.00628*innerWidth+5.5664}px` }} >{formattedDate}</div>
          </div>
          </div>
            </div>
            </div>
          )})}
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