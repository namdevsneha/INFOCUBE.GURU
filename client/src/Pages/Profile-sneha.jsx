import React,{useState,useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeDevice} from '../Redux/userSlice/deviceTypeSlice.js';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart,updateUserFailure,updateUserSuccess} from '../Redux/userSlice/userSlice';
import avatarhover from '../Assets/Images/avatarHover.svg';
import polygon from '../Assets/Images/Polygon.webp';
import edit from '../Assets/Images/edit.webp';
import crossEdit from '../Assets/Images/crossEdit.webp';
import saveEdit from '../Assets/Images/saveEdit.webp';
import { useLocation } from "react-router-dom";
import { Country, State, City } from 'country-state-city';
import { baseURL } from "../url.js";
import axios from "axios";

export default function Profile() {
  const [windowsSize,setWindowsSize]=useState({});
  const deviceType = useSelector((state) => state.deviceType.deviceType);
  const [showChangeImage,setShowChangeImage]=useState(false);
  //Code for backend
  const fileRef=useRef(null);
  const {currentUser,loading,error}=useSelector((state)=>state.user);

  const [file,setFile]=useState(undefined);
  const [filePerc,setFilePerc]=useState(0);
  const [fileUploadError,setFileUploadError]=useState(false);
  const [imageUrl, setImageUrl] = useState('');
 
  
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

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (event) => {
    const country = Country.getCountryByCode(event.target.value);
    setSelectedCountry(country);
    setSelectedState(null); // Reset state and city when country changes
    setSelectedCity(null);
    setFormData1({...formData1,country:country.name})
  };

  const handleStateChange = (event) => {
    const state = State.getStateByCodeAndCountry(event.target.value, selectedCountry.isoCode);
    setSelectedState(state);
    setSelectedCity(null); // Reset city when state changes
    setFormData1({...formData1,state:state.name})
  };

  const handleCityChange =  async(event) =>{
    const city = event.target.value;
    setSelectedCity(city);
    await setFormData1({...formData1,city:city})
  };

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(changeDevice());
      setWindowsSize(window.innerWidth) 
    };

    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  },[dispatch,setWindowsSize,file]);


  //Functions to handle editing details
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageUrl(imageUrl);
    }
  };
  
  const onImgClick=async ()=>{
          await fileRef.current.click()

      }

    const handleUploadFile= (file)=>{
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
  async ()=> {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>{
       setFormData1({...formData1,avatar:downloadUrl})
       handleSubmit2(downloadUrl);

    })
    
    
  },
  
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
  const handleSubmit2=async(avatarUrl)=>{
    try{
      dispatch(updateUserStart());
      const res=await axios.post(`${baseURL}/api/user/updateProfile/${currentUser._id}`, {
        avatar: avatarUrl
    }, {
        withCredentials:true,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data=await res.data
    if(data.success===false){
      console.log('failed')
       dispatch(updateUserFailure(data.message));
       return;
    }
    dispatch(updateUserSuccess(data));

    }catch(error){
      console.log('error')
      dispatch(updateUserFailure(error.message));
    }
  }

  const handleSubmit1=async (formId)=>{
    var formData=formData1
     if(formId=='form1'){
      formData=formData1
      
    }else if(formId=='form2'){
      formData=formData2
    }else if(formId=='form3'){
      formData=formData3
    }
    try{
      dispatch(updateUserStart());
      const res= await axios.post(`${baseURL}/api/user/updateProfile/${currentUser._id}`, formData, {
        withCredentials:true,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data=await res.data
    if(data.success===false){
      console.log('failed')
       dispatch(updateUserFailure(data.message));
       return;
    }
   
    dispatch(updateUserSuccess(data));

    }catch(error){
      console.log('error')
      dispatch(updateUserFailure(error.message));
    }

  }

  const handleChangeImage=(e)=>{
    setShowChangeImage(showChangeImage=>!showChangeImage)
    setFilePerc(0);
    setImageUrl('');
    setFormData1({...formData1,avatar:currentUser.avatar})
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
        <div onClick={handleChangeImage} className='relative object-cover  flex items-center justify-center overflow-hidden rounded-full  bg-purple' style={{height:`${0.08929*innerWidth+116.5712}px`,width:`${0.08929*innerWidth+116.5712}px`}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

        <img
          src={formData1.avatar}
          alt="Profile"
          className="absolute transition-opacity w-full h-full object-cover cover duration-500 ease-in-out opacity-100"
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

        <div onClick={handleChangeImage} className="my-auto"> 
           <div className='relative object-cover  flex items-center justify-center overflow-hidden rounded-full bg-purple ' style={{height:`${0.0771605*innerWidth+81.0648125}px`,width:`${0.0771605*innerWidth+81.0648125}px`}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
            src={formData1.avatar}
            alt="Profile"
            className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100"
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

      <div className="grid grid-cols-1 gap-[2rem] md:gap-[2rem] lg:gap-[4rem] lg:grid-cols-3 w-full mb-[1rem] md:mb-[3rem] lg:mb-[2rem]">
      <form  className='col-span-1 lg:col-span-2 relative box-border  text-left  border-[1px] border-solid border-grey px-4 pb-[2rem] ' style={{borderRadius:innerWidth<1024?`${0.0123457*innerWidth+11.3333333}px`:`${24}px`}} >
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
            <select disabled={disabled} className='bg-transparent pt-2 font-bold '  onChange={handleChange1} id="gender" type="text" value={formData1.gender} placeholder="Gender">
            <option value="Female"> Female </option>              
              <option value="Male"> Male </option>
              <option value="Others"> Others </option>
            </select>
          </div>
          <div>
            <label htmlFor="DOB" className='text-dimgray'>Date of Birth</label><br/>
            <input disabled={disabled} className="bg-transparent pt-2 font-bold "  onChange={handleChange1} id="dob"  type="date" value={formData1.dob} placeholder="MM/DD/YYYY" />
          </div>
          <div>
            <label htmlFor="Country" className='text-dimgray'>Country</label><br/>
            <select id="country" disabled={disabled} className="bg-transparent pt-2 font-bold "  onChange={handleCountryChange}  type="text" placeholder="India">
            <option value={formData1.country}>{formData1.country}</option>
            {Country.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
              </select>

          </div>
          <div>
            <label className='text-dimgray'>State</label><br/>
            <select disabled={ disabled || !selectedCountry} className="bg-transparent pt-2 font-bold "  onChange={handleStateChange} id="state" type="text"  placeholder="Madhya Pradesh">
            <option value={formData1.state}>{formData1.state}</option>
            {selectedCountry && State.getStatesOfCountry(selectedCountry.isoCode).map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
              </select>
          </div>
          <div>
            <label htmlFor="City" className='text-dimgray'>City</label><br/>
            <select disabled={disabled || !selectedState} className="bg-transparent pt-2 font-bold "  onChange={handleCityChange} id="city" type="text"  placeholder="Bhopal">
            <option value={formData1.city}>{formData1.city}</option>
            {selectedState && City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode).map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
              </select>
          </div>
        </div>
      </form>
      </div>

      <div className=' grid grid-col-1 gap-[1rem] md:gap-[3rem] lg:gap-[2rem] lg:grid-cols-3  mb-[6rem]  '>
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
          <div className="w-full">
              <label htmlFor="Email" className='text-dimgray'>Email</label><br/>
              <label className='bg-transparent  pt-2 font-bold w-full' >{currentUser.email} </label>
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
      {showChangeImage?<div className="fixed inset-0 flex bg-gray-900 bg-opacity-50">
        <div className=" flex mx-auto h-screen items-center justify-center">
        <form   accept='image/*'  className='bg-white col-span-1 lg:col-span-2 relative box-border  text-left  border-[1px] border-solid border-grey px-4 pb-[10px]' style={{width:innerWidth<1024?`${0.3703704*innerWidth+181.6666667}px`:`${0.44642857*innerWidth+102.857143}px`, borderRadius:innerWidth<1024?`${0.0123457*innerWidth+11.3333333}px`:`${24}px`}} >
        <div className='flex flex-row   items-center justify-between text-dimgray  border-solid border-b-[1px] border-grey content-center' style={{padding:innerWidth<1024?`10px 0px`:`${0.01116*innerWidth-1.4272}px 0px`}}>
        <div className=" font-roboto" style={{fontSize:innerWidth<1024?`${0.0061728*innerWidth+9.6944444}px`:`${0.00357*innerWidth+10.7456}px`}}>Select Profile Picture </div>

              <div className="flex ml-auto flex-row gap-[1rem] ">
              <div className="cursor-pointer sh-auto" type="submit"
                onClick={()=>{if(file){handleUploadFile(file)}}} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={saveEdit}  />
              </div>
              <button className="h-auto"
                onClick={handleChangeImage} style={{ width:`${0.00781*innerWidth+19.9988}px`}}
              >
                <img src={crossEdit} />
              </button>
              </div>
        </div>

        <div className=" bg-purple mx-auto my-[1rem] rounded-full overflow-hidden mb-4" style={{height:`${0.08929*innerWidth+116.5712}px`,width:`${0.08929*innerWidth+116.5712}px`}}>
            <img src={imageUrl || currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />  
          </div>
          <div className="flex justify-center pb-2" >
              {fileUploadError?(<span className='text-red-700'>Error in Uploading image</span>):
              filePerc>0 && filePerc<100?(<span>{`uploading ${filePerc}`}</span>):
              filePerc===100?(<span className="border-solid border-[1px] border-green-700 rounded-2xl p-2 bg-green-200">File Uploaded Successfully</span>):<></>}
            </div>
        <div className='flex flex-row   items-center justify-between text-dimgray  border-solid border-t-[1px] border-grey content-center' style={{padding:innerWidth<1024?`10px 0px`:`${0.01116*innerWidth-1.4272}px 0px`}}>
        <div  className="rounded-[104px] mx-auto items-center relative ">
        <input 
        onChange={handleFileChange} 
        type='file' 
        ref={fileRef} 
        hidden accept='image/*'/>
            <div  onClick={onImgClick}  className="cursor-pointer w-auto center-text flex items-center justify-center  px-5 h-[2.5rem] md:h-[2.6rem] lg:h-[3rem] 
              text-black  border-black border-[1.5px] rounded-full transition duration-300 ease-in-out" >
              SELECT FROM YOUR DEVICE
              </div>                               
                        </div>
        </div>
        
      </form>
      </div>
    </div>:null}
      </div>

    </div>
  )
}
 
