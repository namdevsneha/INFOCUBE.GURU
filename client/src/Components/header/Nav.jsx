import React,{useState,useEffect} from 'react'
import { X ,ChevronDown} from "lucide-react";
import {motion} from 'framer-motion';

import {Link} from 'react-router-dom';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let userName='';
  let username='';
  if(currentUser && currentUser.username){
    username = currentUser.username;

  }  
  let firstSpaceIndex = username.indexOf(" ");

  if (firstSpaceIndex === -1) {
    userName = username.charAt(0).toUpperCase() + username.slice(1);
  } else {
    userName= username.charAt(0).toUpperCase() + username.slice(1, firstSpaceIndex);
  }

  useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

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
      <h3 className='text-[1rem] h-[1.5rem]  overflow-hidden'>Hi,<span>{userName}</span>   </h3>
      </div>
      <ul>
      <Link to="Profile">
        <button className='w-full' onClick={handleToggleProfile}>
        <DropDownItem  text={"Profile"}/>
        </button>
        </Link>
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
              <img className=' rounded-full h-[1.875rem] w-[1.875rem] cursor-pointer object-cover overflow-hidden ' src={currentUser.avatar}/>
              </div>
              
              
              <div id='comment-box' className={`dropdown-menu drop-shadow-4xl drop-shadown-blur-2xl   absolute  bg-gray-300  w-[9rem] top-[3rem] 
                rounded-[5px] py-[5px] px-[10px]  text-black ${isnavDropDownOpen?'active':'inactive'}`} style={{right:`${0.038 * innerWidth - 4.5239}px`}}>
                <div className='flex items-center  gap-[5px]'>
                <img className=' rounded-full h-[1.875rem] w-[1.875rem] object-cover  overflow-hidden ' src={currentUser.avatar}/>
                <h3 className='text-[.75rem] h-[1.3rem]  overflow-hidden'>Hi,<span>{userName}</span>   </h3>
                </div>
                <ul>
                <Link to="Profile">
                  <button className='w-full text-[.75rem]' onClick={handleToggleProfile}>
                  <DropDownItem  text={"Profile"}/>
                  </button>
                  </Link>
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

  const renderNavLinks = () => (
    <div className='z-90 menu-container'>
           <button className="menu-trigger h-[1.5rem] mt-[.25rem]" onClick={handleToggleNavbar}>
            
            {isOpen ?<div className='flex flex-row text-[12px] font-normal font-inter justify-center items-center'>Menu <X /></div>  :<div className='flex flex-row text-[12px] font-normal font-inter  items-center'> Menu <ChevronDown /></div> }
          </button>
        <div id='comment-box' className={`dropdown-menu drop-shadow-4xl drop-shadown-blur-2xl   absolute  bg-gray-300  w-[9rem] top-[3rem]
          rounded-[5px] py-[2px] px-[10px]  text-black ${isOpen?'active':'inactive'}`} style={{right:`${0.038 * innerWidth + 21.5239}px`}}>
              <ul>
                <Link   className='' to='/#About' 
                   duration={1000} offset={10} >
                <li className='dropdownItem  items-center font-roboto  w-full text-[.75rem] flex my-[10px] '>
                ABOUT
                </li>
                </Link>
                  
                <li>
                    <div className='border-[.1px] m-auto w-[6rem]  border-black'></div>
                  </li>

                {/* <Link   to='/#Alumni' spy={true}
                  smooth={true} duration={800} offset={50} >
                   <li className='dropdownItem  items-center font-roboto  w-full text-[.75rem] flex my-[10px] '>
                ALUMINI
                </li>
                </Link>

                <li>
                    <div className='border-[.1px] m-auto w-[6rem]  border-black'></div>
                  </li> */}

                <Link  to='CareerPath' className="navlink ">
                <li className='dropdownItem  items-center font-roboto  w-full text-[.75rem] flex my-[10px]  '>
                CAREER PATHS
                </li>
                </Link>

                <li>
                    <div className='border-[.1px] m-auto w-[6rem]  border-black'></div>
                  </li>

                <Link  to='Feedback' className="navlink ">
                <li className='dropdownItem  items-center font-roboto  w-full text-[.75rem] flex my-[10px] '>
                FEEDBACK
                </li>
                </Link>


                <li>
                    <div className='border-[.1px] m-auto w-[6rem]  border-black'></div>
                  </li>

                <Link  to='Help' className="navlink ">
                <li className='dropdownItem  items-center font-roboto  w-full text-[.75rem] flex my-[10px]  '>
                HELP & SUPPORT
                </li>
                </Link>


            </ul>
           
            </div>
      
    </div>
  );

  const renderAuthButtons = () => (
    innerWidth>768?<div>
    <Link to='SignUp'>
    <button className='rounded-xl w-[4.5rem] lg:w-[6rem] py-[.4rem] px-[.4rem] lg:py-[.5rem] lg:px-[.5rem] font-roboto mr-[5px] lg:mr-[10px] border-[1px]
       border-solid border-black
     text-[10px] md:text-[14px] lg:text-[16px]'>Sign UP</button>
    </Link>
    <Link to='Login '>
    <button className='w-[4.5rem] lg:w-[6rem] text-white font-roboto border-[1px] py-[.4rem] px-[.4rem] lg:py-[.5rem] lg:px-[1.25rem]  border-solid border-darkslategray rounded-xl 
    bg-graybutton box-border items-center justify-center md:text-[14px] lg:text-[16px]'>Login</button> 
    </Link>
  </div>:
  <Link to='Login'>
  <button className='h-[1.5rem] text-white font-normal font-roboto border-[1px] my-[0.1rem] py-[0.262rem] px-[1rem] text-left text-[0.525rem]
   border-solid border-darkslategray rounded-xl bg-darkslategray box-border items-center justify-center  '>Login</button> 
</Link>
  );

  

  return (
    <div>
      <nav className="flex shrink items-center overflow-hidden">
        <div onWheelCapture={closeNavbar} className="hidden justify-end items-center md:flex md:gap-2 lg:gap-4 gap-1">
          <Navlink />
          {currentUser && currentUser.username ? renderUserMenu() : renderAuthButtons()}
        </div>

        <div className="flex justify-between md:hidden">
        {renderNavLinks()}

          {currentUser && currentUser.username ? renderUserMenu('sm') : renderAuthButtons()}
        </div>
      </nav>

      
    </div>
  );
};

const links = [
  { to: '/#About', text: 'ABOUT US', duration: 1000, offset: 10 },
  // { to: '/#Alumni', text: 'ALUMNI', duration: 800, offset: 50 },
  { to: 'CareerPath', text: 'CAREER PATHS', duration: null, offset: null},
  { to: 'Feedback', text: 'FEEDBACK', duration: null, offset: null },
  { to: 'Help', text: 'HELP & SUPPORT', duration: null, offset: null },
];

const Navlink = () => {
  const [hovered, setHovered] = useState(-1);
  const dispatch = useDispatch();
  const handleLinkClick = () => {
    dispatch(closeDropDown());
  };
  const fontSize = window.innerWidth < 1023 ? `${0.0012345679 * window.innerWidth + 11.5362962963}px` : `${0.00357142857 * window.innerWidth + 9.14285716}px`;

  return (
    <nav className="navlink-container" style={{ fontSize }}>
      {links.map((link, index) => (
        link.duration ?
        <motion.div className='px-2' onHoverStart={()=>{setHovered(index)}} onHoverEnd={()=>setHovered(-1)}>
          <Link
            key={index}
            onClick={handleLinkClick}
            to={link.to}
            duration={link.duration}
            offset={link.offset}
            className="navlink hover:bg-transparent"
          >
            {link.text}
          </Link>
          <br></br>
          <div className={`border-t-[4px] border-black transition-all duration-300 ease-in-out rounded-xl ${hovered==index?"w-full":"w-0"}`}/>
        </motion.div>
          
          :
          <motion.div className='px-2' onHoverStart={()=>{setHovered(index)}} onHoverEnd={()=>setHovered(-1)}>
            <Link
            key={index}
            onClick={handleLinkClick}
            to={link.to}
            className="navlink hover:bg-transparent"
            
          >
            {link.text}
          </Link>
          <div className={`border-t-[4px] border-black transition-all duration-300 ease-in-out rounded-xl ${hovered==index?"w-full":"w-0"}`}/>
          </motion.div>
          
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