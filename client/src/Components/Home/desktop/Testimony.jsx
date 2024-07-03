import React,{useRef} from "react";
import Star from "../../../Assets/Images/Star.webp"
import ImagePlaceHolder from "../../../Assets/Images/ImagePlaceholder.webp";
import RightArrowBtn from "../../../Assets/Images/RightArrowBtn2.webp";
import LeftArrowBtn from "../../../Assets/Images/LeftArrowBtn2.webp";
import Testimonoial1 from '../../../Assets/Images/Testimonial1.jpg';
import Testimonoial2 from '../../../Assets/Images/Testimonial2.jpg';
import Testimonoial3 from '../../../Assets/Images/Testimonial3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





export default function Testimonial(){
  const slider = React.useRef(null);
          
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
            ]
          };

    return (
        <div className="w-auto relative pb-[5rem] overflow-hidden text-center  text-black font-roboto" style={{paddingLeft :`${0.0813*innerWidth-11.43}px`,paddingRight:`${0.0813*innerWidth-11.43}px`}}>

  <div className="   w-auto grid grid-cols-12  ">
    <button className= " col-span-1 place-self-center "
    onClick={() => slider?.current?.slickPrev()}>
      <img  style={{height:`${0.0178*innerWidth+13.7143}px`}} src={LeftArrowBtn}/>
      </button>          
  <div className=" col-span-10  ">

  <Slider  ref={slider} {...settings} >
      <div className="pb-8">
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start " style={{gap:`${0.013393*innerWidth+6.285714}px`}}>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        </div>
        <div  style={{width:`${0.491071*innerWidth+57.143}px`}}>
        <b className="self-stretch relative leading-[140%] whitespace-pre-wrap" style={{fontSize:`${0.00893*innerWidth+6.864}px`}}>I had an amazing experience with this career counselling website! The counsellors were
          knowledgeable and provided tailored advice that really helped me focus on my strengths and interests. I highly recommend this service to anyone unsure about
            their career path.</b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left ">
        <img className="relative rounded-[50%]  object-center object-cover" style={{width:`${0.008929*innerWidth+38.857143}px`, height:`${0.008929*innerWidth+38.857143}px`}} alt="" src={Testimonoial1} />
        <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%] font-semibold" style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>Om Dubey</div>
        <div className="relative leading-[150%]" style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>10th, Student</div>
        </div>
        </div>
        </div>
      </div >


      <div className="pb-8">
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start " style={{gap:`${0.013393*innerWidth+6.285714}px`}}>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        </div>
        <div  style={{width:`${0.491071*innerWidth+57.143}px`}}>
        <b className="self-stretch relative leading-[140%] whitespace-pre-wrap" style={{fontSize:`${0.00893*innerWidth+6.864}px`}}>This college counselling website was a 
          game-changer for my university application process. The team provided insightful guidance on college selections, helped refine my essays, and offered valuable tips 
          for interviews. I got into my dream college, and I couldn't be happier!</b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left ">
        <img className="relative rounded-[50%]  object-center object-cover" style={{width:`${0.008929*innerWidth+38.857143}px`, height:`${0.008929*innerWidth+38.857143}px`}} alt="" src={Testimonoial2} />
        <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%] font-semibold" style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>Prateek Mandloi</div>
        <div className="relative leading-[150%]" style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>12th, Student</div>
        </div>
        </div>
        </div>
      </div >

      <div className="pb-8">
            <div className="overflow-hidden shrink-0 flex flex-col items-center justify-start " style={{gap:`${0.013393*innerWidth+6.285714}px`}}>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        <img className="relative h-auto" style={{width:`${0.004464*innerWidth+11.428571}px`}} alt="" src={Star} />
        </div>
        <div  style={{width:`${0.491071*innerWidth+57.143}px`}}>
        <b className="self-stretch relative leading-[140%] whitespace-pre-wrap" style={{fontSize:`${0.00893*innerWidth+6.864}px`}}>I found the college counselling services here 
          very comprehensive. From selecting the right colleges to preparing for entrance exams, the support I received was top-notch. The counsellors were always available to 
          answer my questions and alleviate my concerns.</b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[1.25rem] text-left ">
        <img className="relative rounded-[50%]  object-center object-cover" style={{width:`${0.008929*innerWidth+38.857143}px`, height:`${0.008929*innerWidth+38.857143}px`}} alt="" src={Testimonoial3} />
        <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[150%] font-semibold" style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>Gauri Nigam</div>
        <div className="relative leading-[150%]" style={{ fontSize: `${0.00335*innerWidth+11.568}px` }}>12th, Student</div>
        </div>
        </div>
        </div>
      </div >
</Slider>

</div>

<button className="col-span-1 place-self-center " 
onClick={() => slider?.current?.slickNext()}>
    <img style={{height:`${0.0178*innerWidth+13.7143}px`}} src={RightArrowBtn}/>
    </button> 

</div>
</div>

    )
}