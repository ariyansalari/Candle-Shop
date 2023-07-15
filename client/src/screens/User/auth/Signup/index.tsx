import Checkbox from '@mui/material/Checkbox';
import { Box, Button,  Chip,  FormControlLabel, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import { UseSignUp } from "./UseSignup";
import { PassInputs, TextInputs } from '@/components';
import { Apple, Google } from '@/assets';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { SignInPath } from '@/main';

export const SignUpScreen = () => {

    
    const {
        register,
        handleSubmit,
        errors,
        registerSubbmit,
        Root,
        navigate,
    }=UseSignUp()


    return ( 
        

        <Box sx={{display:"flex",gap:{md:20}}}  >


    <form style={{display:"flex", flexDirection:"column",justifyContent:"center",gap:"10px"}} onSubmit={handleSubmit(registerSubbmit)}>
<Typography sx={{fontSize:"32px",fontWeight:600,marginBottom:"62px"}}>Get Started Now</Typography>





<TextInputs variant="outlined" type="text"  error={Boolean(errors.username?.message)} helperText={errors.username?.message} {...register("username")} label="Name" sx={{width:"404px",borderRadius:"10px"}} placeholder="Enter your name"/>







<TextInputs variant="outlined" type="text" {...register("email")} error={Boolean(errors.email?.message)} helperText={errors.email?.message} label="Email" sx={{width:"404px",borderRadius:"10px"}} placeholder="Enter your password"/>



<PassInputs {...register("password") }  error={Boolean(errors.password?.message)}  helperText={errors.password?.message} label="New Password" sx={{width:"404px",borderRadius:"10px"}} placeholder="Enter your new password" />




<PassInputs {...register("repeatpassword")} error={Boolean(errors.repeatpassword?.message)} helperText={errors.repeatpassword?.message} label="repeat password" sx={{width:"404px", borderRadius:"10px"}} placeholder="Re-Enter your password"/>


<Box sx={{marginTop:"16px"}}>

<FormControlLabel control={<Checkbox defaultChecked color="success" />} label="I agree to the terms & policy"/>
</Box>

<Button type="submit"  sx={{
    backgroundColor:"#3A5B22",
    color:"#FFFFFF",
    fontWeight:600,
    "&:hover":{backgroundColor:"#3A5B22"}
}}>Signup</Button>



<Root> 
      <Divider>Or</Divider>
    </Root>


<Box sx={{display:"flex",gap:"23px"}}>
<GoogleOAuthProvider clientId="" >
   
   <GoogleLogin text='signup_with'
 onSuccess={credentialResponse => {
   console.log(credentialResponse);
 }}
 onError={() => {
   console.log('Login Failed');
 }}
 useOneTap
/>

</GoogleOAuthProvider>        <Button  variant='contained' startIcon={<Apple/>} sx={{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:600, border:"2px solid #D9D9D9",borderRadius:"10px","&:hover":{backgroundColor:"#FFFFFF"}}}>Sign in with Apple</Button>
</Box>

<Typography sx={{textAlign:"center"}}>Have an account?  <Typography sx={{color:"#0F3DDE"}} component={"a"} onClick={()=>{
    navigate(SignInPath)
}}>Sign In</Typography></Typography>
    </form>

    <Box>
        <img src="../public/photo/signup/leaf.png" alt="" />
    </Box>



        </Box>


  

 

     );

    }
 
