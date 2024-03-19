import React from 'react';

export default function ImageComponent(){
    return (

<div className="w-full relative overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[4rem] box-border gap-[2.813rem] text-center text-[3rem] text-black font-roboto">
<div className="w-[48rem] flex flex-col items-center justify-start gap-[1.5rem]">
<b className="self-stretch relative leading-[120%]">Image Gallery</b>
<div className="self-stretch relative text-[1.125rem] leading-[150%]">Capturing Moments of Community Events and Interactions</div>
</div>

<div className="w-full relative flex flex-row items-start justify-start gap-[2rem]">
<div className="flex flex-col items-start justify-start gap-[2rem]">
<img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" alt="first" src="Placeholder / Image.png" />
<img className="w-[40rem] relative h-[26.625rem] object-cover" alt="Second" src="Placeholder / Image.png" />
</div>
<div className="flex-1 flex flex-col items-start justify-start gap-[2rem]">
<img className="w-[40rem] relative h-[26.625rem] object-cover" alt="Third" src="Placeholder / Image.png" />
<img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" alt="Fourth" src="Placeholder / Image.png" />
</div>
</div>


</div>)
}