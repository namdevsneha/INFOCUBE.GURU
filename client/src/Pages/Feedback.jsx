import React,{setState,useEffect,useState} from "react";
import backgroundImage from '../Assets/Images/Feedback_Bg_image.webp';
import InfoCubeLogo from '../Assets/Images/InfoCubeLogo.png';
import {Link, useLocation} from "react-router-dom";
import feed from '../Assets/Images/feed.png';
import comma from '../Assets/Images/comma.png'

export default function Feedback(){
    const [activeIndex, setActiveIndex] = useState('0'); // Initially set the third dot as active

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const linearGradientStyle = {
    background: 'linear-gradient(to bottom, #FFFFFF, #9D94FF)',
    minHeight: '100vh', 
  };

  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(1);
  const [testimonials, setTestimonials] = useState([
    {
      name: 'Sneha',
      feedback: 'I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.',
      rating: 5
      
    },
    {
      name: 'Utkarsh',
      feedback: 'I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.',
      rating: 5
      
    },

  ]);

  const handleNameChange = (event) => setName(event.target.value);
  const handleFeedbackChange = (event) => setFeedback(event.target.value);
  const handleRatingChange = (event) => setRating(parseInt(event.target.value));
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [location]);

  const handleSubmit = () => {
    if (name.trim() !== '' && feedback.trim() !== '') {
      const newTestimonial = {
        name,
        feedback,
        rating
      };
      setTestimonials([...testimonials, newTestimonial]);
      setName('');
      setFeedback('');
      setRating(1);
    }
  };
    return (
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
            <form>
                    <div className="flex flex-row items-center justify-between">
                    <input type="text" className="outline-none w-full m-1 md:m-2 align-item-center text-gray leading-[120%] md:leading-[150%] " placeholder="Write a Review"/>
                    <div className="rounded-[29px] bg-darkslategray flex flex-row items-center justify-center py-[.2rem] md:py-[0.4rem] px-[.8rem] md:px-[1.5rem] 
                        text-white border-[.5px] md:border-[1px] border-solid border-darkslategray">                            
                    <div className="relative leading-[120%] md:leading-[150%]">Submit</div>
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
            <h2 className=" font-bold font-roboto "  style={{ fontSize: `${48}px` }}>What Students Say About<br/> Their Career Journey</h2>
            <img className="pr-[2rem]" style={{ scale: `${0.000223214*innerWidth+0.571429}` }} src={feed}/>
          </div>
        
        <div className="">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4 p-4 drop-shadow-4xl bg-gray-50 rounded-xl shadow-sm " style={{ fontSize: `${0.009375*innerWidth+6}px` }}>
            <div className="flex items-center mb-2">
              <div className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">{testimonial.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                
              </div>
            </div>
            <p className="text-black">{testimonial.feedback}</p>
            <p className="text-yellow-500">{'★'.repeat(testimonial.rating)}</p>
          </div>
          
        ))}
        </div>
        </div>

        </div>
        
        </div>
        </div>
    )
} 