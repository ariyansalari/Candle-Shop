import mongoose from "mongoose";

export const DataBase=async()=>{
   const dataMongoose=await mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
        console.log("connected!")
    })
    return dataMongoose
}