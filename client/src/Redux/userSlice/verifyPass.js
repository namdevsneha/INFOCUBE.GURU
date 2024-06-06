import {createSlice} from '@reduxjs/toolkit'

const verifyPass=createSlice({
    name:'verifyPass',
    initialState:{
        currentUser:false,
        loading:false,
        email:'',
    },
    reducers:{
        verifyStart:(state)=>{
            state.loading=true;
            state.email='';
        },
        notVerifiedPass:(state)=>{
            state.currentUser=false;
            state.loading=false;
            state.email='';
        },
        verifiedPass:(state,data)=>{
            state.currentUser=true;
            state.loading=false;
            state.email=data.payload;
        }

    }
});

export const {verifyStart,notVerifiedPass,verifiedPass}=verifyPass.actions;

export default verifyPass.reducer;