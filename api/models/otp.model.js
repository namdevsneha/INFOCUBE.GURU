import mongoose from 'mongoose'

const otpSchema=new mongoose.Schema({
    email:{
        type:String
    },
    otp:{
        type:String,
    },
    createdAt:{
        type:Date
    },
    expiresAt:{
        type:Date
    }
});

const OTP = mongoose.model('OTP',otpSchema);

export default OTP;