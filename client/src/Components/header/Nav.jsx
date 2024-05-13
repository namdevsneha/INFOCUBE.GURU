import React,{useState} from 'react'
import { X ,ChevronDown} from "lucide-react";
// import { Link } from 'react-router-dom';
// import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';
import profile from '../../Assets/Images/profile.png'
import logout from '../../Assets/Images/logout.png'
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar,closeNav } from '../../Redux/IsOpenSlice';
import { signOutUserFailure,signOutUserStart,signOutUserSuccess } from '../../Redux/userSlice/userSlice';

export default function Nav() {
    const isOpen = useSelector((state) => state.navbar.isOpen);
    const [open,setOpen]=useState(false);
    const dispatch = useDispatch();
    const {currentUser}=useSelector((state)=>state.user)


    const handleToggleNavbar = () => {
      dispatch(toggleNavbar());
    };
    const closeNavbar = () => {
      dispatch(closeNav());
    };

    const handleSignOut=async()=>{
      try{
        dispatch(signOutUserStart());
        const res=await fetch('/api/auth/signOut');
        const data=res.json();
        if(data.success===false){
          dispatch(signOutUserFailure(data.message));
          return;
        }
        dispatch(signOutUserSuccess(data));
      }catch(error){
        dispatch(signOutUserFailure(error.message))
      }
    }

  return (
    <>
    <nav className=' flex shrink items-center overflow-hidden  '>
        <div className="hidden justify-end items-center md:flex  md:gap-2 lg:gap-4 gap-1 ">
            <Navlink />
            {currentUser?(
               <div>
               
               <div className='menu-container '>
                <div className='menu-trigger ' onClick={()=>{setOpen(!open)}}>
                <img className=' rounded-full h-[2.5rem] w-[2.5rem] cursor-pointer overflow-hidden ' src={currentUser.avatar}/>
                </div>
                <div className={`dropdown-menu absolute border-5 border-solid border-red-200 border-t bg-white w-[13rem] top-[3.1rem] lg:top-[3.1rem] md:right-[5rem] rounded-[20px] py-[10px] px-[20px] lg:right-[10rem] ${open?'active':'inactive'}`}>
                  <h3 className='text-[1rem]'>Hi, <span>User</span>  </h3>
                  <ul>
                  <KLink to="Profile">
                    <DropDownItem img={profile} text={"Profile"}/>
                    </KLink>
                    <button onClick={handleSignOut} className='w-full'>
                    <DropDownItem  img={logout} text={"Logout"}/>
                     </button>
                  </ul>
                  </div>
                </div>
             </div>
            ):(
              <div>
                <KLink to='SignUp'>
                <button className='rounded-xl py-[.4rem] px-[1rem] lg:py-[.5rem] lg:px-[1.25rem] font-roboto mr-[10px] lg:mr-[16px] border-[1px]
                   border-solid border-black
                 text-[10px] md:text-[14px] lg:text-[16px]'>Sign UP</button>
                </KLink>
                <KLink to='Login '>
                <button className=' text-white font-roboto border-[1px] py-[.4rem] px-[1rem] lg:py-[.5rem] lg:px-[1.25rem]  border-solid border-darkslategray rounded-xl 
                bg-graybutton box-border items-center justify-center md:text-[14px] lg:text-[16px]'>Login</button> 
                </KLink>
              </div>
            )
            }
            
            
        </div>

        <div className="flex  justify-between md:hidden">
          <button className='h-[1.5rem] mt-[.25rem]' onClick={handleToggleNavbar}>{isOpen ? <X /> : <ChevronDown />}</button>
          {
            currentUser?
            (
               <div className='menu-container '>
                <div className='menu-trigger ' onClick={()=>{setOpen(!open)}}>
                <img className=' rounded-full h-[1.875rem] w-[1.875rem] cursor-pointer overflow-hidden ' src={currentUser.avatar}/>
                </div>
                <div className={`dropdown-menu absolute bg-white w-[10rem] top-[2.5rem] right-[2.5rem] rounded-[20px] py-[.5rem] px-[1rem]  ${open?'active':'inactive'}`}>
                  <h3 className='text-[.6rem]'>Hi,<span>User</span>  </h3>
                  <ul>
                    <KLink to="Profile">
                    <DropDownItem img={profile} text={"Profile"}/>
                    </KLink>
                    
                    <button onClick={handleSignOut} className='w-full'>
                    <DropDownItem  img={logout} text={"Logout"}/>
                     </button>
                  </ul>
                  </div>
                </div>
            
          ):
            (<KLink to='Login'>
            <button className='h-[1.5rem] text-white font-normal font-roboto border-[1px] my-[0.1rem] py-[0.262rem] px-[1rem] text-left text-[0.525rem]
             border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center  '>Login</button> 
          </KLink>)
          }
          
        </div>
    </nav>

    {isOpen && (
            <div onWheelCapture={closeNavbar} className=' flex gap-1 flex-col items-center basis-full'>
                <Navlink/>
            </div>
    )}
    </>
  )
}

const Navlink = () => {
  
  return(
    <div className="text-[.75rem] md:text-[.8rem] lg:text-[1rem] font-sans items-center ml-[10px]">
    <Link to='About' spy={true} smooth={true} duration={1000} offset={10} className=" mx-[3px] md:mx-[4px] lg:mx-[5px]">ABOUT US</Link>
    
    <Link to='Alumni' spy={true} smooth={true} duration={800} offset={50} className="mx-[3px] md:mx-[4px] lg:mx-[5px]">ALUMNI</Link>
    
    <KLink to='Career' className="mx-[3px] md:mx-[4px] lg:mx-[5px]">CAREER PATH</KLink>
    
    <KLink to='Help' className="mx-[3px] md:mx-[4px] lg:mx-[5px]">HELP & SUPPORT</KLink>
  </div>
  )
}


function DropDownItem(props){
  return(
    <li className='dropdownItem sm:text-[.6rem] md:text-[1rem] lg:text-[1rem] flex my-[.25rem] md:my-[.5rem] mx-auto p-[.25rem] md:p-[.5rem] border-t border-black'>
      <img src={props.img} alt='hey'></img>
      <a>{props.text}</a>
    </li>
  )
}