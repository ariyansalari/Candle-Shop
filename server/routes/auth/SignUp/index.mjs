import { Router } from "express";
import { Users } from "../../../models/auth/Signup/index.mjs";
// import bcrypt from "bcryptjs"
// import { registerSchema } from "../../../models/auth/Signup/index.mjs";
// import { User } from "../../../models/auth/Signup/index.mjs";
export const AuthRoutes=Router()

// export const validate = (schema) => async (req, res, next) => {
//     try {
//       await schema.validate({
//         body: req.body,
//         query: req.query,
//         params: req.params,
//       });
//       return next();
//     } catch (err) {
//       res.status(400).json(err)
//     }
//   };

AuthRoutes.post("/SignUp",async(req,res)=>{
    
   
//         const isUser=User.findOne({email:req.body.email}) 
//         if(isUser)
//         {
//         return res.status(400).json({msg:"this user already exists"})
//         }
// const hash=await bcrypt.genSalt(10)
// const hashed=await bcrypt.hash(process.env.SECRET_KEY,hash)
//         const {repeatpassword,...restBody}= req.body
//         const user=await new User({...restBody,password:hashed})
const user=await new Users({...req.body})
        await user.save()
    return res.status(201)
  
   
       
 
})