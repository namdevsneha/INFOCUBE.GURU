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
    
    const [formData1,setFormData1]=useState({username:currentUser.username,dob:currentUser.dob,
                avatar:currentUser.avatar,
                gender:currentUser.gender,
                country:currentUser.country,
                state:currentUser.state,
                city:currentUser.city,});

    const [formData2,setFormData2]=useState({ stream:currentUser.stream,
                course:currentUser.course,
                education:currentUser.education,});

    const [formData3,setFormData3]=useState({ contact:currentUser.contact,
      linkedin:currentUser.linkedin,});

    const [updateSuccess,setUpdateSuccess]=useState(false);
  const [editing, setEditing] = useState(false);
    const [editing2, setEditing2] = useState(false);
  const [editing3, setEditing3] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const [disabled, setDisabled] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [disabled3, setDisabled3] = useState(true);
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
  const onImgClick=()=>{
          console.log("heool")
          fileRef.current.click()
      }

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
      setFormData1({...formData1,avatar:downloadUrl})
    })
  }
  ) 
  }
  
  const handleChange1=(e)=>{
    setFormData1({...formData1,[e.target.id]:e.target.value})
  }
  const handleChange2=(e)=>{
    setFormData2({...formData2,[e.target.id]:e.target.value})
  }
  const handleChange3=(e)=>{
    setFormData3({...formData3,[e.target.id]:e.target.value})

  }

  const handleEditClick = () => {
    setEditing(true);
    setDisabled(false);
  };

  const handleSaveClick = (event) => {
    setEditing(false);
    setDisabled(true);
    const form = event.target.closest('form');
    if (form) {
      handleSubmit1(event,'form1');
    }
  };

  const handleCancelClick = () => {
    setFormData1(currentUser)
    setEditing(false);
    setDisabled(true);
  };

  const handleSubmit1=async (e,formId)=>{
    var formData=formData1
     if(formId=='form1'){
      formData=formData1
      
    }else if(formId=='form2'){
      formData=formData2
    }else if(formId=='form3'){
      formData=formData3
    }
    console.log(formData)
    e.preventDefault();
    try{
      dispatch(updateUserStart());
      const res=await fetch(`/api/user/update/${currentUser._id}`,{method:'POST',headers:{
        'Content-Type':'application/json',
      },
    
    body:JSON.stringify(formData)});

    const data=await res.json()
    console.log('here')
    if(data.success===false){
      console.log('failed')
       dispatch(updateUserFailure(data.message));
       return;
    }
    console.log('now here also')
    dispatch(updateUserSuccess(data));
    setUpdateSuccess(true);

    }catch(error){
      console.log('error')
      dispatch(updateUserFailure(error.message));
    }

  }

  // console.log(formData1)
  // console.log(formData2)
  // console.log(formData3)
  // console.log(file);
  // console.log(currentUser)
  
  
// for edit 1
 

  // for edit 2
  const handleEditClick2 = () => {
    setEditing2(true);
    setDisabled2(false);
  };

  const handleSaveClick2 = (event) => {
    setEditing2(false);
    setDisabled2(true);
    const form = event.target.closest('form');
    if (form) {
      handleSubmit1(event,'form2');
    }
  };

  const handleCancelClick2 = () => {
    setFormData2(currentUser)
    setEditing2(false);
    setDisabled2(true);
  };

  // for edit 3
  const handleEditClick3 = () => {
    setEditing3(true);
    setDisabled3(false);
  };

  const handleSaveClick3 = (event) => {
    setEditing3(false);
    setDisabled3(true);
    const form = event.target.closest('form');
    if (form) {
      handleSubmit1(event,'form3');
    }
  };

  const handleCancelClick3 = () => {
    setFormData3(currentUser)
    setEditing3(false);
    setDisabled3(true);
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
      <form  className='col-span-1 lg:col-span-3 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 py-[2rem] ' >
        <div className='flex justify-between text-dimgray px-4 pb-1 border-solid border-b-[1px] border-grey content-center'>
        <div>Personal Info</div>
        {editing ? (
       
        <> 
              <div className="flex flex-row ">
              <button type="submit"
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
            <input disabled={disabled} className='bg-transparent pt-2 font-bold text-[1.1rem]'  onChange={handleChange1} id="username" type="text" value={formData1.username} placeholder="User Name"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Divyansh Nigam</div> */}
          </div>
          <div>
            <label htmlFor="Gender" className='text-dimgray'>Gender</label>
            <input disabled={disabled} className='bg-transparent pt-2 font-bold text-[1.1rem]'  onChange={handleChange1} id="gender" type="text" value={formData1.gender} placeholder="Gender"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Male</div> */}
          </div>
          <div>
            <label htmlFor="DOB" className='text-dimgray'>Date of Birth</label>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold text-[1.1rem]" pattern="\d{2}\\d{2}\\d{4}" onChange={handleChange1} id="dob" formate type="date" value={formData1.dob} placeholder="MM/DD/YYYY" />
            {/* <div className='pt-2 font-bold text-[1.1rem]'>10/05/2004</div> */}
          </div>
          <div>
            <label htmlFor="Country" className='text-dimgray'>Country</label>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange1} id="country" type="text"  value={formData1.country} placeholder="India"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>India</div> */}
          </div>
          <div>
            <label className='text-dimgray'>State</label>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange1} id="state" type="text" value={formData1.state} placeholder="Madhya Pradesh"/>
            {/* <div className='pt-2 font-bold text-[1.1rem]'>Madhya Pradesh</div> */}
          </div>
          <div>
            <label htmlFor="City" className='text-dimgray'>City</label>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange1} id="city" type="text" value={formData1.city} placeholder="Bhopal"/>
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
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange2}  id="profession" type="text" value={formData2.profession} placeholder="Student"/>
              {/* <div className='pt-2 font-bold text-[1.1rem]'>Student</div> */}
            </div>
            <div>
              <label htmlFor="Current Education" className='text-dimgray'>Current Education</label>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange2} id="education" type="text" value={formData2.education} placeholder="B.tech"/>
              {/* <div className='pt-2 font-bold text-[1.1rem]'>Under Graduate</div> */}
            </div>
            <div>
              <label className='text-dimgray'>Course(if applicable)</label>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange2} id="course" type="text" value={formData2.course} placeholder="course"/>
              {/* <div className='pt-2 font-bold text-[1.1rem]'>B.tech</div> */}
            </div>
            <div>
              <label htmlFor="Stream" className='text-dimgray'>Stream</label>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold text-[1.1rem]"  onChange={handleChange2} id="stream" type="text" value={formData2.stream} placeholder="Stream"/>
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
               <input disabled={disabled3} className='bg-transparent text-[1.1rem]  pt-2 font-bold w-full'   onChange={handleChange3}  id='email' type='email' value={formData3.email} placeholder="username@gmail.com"/>
              {/* <div className='text-[1.1rem] pt-2 font-bold'>nigamdivyansh2004@gmail.com</div> */}
          </div>

          <div className='flex flex-col lg:flex-row gap-[2rem] md:gap-[3rem] lg:gap-[4rem] pt-[2rem] md:pt-[3rem] lg:pt-[4rem] justify-between '>
          <div>
              <label htmlFor="Contact" className='text-dimgray'>Contact</label>
              <input  disabled={disabled3} className='bg-transparent font-bold text-[1.1rem] pt-2'  onChange={handleChange3} id='contact' type='tel' value={formData3.contact} placeholder='XXXXXXXXXX'/>
               {/* <div className='font-bold text-[1.1rem] pt-2 '>9098652348</div> */}
          </div>

          <div>
              <label htmlFor="Linked In" className='text-dimgray'>Linked In</label>
              <input disabled={disabled3} className="bg-transparent font-bold text-[1.1rem] pt-2"  onChange={handleChange3} id="linkedin" type="text" value={formData3.linkedin} placeholder="http://linked.com"/>
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
 