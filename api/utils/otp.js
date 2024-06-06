import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

import nodemailer from 'nodemailer';
import OTP from "../models/otp.model.js";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"sraj95922@gmail.com",
        pass:"jcpz jsqu fwub ricb",
    }
});

export const sendOTPVerificationEmail=async({email,otp})=>{
    try{
      
      const mailOptions = {
        from: "sraj95922@gmail.com",
        to: email,
        subject: 'Verify Your Email',
        html: `<p>Enter <b>${otp}</b> in the app to verify your email address and complete your email verification. </p>`
    };

    // const saltRounds=10;
    // const hashedOTP=await bcryptjs.hash(otp,saltRounds);

    // const newOTPDate=new OTP({
    //     email:email,
    //     otp:hashedOTP,
    //     createdAt:Date.now(),
    //     expiresAt:Date.now()+3600000
    // })

   

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        } 
    }
    );
    console.log(otp);
    return otp;
    }catch(e){
        console.log(e)
        return null;
    }
  }
  
sendOTPVerificationEmail({_id:"he",email:"utkarshsaxena@rediffmail.com"});