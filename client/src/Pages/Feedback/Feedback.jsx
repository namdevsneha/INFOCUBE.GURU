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
import chat from "..//../Assets/Images/Chat.png";
import star1 from "../../Assets/Images/Star.png";
import star2 from "../../Assets/Images/Star2.png";
import close from "../../Assets/Images/close.png";
import avatar from "../../Assets/Images/avatar.svg";
import "./feedback.css";
import VideoFeedback from "./VideoFeedback";




const reviewTitle={
  '1':"Poor",
  '2':"Fair",
  '3':"Good",
  '4':"Very Good",
  '5':"Awesome"
}



export default function OldFeedback(){
    
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [centerIndex, setCenterIndex] = useState(0);
  
    const {currentUser}=useSelector((state)=>state.user);
    const [formData,setformData]=useState({email:currentUser?currentUser.email:" ",feedback:'',rating:'3',firstName:'',lastName:'',page:1});
    const [testimonials, setTestimonials] = useState([]);

  
    const [isOpen, setIsOpen] = useState(false);
    

    const openDialog = () => {
      setIsOpen(true);
    };
    

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
          breakpoint:767,
          settings:{
            slidesToShow:3,
            centerPadding:`${0.3704 *innerWidth-194.61}px`
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            centerPadding:`${0.4667*innerWidth-75.125}px`
          },
        },
      ]
    };   
    const settings3 = {
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
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
          breakpoint:767,
          settings:{
            slidesToShow:3,
            centerPadding:`${0.3704 *innerWidth-194.61}px`
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            centerPadding:`${0.4667*innerWidth-75.125}px`
          },
        },
      ]
    };   
    
    const settings2 = {
      centerMode: true,
      slidesToShow: 3,
      infinity:true,
      centerPadding: '0px',
      autoplay:true,
      pauseOnHover: false,
      vertical:true,
      
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
          breakpoint:767,
          settings:{
            slidesToShow:3,
            centerPadding:`${0.3704 *innerWidth-194.61}px`
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            centerPadding:`${0.4667*innerWidth-75.125}px`
          },
        },
      ]
    }; 
    return (
      <div>
    <section className="mt-[2.3rem] md:mt-[3rem] lg:mt-[3rem] ">
        
        
        <section className=" my-[60px] md:my-[100px] h-[100%]"  >
            <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-[40px] h-full " style={{gap:`${0.0377*innerWidth+1.294}px`}}>
                <div className="col-span-1" style={{ marginLeft: `${0.0733*innerWidth+14.566}px`  }}>
                    {innerWidth>768?<img style={{ marginLeft: `-${0.0262*innerWidth+3.084}px`, height:`${0.0314*innerWidth+8}px` }} src={comma}/>:<></>}
                    <h2 className="text-h2Text font-poppins font-bold">What <span className="text-darkorchid">Students</span> Say{innerWidth>768?<br/>:<></>} About Their <span className="text-darkorchid">Career</span>{innerWidth>768?<br/>:<></>} <span className="text-darkorchid">Journey</span></h2>
                    <span className="font-roboto font-bold text-regularText text-feedbackgray" >Your Feedback Helps Us to Improve Our Services</span>
                    <div className="font-roboto relative " style={innerWidth>768?{ marginTop: `${0.01256*innerWidth+3.075}px`, width:`${0.2465*innerWidth+26.33}px` }:{ marginTop: `${0.01256*innerWidth+3.075}px`, width:`${0.30534*innerWidth+145.498}px` }}>
                    <div className="relative items-center font-normal w-full   h-[10vw] md:h-[4.125vw]  ">
                        <input onClick={openDialog} id="review" className="input w-full h-full   px-5 pr-12 
                          leading-[150%] font-feedbackgray border-black border-[1px] rounded-full 
                        transition duration-300 ease-in-out text-regularText shadow-[inset_1px_2px_10px_0px_rgba(0,_0,_0,_0.25)] "  type="text"  placeholder="Write a review"/>                     
                    </div>
                    <div className=" flex text-regularText  rounded-[104px] h-full  bg-darkslategray w-[25vw] md:w-[10vw] top-0 right-0 absolute " >
                            <button onClick={openDialog} className="text-white mx-auto my-  font-normal " >Review</button>
                        </div>  
                    </div>
                    
                    
                </div>
                <div className="col-span-1 flex flex-row justify-center items-center ">
                    <img className="h-auto" style={innerWidth>768?{width:`${0.408*innerWidth+30.16}px`}:{width:`${0.318*innerWidth+205.776}px`}} src={feedbackBg}/>
                </div>

            </div>
        </section>

        <section className="my-[40px] slider-one" style={{marginLeft:innerWidth>1023?`${0}px`:`${0}px`, 
        marginRight:innerWidth>1023?`${0}px`:`${0}px` }}>

          <h1 className="text-h1Text flex flex-row justify-center items-center font-poppins font-bold" >
            See What They Say
          </h1>

          {innerWidth<768?
          <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const stars = Array(parseInt(testimonial.rating,10)).fill(null); 
            const nostars = Array(5-parseInt(testimonial.rating,10)).fill(null);
           
            const formattedDate = format(new Date(testimonial.date), 'dd-MM-yyyy');
            
           
            return(
            <div key={index} className="flex flex-row items-center justify-center px-[26px] py-[80px] " >
            
            <div className="shadow-[0px_4px_49.3px_rgba(0,_0,_0,_0.25)] font-inter rounded-[6px] w-[135px] p-[13px] ">
              <div className="flex flex-row">
                
                
              {stars.map((_, index) => ( <img key={index} className="h-auto w-[11px]"  src={starColoured} alt={`star-${index}`}/> ))}
               {nostars.map((_,index)=>( <img key={index} className="h-auto w-[11px]"  src={starUncoloured}/>))} 
                
              </div>
              <div className="py-[13px]">
              <h3 className="text-[13px] mb-[10px] font-bold  " >{reviewTitle[testimonial.rating]}</h3>
              <p className=" overflow-hidden  text-ellipsis text-[9px] h-[85px]">{testimonial.feedback}</p>
              </div>

              <div className="flex flex-row items-center justify-start text-left gap-[6px] ">
                <img className="relative rounded-[100%]  object-center object-cover w-[22px] h-[22px]"   alt="avatar" src={testimonial.avatar} />
                <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[140%] font-semibold text-[9px] " >{testimonial.name}</div>
                <div className="relative leading-[140%] text-[9px]" >{formattedDate}</div>
                </div>
              </div>
            </div>
            </div>
          )})}
          </Slider>:
          <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const stars = Array(parseInt(testimonial.rating,10)).fill(null); 
            const nostars = Array(5-parseInt(testimonial.rating,10)).fill(null);
           
            const formattedDate = format(new Date(testimonial.date), 'dd-MM-yyyy');
            
           
            return(
            <div key={index} className={` px-[32px] py-[120px]`} >
            
            <div className=" shadow-[0px_4px_49.3px_rgba(0,_0,_0,_0.25)] font-inter rounded-[9px] p-[1.75vw]" style={{width:innerWidth>1023?`${0.1256*innerWidth+30.912}px`:"180px"}}>
              <div className="flex flex-row">
                
                
              {stars.map((_, index) => ( <img key={index} className="h-auto" style={{ width: `${0.00836 * innerWidth + 6.4352}px` }} src={starColoured} alt={`star-${index}`}/> ))}
               {nostars.map((_,index)=>( <img key={index} className="h-auto" style={{width:`${0.00836*innerWidth+6.4352}px`}} src={starUncoloured}/>))} 
                
              </div>
              <div  style={{paddingTop:`${0.01674*innerWidth-5.1612}px`,paddingBottom:`${0.01674*innerWidth-5.1612}px`}}>
              <h5 className="text-h5Text mb-[10px] font-bold " >{reviewTitle[testimonial.rating]}</h5>
              <p className=" overflow-hidden text-regularText  text-ellipsis"style={{height:innerWidth>1023?`${150}px`:`${0.07874*innerWidth+19.5}px`}}>{testimonial.feedback}</p>
              </div>

              <div className="flex flex-row items-center justify-start text-left "style={{gap:`${0.00836*innerWidth+3.4472}px`}}>
                <img className="relative rounded-[100%]  object-center object-cover" style={{width:`${0.01465*innerWidth+16.933}px`,height:`${0.01465*innerWidth+16.933}px`}}  alt="" src={testimonial.avatar} />
                <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[140%] text-regularText font-semibold " >{testimonial.name}</div>
                <div className="relative leading-[140%] text-regularText" >{formattedDate}</div>
                </div>
              </div>
            </div>
            </div>
          )})}
          </Slider>
          }
          
        </section>
        <section className="  md:mx-[4vw]">
          <VideoFeedback/>
        
        </section>
        

    </section>
    {isOpen && (
        <FeedbackDialog setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </div>
    )
} 



const FeedbackDialog=({isOpen,setIsOpen})=>{
  const [hoverStar, setHoverStar] = useState(null);
  const [clickedStar, setClickedStar] = useState(null); 
  const {currentUser}=useSelector((state)=>state.user);
  const [formData,setformData]=useState({email:currentUser?currentUser.email:" ",feedback:'',rating:'3',firstName:'',lastName:'',page:1});
  const [secondPage,setSecondPage]=useState(false);
  const dispatch=useDispatch();

  const closeDialog = () => {
    setIsOpen(false);
    setSecondPage(false);
  };
  const toggleDialog = () => {
      if(currentUser||secondPage){
        setformData({...formData,rating:clickedStar});
        dispatch(feedbackSaveStart());
        axios.post(`${baseURL}/api/feedback/save`, formData, {
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((res)=>{
        dispatch(feedbackSaveSuccess(res.data));
      }).catch((error)=>{
        dispatch(feedbackSaveFailure(error));
      });
    setIsOpen(false);
    setSecondPage(false);
    setformData({email:currentUser.email,feedback:'',rating:'3',page:1});
  }else{
    setSecondPage(true);
  }
      
};

  return(

        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">  
          <div className="bg-white font-poppins " style={innerWidth>768?{width:`${0.2232*innerWidth+121.456}px`, height:`${0.22321*innerWidth+101.4286}px`, borderRadius:`${0.02232*innerWidth-2.8544}px`}
          :{width:`${0.33163*innerWidth+145.7143}px`, height:`${0.07653*innerWidth+271.257}px`, borderRadius:`${15}px`}}>
            <div className="flex flex-row  [background:linear-gradient(62.28deg,_#e31aa1,_#1fba8c)] items-center " style={innerWidth>768?{padding:`${0.0078125*innerWidth-1}px`,gap:`${0.0044643*innerWidth+1.4286}px`,borderTopLeftRadius:`${0.02232*innerWidth-2.8544}px`,borderTopRightRadius:`${0.02232*innerWidth-2.8544}px`}:
          {padding:`${0.00510*innerWidth+6.082}px`,gap:`${0.0044643*innerWidth+1.4286}px`,borderTopLeftRadius:`${15}px`,borderTopRightRadius:`${15}px`}}>
                <div className="rounded-full  bg-black " style={innerWidth>768?{padding:`${0.00781*innerWidth}px`}:{padding:`${0.00510*innerWidth+6.082}px`}}>
                <img className="  w-auto  " style={innerWidth>768?{height:`${0.01116*innerWidth+3.5626}px`}:{height:`${14}px`}} src={chat}/>
                </div>
                <h2 className="text-lg text-white font-bold" style={innerWidth>768?{fontSize: `${0.00893*innerWidth+14.8}px`}:{fontSize: `${0.00510*innerWidth+14.082}px`}}>Feedback</h2>
                <img onClick={closeDialog} className="ml-auto mr-[10px] cursor-pointer h-auto "  src={close} style={{width:`${0.00476*innerWidth+6.8608}px`}}/>
            </div>
            <div className=' h-full items-center' style={innerWidth>768?{padding:`${0.0078125*innerWidth-1}px`}:{padding:`${0.00510*innerWidth+6.082}px`}}>
              {secondPage?<img className=" mx-auto  rounded-full bg-purple h-auto" style={innerWidth>768?{width: `${0.05022*innerWidth+3.5714}px`,marginBottom:`${0.0078125*innerWidth-1}px`,marginTop:`${0.0078125*innerWidth-1}px`}:
            {width: `${0.02551*innerWidth+25.443}px`,marginBottom:`${0.00510*innerWidth+6.082}px`,marginTop:`${0.00510*innerWidth+6.082}px`}}src={avatar}/>:<></>}
              <h2 className="text-center font-bold " style={innerWidth>768?{fontSize: `${0.00893*innerWidth+14.8}px`}:{fontSize: `${0.00510*innerWidth+14.082}px`}}>{secondPage?"NO! Anonymity":"How are you feeling?"}</h2>
              <p className="text-center font-bold text-feedbackgray font-roboto" style={innerWidth>768?{ fontSize: `${0.00446*innerWidth+5.4286}px` }:{ fontSize: `${10}px` }}>
                {secondPage? "It would be great if you include your name with your review letting people know that it is a genuine feedback":
                "Your feedback drives us forward, helping us enhance our services.We value your thoughts and strive to serve you better every day."}              
              </p>
              {
                secondPage?
              <div style={innerWidth>768?{padding:`${0.0078125*innerWidth-1}px`}:{padding:`${0.00510*innerWidth+6.082}px`}}>
                <div className="rounded-[104px] mx-auto items-center relative w-[350px] " style={innerWidth>768?{width:`${0.16741*innerWidth+28.5765}px`,marginBottom:`${0.0078125*innerWidth-1}px`}:
                {width:`${0.05102*innerWidth+160.9264}px`,marginBottom:`${0.00510*innerWidth+6.082}px`}} >
                    <input onChange={(e)=>setformData({...formData,firstName:e.target.value})} id="firstName" className="input w-full  px-5 pr-12 
                      text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" style={innerWidth>768?{fontSize: `${0.00476*innerWidth+6.8608}px`,height:`${0.02009*innerWidth+9.4286}px`}:
                      {fontSize: `${10}px`,height:`${30}px`}} type="text" placeholder="First Name"/>                               
                    </div>
                  <div className="rounded-[104px] mx-auto items-center relative " style={innerWidth>768?{width:`${0.16741*innerWidth+28.5765}px`}:{width:`${0.05102*innerWidth+160.9264}px`}} >
                    <input onChange={(e)=>setformData({...formData,lastName:e.target.value})} id="firstName" className="input w-full  px-5 pr-12 
                      text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" style={innerWidth>768?{fontSize: `${0.00476*innerWidth+6.8608}px`,height:`${0.02009*innerWidth+9.4286}px`}:
                      {fontSize: `${10}px`,height:`${30}px`}} type="text" placeholder="Last Name"/>                               
                    </div>  
                </div>:<div>
              <div className="flex space-row justify-center" style={innerWidth>768?{padding:`${0.0078125*innerWidth-1}px`,gap:`${0.0044643*innerWidth+1.4286}px`}:{padding:`${0.00510*innerWidth+6.082}px`,gap:`${0.0044643*innerWidth+1.4286}px`}}>
              {[1, 2, 3, 4, 5].map((star, index) => (
              <img
                key={index} className="h-auto" onMouseEnter={() => setHoverStar(star)}
                onMouseLeave={() => {setHoverStar(null)}} onClick={() => setClickedStar(star)} style={innerWidth>768?{ width: `${0.02455 * window.innerWidth - 2.201}px` }:{width:`${0.01276*innerWidth+15.215}px`}}
                src={(hoverStar||clickedStar) >= star ? star2 : star1} alt={`star ${star}`}/>))}
              </div>
              <div className=" " style={innerWidth>768?{padding:`${0.0078125*innerWidth-1}px`}:{padding:`${0.00510*innerWidth+6.082}px`}}>
              <textarea onChange={(e)=>setformData({...formData,feedback:e.target.value})} id="feedback"
                className="w-full font-inter max-w-lg border resize-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                rows="5" placeholder="Add a comment..." style={innerWidth>768?{padding:`${0.0078125*innerWidth-1}px`,fontSize: `${0.00476*innerWidth+6.8608}px` }:{padding:`${0.00510*innerWidth+6.082}px`,fontSize: `${10}px` }}/>
              </div>
              </div>
              }
              
              <div className=" mx-auto  rounded-[44px] bg-darkslategray flex flex-row items-center 
              justify-center  relative leading-[150%]" 
              style={innerWidth>768?{width:`${0.1111*innerWidth-13.3332}px`, marginBottom:`${0.0078125*innerWidth-1}px`, paddingBottom:`${0.00446*innerWidth+3.4286}px`, paddingTop:`${0.00446*innerWidth+3.4286}px`}:
              {width:`${100}px`, marginBottom:`${0.00510*innerWidth+6.082}px`, paddingBottom:`${0.00510*innerWidth+6.082}px`, paddingTop:`${0.00510*innerWidth+6.082}px`}}>
                <button onClick={toggleDialog} className="text-white leading-tight font-roboto px-2"style={innerWidth>768?{fontSize: `${0.00476*innerWidth+6.8608}px`}:{fontSize: `${12}px`}} >{currentUser||secondPage?"Submit Review":"Next"}</button>
              </div>
              </div>
          </div>
        </div>
        
        
  )
}


{/* <div key={index} className=" bg-gray-500   flex flex-col ">
                      <div className="flex flex-row mb-[1.875vw] ">
                      {stars.map((_, index) => ( <img key={index} className="h-[1.55vw] w-[1.55vw]"  src={starColoured} alt={`star-${index}`}/> ))}
                        {nostars.map((_,index)=>( <img key={index} className="h-[1.55vw] w-[1.55vw]" src={starUncoloured}/>))} 
                      </div>
                      <div className="mb-[1.875vw]">
                        <h5 className="text-h5Text leading-[120%] font-bold " >{reviewTitle[testimonial.rating]}</h5>
                        <p className=" overflow-hidden text-mediumText  text-ellipsis h-[7.1vw]">{testimonial.feedback}</p>
                        </div>
                     
                        <div className="flex flex-row items-center justify-start text-left gap-[1vw]">
                          <img className="relative rounded-[100%]  object-center object-cover h-[3.125vw] w-[3.125vw]"  alt="" src={testimonial.avatar} />
                          <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[140%] text-regularText font-semibold " >{testimonial.name}</div>
                          <div className="relative leading-[140%] text-regularText" >{formattedDate}</div>
                          </div>
                        </div>
                      
                    </div> */}