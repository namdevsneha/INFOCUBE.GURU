import './faq.css';
import React,{useState} from 'react';
import FAQImg from '../../../Assets/Images/FAQ.svg'
import Arrow from '../../../Assets/Images/ArrowDown.svg'
export default function FAQ(){
    const [selected,setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className='m-4 w-full relative bg-white text-left text-[1.5rem] text-black font-roboto'>
            <div className='flex justify-center'>
                <img className="center w-[37rem] h-[23.875rem] object-cover" alt="" src={FAQImg} />
                </div>
        			<div className='m-8'>
                    {data.map((item,i)=>(
                    <div className='item'>
                        <div className='title' onClick={()=>toggle(i)} >
                            <h2>{item.question}</h2>
                            <img className={selected==i ?"rotate-180":"+"}  alt="" src={Arrow} />
                            </div> 
                        <div className={selected==i ?"content show":"content"}>{item.answer}</div>

                    </div>
                ))}

                    </div>
        </div>
    )
}

const data=[{question:'1. What is Infocube ?',
answer:'Infocube is a platform designed to provide students a one stop solution to all their serach of information it is desgined to provide students a community of the similar minds that students need to grow in there careers'},
{question:'2. How do I download and install Infocube ?',
answer:'You can download and install Infocube from the website. Soon we will be available on google play store and app store.'},
{question:'3. Will Infocube be available for both iOS and Android devies?',
answer:'Yes, Infocube will be available for both iOS and Android Devies. You can download it from the web for iOS and Android.'},
{question:'4. Do I need to create an account to use Infocube?',
answer:'Yes, In order to access certain features and personalized content, you will need to create an account. It\'s quick and easy process, and your information will be kept secure.'},
{question:'5 How do I reset my password if I forget it?',
answer:'To reset your password, go to the login page and click on the "Forgot Password" or "Reset Password" link. Follow the instruction sent to your registered email to create a new passowrd.'},
{question:'6 How can I contact customer support for assistance?',
answer:'We are here to help with any questions or issues you may have.'}]