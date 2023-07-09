import Checkbox from '@mui/material/Checkbox';
import { Box, Button, FormControlLabel, TextField, Typography} from "@mui/material";
import { UseSignUp } from "./UseSignup";
import { PassInputs, TextInputs } from '@/components';

export const SignUpScreen = () => {

    
    const {
        register,
        handleSubmit,
        errors,
        registerSubbmit
    }=UseSignUp()
  
    return ( 
        <form style={{display:"flex"}} onSubmit={handleSubmit(registerSubbmit)} >


    <Box sx={{display:"flex", flexDirection:"column"}}>
<Typography>Get Started Now</Typography>





<TextInputs variant="outlined" type="text"  error={Boolean(errors.username?.message)} helperText={errors.username?.message} {...register("username")} label="Name" sx={{margin:1}} placeholder="Enter your name"/>







<TextInputs variant="outlined" type="text" {...register("email")} error={Boolean(errors.email?.message)} helperText={errors.email?.message} label="Email" sx={{margin:1}} placeholder="Enter your password"/>



<PassInputs {...register("password") }  error={Boolean(errors.password?.message)}  helperText={errors.password?.message} label="New Password" sx={{margin:1}} placeholder="Enter your new password" />




<PassInputs {...register("repeatpassword")} error={Boolean(errors.repeatpassword?.message)} helperText={errors.repeatpassword?.message} label="repeat password" sx={{margin:1}} placeholder="Re-Enter your password"/>



<FormControlLabel control={<Checkbox defaultChecked color="success" />} label="I agree to the terms & policy"/>

<Button type="submit"  sx={{
    backgroundColor:"#3A5B22",
    color:"#FFFFFF",
    fontWeight:600,
    "&:hover":{backgroundColor:"#3A5B22"}
}}>Signup</Button>

    </Box>

    <Box>
        <img src="../public/photo/signup/leaf.png" alt="" />
    </Box>



        </form>
     );

    }
 
