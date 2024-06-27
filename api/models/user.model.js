import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://firebasestorage.googleapis.com/v0/b/infocube007.appspot.com/o/avatar.webp?alt=media&token=df235cd7-f248-4bd7-bb19-39e464b37622"
    },
    verified:{
        type:Boolean,
        default:false,
    },
    education:{
        type:String,
        default:"Select Education"
    },
    country:{
        type:String,
        default:"--Select--"
    },
    state:{
        type:String,
        default:"--Select--"
    },
    city:{
        type:String,
        default:"--Select--"
    },
    contact:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        default:"Select Gender"
    },
    dob:{
        type:String,
    },
    linkedin:{
        type:String,
        default:" "
    },
    profession:{
        type:String,
        default:"--Enter--"
    },
    course:{
        type:String,
        default:" "
    },
    stream:{
        type:String,
        default:"--Enter--"
    }
    // field:{
    //     type:Array<String>(5),
    //     default:{}
    // }

},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;