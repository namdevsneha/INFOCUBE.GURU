import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport(
    {
    host: "smtp.zoho.com",
    secure: true,
    auth:{
        // user:"Infocube.ed@gmail.com",
        // pass:"evhl rwfq rooh vwyu",
        user:"support@infocube.guru",
        pass:"N4hd1nH0tSx6",
    }  
  
});

export const sendOTPVerificationEmail=async({email,otp})=>{
    try{
      
      const mailOptions = {
        from: "support@infocube.guru",
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
  
