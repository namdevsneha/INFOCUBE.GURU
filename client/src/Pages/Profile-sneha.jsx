import React from 'react'
import avatar from '../Assets/Images/avatar.svg';
import polygon from '../Assets/Images/polygon.svg';
import edit from '../Assets/Images/edit.svg';

export default function Profile() {
  return (
    <>
    <div className='ml-[6rem]'>
      <div className='flex '>

        <div className=' flex flex-col basis-1/2 font-lato-thin text-[5rem] font-thin justify-center gap-[4rem] '>
          <div>
          <div>
          <span className=''>Hey,</span>
          <span>{' '}</span>
          <span className='text-[6rem] font-bold'>Divyansh</span>
          </div>

          <div>
          <span>Here's</span>
          <span>{' '}</span>
          <span>Your</span>
          <span>{' '}</span>
          <span className=' font-bold text-purplefont'>Profile</span>
          </div>
          </div>

          <div className=' relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] ' >
        <div className='flex justify-between text-dimgray px-4 border-solid border-b-[1px] border-grey content-center'>
        <div>Personal Info</div>
        <div className='flex items-end'>
        <img src={edit}/>
        <div>Edit</div>
        </div>
        </div>

        <div className='grid grid-cols-4 justify-start gap-[4rem] pt-[4rem]'>
          
          <div className=''>
            <div className='text-dimgray'>Name</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Divyansh Nigam</div>
          </div>
          <div>
            <div className='text-dimgray'>Gender</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Male</div>
          </div>
          <div>
            <div className='text-dimgray'>Date of Birth</div>
            <div className='pt-2 font-bold text-[1.1rem]'>10/05/2006</div>
          </div>
          <div>
            <div className='text-dimgray'>Country</div>
            <div className='pt-2 font-bold text-[1.1rem]'>India</div>
          </div>
          <div>
            <div className='text-dimgray'>State</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Madhya Pradesh</div>
          </div>
          <div>
            <div className='text-dimgray'>City</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Bhopal</div>
          </div>
        </div>
      </div>

        </div>


        <div className='basis-1/2 flex relative w-full flex-col  items-end'>
          <img className="object-cover relative " alt='Profile' src={polygon}/>

          <div className='absolute top-8 right-20 flex justify-center items-center '>
          <div className='object-cover overflow-hidden rounded-full h-[18rem] w-[18rem]  bg-purple'>
          <img className='' alt='Profile' src={avatar}/>
          </div>
          </div>

        </div>

      </div>


      


      <div className='flex flex-row  mb-[4rem] gap-[5rem] '>
        <div className=' relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] basis-1/2' >
          <div className='flex justify-between text-dimgray px-4 border-solid border-b-[1px] border-grey content-center'>
          <div>Education</div>
          <div className='flex items-end'>
          <img src={edit}/>
          <div>Edit</div>
          </div>
          </div>

          <div className='grid grid-cols-4 justify-start gap-[4rem] pt-[4rem]'>
            <div>
              <div className='text-dimgray'>Profession</div>
              <div className='pt-2 font-bold text-[1.1rem]'>Student</div>
            </div>
            <div>
              <div className='text-dimgray'>Current Education</div>
              <div className='pt-2 font-bold text-[1.1rem]'>Under Graduate</div>
            </div>
            <div>
              <div className='text-dimgray'>Course(if applicable)</div>
              <div className='pt-2 font-bold text-[1.1rem]'>B.tech</div>
            </div>
            <div>
              <div className='text-dimgray'>Stream</div>
              <div className=' pt-2 font-bold text-[1.1rem]'>PCM</div>
            </div>
            

            <div className='text-dimgray'>Fields Of Interest</div>
          </div>

        </div>

        <div className=' relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] basis-1/3  ' >
          <div className='flex justify-between text-dimgray px-4 border-solid border-b-[1px] border-grey content-center'>
          <div>Contact Info</div>
          <div className='flex items-end'>
          <img src={edit}/>
          <div>Edit</div>
          </div>
          </div>

          <div className='flex flex-col justify-start  py-[3rem]'>
          <div>
              <div className='text-dimgray'>Email</div>
              <div className='text-[1.1rem] pt-2 font-bold'>nigamdivyansh2004@gmail.com</div>
          </div>

          <div className='flex flex-row pt-[4rem] gap-[4rem] justify-between '>
          <div>
              <div className='text-dimgray'>Contact</div>
              <div className='font-bold text-[1.1rem] pt-2 '>9098652348</div>
          </div>

          <div>
              <div className='text-dimgray'>Linked In</div>
              <div className='font-bold text-[1.1rem] pt-2 '>http://linked.com</div>
          </div>
          </div>

          </div>
          </div>
      </div>
      </div>
    </>
  )
}
 