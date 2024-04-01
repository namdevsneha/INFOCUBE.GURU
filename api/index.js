import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection to mongodb success.")
}).catch((err)=>{
    console.log(err)
});

const app=express();


app.listen(3000,()=>{
    console.log("Hello server is running.");
}
);

app.use('/api/user',userRouter);