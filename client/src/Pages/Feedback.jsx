import React,{setState,useState} from "react";
import backgroundImage from '../Assets/Images/Feedback_Bg_image.webp';
import infocubelogo from '../Assets/Images/InfoCubeLogo.webp'
import {Link} from "react-router-dom";

export default function Feedback(){
    const [activeIndex, setActiveIndex] = useState('0'); // Initially set the third dot as active

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // const linearGradientStyle = {
  //   background: 'linear-gradient(to bottom, #FFFFFF, #9D94FF)',
  //   minHeight: '100vh', 
  // };

  // const [name, setName] = useState('');
  // const [feedback, setFeedback] = useState('');
  // const [rating, setRating] = useState(1);
  // const [testimonials, setTestimonials] = useState([
  //   {
  //     name: 'Sneha',
  //     feedback: 'I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.',
  //     rating: 5
  //   }
  // ]);

  // const handleNameChange = (event) => setName(event.target.value);
  // const handleFeedbackChange = (event) => setFeedback(event.target.value);
  // const handleRatingChange = (event) => setRating(parseInt(event.target.value));

  // const handleSubmit = () => {
  //   if (name.trim() !== '' && feedback.trim() !== '') {
  //     const newTestimonial = {
  //       name,
  //       feedback,
  //       rating
  //     };
  //     setTestimonials([...testimonials, newTestimonial]);
  //     setName('');
  //     setFeedback('');
  //     setRating(1);
  //   }
  // };
    return (
        <>
        <div className="shadow-inner mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] flex flex-col items-center justify-center bg-purple-feedback h-screen  " style={{backgroundImage:`url(${backgroundImage})`}}>

        <div className="p-[.5rem] md:p-[1rem] justify-center align-item-center "><img className=" w-[3rem] md:w-[5.5rem] h-auto" src={infocubelogo}></img></div>
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
        {/* <div style={linearGradientStyle}>
        <h2 className="text-xl font-bold mb-4">What Students Say About Their Career Journey</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">{testimonial.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-yellow-500">{'★'.repeat(testimonial.rating)}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.feedback}</p>
          </div>
        ))}
        </div> */}
        </>
    )
} 