import mongoose from "mongoose"
export const DataBase=async()=>{
const connect=await mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
    console.log("server connected successfully!")
}).catch(()=>{
    console.log("something went wrong!")
})
}