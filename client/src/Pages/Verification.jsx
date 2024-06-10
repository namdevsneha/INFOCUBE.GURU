import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {signInFailure,signInStart,signInSuccess} from '../Redux/userSlice/userSlice.js'
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js'
import {hideHeader, showHeader} from "../Redux/userSlice/loginSlice.js"
import InfoCube from '../Assets/Images/infocubeblack.webp';
import InfoCubeLogo from '../Assets/Images/InfoCubeLogo.webp';
import LoginMain from '../Assets/Images/LoginMain.webp';
import LoadingSpinner from "../Components/loadingSpinner.jsx";

export default function Verification(){
    const [otp,setOTP]=useState(0);
    const [otp2,setOTP2]=useState(0);
    const [windowsSize,setWindowsSize]=useState({});
    const [windowsHeight,setwindowsHeight]=useState({});
    const {loading}=useSelector((state)=>state.user);
    const userData=useSelector((state)=>state.userData.userData);
    const deviceType = useSelector((state) => state.deviceType.deviceType);
    const {currentUser,email}=useSelector((state)=>state.verifyPass);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    const handleImageLoaded = () => {
      setIsImgLoaded(true);
    };

    useEffect(() => {
        const img = new Image();
        img.src = LoginMain; // Replace with your image URL
        img.onload = handleImageLoaded;

        dispatch(hideHeader());
        // sendOTPVerificationEmail({email:"utkarshsaxena@rediffmail.com"})
        const handleResize = () => {
          dispatch(changeDevice());
          setWindowsSize(window.innerWidth) 
          setwindowsHeight(window.innerHeight)
        };
        console.log({email:currentUser})
        
        const sendOtp = async () => {
            try {
                //  dispatch(signInStart());
                 const res=await fetch('/api/auth/sendOTP',{
                     method:'POST',
                     headers:{
                         'Content-Type':'application/json',
                     },
                     body: JSON.stringify({email:email}),
                 });
                 const data= await res.json();
                 setOTP(data);
                 if(data.success===false){
                    // dispatch(signInFailure(data.message));
                    return;
                  
                }
                // dispatch(signInSuccess(data));
                // navigate('/Login');
        
                } catch (error) {
                //  dispatch(signInFailure(error.message));
                }
          };
        sendOtp();
        handleResize(); // Call initially
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [dispatch,setWindowsSize,setWindowsSize]);

      console.log(otp)

   const handleChange=(e)=>{
    
        if(e.target.id=="otp"){
            setOTP2(e.target.value)
        }
    };
    

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(otp)
        console.log(otp2)
        if(otp==otp2){
            navigate('../ChangePassword');
        }
        console.log(otp==otp2)
       
    }
    console.log(userData);
    return (
        <div>{isImgLoaded? 
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
                        <Link to='../OTP'><span className="text-slateblue font-medium">Sign In</span></Link>
                    </p>
                </div>
                </div>

        </div>:<LoadingSpinner/>}</div>);
    
} 