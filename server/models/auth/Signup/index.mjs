import mongoose, { Schema } from "mongoose";
import * as yup from "yup"
export const registerSchema=yup.object({
    body: yup.object({
    email:yup.string().required().email(),
    username:yup.string().required(),
    password:yup.string().required(),
    repeatpassword:yup.string().required()
    })
})
 const User=new Schema({
    username:String,
email:String,
password:String,
repeatpassword:String

})

export const Users=mongoose.model("Users",User)
