import mongoose from "mongoose"
export const DataBase=async()=>{
    const connect=await mongoose.connect(process.env.MOGOOSE_URL).then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("something went wrong!")
    })
    return connect
}