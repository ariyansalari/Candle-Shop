import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

export const UseSignUp = () => {
    const resSchema=yup.object({
        username:yup.string().required("Please write your name").min(3).max(12),
        email:yup.string().required("This field is obligatory").email(),
        password:yup.string().min(6,"you must be at least 6 characters!").required("This field is compulsory"),
        repeatpassword:yup.string().oneOf([yup.ref("password"),"Password must be match."])
    })
    
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(resSchema),
        mode:"onChange",
    })
    const registerSubbmit=(data:any)=>{
        console.log(data)
    }
    return {
        register,
        handleSubmit,
        errors,
registerSubbmit
    }

}
 
