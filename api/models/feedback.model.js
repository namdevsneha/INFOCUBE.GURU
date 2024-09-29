import mongoose from 'mongoose'

const feedbackSchema=new mongoose.Schema({
    email:{
        type:String
    },
    feedback:{
        type:String,
    },
    stars:{
        type:String,
    },
    time:{
        type:Date,
        default:Date.now()
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    }
},{timestamps:true});

const FEEDBACK = mongoose.model('FEEDBACK',feedbackSchema);

export default FEEDBACK;