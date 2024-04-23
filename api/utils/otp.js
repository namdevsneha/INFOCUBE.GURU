import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import nodemailer from 'nodemailer';
import OTP from "../models/otp.model";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.MAIL_AUTH,
        pass:process.env.PASS_AUTH,
    }
});

export const sendOTPVerificationEmail=async({_id,email})=>{
    try{
      const otp=`${Math.floor(1000+Math.random()*9000)}`;
      
      const mailOptions = {
        from: process.env.MAIL_AUTH,
        to: email,
        subject: 'Verify Your Email',
        html: `<p>Enter <b>${otp}</b> in the app to verify your email address and complete your email verification. </p>`
    };

    const saltRounds=10;
    
    const hashedOTP=await bcryptjs.hash(otp,saltRounds);

    const newOTPDate=await new OTP({
        userId:_id,
        email:email,
        otp:hashedOTP,
        createdAt:Date.now(),
        expiresAt:Date.now()+3600000
    })
    await newOTPDate.save();

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    }catch(e){
  
    }
  }