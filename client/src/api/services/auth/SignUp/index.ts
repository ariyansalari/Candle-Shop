import { instanse } from "@/api/constants";
export type SignupType={
    username:string,
    email:string,
    password:string,
    repeatpassword:string
}

export const SignUpdata=async(data:SignupType)=>{

    const res=await instanse.post("/SignUp",data)
    return res.data
}

