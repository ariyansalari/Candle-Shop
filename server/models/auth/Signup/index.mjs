import mongoose, { Schema } from "mongoose";
import yup from "yup"
// export const registerSchema=yup.object({
//     body: yup.object({
//     email:yup.string().required().email(),
//     username:yup.string().required(),
//     password:yup.string().required(),
//     repeatpassword:yup.string().required()
//     })
// })

const UserSchema=new Schema({
    username:{
        type:String,
        required:true
    },
email:String,
password:String,
repeatpassword:String

})

export const Users=mongoose.model("User",UserSchema)