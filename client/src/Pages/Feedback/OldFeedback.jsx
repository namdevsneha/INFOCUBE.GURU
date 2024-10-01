import React,{setState,useEffect,useState} from "react";
import backgroundImage from '../../Assets/Images/Feedback_Bg_image.webp';
import InfoCubeLogo from '../../Assets/Images/InfoCubeLogo.png';
import {Link, useLocation} from "react-router-dom";
import feed from '../../Assets/Images/feed.png';
import comma from '../../Assets/Images/comma.png'
import { useDispatch, useSelector } from "react-redux";
import { feedbackSaveFailure, feedbackSaveStart, feedbackSaveSuccess } from "../../Redux/userSlice/userSlice";
import axios from "axios";
import { baseURL } from "../../url";
import LoadingSpinner from "../../Components/loadingSpinner";


export default function OldFeedback(){
    const [activeIndex, setActiveIndex] = useState('3'); // Initially set the third dot as active

  const linearGradientStyle = {
    background: 'linear-gradient(to bottom, #FFFFFF, #9D94FF)',
    minHeight: '100vh', 
  };
  const {currentUser}=useSelector((state)=>state.user);
  const [formData,setformData]=useState({email:currentUser.email,feedback:'',rating:'3',page:1});
  const [testimonials, setTestimonials] = useState([]);
  const {loading,error}=useSelector((state)=>state.user);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const dispatch=useDispatch();
  const [initialFormData,setinitialFormData]= useState({email:currentUser.email,feedback:'',rating:'3',page:1});

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [location]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setformData({
      ...formData,
      rating:index,
  });
  };
  console.log(formData)

  useEffect(() => {
    const handleFeedback =async(e) =>{
      try{
        const res= await axios.post(`${baseURL}/api/feedback/fetch`, formData, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const data= await res.data;
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
              newData.push({name:userData.username,feedback:data[i].feedback,rating:data[i].stars, avatar:userData.avatar})
          }catch(error){
          console.log(error)
           }}else{
              newData.push({name:"Anonymous",feedback:data[i].feedback,rating:data[i].stars, avatar:"https://firebasestorage.googleapis.com/v0/b/infocube007.appspot.com/o/avatar.webp?alt=media&token=df235cd7-f248-4bd7-bb19-39e464b37622"})
              }
      }
      
      setTestimonials(newData);
      }catch(error){
        console.log(error)
      }
      
    }
    handleFeedback();
  },[formData]);


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
     dispatch(feedbackSaveStart());
     const res= await axios.post(`${baseURL}/api/feedback/save`, formData, {
      headers: {
          'Content-Type': 'application/json'
      }
  });
     const data= await res.data;
     if(data.success===false){
        dispatch(feedbackSaveFailure(data.message));
        console.log("Sign in failed")
        return;
      
    }
    dispatch(feedbackSaveSuccess(data));
    setActiveIndex('3');
    setformData(initialFormData);
    setTestimonials([]);
    } catch (error) {
        console.log(error)
        dispatch(feedbackSaveFailure(error.message));
    }
  };


    const handleChange=(e)=>{
      setformData({
          ...formData,
          [e.target.id]:e.target.value,
      });
  };
    const handleViewMore=(e)=>{
      setformData({
          ...formData,
          page:formData.page+1,
      });
    }
  console.log(testimonials)
  
    return (
      <div>{testimonials.length>0?
      <div className={`page ${show ? 'page1-enter-active' : 'page1-exit-active'}`}>
        <div className="relative w-full h-full">
        <div className="relative shadow-inner mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] flex flex-col items-center justify-center bg-purple-feedback h-screen bg-no-repeat " style={{backgroundSize:'cover' ,backgroundImage:`url(${backgroundImage})`,}}>

        <div className="p-[.5rem] md:p-[1rem] justify-center align-item-center "><img className=" w-[3rem] md:w-[5.5rem] h-auto" src={InfoCubeLogo  }></img></div>
        <span className="p-[.5rem] md:p-[1rem] text-white font-gotham  text-[1rem] md:text-[2rem] text-center inline-block w-[20rem] md:w-[45rem]">How much did our support aid you in your career journey?</span>
        
        <div className="p-[.5rem] md:p-[1rem] w-screen">
        <div className="scale-container align-item-center justify-center max-w-[350px] md:max-w-[600px] flex p-auto m-auto">
            <div className="scale-label ">Ineffective</div>
            <div className="scale-line">
                <div onClick={()=>handleClick('1')} id='1' className={activeIndex==='1'?"scale-dot active h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]":"scale-dot h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]"}></div>
                <div onClick={()=>handleClick('2')} id='2' className={activeIndex==='2'?"scale-dot active h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]":"scale-dot h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]"}></div>
                <div onClick={()=>handleClick('3')} id='3' className={activeIndex==='3'?"scale-dot active h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]":"scale-dot h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]"}></div>
                <div onClick={()=>handleClick('4')} id='4' className={activeIndex==='4'?"scale-dot active h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]":"scale-dot h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]"}></div>
                <div onClick={()=>handleClick('5')} id='5' className={activeIndex==='5'?"scale-dot active h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]":"scale-dot h-[15px] w-[15px] md:h-[21px] md:w-[21px] border-[2px] md:border-[3px]"}></div>
            </div>
            <div className="scale-label ml-[10px] md:ml-[20px]">Significantly</div>
            </div>
            
            </div>
            <div className="justify-center align-item-center m-[1rem]   rounded-[32px] bg-white w-full max-w-[350px] md:max-w-[600px] bg-gray p-[0.2rem] border-[1px] border-solid border-black">
            <form onSubmit={handleSubmit}>
                    <div className="flex flex-row items-center justify-between">
                    <input onChange={handleChange} id="feedback" type="text" value={formData.feedback} className="outline-none w-full m-1 md:m-2 align-item-center text-gray leading-[120%] md:leading-[150%] " placeholder="Write a Review"/>
                    <div className="rounded-[29px] bg-darkslategray flex flex-row items-center justify-center py-[.2rem] md:py-[0.4rem] px-[.8rem] md:px-[1.5rem] 
                        text-white border-[.5px] md:border-[1px] border-solid border-darkslategray">                            
                    <button disabled={loading} className="relative leading-[120%] md:leading-[150%]">{loading?"Submitting":"Submit"}</button>
                        </div>
                        </div>
                        </form>

            </div>
        </div>

        <div className="relative w-full " >
          <img src={comma} className="absolute z-10  " style={{marginLeft :`${0.09375*innerWidth - 150}px`,top:`${0.0279018*innerWidth-133.4736}px`,scale: `${0.000223214*innerWidth+0.171429 }`}} />
          </div>

        <div className="relative pb-[4rem] " style={linearGradientStyle}>
        <div   style={{paddingLeft :`${0.0813*innerWidth-11.43}px`,paddingRight:`${0.0813*innerWidth-11.43}px`, gap:`${0.0536*innerWidth-22.91}px`,}}>
          <div className=" flex items-center justify-between" style={{height:`${0.1140625*innerWidth+291.9952}px`}}>
            <h2 className=" font-bold font-roboto "  style={{ fontSize: `${0.0390625*innerWidth +8}px` }}>What Students Say About Their Career Journey</h2>
            <img className="pr-[2rem]" style={{ scale: `${0.000223214*innerWidth+0.571429}` }} src={feed}/>
          </div>
        
        <div className="">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4 p-4 drop-shadow-4xl bg-gray-50 rounded-xl shadow-sm " style={{ fontSize: `${0.009375*innerWidth+6}px` }}>
            <div className="flex items-center mb-2">
              <div className=" rounded-full bg-purple h-10 w-10 flex items-center justify-center mr-4">
              <img className=' rounded-full h-full w-full object-cover   ' src={testimonial.avatar}/>
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                
              </div>
            </div>
            <p className="text-black">{testimonial.feedback}</p>
            <p className="text-yellow-500">{'★'.repeat(testimonial.rating)}</p>
          </div>
          
        ))}
        <button onClick={handleViewMore}>
          <span className="underline font-blue-200">View More</span>
        </button>
        </div>
        </div>

        </div>
        
        </div>
        </div>:<LoadingSpinner/>}

      </div>
    )
} 