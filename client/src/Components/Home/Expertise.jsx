import React from 'react'
import image from '../../Assets/Images/expertise.svg';

export default function Expertise() {
  return (
    
<div className="columns-2">
        {/* remove br while joining components */}
        <br/>

        {/* part 1a */}
    <div>
        <h3 className='font-semibold font-roboto'>Alumini Center</h3>

        <div>
        <h1 className='font-bold font-roboto text-5xl'>Personalized Guidance from Experienced Alumni and Mentors</h1>
        <br/>
        <p className='font-roboto text-justify'>Our platform connects you with knowledgeable alumni and mentors who provide personalized guidance in various fields. Benefit from their expertise and experience to navigate your career path with confidence.</p>
        </div>

        {/* part 1b */}
        <div className='columns-2'>
            <div>
                <h1 className='font-roboto text-3xl'>Expertise</h1>
                <p className='font-roboto'>Tap into the expertise of our alumni and mentors to gain valuable insights and advice.</p>
            </div>

            <div>
                <h1 className='font-roboto text-3xl'>Support</h1>
                <p className='font-roboto'>Our community is always available to provide support and assistance whenever you need it.</p>
            </div>
        </div>
    </div>

    {/* part 1c buttons */}
    <div>
        <button className='rounded border-current'>Join</button>
        <button>Learn More</button>
    </div>

{/* part 2 */}
    <div>
        <img className="" src={image} alt=""/>
    </div>
</div>
  )
}
