import React,{useState,useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart,updateUserFailure,updateUserSuccess} from '../Redux/userSlice/userSlice';
import avatar from '../Assets/Images/avatar.svg';
import avatarhover from '../Assets/Images/avatarHover.svg';
import polygon from '../Assets/Images/polygon.svg';
import edit from '../Assets/Images/edit.svg';
import crossEdit from '../Assets/Images/crossEdit.svg';
import saveEdit from '../Assets/Images/saveEdit.svg';

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
    console.log('hi2')
  }
  const handleChange2=(e)=>{
    console.log('hi')
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
  
  console.log(formData)
  console.log(file);
  console.log(currentUser)
  const [isHovered, setIsHovered] = useState(false);

// for edit 1
  const [editing, setEditing] = useState(false);
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  // for edit 2
  const [editing2, setEditing2] = useState(false);
  const handleEditClick2 = () => {
    setEditing2(true);
  };

  const handleSaveClick2 = () => {
    setEditing2(false);
  };

  const handleCancelClick2 = () => {
    setEditing2(false);
  };

  // for edit 3
  const [editing3, setEditing3] = useState(false);
  const handleEditClick3 = () => {
    setEditing3(true);
  };

  const handleSaveClick3 = () => {
    setEditing3(false);
  };

  const handleCancelClick3 = () => {
    setEditing3(false);
  };

  return (
    <>
    <div className={'sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] px-[1rem] md:px-[3rem] lg:px-[6rem]  relative bg-right-top bg-no-repeat overflow-hidden'} 
    style={{ backgroundImage:deviceType=="lg"? `url(${polygon})`:"",backgroundSize:`${windowsSize*0.55}px` }}>
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


        <div className="my-auto">  <div className='relative object-cover overflow-hidden rounded-full h-[6.61rem] w-[6.61rem]  md:h-[10rem] md:w-[10rem] bg-purple ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
          
          </div></div>

        </div>}

      <div className="grid grid-cols-1 gap-[2rem] md:gap-[3rem] lg:gap-[4rem] lg:grid-cols-5 w-full mb-[2rem] md:mb-[3rem] lg:mb-[4rem]">
      <form className='col-span-1 lg:col-span-3 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] ' >
        <div className='flex justify-between text-dimgray px-4 pb-1 border-solid border-b-[1px] border-grey content-center'>
        <div>Personal Info</div>
        {editing ? (
            <>
              <div className="flex flex-row ">
              <button 
                onClick={handleSaveClick}
              >
                <img src={saveEdit} />
              </button>
              <button 
                onClick={handleCancelClick}
              >
                <img src={crossEdit} />
              </button>
              </div>
            </>
          ) : (
            <button 
              onClick={handleEditClick}
            >
              <img src={edit} />
            </button>
          )}
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 justify-start gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem]'>
          
          <div className=''>
            <label htmlFor="Name" className='text-dimgray'>Name</label>
            <input className='pt-2 font-bold text-[1.1rem]' readOnly onChange={handleChange2} id="Name" type="text" placeholder="User Name"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Divyansh Nigam</div> */}
          </div>
          <div>
            <label htmlFor="Gender" className='text-dimgray'>Gender</label>
            <input className='pt-2 font-bold text-[1.1rem]' readOnly onChange={handleChange2} id="Gender" type="text" placeholder="Gender"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Male</div> */}
          </div>
          <div>
            <label htmlFor="DOB" className='text-dimgray'>Date of Birth</label>
            <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="DOB" type="date" placeholder="MM/DD/YYYY" />
            {/* <div className='pt-2 font-bold text-[1.1rem]'>10/05/2004</div> */}
          </div>
          <div>
            <label htmlFor="Country" className='text-dimgray'>Country</label>
            <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="Country" type="text" placeholder="India"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>India</div> */}
          </div>
          <div>
            <label className='text-dimgray'>State</label>
            <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="state" type="text" placeholder="Madhya Pradesh"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Madhya Pradesh</div> */}
          </div>
          <div>
            <label htmlFor="City" className='text-dimgray'>City</label>
            <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="city" type="text" placeholder="Bhopal"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Bhopal</div> */}
          </div>
        </div>
      </form>
      </div>

      
      <div className=' grid grid-col-1 gap-[2rem] md:gap-[3rem] lg:gap-[4rem] lg:grid-cols-5   mb-[6rem]  '>
        <form className='col-span-1 lg:col-span-3 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] ' >
          <div className='flex justify-between text-dimgray px-4 pb-1 border-solid border-b-[1px] border-grey content-center'>
          <div>Education</div>
          {editing2 ? (
            <>
              <div className="flex flex-row ">
              <button 
                onClick={handleSaveClick2}
              >
                <img src={saveEdit} />
              </button>
              <button 
                onClick={handleCancelClick2}
              >
                <img src={crossEdit} />
              </button>
              </div>
            </>
          ) : (
            <button 
              onClick={handleEditClick2}
            >
              <img src={edit} />
            </button>
          )}
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 justify-start gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem]'>
            <div>
              <label htmlFor="Profession" className='text-dimgray'>Profession</label>
              <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="Profession" type="text" placeholder="Student"/>
              {/* <div className='pt-2 font-bold text-[1.1rem]'>Student</div> */}
            </div>
            <div>
              <label htmlFor="Current Education" className='text-dimgray'>Current Education</label>
              <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="eduation" type="text" placeholder="B.tech"/>
              {/* <div className='pt-2 font-bold text-[1.1rem]'>Under Graduate</div> */}
            </div>
            <div>
              <label className='text-dimgray'>Course(if applicable)</label>
              <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="course" type="text" placeholder="course"/>
              {/* <div className='pt-2 font-bold text-[1.1rem]'>B.tech</div> */}
            </div>
            <div>
              <label htmlFor="Stream" className='text-dimgray'>Stream</label>
              <input className="pt-2 font-bold text-[1.1rem]" readOnly onChange={handleChange2} id="stream" type="text" placeholder="Stream"/>
              {/* <div className=' pt-2 font-bold text-[1.1rem]'>PCM</div> */}
            </div>
            

            <div className='text-dimgray'>Fields Of Interest</div>
          </div>

        </form>
        
     
        <form className='col-span-1 lg:col-span-2 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem]   ' >
        
          <div className='flex justify-between  text-dimgray px-4 pb-1 border-solid border-b-[1px] border-grey content-center'>
          <div>Contact Info</div>

            {editing3 ? (
            <>
              <div className="flex flex-row ">
              <button 
                onClick={handleSaveClick3}
              >
                <img src={saveEdit} />
              </button>
              <button 
                onClick={handleCancelClick3}
              >
                <img src={crossEdit} />
              </button>
              </div>
            </>
          ) : (
            <button 
              onClick={handleEditClick3}
            >
              <img src={edit} />
            </button>
          )}

          </div>

          <div className='flex flex-col justify-start pt-[2rem] lg:pt-[3rem]'>
          <div>
              <label htmlFor="Email" className='text-dimgray'>Email</label>
               <input className='text-[1.1rem]  pt-2 font-bold w-full' readOnly  onChange={handleChange2}  id='Email' type='email' placeholder="username@gmail.com"/>
              {/* <div className='text-[1.1rem] pt-2 font-bold'>nigamdivyansh2004@gmail.com</div> */}
          </div>

          <div className='flex flex-col lg:flex-row gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem] justify-between '>
          <div>
              <label htmlFor="Contact" className='text-dimgray'>Contact</label>
              <input className='font-bold text-[1.1rem] pt-2' readOnly onChange={handleChange2} id='Contact' type='tel' placeholder='XXXXXXXXXX'/>
               {/* <div className='font-bold text-[1.1rem] pt-2 '>9098652348</div> */}
          </div>

          <div>
              <label htmlFor="Linked In" className='text-dimgray'>Linked In</label>
              <input className="font-bold text-[1.1rem] pt-2" readOnly onChange={handleChange2} id="Linked In" type="email" placeholder="http://linked.com"/>
              {/* <div className='font-bold text-[1.1rem] pt-2 '>http://linked.com</div> */}
          </div>
          </div>

          </div>
          </form>

          
      </div>
      </div>
    </>
  )
}
 