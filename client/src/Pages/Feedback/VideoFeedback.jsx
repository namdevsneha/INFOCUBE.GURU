
import React,{useState} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from 'date-fns';

import starColoured from "../../Assets/Images/StarColoured.webp";
import starUncoloured from "../../Assets/Images/StarUncoloured.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const reviewTitle={
    '1':"Poor",
    '2':"Fair",
    '3':"Good",
    '4':"Very Good",
    '5':"Awesome"
  }



const testimonials = [{
    avatar : "https://firebasestorage.googleapis.com/v0/b/infocube007.appspot.com/o/1727684266904Expertise.png?alt=media&token=3411aac7-fa5a-448d-9322-033a9b138a0f",
    date : "2024-09-29T16:43:43.778Z",
    feedback : "well done great job",
    name : "Utkarsh Saxena",
    rating : "3"   
},
    {
    avatar: "https://firebasestorage.googleapis.com/v0/b/infocube007.appspot.com/o/1726812254434snapedit_1726731692866.jpeg.png?alt=media&token=f6e453cf-2fb1-4543-b917-292f0be85359",
    date: "2024-09-20T06:05:59.106Z",
    feedback: "Earlier, I was very tense about my college and counselling process, but when I met Infocube, they made my life easy by helping at every level with personal guidance of 24 hours and also helped me in my career level guidance as well. Their call support helped me a lot during counselling rounds, and they were with me till the last of my counselling when I got the best college. ",
    name: "Ansh Gupta ",
    rating: "3"
    }, 
    {
    avatar : "https://firebasestorage.googleapis.com/v0/b/infocube007.appspot.com/o/avatar.webp?alt=media&token=df235cd7-f248-4bd7-bb19-39e464b37622",
    date: "2024-09-20T05:51:07.497Z",
    feedback: "Had a great experience with all the team members they helped me a lot in my counselling to get the best college ",
    name: "Tanish ",
    rating: "3"},
    {
    avatar : "https://firebasestorage.googleapis.com/v0/b/infocube007.appspot.com/o/avatar.webp?alt=media&token=df235cd7-f248-4bd7-bb19-39e464b37622",
    date: "2024-09-20T05:51:07.497Z",
    feedback: "Had a great experience with all the team members they helped me a lot in my counselling to get the best college ",
    name: "Tanish ",
    rating: "3"
},
]
export default function VideoFeedback() {

      
    return (
        <div className=" ">
            <h1 className=" text-center items-center text-h1Text font-poppins font-bold">
          Testimonial
          </h1>
          <div className="relative w-full  flex flex-col  md:flex-row  md:mx-[0px] mt-[32px] mb-[48px]  md:mt-[2vw] md:mb-[6vw]  items-center   justify-center gap-[2vw]">
         

            <div className={`w-[92vw] md:w-[45vw]  h-[60vh] md:max-h-full max-h-[643px] md:h-[47vw]  block md:flex md:flex-col justify-center   `}>
              <VideoTestimonialSlider/>

            </div>
            <div className=" w-[100vw]  md:w-[42vw]     ">
              <TextTestimonialSlider/>
            </div>
          </div>
        </div>
    )
}


const TextTestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full mt-[.5vw] relative   mx-auto h-[350px] md:mt-[0vw] md:h-[45vw] lg:h-[40vw] xl:h-[36vw] py-4 md:p-4">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3} 
        spaceBetween={-300}
        direction={"vertical"}
        loop={true}
        initialSlide={3} 
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)} // Initialize active index
        touchMove={false} // Disable touch swipe
      mousewheel={false} 
      allowTouchMove={false}

        className=" testimonial-slider h-[330px] md:mt-[6vw] lg:mt-[4vw] xl:mt-[3vw]  md:h-[450px] lg:h-[500px] xl:h-[36vw]"
        breakpoints={
          {
            768:{
              slidesPerView:3,
              spaceBetween:-300
            },
            320:{
              spaceBetween:-200,
              slidesPerView:2,
            }
          }
        }
      >
        {testimonials.map((testimonial, index) => {
          // Calculate the center slide (middle one of the 3 visible slides)
          
          const stars = Array(parseInt(testimonial.rating,10)).fill(null); 
          const nostars = Array(5-parseInt(testimonial.rating,10)).fill(null);
          const formattedDate = format(new Date(testimonial.date), 'dd-MM-yyyy');
          var centerIndex=0;
          if(innerWidth>767){  
          centerIndex = (activeIndex + 1) % testimonials.length;
          }else{
          centerIndex = (activeIndex) % testimonials.length;
          }
          return(
          <SwiperSlide className={`mt-[6px] relative md:mt-[0px] block ${index===(centerIndex)?"z-[99]":"z-[1] "}  `} key={index}>
            <div
              className={`w-[75vw] h-[186px] md:w-[27vw] mx-auto bg-white md:h-[18vw]  p-[14.4px] md:p-[1.5vw] rounded-[6px] md:rounded-[.5vw] transition-transform duration-300 ease-in-out ${
                index === centerIndex
                  ? "shadow-[0px_.25vw_3vw_rgba(0,_0,_0,_0.15)] md:shadow-[0px_.25vw_3vw_rgba(0,_0,_0,_0.3)] border-[1px] border-black z-[90]"
                  : "blur-[2px] border-[1px] border-black "
              }`}
              
              style={{
                transform: centerIndex === index ? "scale(1.2) " : "scale(1)",
              }}
            >
              <div className="flex  flex-row">
                
                
              {stars.map((_, index) => ( <img key={index} className="h-[12.2px] w-[12.2px] md:h-[1.24vw] md:w-[1.24vw]" src={starColoured} alt={`star-${index}`}/> ))}
               {nostars.map((_,index)=>( <img key={index} className="h-[12.2px] w-[12.2px] md:h-[1.24vw] md:w-[1.24vw]" src={starUncoloured}/>))} 
                
              </div>
              <div className="my-[12px] md:my-[1vw] lg:my-[1.5vw]"  >
              <h5 className="text-h5Text  font-bold " >{reviewTitle[testimonial.rating] }</h5>
              <p className=" overflow-hidden h-[54.4px] md:h-[5.68vw] text-regularText  text-ellipsis">{testimonial.feedback}</p>
              </div>

              <div className="flex flex-row items-center justify-start text-left md:gap-[.8vw]">
                <img className="relative rounded-[100%]  object-center object-cover h-[24px] w-[24px] md:h-[2.5vw] md:w-[2.5vw]"   alt="" src={testimonial.avatar} />
                <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[140%] text-regularText font-semibold " >{testimonial.name}</div>
                <div className="relative leading-[140%] text-regularText" >{formattedDate}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
})}
      </Swiper>
    </div>
  );
};

const VideoTestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full h-[60vh] md:h-full  md:p-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={-300}
        loop={true}
        initialSlide={3} 
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)} // Initialize active index
        className=" testimonial-slider md:mr-[-10vw] lg:mr-[-5vw] h-[60vh] md:h-[47vw]  "
        touchMove={false} // Disable touch swipe
      mousewheel={false} 
      allowTouchMove={false}

        breakpoints={
          {
            1200:{
              slidesPerView:3,
              spaceBetween:-300
            },
            768:{
              slidesPerView:3,
              spaceBetween:-200
            },
            320:{
              spaceBetween:0,
              slidesPerView:1,
            }
          }
        }
      >
        {testimonials.map((testimonial, index) => {
          // Calculate the center slide (middle one of the 3 visible slides)
          
          const stars = Array(parseInt(testimonial.rating,10)).fill(null); 
          const nostars = Array(5-parseInt(testimonial.rating,10)).fill(null);
          const formattedDate = format(new Date(testimonial.date), 'dd-MM-yyyy');
          var centerIndex=0;
          if(innerWidth>767){  
          centerIndex = (activeIndex + 1) % testimonials.length;
          }else{
          centerIndex = (activeIndex) % testimonials.length;
          }
          console.log(testimonials.length);
          return(
          <SwiperSlide className={`  flex flex-row  items-center md:mt-[0px] ${index===(centerIndex)?"z-[99]":"z-[2] "}  `} key={index}>
            <div
              className={` bg-white w-full  h-[60vh] md:w-[22.5vw]  md:h-[32.625vw]  p-[14.4px] md:p-[2vw] rounded-[3vw] transition-transform duration-300 ease-in-out ${
                index === centerIndex
                  ? "md:shadow-[0px_.25vw_3vw_rgba(0,_0,_0,_0.3)] border-[1px] border-black z-[90]"
                  : "blur-[2px] border-[1px] border-black "
              }`}
              
              style={innerWidth>768?{
                transform: centerIndex === index ? "scale(1.2) " : "scale(1)",
              }:{}}
            >
              <p className=" overflow-hidden h-[54.4px] md:h-[5.68vw] text-regularText  text-ellipsis">{testimonial.feedback}</p>
              

              
            </div>
          </SwiperSlide>
          )
})}
      </Swiper>
    </div>
  );
};