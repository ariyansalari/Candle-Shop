import { Button, TextField, Typography } from "@mui/material";
import * as React from 'react';
import { useForm } from "react-hook-form";

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { yupResolver } from "@hookform/resolvers/yup";

import * as  yup from "yup"
export const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);
const Loginschema=yup.object({
    email:yup.string().required("Please Enter your Email!"),
    password:yup.string().required().min(8)
})
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    const {register,formState:{errors},handleSubmit}=useForm({
        mode:"onSubmit",
        resolver: yupResolver(Loginschema),
    })
    const Loginsub=(data:any)=>{
console.log(data)
    }
    return (
        <>
        <div className="py-8" style={{backgroundColor:"gray"}}>

      <Typography sx={{textAlign:"center",fontWeight:700,fontSize:54,marginBottom:"16px"}}>Sign-In</Typography>
      <Typography sx={{textAlign:"center"}}>Home/Login</Typography>
        </div>

      <div className="flex flex-col items-center">
        <div className="my-11"> 
        <Typography sx={{fontWeight:700}}>SIGN-IN YOUR ACCOUNT</Typography>

        </div>

        <form className="flex flex-col" action="" onSubmit={handleSubmit(Loginsub)}>
            <div className="flex items-center">
            <label>Email</label>
            <TextField placeholder="your@mail.com" error={Boolean(errors.email?.message)} {...register("email")} type={"email"} helperText={errors.email?.message}/>

            </div>
          

<div className="flex items-center">

    <label htmlFor="">Password</label>
    <TextField
        
        id="filled-start-adornment"
        {...register("password")}
        error={Boolean(errors.password?.message)}
helperText={errors.password?.message}
        type={showPassword?"text":"password"}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>

            {!showPassword?<VisibilityOff/>:<Visibility/>}
            </IconButton>
          </InputAdornment>,
        }}
        variant="outlined"
      />
</div>
       

        <Button type="submit" variant="contained" sx={{backgroundColor:"#FFC84A"}}>SIGN IN</Button>

        <Button variant="text" href="">Forgot your password?</Button>
        </form>

        <Typography>NO ACCOUNT? <Button variant="text">Create New!</Button></Typography>
      </div>
        </>
      );
}
 
