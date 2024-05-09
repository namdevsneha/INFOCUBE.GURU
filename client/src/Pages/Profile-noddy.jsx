import React from 'react'
import { useRef,useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
export default function Profile_noddy() {
    const fileRef=useRef(null);
    const {currentUser}=useSelector((state)=>state.user);
    const [file,setFile]=useState(undefined);
    const [filePerc,setFilePerc]=useState(0);
    const [fileUploadError,setFileUploadError]=useState(false);
    const [formData,setFormData]=useState(0);
    console.log(formData);
    const onImgClick=()=>{
        console.log("heool")
        fileRef.current.click()
    }
    console.log(filePerc); 

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
    
    console.log(file);
  return (
    <div>
        <input 
        onChange={(e)=>setFile(e.target.files[0])} 
        type='file' 
        ref={fileRef} 
        hidden accept='image/*'/>
        <img onClick={onImgClick} src={formData.avatar || currentUser.avatar}/>
        <p>
          {fileUploadError?(<span className='text-red-700'>Error in Uploading image</span>):
          filePerc>0 && filePerc<100?(<span>{`uploading ${filePerc}`}</span>):
          filePerc===100?(<span>File Uploaded Successfully</span>):<></>}
        </p>
      Profile
    </div>
  )
}
