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
import { Home } from "lucide-react";
import { maleAvatar,femaleAvatar,otherAvatar } from "../../Components/Avatarlist.jsx";

export default function Signup(){

    const [formData,setFormData]=useState({});
    const [windowsWidth,setwindowsWidth]=useState({});
    const [windowsHeight,setwindowsHeight]=useState({});

    // error
    const {loading}=useSelector((state)=>state.user);
    const [showPass,setShowPass]=useState({showPass:true});
    const [showPass2,setShowPass2]=useState({showPass2:true});
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
    const [err,setErr]=useState(null);
    const [error1,setError1]=useState(null);
    const [error, setError] = useState(null); 

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

    useEffect(() => {
        console.log("formData has changed:", formData);
    
        // Logic for when formData.gender is updated
        if(formData.gender=='Male'){
            const randomIndex = Math.floor(Math.random() * maleAvatar.length);
            setFormData({
                  ...formData,
                  avatar: maleAvatar[randomIndex],  // Correctly update the avatar field
              });
        }else if(formData.gender=='Female'){
            const randomIndex = Math.floor(Math.random() * femaleAvatar.length);
            setFormData({
                ...formData,
                avatar: femaleAvatar[randomIndex],  // Correctly update the avatar field
            });
        }else if(formData.gender=='Others'){
            const randomIndex = Math.floor(Math.random() * otherAvatar.length);
            setFormData({
                ...formData,
                avatar: otherAvatar[randomIndex],  // Correctly update the avatar field
            });
        }
        console.log(formData);
      }, [formData.gender]); 

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
        if(e.target.id=='gender'){
            setSelectedGender(e.target.value);
        }
        if(e.target.id=='education'){

            setSelectedEducation(e.target.value)
        }

        if(e.target.id==='email'){
            
            const emailRegex = /^[a-zA-Z][a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const isValidEmail = emailRegex.test(e.target.value);
            if(e.target.value==""){
                setErr(null);
            }else if(!isValidEmail){
                setErr("Invalid Email Format")
                return;
            }else{
                setErr(null);
            }
        }
        if(e.target.id === 'password'){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            const isValidPassword = passwordRegex.test(e.target.value);
            if(e.target.value==""){
                setError1(null);
            }
            else if(!isValidPassword){
                setError1("Must be 8 characters, uppercase, lowercase and number.")
                return;
            }else{
                setError1(null);
            }
        }

        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        });
        
    };

    const handlePassChange=(e)=>{
        
        // setConfirmPass(e.target.value)
       
        const { id, value } = e.target;

        setFormData({
            ...formData,
            [id]: value,
        });
    
        if (id === 'password' || id === 'confirm_password') {
            const updatedFormData = {
                ...formData,
                [id]: value, 
            };
            if(updatedFormData.confirm_password==""){
                setError(null);
            }
            else if (updatedFormData.password !== updatedFormData.confirm_password) {
                setError('Passwords do not match');
                // dispatch(signInFailure('Enter same password'));
            }
             else {
                setError(null);
                // dispatch(signInFailure('')); 
            }
        }
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        // if(formData.password!=confirm_paasword){
        //     dispatch(signInFailure('Enter same Password'))
        //     return;
        // }

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
         const res = await axios.post(`${baseURL}/api/auth/signup`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
         const data= await res.data;
            console.log(data);
         if(data.success===false){
            dispatch(signInFailure(data.message));
            return;
          
        }
        navigate('/CareerAssessment');
        dispatch(signUpSuccess())

        } catch (error) {
            console.log(error);
         dispatch(signInFailure(error.message));
        }
        dispatch(setUserData(JSON.stringify(formData)))
        console.log(userData);
        // navigate('/');
    }


    console.log(formData);

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
                        <Link to='/'>
                        <img className='w-auto h-8 md:h-9 lg:h-12' src={InfoCubeLogo} alt="Logo"/>
                        </Link>

                        <Link to='/'>
                        <img className='w-auto h-5 md:h-6 lg:h-8' src={InfoCube} alt="Cube"/>
                        </Link>
                        
                    </div>
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[22rem] lg:w-[25rem] items-center justify-center" >
                        {/* username */}
                        <div className="mb-4 rounded-[55px]  items-center relative w-full ">
                              <input onChange={handleChange}  id="username" className=" focus:outline-none input w-full  px-5  h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                              text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type="text" placeholder="Name" required/>                               
                        </div>

                        {/* email */}
                        <div className="mb-4 rounded-[104px] items-center relative w-full ">
                            <input onChange={handleChange} id="email" className={`input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out focus:outline-none ${err ? 'border-red-500' : 'border-black'}`}type="text" required placeholder="Email"/>                               
                        </div>

                        {/* dob */}
                        <div className=" mb-4 rounded-[55px] items-center relative w-full bg-red-700 ">
                            
                        <input calendarClassName="w-full" id="dob" formate required type="date" value={selectedDob} placeholder="MM/DD/YYYY"
                        onChange={(e) => {setSelectedDob(e.target.value); setFormData({...formData,dob:e.target.value});}}  
                        wrapperClassName="w-full" className="focus:outline-none w-full  px-5 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                         text-black  border-black border-[1.5px] rounded-[55px] transition duration-300 ease-in-out" 
                        selected={selectedDob}/></div>
                        

                        {/* gender */}
                        <div className="focus:outline-none mb-4 rounded-[55px]  border-black border-[1.5px] items-center relative w-full ">
                            <select onChange={handleChange} id="gender"  value={selectedGender}  className="input w-full border-r-4  px-5   h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  rounded-[55px] " type="text" placeholder="Gender"required>
                            <option value="Select Gender">Select Gender</option> 
                             <option value="Male"> Male </option>
                             <option value="Female"> Female </option>
                             <option value="Others"> Others </option>
                             </select>                              
                        </div>

                        {/* education */}
                        <div className="focus:outline-none mb-4 rounded-[55px]  border-black border-[1.5px] items-center relative w-full ">
                            <select onChange={handleChange} id="education" value={selectedEducation} className="input w-full border-r-4  px-5   h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  rounded-[55px] " type="text" required placeholder="Select Education">
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

                        {/* password */}
                        <div className="mb-4 rounded-[104px] flex flex-rows items-center relative w-full ">
                            <input onChange={handleChange} id="password" required className={`focus:outline-none  input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
                             text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out  ${error1 ? 'border-red-500' : 'border-black'}`} type={showPass?"password":"text"} placeholder="Password"/>                               
                             <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword}>{showPass?"Show":"Hide"}</p>
                            
                            
                        </div>
                        {error1 && <p className="-mt-3 mb-2 text-red-500  ml-2 text-[0.80rem]">{error1}</p>}
                        

                        {/* confirm password */}
                        <div className="focus:outline-none mb-1 rounded-[104px] flex flex-rows items-center relative w-full">
                            <input onChange={handlePassChange} required id="confirm_password"  className="input w-full  px-5 pr-12 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem]
                            text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" type={showPass2?"password":"text"} placeholder="Confirm Password"/>
                            <p className="absolute right-4 text-[0.8rem] text-dimgray cursor-pointer" onClick={showPassword2}>{showPass2?"Show":"Hide"}</p>
                        </div>


                        {error&&<p className="ml-4 text-[.7rem]  lg:text-[0.8rem]  text-red-500 font-roboto ">{error}</p>}
                        <div className="mb-8"/>
                        <div className="mb-4 mx-auto w-[8rem] md:w-[9rem] lg:w-[10rem] rounded-[44px] bg-darkslategray flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] relative leading-[150%]">
                        <button disabled={err!=null || error1!=null || error!=null ||loading} className="text-white px-[24px] text-[1rem] leading-tight font-roboto">{loading ? "Loading" : "SignUp"}</button>
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
        :<LoadingSpinner/>
}</div>);
    
} 