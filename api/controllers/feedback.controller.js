import FEEDBACK from "../models/feedback.model.js";
import User from "../models/user.model.js";

export const feedback= async(req,res,next)=>{

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

export const feedbackFetch =async(req,res)=>{
  const page = parseInt(req.body.page) || 1;
  const limit = parseInt(req.body.limit) || 10;

  const skip = (page - 1) * limit;

  try {
    const feedbacks = await FEEDBACK.find({})
      .sort({ 'createdAt': -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const fetchUserData = async(req,res)=>{
  const{email}=req.body;
  const userData=await User.findOne({email});
  res.status(200).json(userData);
}