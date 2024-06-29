import React,{useState,useEffect} from "react";
import {Link,useLocation,useNavigate} from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux';
import {signInFailure,signInStart,signInSuccess} from '../Redux/userSlice/userSlice.js'
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js'
import {hideHeader, showHeader} from "../Redux/userSlice/loginSlice.js"
import OAuth from "../Components/OAuth.jsx";
import FacebookImg from '../Assets/Images/FacebookColour.webp';
import InfoCube from '../Assets/Images/infocubeblack.webp';
import InfoCubeLogo from '../Assets/Images/InfoCubeLogo.webp';
import LoginMain from '../Assets/Images/LoginMain.webp';

import LoadingSpinner from "../Components/loadingSpinner.jsx";
import axios from "axios";
import { baseURL } from "../url.js";

export default function Login(){
    const [formData,setFormData]=useState({});
    const [windowsWidth,setwindowsWidth]=useState({});
    const [windowsHeight,setwindowsHeight]=useState({});
    const {loading,error}=useSelector((state)=>state.user);
    const [showPass,setShowPass]=useState({showPass:false});
    const deviceType = useSelector((state) => state.deviceType.deviceType);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [err,setErr]=useState(null);
    const handleImageLoaded = () => {
      setIsImgLoaded(true);
      setShow(false)
      const timer = setTimeout(() => {
        setShow(true);
      }, 50); 
      return ()=>clearTimeout(timer);
    };

    useEffect(() => {
        const img = new Image();
        img.src = LoginMain; // Replace with your image URL
        img.onload = handleImageLoaded;

        dispatch(hideHeader());

        const handleResize = () => {
          dispatch(changeDevice());
          setwindowsWidth(window.innerWidth) 
          setwindowsHeight(window.innerHeight)
        };
    
        handleResize(); // Call initially
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [dispatch,setwindowsWidth,setwindowsHeight]);

    const showPassword=()=>{
        setShowPass(!showPass);
    }
   const handleChange=(e)=>{
    
        if(e.target.id==='email'){
            const isFirstCharLetter = /^[a-zA-Z]/.test(e.target.value[0]);
            const isValidEmail = e.target.value.includes('@') && e.target.value.includes('.'); 
            if(!isValidEmail||!isFirstCharLetter){
                setErr("Invalid Email")
                return;
            }else{
                setErr(null);
            }
        }
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        });
    };

    const handleSubmit=async (e)=>{
        
        e.preventDefault();
        try {
         dispatch(signInStart());
         const res = await axios.post(`${baseURL}/api/auth/login`, formData, {
            withCredentials:true,
            headers: {
                'Content-Type': 'application/json',
            }});
         const data= res.data;
         console.log(data);
         if(data.success===false){
            dispatch(signInFailure(data.message));
            console.log("Sign in failed")
            return;
        }
        dispatch(signInSuccess(data));
        console.log("Success")
        navigate('/');

        } catch (error) {
            console.log(error);
         dispatch(signInFailure(error.message));
        }
    }

    return (
        <div>{isImgLoaded? 
        <div className={`page ${show ? 'page2-enter-active' : 'page2-exit-active'}`}>
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
                        Sign In to
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className='pb-1 flex flex-row gap-[5px] mg:gap-[5px] lg:gap-[5px] items-center'> 
                        <img className='w-auto h-8 md:h-9 lg:h-12' src={InfoCubeLogo} alt="Logo"/>
                        <img className='w-auto h-5 md:h-6 lg:h-8' src={InfoCube} alt="Cube"/>
                    </div>
                    <div className='pb-2 flex flex-row gap-[5px] items-center'> 
                        <img className='w-auto h-[40px] md:h-[40px] lg:h-[52px] mb-[4px]' src={FacebookImg} alt="Facebook"/>
                        <div className="w-min relative box-border h-8 lg:h-10 border-r-[2px] border-solid border-black" />
                        <OAuth/>
                    </div>
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[22rem] lg:w-[25rem] items-center justify-center" >
                        <div className="mb-4 rounded-[104px] items-center relative w-full ">
                            <input onChange={handleChange} id="email" className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type="text" placeholder="Email"/>                               
                        </div>
                        <div className="mb-1 rounded-[104px] flex flex-rows items-center relative w-full">
                            <input onChange={handleChange} id="password"  className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem]
                            text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type={showPass?"password":"text"} placeholder="Password"/>
                            <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword}>{showPass?"Show":"Hide"}</p>
                        </div>
                        <p className="ml-4 text-[.7rem]  lg:text-[0.8rem] text-slateblue font-roboto font-medium"> 
                        <Link to='../ForgotPassword'> Forgot Password?</Link>
                        </p>
                        {err&&<p className="ml-4 text-[.7rem]  lg:text-[0.8rem]  text-red-500 font-roboto ">{err}</p>}
                        {error&&<p className="ml-4 text-[.7rem]  lg:text-[0.8rem]  text-red-500 font-roboto ">{error}</p>}
                        <div className="mb-8"/>
                        <div className="mb-4 mx-auto w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] relative leading-[150%]">
                        <button disabled={loading} className="text-white px-[24px] text-[1rem] leading-tight font-roboto">{loading ? "Loading" : "Login"}</button>
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
        :<LoadingSpinner/>
}
        </div>);
    
} 