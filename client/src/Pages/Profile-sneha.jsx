import React,{useState,useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart,updateUserFailure,updateUserSuccess,signOutUserFailure,signOutUserStart,signOutUserSuccess } from '../Redux/userSlice/userSlice';
import avatar from '../Assets/Images/avatar.svg';
import avatarhover from '../Assets/Images/avatarHover.svg';
import polygon from '../Assets/Images/polygon.svg';
import edit from '../Assets/Images/edit.svg';

export default function Profile() {
  const [windowsSize,setWindowsSize]=useState({});
  const deviceType = useSelector((state) => state.deviceType.deviceType);

  //Code for backend
  const fileRef=useRef(null);
    const {currentUser,loading,error}=useSelector((state)=>state.user);
    const [file,setFile]=useState(undefined);
    const [filePerc,setFilePerc]=useState(0);
    const [fileUploadError,setFileUploadError]=useState(false);
    const [formData,setFormData]=useState(0);
    const [updateSuccess,setUpdateSuccess]=useState(false);
    const onImgClick=()=>{
        console.log("heool")
        fileRef.current.click()
    }
  //  
  const dispatch=useDispatch();


  useEffect(() => {
    const handleResize = () => {
      dispatch(changeDevice());
      setWindowsSize(window.innerWidth) 
    };

    if(file){
      handleUploadFile(file)
    }

    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[dispatch,setWindowsSize,file]);
  console.log(deviceType)


  //Functions to handle editing details

  const handleUploadFile=(file)=>{
    const storage =getStorage(app);
    const fileName=new Date().getTime()+ file.name;
    const storageRef=ref(storage,fileName);
    const uploadTask=uploadBytesResumable(storageRef,file);

    uploadTask.on('state_changed',
  (snapshot)=>{
    const progress=  (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    setFilePerc(Math.round(progress));
  },
  (error)=>{
    setFileUploadError(true);
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
      setFormData({...formData,avatar:downloadUrl})
    })
  }
  ) 
  }
  
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})

  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      dispatch(updateUserStart());
      const res=await fetch(`/api/user/update/${currentUser._id}`,{method:'POST',headers:{
        'Content-Type':'application/json',
      },
    body:JSON.stringify(formData)});
    const data=await res.json()
    if(data.success===false){
       dispatch(updateUserFailure(data.message));
       return;
    }
    dispatch(updateUserSuccess(data));
    setUpdateSuccess(true);

    }catch(error){
      
      dispatch(updateUserFailure(error.message));
    }

  }
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
  console.log(currentUser)
  console.log(formData)
  console.log(file);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div className={'px-[1rem] md:px-[3rem] lg:px-[6rem]  relative bg-right-top bg-no-repeat overflow-hidden'
} style={{ backgroundImage:deviceType=="lg"? `url(${polygon})`:"",backgroundSize:`${windowsSize*0.55}px` }}>
      {deviceType=="lg"?
      <div className='flex w-full justify-between'>

        <div className=' lg:mt-[4rem]  lg:mb-[6rem] flex flex-col  font-lato font-extralight justify-center  ' style={{fontSize:windowsSize<1300?"3.5rem":"4.8rem",marginTop:windowsSize<1300?"2.5rem":"4rem"}}>
          <div>
          <div>
          <span className='' >Hey,</span>
          <span>{' '}</span>
          <span className=' font-bold' style={{fontSize:windowsSize<1300?"4.5rem":"6rem"}}>{currentUser.username.charAt(0).toUpperCase()+currentUser.username.slice(1,currentUser.username.indexOf(" "))}</span>
          </div>

          <div>
          <span>Here's</span>
          <span>{' '}</span>
          <span>Your</span>
          <span>{' '}</span>
          <span className=' font-bold text-purplefont'>Profile</span>
          </div>
          </div>

          

        </div>

          <div className='flex items-center'>
          <div className='relative object-cover overflow-hidden rounded-full  bg-purple' style={{height:windowsSize<1300?windowsSize<1100?"13rem":("14rem"):"18rem",width:windowsSize<1300?windowsSize<1100?"13rem":"14rem":"18rem"}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

          <img
            src={avatar}
            alt="Profile"
            className="absolute transition-opacity duration-500 ease-in-out opacity-100"
            style={{ opacity: isHovered ? 0.5 : 1 }}
          />
          {isHovered && (
            <img
              src={avatarhover}
              alt="Profile"
              className="absolute transition-opacity duration-500 ease-in-out opacity-100"
            />
          )}
        
          </div>
          </div>

      </div>
      :
      <div className="flex ">
       <div className='w-full my-[3rem] lg:mt-[8rem]  lg:mb-[6rem] flex flex-col  font-lato font-extralight	text-[1.5rem] md:text-[3rem]  justify-center gap-[4rem] '>
          <div>
          <div>
          <span className=''>Hey,</span>
          <span>{' '}</span>
          <span className='text-[1.75rem] md:text-[4rem] font-bold'>{currentUser.username.charAt(0).toUpperCase()+currentUser.username.slice(1,currentUser.username.indexOf(" "))}</span>
          </div>

          <div>
          <span>Here's</span>
          <span>{' '}</span>
          <span>Your</span>
          <span>{' '}</span>
          <span className=' font-bold text-purplefont'>Profile</span>
          </div>
          </div>
        </div>


        <div className="my-auto">  <div className=' object-cover overflow-hidden rounded-full h-[6.61rem] w-[6.61rem]  md:h-[10rem] md:w-[10rem] bg-purple'>
          <img className='' alt='Profile' src={avatar}/>
          </div></div>

        </div>}

      <div className="grid grid-cols-1 gap-[2rem] md:gap-[3rem] lg:gap-[4rem] lg:grid-cols-5 w-full mb-[2rem] md:mb-[3rem] lg:mb-[4rem]">
      <div className='col-span-1 lg:col-span-3 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] ' >
        <div className='flex justify-between text-dimgray px-4 border-solid border-b-[1px] border-grey content-center'>
        <div>Personal Info</div>
        <div className='flex items-end'>
        <img src={edit}/>
        </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 justify-start gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem]'>
          
          <div className=''>
            <div className='text-dimgray'>Name</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Divyansh Nigam</div>
          </div>
          <div>
            <div className='text-dimgray'>Gender</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Male</div>
          </div>
          <div>
            <div className='text-dimgray'>Date of Birth</div>
            <div className='pt-2 font-bold text-[1.1rem]'>10/05/2004</div>
          </div>
          <div>
            <div className='text-dimgray'>Country</div>
            <div className='pt-2 font-bold text-[1.1rem]'>India</div>
          </div>
          <div>
            <div className='text-dimgray'>State</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Madhya Pradesh</div>
          </div>
          <div>
            <div className='text-dimgray'>City</div>
            <div className='pt-2 font-bold text-[1.1rem]'>Bhopal</div>
          </div>
        </div>
      </div>
      </div>

      
      <div className=' grid grid-col-1 gap-[2rem] md:gap-[3rem] lg:gap-[4rem] lg:grid-cols-5   mb-[6rem]  '>
        <div className='col-span-1 lg:col-span-3 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] ' >
          <div className='flex justify-between text-dimgray px-4 border-solid border-b-[1px] border-grey content-center'>
          <div>Education</div>
          <div className='flex items-end'>
          <img src={edit}/>
          </div>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 justify-start gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem]'>
            <div>
              <div className='text-dimgray'>Profession</div>
              <div className='pt-2 font-bold text-[1.1rem]'>Student</div>
            </div>
            <div>
              <div className='text-dimgray'>Current Education</div>
              <div className='pt-2 font-bold text-[1.1rem]'>Under Graduate</div>
            </div>
            <div>
              <div className='text-dimgray'>Course(if applicable)</div>
              <div className='pt-2 font-bold text-[1.1rem]'>B.tech</div>
            </div>
            <div>
              <div className='text-dimgray'>Stream</div>
              <div className=' pt-2 font-bold text-[1.1rem]'>PCM</div>
            </div>
            

            <div className='text-dimgray'>Fields Of Interest</div>
          </div>

        </div>

        <div className='col-span-1 lg:col-span-2 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem]   ' >
          <div className='flex justify-between text-dimgray px-4 border-solid border-b-[1px] border-grey content-center'>
          <div>Contact Info</div>
          <div className='flex items-end'>
          <img src={edit}/>
          </div>
          </div>

          <div className='flex flex-col justify-start pt-[2rem] lg:pt-[3rem]'>
          <div>
              <div className='text-dimgray'>Email</div>
              <div className='text-[1.1rem] pt-2 font-bold'>nigamdivyansh2004@gmail.com</div>
          </div>

          <div className='flex flex-col lg:flex-row gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem] justify-between '>
          <div>
              <div className='text-dimgray'>Contact</div>
              <div className='font-bold text-[1.1rem] pt-2 '>9098652348</div>
          </div>

          <div>
              <div className='text-dimgray'>Linked In</div>
              <div className='font-bold text-[1.1rem] pt-2 '>http://linked.com</div>
          </div>
          </div>

          </div>
          </div>
      </div>
      </div>
    </>
  )
}
 