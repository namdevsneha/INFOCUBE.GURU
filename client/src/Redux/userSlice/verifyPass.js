import {createSlice} from '@reduxjs/toolkit'

const verifyPass=createSlice({
    name:'verifyPass',
    initialState:{
        currentUser:false,
        loading:false,
    },
    reducers:{
        verifyStart:(state)=>{
            state.loading=true;
        },
        notVerifiedPass:(state)=>{
            state.currentUser=false;
            state.loading=false
        },
        verifiedPass:(state)=>{
            state.currentUser=true;
            state.loading=false;
        }

    }
});

export const {verifyStart,notVerifiedPass,verifiedPass}=verifyPass.actions;

export default verifyPass.reducer;