import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {signInFailure,signInStart,signInSuccess} from '../Redux/userSlice/userSlice.js'
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js'
import {hideHeader, showHeader} from "../Redux/userSlice/loginSlice.js"
import InfoCube from '../Assets/Images/infocubeblack.svg';
import InfoCubeLogo from '../Assets/Images/InfoCubeLogo.svg';
import LoginMain from '../Assets/Images/LoginMain.png';
;

export default function Verification(){
    const [otp,setOTP]=useState({});
    const [windowsSize,setWindowsSize]=useState({});
    const {loading,error}=useSelector((state)=>state.user);
    const userData=useSelector((state)=>state.userData.userData);
    const deviceType = useSelector((state) => state.deviceType.deviceType);
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

   const handleChange=(e)=>{
        setOTP({
            ...otp,
            [e.target.id]:e.target.value,
        });
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(userData)
        console.log(otp);
        // try {
        //  dispatch(signInStart());
        //  const res=await fetch('/api/auth/signup',{
        //      method:'POST',
        //      headers:{
        //          'Content-Type':'application/json',
        //      },
        //      body: JSON.stringify(formData),
        //  });
        //  const data= await res.json();
        //  console.log(data);
        //  if(data.success===false){
        //     dispatch(signInFailure(data.message));
        //     return;
          
        // }
        // dispatch(signInSuccess(data));
        // navigate('/Login');

        // } catch (error) {
        //  dispatch(signInFailure(error.message));
        // }
    }
    console.log(userData);
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
                        <div className="mt-4 mb-6 rounded-[104px] items-center relative w-full ">
                              <input onChange={handleChange}
                                id="otp"  maxLength={4}  className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                              text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out [appearance:textfield] 
                              [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"  type="text" placeholder="Enter OTP"/>                               
                        </div>
                        <div className="mb-4 mx-auto w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] relative leading-[150%]">
                        <button disabled={loading} className="text-white px-[24px] text-[1rem] leading-tight font-roboto">{loading ? "Loading" : "Verify"}</button>
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