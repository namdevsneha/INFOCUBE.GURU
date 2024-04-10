import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../Redux/userSlice/userSlice.js'

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
            console.log("hello")
            const data=await res.json()
            console.log(data)
            dispatch(signInSuccess(data));
            navigate('/')

        } catch (error) {
            console.log('could not sign in with google',error);
        }
    }
    return (
        <div>
            <button onClick={handleGoogleClick} type='button' class="mt-[15px] appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 
            rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                Sign in with Google</button>
        </div>
    )
}