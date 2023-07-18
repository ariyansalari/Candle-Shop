import mongoose, { Schema } from "mongoose";

// export const registerSchema=yup.object({
//     body: yup.object({
//     email:yup.string().required().email(),
//     username:yup.string().required(),
//     password:yup.string().required(),
//     repeatpassword:yup.string().required()
//     })
// })

export const User=mongoose.model("Users",{
    username:String,
email:String,
password:String,
repeatpassword:String

})

