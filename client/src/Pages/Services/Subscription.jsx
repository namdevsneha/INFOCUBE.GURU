import React from 'react';
import subscriptionIllustration from './../../Assets/Images/subscriptionIllustration.png'
import callProgram from '../../Assets/Images/CallProgram.png';
import './subscription.css';
import FAQ from './SubscriptionFAQ';
export default function Subscription() {
    return (
        <div className='flex flex-col gap-[6vw] ml-[8.4375vw]   mt-[2.3rem] md:mt-[3rem] lg:mt-[3rem] mb-[8.25vw] font-poppins cursor-default'>
            <div className=' flex flex-row items-center'>
                <div className='w-[34.1146vw] mt-[-84px] flex flex-col gap-[4.3vw] '>
                    <p className='  font-bold'>
                        <h2 className='leading-[120%] text-h2Text'>
                        Unlock Your <span className=' text-darkorchid'>Future:</span> Choose Your <span className='text-darkorchid'>Personalized Counseling Program</span>
                        </h2>
                        <p className='leading-[150%] text-mediumText'>
                        Ready to turn your career dreams into reality? Let’s get started!
                        </p>
                    </p>
                    <p className='text-h7Text leading-[120%]'>
                    Explore our tailored counseling programs designed to guide you every step of the way. Whether you’re seeking clarity in one session or a comprehensive roadmap with multiple sessions, we’ve got the perfect solution for you.
                    </p>
                    <button className='text-white text-regularText leading-[150%] text-center rounded-[1.5vw] w-[11vw] px-[1.5vw] py-[.75vw] bg-graybutton'>
                        Explore
                    </button>
                </div>
                <img className='ml-auto w-[56.5625vw] h-auto' src={subscriptionIllustration}/>
            </div>
            <div className='flex flex-col w-[83.75vw] mb-[8.25vw] gap-[5vw] '>
                <h2 className='text-h4Text font-bold text-center leading-[120%]'>
                    Let's get started!
                </h2>
                <div className='flex flex-row justify-around'>
                    <div className='flex flex-col justify-evenly items-center bg-[rgba(138,_49,_200,_0.6)] w-[53.33vw] h-[55.73vw] shadow-[0px_.21vw_.84vw_0px_rgba(0,_0,_0,_1)] rounded-[1.5625vw]'>
                        <div className='flex flex-row w-[52.29vw] h-[17.6vw] bg-white shadow-[0px_.21vw_.21vw_0px_rgba(0,_0,_0,_.25)] px-[1.51vw] py-[1.5vw] lg:py-[2.08vw] rounded-[1.5625vw]'>
                            <div className='h-full flex flex-col justify-between overflow-hidden w-full '>
                                <div className=''>
                                    <h2 className=' text-h3Program font-bold leading-[120%] '>
                                        One-on-One Power Session
                                    </h2>
                                    <span className=' text-extraSmallText leading-[120%]'>Book Now to Gain Clarity in Just One Session!</span>
                                </div>
                                <p className=''>
                                    <h6 className='mb-[1vw] text-mediumText leading-[120%] font-bold '>What you'll get:   </h6>
                                    <ul className=' text-mediumText leading-[120%] list-disc list-inside'>
                                        <li>
                                        Expert advice from seasoned counselors.
                                        </li>
                                        <li>
                                        Clear, actionable steps tailored to your goals.
                                        </li>
                                        <li className='overflow-hidden text-ellipsis'>
                                        A focused discussion to empower your next steps.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div className='h-full flex flex-col justify-between relative ml-auto'>
                                <h2 className='ml-auto font-bold leading-[100%] text-h1Text'><span className='text-h7Text'>₹</span> 599</h2>
                                <button className=' font-bold text-white text-regularText leading-[150%] text-center rounded-[1.5vw] w-[11vw] px-[1.5vw] py-[.75vw] bg-graybutton'>
                                    Explore
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row w-[52.29vw] h-[17.6vw] bg-white shadow-[0px_.21vw_.21vw_0px_rgba(0,_0,_0,_.25)] px-[1.51vw] py-[1.5vw] lg:py-[2.08vw] rounded-[1.5625vw]'>
                            <div className='h-full flex flex-col justify-between overflow-hidden w-full '>
                                <div className=''>
                                    <h2 className='text-h3Program font-bold leading-[120%] '>
                                    Comprehensive 3-Session
                                    </h2>
                                    <span className='text-extraSmallText leading-[120%]'>Book Now and Stay Ahead of the Competition!</span>
                                </div>
                                <p className=''>
                                    <h6 className='mb-[1vw] text-mediumText leading-[120%] font-bold '>What you'll get:   </h6>
                                    <ul className=' text-mediumText leading-[120%] list-disc list-inside'>
                                        <li>
                                        Expert advice from seasoned counselors.
                                        </li>
                                        <li>
                                        Clear, actionable steps tailored to your goals.
                                        </li>
                                        <li className='overflow-hidden text-ellipsis'>
                                        A focused discussion to empower your next steps.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div className='h-full flex flex-col justify-between relative ml-auto'>
                                <h2 className='ml-auto font-bold leading-[100%] text-h1Text'><span className='text-h7Text'>₹</span> 1299</h2>
                                <button className=' font-bold text-white text-regularText leading-[150%] text-center rounded-[1.5vw] w-[11vw] px-[1.5vw] py-[.75vw] bg-graybutton'>
                                    Explore
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row w-[52.29vw] h-[17.6vw] bg-white shadow-[0px_.21vw_.21vw_0px_rgba(0,_0,_0,_.25)] px-[1.51vw] py-[1.5vw] lg:py-[2.08vw] rounded-[1.5625vw]'>
                            <div className='h-full flex flex-col justify-between overflow-hidden w-full '>
                                <div className=''>
                                    <h2 className='text-h3Program font-bold leading-[120%] '>
                                    All-Inclusive 5-Session Package
                                    </h2>
                                    <span className='text-extraSmallText leading-[120%]'>Book Now to Invest in Your Future!</span>
                                </div>
                                <p className=''>
                                    <h6 className='mb-[1vw] text-mediumText leading-[120%] font-bold '>What you'll get:   </h6>
                                    <ul className=' text-mediumText leading-[120%] list-disc list-inside'>
                                        <li>
                                        Expert advice from seasoned counselors.
                                        </li>
                                        <li>
                                        Clear, actionable steps tailored to your goals.
                                        </li>
                                        <li className='overflow-hidden text-ellipsis'>
                                        A focused discussion to empower your next steps.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div className='h-full flex flex-col justify-between relative ml-auto'>
                                <h2 className='ml-auto font-bold leading-[100%] text-h1Text'><span className='text-h7Text'>₹</span> 1999</h2>
                                <button className=' font-bold text-white text-regularText leading-[150%] text-center rounded-[1.5vw] w-[11vw] px-[1.5vw] py-[.75vw] bg-graybutton'>
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-darkorchid px-[2.92vw] flex flex-col justify-center rounded-[1.5625vw] w-[28.84vw] h-[55.73vw] shadow-[0px_.21vw_.84vw_0px_rgba(0,_0,_0,_1)]' style={{ boxShadow: '0px 4px 16px 0px #000' }}>
                        <img className='absolute top-[3.85vw] w-[2.6vw] h-auto' src={callProgram}/>
                        <div className='text-white  flex flex-col gap-[1.67vw]'>
                            <h3 className='text-h4Text font-bold text-center leading-[120%]'>
                                Get a free briefing session with us.
                            </h3>
                            <span className='text-center font-bold leading-[120%] text-0Text'>0<span className='leading-[120%] text-h4Text'>₹</span></span>
                            <div className='p-[.52vw]'>
                                <p className='font-bold list-inside text-h4Program leading-[120%]'>
                                    Let's Discuss Your Queries
                                    <ul className='mt-[.52vw] list-roman-left font-normal text-regularText  leading-[120%] list list-disc'>
                                        <li className='ml-[.52vw]'>
                                            Get answers to your questions.
                                        </li>
                                        <li className='ml-[.52vw]'>
                                            Understand how our counseling works.
                                        </li>
                                        <li className='ml-[.52vw]'>
                                            Discover the best program for your needs.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <button className='mx-auto text-black font-bold text-regularText leading-[150%] text-center rounded-[1.5vw] w-[18.90625vw] h-[3.18vw] px-[1.5vw] py-[.75vw] bg-white'>
                                BOOK A CALL
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <FAQ/>
        </div>
    )
}
