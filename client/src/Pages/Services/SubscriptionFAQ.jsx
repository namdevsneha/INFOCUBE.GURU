import React, { useState } from "react";
import arrow from '../../Assets/Images/ArrowDown.webp'
import './subscription.css';
const faq=[
    {
        question: "1. Who are these counseling programs for?",
        answer:<span>These programs are designed for students from school, high school, and undergraduate levels who need guidance in choosing the right career path, college, or opportunities for further education.</span>
    },
    {
        question: "2. What is the difference between the one-session and multi-session programs?",
        answer:<span>
            <ul className="list-roman-left">
                <li>
                One Session: Ideal for quick guidance or resolving a specific query.
                </li>
                <li>
                3-Session Package: Best for students who need detailed guidance and help exploring multiple career or academic options.
                </li>
                <li>
                5-Session Package: Perfect for those seeking an in-depth roadmap, ongoing mentorship, and long-term support throughout their journey.
                </li>
            </ul>
        </span>
    },
    {
        question: "3. What can I expect from the FREE Discovery Call?",
        answer:<span>
            The free discovery call is a 15-20 minute session where you can:
            <ul className="list-roman-left"> 
                <li>
                Get answers to your immediate questions.
                </li>
                <li>
                Learn about our counseling process.
                </li>
                <li>
                Decide which program best suits your needs
                </li>
            </ul>
        </span>
    },
    {
        question: "4.How do I book a session?",
        answer:<span>
            Booking is simple!
            <ol className="list-decimal-left">
                <li>
                Scroll up and choose your preferred program.
                </li>
                <li>
                Click on the “Book Now” button.
                </li>
                <li>
                Complete the form and make the payment to confirm your slot.
                </li>
            </ol>
        </span>
    },
    {
        question: "5. What happens after I book a session?",
        answer:<span>
            Once you book:
            <ul className="list-roman-left"> 
                <li>
                You’ll receive an email confirmation with the session details.
                </li>
                <li>
                Our counselor will connect with you to schedule the session at a convenient time.
                </li>
            </ul>
        </span>
    },
    {
        question: "6. Are the sessions conducted online or in-person?",
        answer:"All sessions are conducted online to ensure flexibility and accessibility, regardless of your location."
    },
    {
        question: "7. Can I reschedule my session?",
        answer:"Yes, you can reschedule your session by informing us at least 24 hours in advance. Please contact us at [support email/contact number] to make changes."
    },
    {
        question: "8. What if I don't find value in the session?",
        answer:"We are confident in our services, but if you feel the session didn’t meet your expectations, reach out to us. Your feedback helps us improve."
    },
    {
        question: "9. How do I prepare for the session?",
        answer:<span>
            <ul className="list-roman-left">
                <li>
                List down your queries and goals beforehand.
                </li>
                <li>
                Have your academic details and any relevant documents ready if needed.
                </li>
                <li>
                Ensure a quiet space and a stable internet connection for the session.
                </li>
            </ul>
        </span>
    },
    {
        question: "10. Can parents or guardians join the session?",
        answer:"Absolutely! Parents or guardians can join if they’d like to understand the guidance and contribute to the decision-making process."
    }
]

export default function FAQ(){
    const [selected,setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div className="flex flex-col gap-[5vw] w-[83.125vw] p-[.52vw]">
            <h1 className="text-h3Text font-bold text-center">Frequently Asked Questions</h1>
            <div>
                {faq.map((item,index)=>{
                    return(
                        <div className=" text-mediumText gap-[1vw]">
                            <div className="flex flex-row">
                            <h2 className="font-bold">{item.question}</h2>
                            <img className={`my-auto ml-auto transform transition-transform duration-300 ${selected==index ?"rotate-180":" "} w-[1.042vw] cursor-pointer h-[.625vw]` } src={arrow} onClick={()=>toggle(index)} alt="arrow" />
                            </div>
                            <div className={`${selected==index ?"content show":"content"}`}>
                            <p className="">{item.answer}</p>

                            </div>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}