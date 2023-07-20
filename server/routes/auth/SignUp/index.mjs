import { Router } from "express";
import {  Users } from "../../../models/auth/Signup/index.mjs";
import bcrypt from "bcryptjs"

export const AuthRoutes=Router()


AuthRoutes.post("/SignUp",async(req,res)=>{
    
   

try{

const hash=await bcrypt.genSalt(10)
const hashed=await bcrypt.hash(req.body.password,hash)
const {repeatpassword,...restBody}=req.body
    const user=await new Users({...restBody,password:hashed})
    console.log(user)
            await user.save()
        return res.status(201).json({msg:"user created Succesfully!"})

}
  catch(err){
  res.status(400).json(err)
  }
   
       
 
})