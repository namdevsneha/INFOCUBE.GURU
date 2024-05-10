import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
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
        default:"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
    },
    verified:{
        type:Boolean,
        default:false,
    },
    education:{
        type:String,
        default:"Select Education"
    },
    // country:{
    //     type:String,
    //     default:"India"
    // },
    // state:{
    //     type:String,
    //     default:"--Select--"
    // },
    // city:{
    //     type:String,
    //     default:"--Select--"
    // },
    // number:{
    //     type:Number,
    //     default:1111111111
    // },
    // gender:{
    //     type:String,
    //     default:"--Select--"
    // },
    // dob:{
    //     type:Date,
    //     default:""
    // },
    // field:{
    //     type:Array<String>(5),
    //     default:{}
    // }

},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;