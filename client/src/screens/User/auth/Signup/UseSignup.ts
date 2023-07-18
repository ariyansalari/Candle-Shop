import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from '@mui/material/styles';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { SignUpdata, SignupType } from "@/api/services/auth/SignUp";

export const UseSignUp = () => {
    const signSchema=yup.object({
        username:yup.string().required("Please write your name").min(3).max(12),
        email:yup.string().required("This field is obligatory").email(),
        password:yup.string().min(6,"you must be at least 6 characters!").required("This field is compulsory"),
        repeatpassword:yup.string().oneOf([yup.ref("password"),"Password must be match."])
    })
    
    const {register,handleSubmit,formState:{errors}}=useForm<SignupType>({
        resolver:yupResolver(signSchema),
        mode:"onSubmit",
    })
    const registerSubbmit=(async(data:SignupType)=>{

        console.log(data)
        const signupdata=await SignUpdata(data)
    
    })
    

    const navigate=useNavigate()
    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
          marginTop: theme.spacing(2),
        },
      }));
    return {
        register,
        handleSubmit,
        errors,
        registerSubbmit,
        Root,
        navigate,
        SignUpdata,
    }

}
 
