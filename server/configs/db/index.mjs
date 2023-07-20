import mongoose from "mongoose";

export const DataBase=()=>{
   mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
    console.log("concected!!")
   }).catch(()=>{
    console.log("ERROR")
   })
}