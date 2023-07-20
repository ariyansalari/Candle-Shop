import { instanse } from "@/api/constants";

export const SignIndata=async(data)=>{

    const res=await instanse.post("/SignUp",data)
    return res.data
}
