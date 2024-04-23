import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {signInFailure,signInStart,signInSuccess} from '../Redux/userSlice/userSlice.js'
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js'
import {hideHeader, showHeader} from "../Redux/userSlice/loginSlice.js"
import {setUserData} from "../Redux/userSlice/userData.js";
import InfoCube from '../Assets/Images/infocubeblack.svg';
import InfoCubeLogo from '../Assets/Images/InfoCubeLogo.svg';
import LoginMain from '../Assets/Images/LoginMain.png';
import bcryptjs from "bcryptjs";


export default function Signup(){
    const [formData,setFormData]=useState({});

    const [windowsSize,setWindowsSize]=useState({});
    const {loading,error}=useSelector((state)=>state.user);
    const [showPass,setShowPass]=useState({showPass:true});
    const [showPass2,setShowPass2]=useState({showPass2:true});
    const deviceType = useSelector((state) => state.deviceType.deviceType);
    const userData=useSelector((state)=>state.userData.userData)
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(() => {

        dispatch(hideHeader());

        const handleResize = () => {
          dispatch(changeDevice());
          setWindowsSize(window.innerWidth)
        
        };
        
        handleResize(); // Call initially
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [dispatch,setWindowsSize]);

    const showPassword=()=>{
        setShowPass(!showPass);
    }
    const showPassword2=()=>{
      setShowPass2(!showPass2);
  }
   const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
            
        });
        
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(formData);
        try {
         dispatch(signInStart());
         const res=await fetch('/api/auth/signup',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json',
             },
             body: JSON.stringify(formData),
         });
         const data= await res.json();
         console.log(data);
         if(data.success===false){
            dispatch(signInFailure(data.message));
            return;
          
        }
        dispatch(signInSuccess(data));
        navigate('/Verification');

        } catch (error) {
         dispatch(signInFailure(error.message));
        }
        dispatch(setUserData(JSON.stringify(formData)))
        console.log(userData);
        navigate('/Verification');
    }
    console.log(formData);
    return (
        <div className={`grid ${deviceType==='lg'?"grid-cols-5":"grid-cols"} w-screen bg-white h-screen overflow-hidden font-roboto `}>
            {deviceType==='lg'?<div className="col-span-3 w-full  h-full" style={{ filter: 'brightness(0.5 )'  }} >
                <img
                className="w-full h-full object-cover object-left"
                src={LoginMain}
                style={{ clipPath: `circle(65% at ${(0.03422)*windowsSize -15.68}% 50%)`  }}
                alt="Login Main"
                />
            </div>:""}

            <div className="col-span-2 flex h-full w-auto flex-1 flex-col   items-center justify-center">
                <div className="text-[.65rem]  lg:text-[0.75rem] ">
                        Sign Up to
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className='pb-4 flex flex-row gap-[5px] mg:gap-[5px] lg:gap-[5px] items-center'> 
                        <img className='w-auto h-8 md:h-9 lg:h-12' src={InfoCubeLogo} alt="Logo"/>
                        <img className='w-auto h-5 md:h-6 lg:h-8' src={InfoCube} alt="Cube"/>
                    </div>
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[22rem] lg:w-[25rem] items-center justify-center" >
                        <div className="mb-4 rounded-[104px] items-center relative w-full ">
                              <input onChange={handleChange}  id="username" className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                              text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type="text" placeholder="Name"/>                               
                        </div>
                        <div className="mb-4 rounded-[104px] items-center relative w-full ">
                            <input onChange={handleChange} id="email" className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type="text" placeholder="Email"/>                               
                        </div>
                        {/* <div className="mb-4 rounded-[104px] items-center relative w-full ">
                            <input onChange={handleChange} id="education" className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type="text" placeholder="Select Education"/>                               
                        </div> */}
                        <div className="mb-4 rounded-[104px] flex flex-rows items-center relative w-full ">
                            <input onChange={handleChange} id="password" className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type={showPass?"password":"text"} placeholder="Password"/>                               
                             <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword}>{showPass?"Show":"Hide"}</p>
                        </div>
                        {/* <div className="mb-1 rounded-[104px] flex flex-rows items-center relative w-full">
                            <input onChange={handleChange} id="confirm_password"  className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem]
                            text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type={showPass2?"password":"text"} placeholder="Confirm Password"/>
                            <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword2}>{showPass2?"Show":"Hide"}</p>
                        </div> */}
                        {error&&<p className="ml-4 text-[.7rem]  lg:text-[0.8rem]  text-red-500 font-roboto ">{error}</p>}
                        <div className="mb-8"/>
                        <div className="mb-4 mx-auto w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] relative leading-[150%]">
                        <button disabled={loading} className="text-white px-[24px] text-[1rem] leading-tight font-roboto">{loading ? "Loading" : "SignUp"}</button>
                        </div>
                    </form>
                    <div className="mb-4 w-64 relative box-border h-[0.125rem] border-t-[2.25px] border-solid border-black" />
                    <p className="text-[.7rem] lg:text-[0.8rem] ">
                        <span className="text-dimgray">Already have an account? </span>
                        <Link to='../Login'><span className="text-slateblue font-medium">Sign In</span></Link>
                    </p>
                </div>
                </div>

        </div>);
    
} 