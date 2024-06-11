import { set } from "mongoose";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"

export const test = (req,res)=>{
    res.json({
        message:"Hello world",
    });
}

export const updateUser=async (req,res,next)=>{
    if(req.user.id!==req.params.id)return next(errorHandler(401,'unauthorized'));
    try{
        if(req.body.password){
            req.body.password=bcryptjs.hashSync(req.body.password,10)
        }
        const updateUser= await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username:req.body.username,
                // email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,
                education:req.body.education,
                country:req.body.country,
                state:req.body.state,
                city:req.body.city,
                contact:req.body.contact,
                gender:req.body.gender,
                dob:req.body.dob,
                linkedin:req.body.linkedin,
                stream:req.body.stream,
                course:req.body.course,

            }
        },{new:true})
        
        const {password,...rest}=updateUser._doc;
        res.status(200).json(rest);
    }catch(error){

    }
}

export const updatePassword=async (req,res,next)=>{
try{
        const validUser=await User.findOne({email:req.body.email});
        if(req.body.password){
            req.body.password=bcryptjs.hashSync(req.body.password,10)
        }
        const updateUser= await User.findByIdAndUpdate(validUser._id,{
            $set:{
                password:req.body.password,
                }
        },{new:true})
        const {password,...rest}=updateUser._doc;
        res.status(200).json(rest);
    }catch(error){
        console.log(error )
    }
}