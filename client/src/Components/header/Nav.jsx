import React,{useState} from 'react'
import { X ,ChevronDown} from "lucide-react";
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
// import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';
import profile from '../../Assets/Images/profile.webp'
import RightArrow from '../../Assets/Images/RightArrow2.webp'
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar,closeNav } from '../../Redux/IsOpenSlice';
import { signOutUserFailure,signOutUserStart,signOutUserSuccess } from '../../Redux/userSlice/userSlice';
import { closeDropDown, toogleDropDown } from '../../Redux/userSlice/navDropDown';
import axios from 'axios';
import { baseURL } from '../../url';
import './Nav.css';

export default function Nav  (){
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const isnavDropDownOpen = useSelector((state) => state.navDropDown.isOpen);
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen] = useState(false);

  const handleToggleNavbar = () => {
    if(isNavOpen){
      setIsNavOpen(false);
    dispatch(toggleNavbar());
    dispatch(toggleNavbar());
    }else{
      setIsNavOpen(true);
      dispatch(toggleNavbar());
    }
  };

  const closeNavbar = () => {
    dispatch(closeDropDown());
    dispatch(closeNav());
  };

  const handleToggleProfile = () => {
    if(isProfileOpen){
      setIsProfileOpen(false);
    dispatch(toogleDropDown());
    dispatch(toogleDropDown());
    }else{
      setIsProfileOpen(true);
      dispatch(toogleDropDown());
    }
  };


  const handleSignOut = async () => {
    handleToggleProfile();
    try {
      dispatch(signOutUserStart());
      const res = await axios.get( `${baseURL}/api/auth/signOut`);
      const data = res.data;
      if (data.success === false) {
        console.log(hi);
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(signOutUserFailure(error.message));
    }
  };

  const renderUserMenu = (size = 'lg') => (
    innerWidth>768?
    <div className='menu-container '>
    <div className='menu-trigger ' onClick={handleToggleProfile}>
    <img className=' rounded-full h-[2.5rem] w-[2.5rem] cursor-pointer overflow-hidden object-cover ' src={currentUser.avatar}/>
    </div>
    
    
    <div id='comment-box' className={`dropdown-menu drop-shadow-4xl drop-shadown-blur-2xl   absolute  bg-gray-300  w-[13rem] top-[3.4rem] lg:top-[3.5rem]
      rounded-[5px] py-[10px] px-[20px] text-black ${isnavDropDownOpen?'active':'inactive'}` } style={{right:`${0.0813 * innerWidth - 11.43}px`}}>
      <div className='flex items-center  gap-[5px]'>
      <img className=' rounded-full h-[2.5rem] w-[2.5rem]  overflow-hidden ' src={currentUser.avatar}/>
      <h3 className='text-[1rem] h-[1.5rem]  overflow-hidden'>Hi,<span>{currentUser.username}</span>   </h3>
      </div>
      <ul>
      <KLink to="Profile">
        <button className='w-full' onClick={handleToggleProfile}>
        <DropDownItem  text={"Profile"}/>
        </button>
        </KLink>
        <li>
          <div className='border-[.1px] m-auto w-[9rem]  border-black'></div>
        </li>
        <button onClick={handleSignOut} className='w-full'>
        <DropDownItem  text={"Logout"}/>
         </button>
      </ul>
      </div>

    </div>
    :
    <div className='menu-container '>
              <div className='menu-trigger ' onClick={handleToggleProfile}>
              <img className=' rounded-full h-[1.875rem] w-[1.875rem] cursor-pointer overflow-hidden ' src={currentUser.avatar}/>
              </div>
              
              
              <div id='comment-box' className={`dropdown-menu drop-shadow-4xl drop-shadown-blur-2xl   absolute  bg-gray-300  w-[9rem] top-[3rem] 
                rounded-[5px] py-[5px] px-[10px]  text-black ${isnavDropDownOpen?'active':'inactive'}`} style={{right:`${0.038 * innerWidth - 0.6239}px`}}>
                <div className='flex items-center  gap-[5px]'>
                <img className=' rounded-full h-[1.875rem] w-[1.875rem]  overflow-hidden ' src={currentUser.avatar}/>
                <h3 className='text-[.75rem] h-[1.3rem]  overflow-hidden'>Hi,<span>{currentUser.username}</span>   </h3>
                </div>
                <ul>
                <KLink to="Profile">
                  <button className='w-full text-[.75rem]' onClick={handleToggleProfile}>
                  <DropDownItem  text={"Profile"}/>
                  </button>
                  </KLink>
                  <li>
                    <div className='border-[.1px] m-auto w-[6rem]  border-black'></div>
                  </li>
                  <button onClick={handleSignOut} className='w-full text-[.75rem]'>
                  <DropDownItem  text={"Logout"}/>
                   </button>
                </ul>
                </div>
        
              </div>
  );

  const renderAuthButtons = () => (
    innerWidth>768?<div>
    <KLink to='SignUp'>
    <button className='rounded-xl w-[4.5rem] lg:w-[6rem] py-[.4rem] px-[.4rem] lg:py-[.5rem] lg:px-[.5rem] font-roboto mr-[5px] lg:mr-[10px] border-[1px]
       border-solid border-black
     text-[10px] md:text-[14px] lg:text-[16px]'>Sign UP</button>
    </KLink>
    <KLink to='Login '>
    <button className='w-[4.5rem] lg:w-[6rem] text-white font-roboto border-[1px] py-[.4rem] px-[.4rem] lg:py-[.5rem] lg:px-[1.25rem]  border-solid border-darkslategray rounded-xl 
    bg-graybutton box-border items-center justify-center md:text-[14px] lg:text-[16px]'>Login</button> 
    </KLink>
  </div>:
  <KLink to='Login'>
  <button className='h-[1.5rem] text-white font-normal font-roboto border-[1px] my-[0.1rem] py-[0.262rem] px-[1rem] text-left text-[0.525rem]
   border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center  '>Login</button> 
</KLink>
  );

  const renderNavLinks = () => (
    <div className=''>
      {/* {links.map((link, index) => (
        <ScrollLink
          key={index}
          to={link.to}
          spy={true}
          smooth={true}
          duration={link.duration}
          offset={link.offset}
          className="navlink"
        >
          {link.text}
        </ScrollLink>
      ))} */}
    </div>
  );

  return (
    <div>
      <nav className="flex shrink items-center overflow-hidden">
        <div onWheelCapture={closeNavbar} className="hidden justify-end items-center md:flex md:gap-2 lg:gap-4 gap-1">
          <Navlink />
          {currentUser && currentUser.username ? renderUserMenu() : renderAuthButtons()}
        </div>

        <div className="flex justify-between md:hidden">
          <button className="h-[1.5rem] mt-[.25rem]" onClick={handleToggleNavbar}>
            {isOpen ? <X /> : <ChevronDown />}
          </button>
          {currentUser && currentUser.username ? renderUserMenu('sm') : renderAuthButtons()}
        </div>
      </nav>

    {isOpen && (
      renderNavLinks()
    )}
    </div>
  );
};

const links = [
  { to: '/#About', text: 'ABOUT US', duration: 1000, offset: 10 },
  { to: '/#Alumni', text: 'ALUMNI', duration: 800, offset: 50 },
  { to: 'Feedback', text: 'FEEDBACK', duration: null, offset: null },
  { to: 'Help', text: 'HELP & SUPPORT', duration: null, offset: null },
];

const Navlink = () => {
  const dispatch = useDispatch();
  const handleLinkClick = () => {
    dispatch(closeDropDown());
  };
  const fontSize = window.innerWidth < 1023 ? `${0.0012345679 * window.innerWidth + 11.5362962963}px` : `${0.00357142857 * window.innerWidth + 9.14285716}px`;

  return (
    <nav className="navlink-container" style={{ fontSize }}>
      {links.map((link, index) => (
        link.duration ?
          <KLink
            key={index}
            onClick={handleLinkClick}
            to={link.to}
            spy={true}
            smooth={true}
            duration={link.duration}
            offset={link.offset}
            className="navlink "
          >
            {link.text}
          </KLink>
          :
          <KLink
            key={index}
            onClick={handleLinkClick}
            to={link.to}
            className="navlink "
          >
            {link.text}
          </KLink>
      ))}
    </nav>
  );
}


function DropDownItem(props){
  return(
    <li  className=' dropdownItem  items-center font-roboto  w-full md:text-[1rem] lg:text-[1rem] flex my-[2px] md:my-[.75rem]  '>
      <a className='mr-auto'>{props.text}</a>
      
      <img style={{fontWeight:'bold',scale:'.6'}} className='' src={RightArrow}></img>
    </li>
  )
}