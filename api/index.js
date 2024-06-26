import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import signupRouter from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';
import path from 'path';
import feedbackRouter from "./routes/feedback.route.js"
import cors from 'cors';

dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection to mongodb success.")
}).catch((err)=>{
    console.log(err)
});
const __dirname=path.resolve();

const app=express();

// Use CORS middleware
app.use(cors({
    origin: 'https://infocube-guru.vercel.app/', // Allow your Vercel app
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  }));

app.use(express.json())
app.use(cookieParser());

app.listen(3000,()=>{
    console.log("Hello server is running.");
}
);


app.use('/api/user',userRouter);
app.use('/api/auth',signupRouter);
app.use('/api/feedback',feedbackRouter);


app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})