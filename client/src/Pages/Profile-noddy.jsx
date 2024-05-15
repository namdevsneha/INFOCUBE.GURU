import React from 'react'
import { useRef,useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart,updateUserFailure,updateUserSuccess,signOutUserFailure,signOutUserStart,signOutUserSuccess } from '../Redux/userSlice/userSlice';

export default function Profile_noddy() {
    const fileRef=useRef(null);
    const {currentUser,loading,error}=useSelector((state)=>state.user);
    const [file,setFile]=useState(undefined);
    const [filePerc,setFilePerc]=useState(0);
    const [fileUploadError,setFileUploadError]=useState(false);
    const [formData,setFormData]=useState(0);
    const [updateSuccess,setUpdateSuccess]=useState(false);
    const dispatch=useDispatch();
    const onImgClick=()=>{
        console.log("heool")
        fileRef.current.click()
    }

    useEffect(()=>{
      if(file){
        handleUploadFile(file)
      }
    },[file])

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
    const handleSubmit2=async(e)=>{
      
      console.log('changes')

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
  return (
    <div>
    <form onSubmit={handleSubmit2}>
        <input 
        onChange={(e)=>setFile(e.target.files[0])} 
        type='file' 
        ref={fileRef} 
        hidden accept='image/*'/>
        <img className='w-auto h-64 '  onClick={onImgClick} src={formData.avatar || currentUser.avatar}/>
        <p>
          {fileUploadError?(<span className='text-red-700'>Error in Uploading image</span>):
          filePerc>0 && filePerc<100?(<span>{`uploading ${filePerc}`}</span>):
          filePerc===100?(<span>File Uploaded Successfully</span>):<></>}
        </p>
      Profile
        <input type='text' placeholder='Name' defaultValue={currentUser.username} id='username'
        onChange={handleChange}
        className='border p-3 rounded-lg'/>
        <button disabled={loading} className="text-black px-[24px] text-[1rem] leading-tight font-roboto">{loading?"loading...":"Update"}</button>
        <button disabled={loading} className="text-black px-[24px] text-[1rem] leading-tight font-roboto">{loading?"loading...":"Update22"}</button>
        <span>{error?error:""}</span>
        <span>{error?error:""}</span>
        <span>{updateSuccess?"user updated successfully":"  "}</span>
        <button onClick={handleSignOut}>Sign Out</button>
      </form>
    </div>
  )
}
