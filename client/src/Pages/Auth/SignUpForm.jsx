import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {signInFailure,signInStart,signUpSuccess} from '../../Redux/userSlice/userSlice.js'
import {changeDevice} from '../../Redux/userSlice/deviceTypeSlice.js'
import {hideHeader, showHeader} from "../../Redux/userSlice/loginSlice.js"
import {setUserData} from "../../Redux/userSlice/userData.js";
import InfoCube from '../../Assets/Images/infocubeblack.webp';
import InfoCubeLogo from '../../Assets/Images/InfoCubeLogo.webp';
import LoginMain from '../../Assets/Images/LoginMain.webp';
import LoadingSpinner from "../../Components/loadingSpinner.jsx";
import axios from "axios";
import { baseURL } from "../../url.js";

export default function SignupForm(){
    
    const {currentUser,loading,error}=useSelector((state)=>state.user);
    const [formData,setFormData]=useState({email:currentUser.email});
    
    const [windowsWidth,setwindowsWidth]=useState({});
    const [windowsHeight,setwindowsHeight]=useState({});
    
   
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedEducation, setSelectedEducation] = useState('');
    const [confirm_paasword,setConfirmPass]=useState('');
    const [selectedDob, setSelectedDob] = useState('');
    const deviceType = useSelector((state) => state.deviceType.deviceType);
    const userData=useSelector((state)=>state.userData.userData)
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

   const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
            
        });
        if(e.target.id=='gender'){
            setSelectedGender(e.target.value);
        }
        if(e.target.id=='education'){

            setSelectedEducation(e.target.value)
        }
        
    };


    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(formData.education=='Select Education'){
            dispatch(signInFailure('Select Education'))
            return;
        }
        if(formData.gender=='Select Gender'){
            dispatch(signInFailure('Select Gender'))
            return;
        }
        try {
         dispatch(signInStart());
         const res = await axios.post(`${baseURL}/api/auth/signup2`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
         const data= await res.data;
         if(data.success===false){
            dispatch(signInFailure(data.message));
            return;
          
        }
        navigate('/');
        dispatch(signUpSuccess())

        } catch (error) {
         dispatch(signInFailure(error.message));
        }
        dispatch(setUserData(JSON.stringify(formData)))
        // navigate('/');
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
                        Sign Up to
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className='pb-4 flex flex-row gap-[5px] mg:gap-[5px] lg:gap-[5px] items-center'> 
                        <img className='w-auto h-8 md:h-9 lg:h-12' src={InfoCubeLogo} alt="Logo"/>
                        <img className='w-auto h-5 md:h-6 lg:h-8' src={InfoCube} alt="Cube"/>
                    </div>
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[22rem] lg:w-[25rem] items-center justify-center" >
                        {/* username */}
                        <div className="mb-4 rounded-[55px]  items-center relative w-full ">
                              <input onChange={handleChange}  id="username" className="input w-full  px-5  h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                              text-black border border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type="text" placeholder="Name"/>                               
                        </div>

                        {/* dob */}
                        <div className="mb-4 rounded-[55px] items-center relative w-full bg-red-700 ">
                        <input calendarClassName="w-full" id="dob" formate type="date" value={selectedDob} placeholder="MM/DD/YYYY"
                        onChange={(e) => {setSelectedDob(e.target.value); setFormData({...formData,dob:e.target.value});}}  
                        wrapperClassName="w-full" className="w-full  px-5 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                        text-black border text-black  border-black border-[1.5px] rounded-[55px] transition duration-300 ease-in-out" 
                        selected={selectedDob}/></div>
                        

                        {/* gender */}
                        <div className="mb-4 rounded-[55px] border border-black border-[1.5px] items-center relative w-full ">
                            <select onChange={handleChange} id="gender" value={selectedGender}  className="input w-full border-r-4  px-5   h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  rounded-[55px] " type="text" placeholder="Gender">
                            <option value="Select Gender">Select Gender</option> 
                             <option value="Male"> Male </option>
                             <option value="Female"> Female </option>
                             <option value="Others"> Others </option>
                             </select>                              
                        </div>

                        {/* education */}
                        <div className="mb-4 rounded-[55px] border border-black border-[1.5px] items-center relative w-full ">
                            <select onChange={handleChange} id="education" value={selectedEducation} className="input w-full border-r-4  px-5   h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  rounded-[55px] " type="text" placeholder="Select Education">
                                <option value="Select Education">Select Education</option>
                                <option value="9th">9th </option>
                                <option value="10th">10th </option>
                                <option value="11th PCM">11th PCM</option>
                                <option value="11th Commerce">11th Commerce</option>
                                <option value="12th PCM">12th PCM</option>
                                <option value="12th Commerce">12th Commerce</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="Post Graduate">Post Graduate</option>
                            </select>                                                              
                        </div>



                        {error&&<p className="ml-4 text-[.7rem]  lg:text-[0.8rem]  text-red-500 font-roboto ">{error}</p>}
                        <div className="mb-8"/>
                        <div className="mb-4 mx-auto w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] relative leading-[150%]">
                        <button disabled={loading} className="text-white px-[24px] text-[1rem] leading-tight font-roboto">{loading ? "Loading" : "SignUp"}</button>
                        </div>
                    </form>
                    <div className="mb-4 w-64 relative box-border h-[0.125rem] border-t-[2.25px] border-solid border-black" />
                    <p className="text-[.7rem] lg:text-[0.8rem] ">
                        <span className="text-dimgray">Already have an account? </span>
                        <Link to='../Login'><span className="text-slateblue font-medium">Sign In </span></Link>
                        | 
                        <Link to='../ '><span className="text-slateblue font-medium"> Home</span></Link>
                    </p>
                </div>
                </div>

            </div>
            </div>
        :<LoadingSpinner/>}</div>
        );
    
} 