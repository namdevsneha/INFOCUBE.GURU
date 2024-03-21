import React,{useRef} from "react";
import Star from "../../Assets/Images/Star.svg"
import ImagePlaceHolder from "../../Assets/Images/ImagePlaceholder.png";
import RightArrowBtn from "../../Assets/Images/RightArrowBtn2.svg";
import LeftArrowBtn from "../../Assets/Images/LeftArrowBtn2.svg";

export default function Testimonial(){
    const contentRef = useRef(null);

    const scrollLeft = () => {
      if (contentRef.current) {
        contentRef.current.scrollBy({
          left: -320, 
          behavior: 'smooth',
        });
      }
    };
  
    const scrollRight = () => {
      if (contentRef.current) {
        contentRef.current.scrollBy({
          left: 320,
          behavior: 'smooth',
        });
      }
    };

    return (
        <div className="w-full relative h-[27.681rem] overflow-hidden text-center text-[1.5rem] text-black font-roboto">
<div className="absolute top-[5rem] left-[4rem] w-[82rem] h-[17.681rem]">
<div className="absolute top-[0rem] left-[0rem] w-[82rem] flex flex-row items-center justify-between">
<div className="flex flex-row items-center justify-center p-[0.75rem]">
    <button onClick={scrollLeft}> 
        <img className="overflow-hidden shrink-0" alt="" src={LeftArrowBtn}  />
    </button>

</div>
<div className="w-[48rem] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2rem]">
<div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
</div>
<b className="self-stretch relative leading-[140%] whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</b>
<div className="flex flex-row items-center justify-start gap-[1.25rem] text-left text-[1rem]">
<img className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover" alt="" src={ImagePlaceHolder} />
<div className="flex flex-col items-start justify-start">
<div className="relative leading-[150%] font-semibold">Name Surname</div>
<div className="relative leading-[150%]">Position, Company name</div>
</div>
</div>
</div>
<div className="w-[48rem] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2rem]">
<div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
<img className="w-[1.25rem] relative h-[1.181rem]" alt="" src={Star} />
</div>
<b className="self-stretch relative leading-[140%] whitespace-pre-wrap">I am grateful for the guidance and mentorship I received from this platform. It helped me navigate my career path with confidence.</b>
<div className="flex flex-row items-center justify-start gap-[1.25rem] text-left text-[1rem]">
<img className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover" alt="" src={ImagePlaceHolder} />
<div className="flex flex-col items-start justify-start">
<div className="relative leading-[150%] font-semibold">Name Surname</div>
<div className="relative leading-[150%]">Position, Company name</div>
</div>
</div>
</div>

<div className="flex flex-row items-center justify-center p-[0.75rem]">
    <button onClick={scrollRight}>
        <img className="overflow-hidden shrink-0" alt="" src={RightArrowBtn} />
    </button>

</div>
</div>
<div className="absolute top-[15.931rem] left-[38rem] flex flex-row items-start justify-start p-[0.625rem] gap-[0.562rem]">
<div className="w-[0.5rem] relative rounded-[50%] bg-black h-[0.5rem]" />
<div className="w-[0.5rem] relative rounded-[50%] bg-neutral-gray h-[0.5rem]" />
<div className="w-[0.5rem] relative rounded-[50%] bg-neutral-gray h-[0.5rem]" />
<div className="w-[0.5rem] relative rounded-[50%] bg-neutral-gray h-[0.5rem]" />
<div className="w-[0.5rem] relative rounded-[50%] bg-neutral-gray h-[0.5rem]" />
</div>
</div>
</div>
    )
}