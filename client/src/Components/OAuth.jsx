import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../Redux/userSlice/userSlice.js'
import GoogleImg from '../Assets/Images/GoogleColour.svg'

export default function OAuth(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick=async()=>{



        try {
            const provider=new GoogleAuthProvider();
            const auth =getAuth(app);
            
            const result=await signInWithPopup(auth,provider);
            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email:result.user.email,name:result.user.displayName,photo:result.user.photoURL})
            })

            const data=await res.json()
            console.log(data)
            if(data.username){
               navigate('/') 
            }else{
                navigate('/SignUpForm')
            }
            dispatch(signInSuccess(data));
            

        } catch (error) {
            console.log('could not sign in with ',error);
        }
    }
    return (
        <div>
            <button onClick={handleGoogleClick}>    
                            <img className='w-auto h-[36px] md:h-[36px]  lg:h-12' src={GoogleImg}/></button>
        </div>
    )
}