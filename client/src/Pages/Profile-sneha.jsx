import React,{useState,useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart,updateUserFailure,updateUserSuccess} from '../Redux/userSlice/userSlice';
import avatar from '../Assets/Images/avatar.svg';
import avatarhover from '../Assets/Images/avatarHover.svg';
import polygon from '../Assets/Images/Polygon.webp';
import edit from '../Assets/Images/edit.webp';
import crossEdit from '../Assets/Images/crossEdit.webp';
import saveEdit from '../Assets/Images/saveEdit.webp';
import { useLocation } from "react-router-dom";

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

  const [editing, setEditing] = useState(false);
  const [editing2, setEditing2] = useState(false);
  const [editing3, setEditing3] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const [disabled, setDisabled] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [disabled3, setDisabled3] = useState(true);
  const dispatch=useDispatch();

  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [location]);

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
      const res=await fetch(`/api/user/updateProfile/${currentUser._id}`,{method:'POST',headers:{
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
    <div className={`page ${show ? 'page1-enter-active' : 'page1-exit-active'}`}>
    <div className={'shadow-inner mt-[2.3rem] md:mt-[3rem] lg:mt-[3rem]  relative bg-right-top bg-no-repeat overflow-hidden'}  
    style={{ backgroundImage:deviceType=="lg"? `url(${polygon})`:"",backgroundSize:`${0.4464*innerWidth+100}px`,
    paddingLeft :innerWidth<768?`${0.0383*innerWidth-0.6239}px`:`${0.0813*innerWidth-11.43}px`,paddingRight:innerWidth<768?`${0.0383*innerWidth-0.6239}px`:`${0.0813*innerWidth-11.43}px`, gap:`${0.0536*innerWidth-22.91}px`  } }>
      {deviceType=="lg"?
      <div className='flex w-full  justify-between my-[3rem] '>

      <div className='  flex flex-col my-auto font-lato font-extralight  justify-center  ' style={{fontSize:`${0.0254*innerWidth+28.032}px`,marginTop:windowsSize<1300?"2.5rem":"4rem"}}>
        <div className="leading-[120%] items-center justify-center">
        <span >{"Hey, "}</span>
        <span className=' font-poppins font-bold' style={{fontSize:`${0.02679*innerWidth+44.5632}px`}}>{currentUser.username.charAt(0).toUpperCase()+currentUser.username.slice(1,currentUser.username.indexOf(" "))}<br/></span>
        <span >{'Here\'s Your '}</span>
        
        <span className='font-poppins font-bold text-purplefont' >Profile</span>
        </div>
      </div>

        <div className='flex '>
        <div className='relative object-cover overflow-hidden rounded-full  bg-purple' style={{height:`${0.08929*innerWidth+116.5712}px`,width:`${0.08929*innerWidth+116.5712}px`}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

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
      <div className="flex my-[1rem] md:my-[2rem] ">
       <div className='w-full    flex flex-col  font-lato font-extralight	text-[1.5rem] md:text-[3rem]  justify-center gap-[4rem] '>
          <div className="leading-[120%]" style={{fontSize:`${0.0432099*innerWidth+3.7962963}px`}}>
          <span >{"Hey, "}</span>
          <span className='font-poppins font-bold' style={{fontSize:`${0.0432099*innerWidth+9.7962963}px`}}>{currentUser.username.charAt(0).toUpperCase()+currentUser.username.slice(1,currentUser.username.indexOf(" "))}<br/></span>

          <span>{'Here\'s Your '}</span>
          <span className=' font-bold font-poppins text-purplefont'>Profile</span>
          </div>
        </div>


        <div className="my-auto">  <div className='relative object-cover overflow-hidden rounded-full bg-purple ' style={{height:`${0.0771605*innerWidth+81.0648125}px`,width:`${0.0771605*innerWidth+81.0648125}px`}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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

      <div className="grid grid-cols-1 gap-[2rem] md:gap-[2rem] lg:gap-[4rem] lg:grid-cols-3 w-full mb-[2rem] md:mb-[3rem] lg:mb-[2rem]">
      <form  className='col-span-1 lg:col-span-2 relative box-border overflow-hidden text-left  border-[1px] border-solid border-grey px-4 pb-[2rem] ' style={{borderRadius:innerWidth<1024?`${0.0123457*innerWidth+11.3333333}px`:`${24}px`}} >
        <div className='flex flex-row items-center justify-between text-dimgray  border-solid border-b-[1px] border-grey content-center' style={{padding:innerWidth<1024?`10px 0px`:`${0.01116*innerWidth-1.4272}px 0px`}}>
        <div className=" font-roboto" style={{fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>Personal Info</div>
        {editing ? (
       
              <div className="flex  flex-row gap-[1rem] ">
              <button className="h-auto" type="submit"
                onClick={handleSaveClick} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={saveEdit}  />
              </button>
              <button className="h-auto"
                onClick={handleCancelClick} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={crossEdit} />
              </button>
              </div>
          ) : (
            <button 
              onClick={handleEditClick} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
            >
              <img src={edit} />
            </button>
          )}
        </div>

        <div className='grid grid-cols-2  font-roboto lg:grid-cols-4 justify-start gap-[1.5rem] md:gap-[1.5rem] lg:gap-[2rem]' style={{paddingTop :innerWidth<1024? `${0.0231481*innerWidth+16.3888889}px`:`${0.017857*innerWidth+21.7143}px`,fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>
          <div className=''>
            <label htmlFor="Name" className=' text-dimgray'>Name</label><br/>
            <input disabled={disabled} className='bg-transparent pt-2 font-bold '  onChange={handleChange1} id="username" type="text" value={formData1.username} placeholder="User Name"/>
          </div>
          <div>
            <label htmlFor="Gender" className='text-dimgray'>Gender</label><br/>
            <input disabled={disabled} className='bg-transparent pt-2 font-bold '  onChange={handleChange1} id="gender" type="text" value={formData1.gender} placeholder="Gender"/>
          </div>
          <div>
            <label htmlFor="DOB" className='text-dimgray'>Date of Birth</label><br/>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold " pattern="\d{2}\\d{2}\\d{4}" onChange={handleChange1} id="dob" formate type="date" value={formData1.dob} placeholder="MM/DD/YYYY" />
          </div>
          <div>
            <label htmlFor="Country" className='text-dimgray'>Country</label><br/>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold "  onChange={handleChange1} id="country" type="text"  value={formData1.country} placeholder="India"/>
          </div>
          <div>
            <label className='text-dimgray'>State</label><br/>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold "  onChange={handleChange1} id="state" type="text" value={formData1.state} placeholder="Madhya Pradesh"/>
          </div>
          <div>
            <label htmlFor="City" className='text-dimgray'>City</label><br/>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold "  onChange={handleChange1} id="city" type="text" value={formData1.city} placeholder="Bhopal"/>
          </div>
        </div>
      </form>
      </div>

      <div className=' grid grid-col-1 gap-[2rem] md:gap-[3rem] lg:gap-[2rem] lg:grid-cols-3  mb-[6rem]  '>
        <form className='col-span-1 lg:col-span-2 relative box-border overflow-hidden text-left   font-roboto border-[1px] border-solid border-grey   px-4 pb-[2rem] ' style={{borderRadius:innerWidth<1024?`${0.0123457*innerWidth+11.3333333}px`:`${24}px`}} >
          <div className='flex items-center justify-between text-dimgray  pb-1 border-solid border-b-[1px] border-grey content-center'  style={{padding:innerWidth<1024?`10px 0px`:`${0.01116*innerWidth-1.4272}px 0px`}}>
          <div className=" font-roboto" style={{fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>Education</div>
          {editing2 ? (
           
              <div className="flex flex-row gap-[1rem] ">
              <button 
                onClick={handleSaveClick2} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={saveEdit} />
              </button>
              <button 
                onClick={handleCancelClick2} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={crossEdit}  />
              </button>
              </div>
          
          ) : (
            <button 
              onClick={handleEditClick2} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
            >
              <img src={edit}  />
            </button>
          )}
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 justify-start gap-[1.5rem] md:gap-[1.5rem] lg:gap-[2rem] ' style={{paddingTop :innerWidth<1024? `${0.0231481*innerWidth+16.3888889}px`:`${0.017857*innerWidth+21.7143}px`,fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>
            <div>
              <label htmlFor="Profession" className='text-dimgray'>Profession</label><br/>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold "  onChange={handleChange2}  id="profession" type="text" value={formData2.profession} placeholder="Student"/>
            </div>
            <div>
              <label htmlFor="Current Education" className='text-dimgray'>Current Education</label><br/>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold "  onChange={handleChange2} id="education" type="text" value={formData2.education} placeholder="B.tech"/>
            </div>
            <div>
              <label className='text-dimgray'>Course(if applicable)</label><br/>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold "  onChange={handleChange2} id="course" type="text" value={formData2.course} placeholder="course"/>
            </div>
            <div>
              <label htmlFor="Stream" className='text-dimgray'>Stream</label><br/>
              <input disabled={disabled2} className="bg-transparent pt-2 font-bold "  onChange={handleChange2} id="stream" type="text" value={formData2.stream} placeholder="Stream"/>
            </div>
            

            <div className='text-dimgray'>Fields Of Interest</div>
          </div>

        </form>
        
     
        <form className='col-span-1 lg:col-span-1 relative box-border overflow-hidden text-left text-[1rem]  font-roboto border-[1px] border-solid border-grey  rounded-[2rem] px-4 pb-[2rem]   ' style={{borderRadius:innerWidth<1024?`${0.0123457*innerWidth+11.3333333}px`:`${24}px`}} >
        
          <div className='flex items-center justify-between  text-dimgray px-4 pb-1 border-solid border-b-[1px] border-grey content-center' style={{padding:innerWidth<1024?`10px 0px`:`${0.01116*innerWidth-1.4272}px 0px`}}>
          <div className=" font-roboto" style={{fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>Contact Info</div>

            {editing3 ? (
            <>
              <div className="flex flex-row gap-[1rem]">
              <button 
                onClick={handleSaveClick3} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={saveEdit} />
              </button>
              <button 
                onClick={handleCancelClick3} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={crossEdit} />
              </button>
              </div>
            </>
          ) : (
            <button 
              onClick={handleEditClick3} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
            >
              <img src={edit} />
            </button>
          )}

          </div>

          <div className='flex flex-col lg:flex-row gap-[1.5rem] md:gap-[1.5rem] lg:gap-[2rem]  justify-between ' style={{paddingTop :innerWidth<1024? `${0.0231481*innerWidth+16.3888889}px`:`${0.017857*innerWidth+21.7143}px`,fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>
          <div>
              <label htmlFor="Email" className='text-dimgray'>Email</label><br/>
               <input disabled={disabled3} className='bg-transparent  pt-2 font-bold w-full'   onChange={handleChange3}  id='email' type='email' value={formData3.email} placeholder="username@gmail.com"/>
          </div>

          <div>
              <label htmlFor="Contact" className='text-dimgray'>Contact</label><br/>
              <input  disabled={disabled3} className='bg-transparent font-bold  pt-2'  onChange={handleChange3} id='contact' type='tel' value={formData3.contact} placeholder='XXXXXXXXXX'/>
          </div>

          <div>
              <label htmlFor="Linked In" className='text-dimgray'>Linked In</label><br/>
              <input disabled={disabled3} className="bg-transparent font-bold pt-2"  onChange={handleChange3} id="linkedin" type="text" value={formData3.linkedin} placeholder="http://linked.com"/>
          </div>

          </div>
          </form>

          
      </div>
      {/* <ProfilePictureDialog></ProfilePictureDialog> */}
      </div>

    </div>
  )
}
 

const ProfilePictureDialog = () => {
  const onClose = () => {}

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">Select Profile Picture</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Select from your device</button>
        </div>
      </div>
    </div>
  );
};