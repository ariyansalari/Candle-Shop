import express from "express"
import { DataBase } from "./configs/db/index.mjs"
import { ENVPath } from "./configs/env/index.mjs"
import { AuthRoutes } from "./routes/auth/SignUp/index.mjs"
import cors from "cors"

ENVPath()
DataBase()

const app=express()
app.use(cors())
app.use(express.json())
app.use("/",AuthRoutes)
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("server Connected!")
})


