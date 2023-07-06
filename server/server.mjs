import express from "express"
import { DataBase } from "./configs/db/index.mjs"
import { ENVPath } from "./configs/env/index.mjs"

const app=express()

ENVPath()
DataBase()

app.get("/",(req,res)=>{
res.write("god help me i'm going to fking give up")
res.end()
})

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log("bro your site connected!")
})