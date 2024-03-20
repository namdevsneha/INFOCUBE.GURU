import React from 'react'
import logo from '../Assets/Images/logo.svg';
import {Link} from 'react-router-dom';
import Alumini from '../Pages/Alumini';
import Career from '../Pages/Career';
import Feedback from '../Pages/Feedback';
import Help from '../Pages/Help';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';

export default function Header() {
  return (
    <header>
        <div className='flex justify-between items-center'>

            <Link to={Home}>
             <div className=''>
                <img src={logo}/>
             </div> 
             </Link>
             <ul className='flex items-center justify-items-end gap-4 '>
                <Link to={Alumini}>
                <li className='font-roboto'>ALUMNI</li>
                </Link>

                <Link to={Career}>
                <li className='font-roboto'>CAREER PATH</li>
                </Link>

                <Link to={Feedback}>
                <li className='font-roboto'>FEEDBACK</li>
                </Link>

                <Link to={Help}>
                <li className='font-roboto'>HELP AND SUPPORT</li>
                </Link>

             </ul>

             <Link to={SignUp}>
             <div className=" rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem]">
             <div className="relative leading-[150%] text-white">Login/Sign Up</div>
             </div>
             </Link>

             </div>         
        </header>
  )
}
