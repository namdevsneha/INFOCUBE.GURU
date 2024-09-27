import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../Redux/userSlice/userSlice.js'
import GoogleImg from '../Assets/Images/GoogleColour.webp'
import axios from 'axios';
import { baseURL } from '../url.js';

export default function OAuth(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick=async()=>{



        try {
            const provider=new GoogleAuthProvider();
            const auth =getAuth(app);
            
            const result=await signInWithPopup(auth,provider);
            const res=await axios.post(`${baseURL}/api/auth/google`, {
                email: result.user.email,
                name: result.user.displayName,
                photo: result.user.photoURL
            }, {
                withCredentials:true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data=res.data
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