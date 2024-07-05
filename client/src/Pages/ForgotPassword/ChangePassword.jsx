import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux';
import { updatePasswordFailure, updatePasswordStart, updatePasswordSuccess } from '../../Redux/userSlice/userSlice.js'

import {changeDevice} from '../../Redux/userSlice/deviceTypeSlice.js'
import {hideHeader, showHeader} from "../../Redux/userSlice/loginSlice.js"
import InfoCube from '../../Assets/Images/infocubeblack.webp';
import InfoCubeLogo from '../../Assets/Images/InfoCubeLogo.webp';
import LoginMain from '../../Assets/Images/LoginMain.webp';
import axios from "axios";
import { baseURL } from "../../url.js";
import LoadingSpinner from "../../Components/loadingSpinner.jsx";

export default function ChangePassword(){
    const {loading,error,email}=useSelector((state)=>state.verifyPass);
    const [formData,setFormData]=useState({});
    const [windowsWidth,setwindowsWidth]=useState({});
    const [windowsHeight,setwindowsHeight]=useState({});
    const [showPass,setShowPass]=useState({showPass:true});
    const [showPass2,setShowPass2]=useState({showPass2:true});    
    const deviceType = useSelector((state) => state.deviceType.deviceType);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [show, setShow] = useState(false);

    const handleImageLoaded = () => {
      setIsImgLoaded(true);
      setShow(false)
      const timer = setTimeout(() => {
        setShow(true);
      }, 50); 
      return ()=>clearTimeout(timer);
    };

    useEffect(() => {

        dispatch(hideHeader());
        setFormData({email:email})
        const handleResize = () => {
          dispatch(changeDevice());
          setwindowsWidth(window.innerWidth) 
          setwindowsHeight(window.innerHeight)
        };
        const img = new Image();
        img.src = LoginMain; 
        img.onload = handleImageLoaded;
    
        handleResize(); // Call initially
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [dispatch,setwindowsWidth,setwindowsHeight]);

   const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        });

    };
    const showPassword=()=>{
        setShowPass(!showPass);
    }
    const showPassword2=()=>{
      setShowPass2(!showPass2);
  }

    const handleSubmit=async (e)=>{
        e.preventDefault();
    try{
      dispatch(updatePasswordStart());
      const res = await axios.post(`${baseURL}/api/user/updatePassword`, formData, {
        headers: {
            'Content-Type': 'application/json',
            
        },
    });
    const data=await res.data
    console.log('here')
    if(data.success===false){
      console.log('failed')
       dispatch(updatePasswordFailure(data.message));
       return;
    }
    console.log('now here also')
    dispatch(updatePasswordSuccess(data));
    navigate('../Login');

    }catch(error){
      console.log('error')
      dispatch(updatePasswordFailure(error.message));
    }
    }

    return (
      <div>{isImgLoaded? 
        <div className={`page ${show ? 'page-enter-active' : 'page-exit-active'}`}>
        <div className={`grid ${deviceType==='lg'?"md:grid-cols-5 xl:grid-cols-3 ":"grid-cols"}  w-screen bg-white h-screen overflow-hidden font-roboto `}>
            {deviceType==='lg'?<div className="md:col-span-3 xl:col-span-2 w-full  h-full" style={{ filter: 'brightness(0.5 )'  }} >
                <img
                className="w-full h-full object-cover object-left"
                src={LoginMain}
                style={{ clipPath:innerWidth<1280?windowsHeight>800?`circle(75% at ${0.5078*innerWidth-519.984}px 50%)` :`circle(65% at ${0.03906*innerWidth+79.952}px 50%)` 
                :(windowsHeight>800?`circle(75% at ${0.3333*innerWidth-330}px 50%)` :`circle(65% at ${0.38095*innerWidth-231.04}px 50%)`) }}
                alt="Login Main"
                />
            </div>:""}

            <div className="md:col-span-2 xl:col-span-1  flex h-full w-auto flex-1 flex-col   items-center justify-center">
                <div className="text-[.65rem]  lg:text-[0.75rem] ">
                        Sign Up to
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className='pb-1 flex flex-row gap-[5px] mg:gap-[5px] lg:gap-[5px] items-center'> 
                        <img className='w-auto h-8 md:h-9 lg:h-12' src={InfoCubeLogo} alt="Logo"/>
                        <img className='w-auto h-5 md:h-6 lg:h-8' src={InfoCube} alt="Cube"/>
                    </div>
                    
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[22rem] lg:w-[25rem] py-[1rem] items-center justify-center" >
                        {/* password */}
                        <div className="mb-4 rounded-[104px] flex flex-rows items-center relative w-full ">
                            <input onChange={handleChange} id="password" className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type={showPass?"password":"text"} placeholder="Password"/>                               
                             <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword}>{showPass?"Show":"Hide"}</p>
                        </div>

                        {/* confirm password */}
                        <div className="mb-1 rounded-[104px] flex flex-rows items-center relative w-full">
                            <input onChange={handleChange} id="confirm_password"  className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem]
                            text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type={showPass2?"password":"text"} placeholder="Confirm Password"/>
                            <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword2}>{showPass2?"Show":"Hide"}</p>
                        </div>
                       
                        {error&&<p className="ml-4 text-[.7rem]  lg:text-[0.8rem]  text-red-500 font-roboto ">{error}</p>}
                        <div className="mb-4"/>
                        <div className="mb-2 mx-auto w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] relative leading-[150%]">
                        <button disabled={loading} className="text-white px-[24px] text-[1rem] leading-tight font-roboto">{loading ? "Loading" : "Verify"}</button>
                        </div>
                    </form>
                    <div className="mb-4 w-64 relative box-border h-[0.125rem] border-t-[2.25px] border-solid border-black" />
                    <p className="text-[.7rem] lg:text-[0.8rem] ">
                        <span className="text-dimgray">Do not have an account? </span>
                        <Link to='../Signup'><span className="text-slateblue font-medium">Create New </span></Link>
                         | 
                        <Link to='../ '><span className="text-slateblue font-medium"> Home</span></Link>
                    </p>
                </div>
                </div>

        </div>
        </div>
        :<LoadingSpinner/>}
        </div>
        );
    
} 