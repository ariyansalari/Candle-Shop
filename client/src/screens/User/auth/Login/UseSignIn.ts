import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from '@mui/material/styles';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { SignIndata } from "@/api/services/auth/Login";
export const UseLogin=()=>{
   
        const logSchema=yup.object({
            email:yup.string().required("This field is obligatory").email(),
            password:yup.string().min(6,"you must be at least 6 characters!").required("This field is compulsory"),
         
        })
        
        const {register,handleSubmit,formState:{errors}}=useForm({
            resolver:yupResolver(logSchema),
            mode:"onChange",
        })
        const loginSubbmit=(async(data:any)=>{
            const res=await SignIndata(data)
            console.log(data)
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
           loginSubbmit,
            Root,
            navigate
        }
    
}