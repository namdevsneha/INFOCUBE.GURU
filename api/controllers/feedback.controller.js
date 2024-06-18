import FEEDBACK from "../models/feedback.model.js";

export const feedback= async(req,res,next)=>{
    console.log("hkdk")

    const{email,feedback,stars}= req.body;
    const newFeedback= new FEEDBACK({email:email, feedback:feedback, stars:stars});
    try{
     await newFeedback.save();
     res.status(201).json("user created");
    }catch(error){
      next(error)
    }
    
 }

export const feedbackFetch =async(req,res,body)=>{
    const validUser=await FEEDBACK.find({});
    console.log(validUser)
}