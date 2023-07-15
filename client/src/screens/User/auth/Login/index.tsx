import Checkbox from '@mui/material/Checkbox';
import { Box, Button,   FormControlLabel, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import { PassInputs, TextInputs } from '@/components';
import { Apple, Google } from '@/assets';
import { UseLogin } from './UseSignIn';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { SignUpPath } from '@/main';

export const SignInScreen = () => {

    const {
      errors,
      handleSubmit,
      loginSubbmit,
      register,
      Root,
      navigate

    }=UseLogin()

    return ( 
        

        <Box style={{display:"flex"}}  >


    <form style={{display:"flex", flexDirection:"column",justifyContent:"center",gap:"10px"}} onSubmit={handleSubmit(loginSubbmit)}>
<Typography sx={{fontSize:"32px",fontWeight:600}}>Welcome back!</Typography>
<Typography component={"p"}>Enter your Credentials to access your account</Typography>











<TextInputs variant="outlined" type="text" {...register("email")} error={Boolean(errors.email?.message)} helperText={errors.email?.message} label="Email" sx={{width:"404px",borderRadius:"10px"}} placeholder="Enter your password"/>



<PassInputs {...register("password") }  error={Boolean(errors.password?.message)}  helperText={errors.password?.message} label="New Password" sx={{width:"404px",borderRadius:"10px"}} placeholder="Enter your new password" />






<Box sx={{marginTop:"16px"}}>

<FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Remember for 30 days"/>
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
<GoogleOAuthProvider clientId=''>
   
   <GoogleLogin text='signin_with'
 onSuccess={credentialResponse => {
   console.log(credentialResponse);
 }}
 onError={() => {
   console.log('Login Failed');
 }}
 useOneTap
/>

</GoogleOAuthProvider>    
<Button  variant='contained' startIcon={<Apple/>} sx={{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:600, border:"2px solid #D9D9D9",borderRadius:"10px","&:hover":{backgroundColor:"#FFFFFF"}}}>Sign in with Apple</Button>


</Box>

<Typography sx={{textAlign:"center"}}>Have an account?  <Typography sx={{color:"#0F3DDE"}} component={"a"} onClick={()=>{
    navigate(SignUpPath)
}}>Sign Up</Typography></Typography>
    </form>

    <Box>
        <img src="../public/photo/signup/leaf.png" alt="" />
    </Box>



        </Box>


  

 

     );

    }
 

