import FEEDBACK from "../models/feedback.model.js";
import User from "../models/user.model.js";

export const feedback= async(req,res,next)=>{
    console.log("hkdk")

    const{email,feedback,rating}= req.body;

    const newFeedback= new FEEDBACK({email:email, feedback:feedback, stars:rating});
    console.log(newFeedback)
    try{
     await newFeedback.save();
     res.status(201).json("user created");
    }catch(error){
      next(error)
    }
    
 }

export const feedbackFetch =async(req,res,body)=>{
    const feedbacks=await FEEDBACK.find({}).sort({'time': -1});
    res.status(200).json(feedbacks);
}

export const fetchUserData = async(req,res,body)=>{
  const{email}=req.body;
  const userData=await User.findOne({email});
  res.status(200).json(userData);
}