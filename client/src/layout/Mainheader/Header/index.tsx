import { CandleHeader, ShopHeader, UserHeader } from "@/assets";
import { Box, Button, Typography } from "@mui/material";
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import "./index.css"
export const HeaderMain = () => {
const navigate=useNavigate()
    return (
        <>
        <Box sx={{display:{sm:"block",md:"flex",lg:"flex",xl:"flex"},justifyContent:{md:"space-between",lg:"space-between",xl:"space-between"},alignItems:"center",textAlign:{sm:"left"},height:{sm:"full",md:"75px",lg:"80px"}}}>

          <Box>
            
          <Button variant="text" sx={{color:"green",fontWeight:600,fontSize:"18px"}} startIcon={<CandleHeader/> } onClick={()=>{
            navigate("/")
          }}>
        Candleaf
      </Button>
          </Box>

<Box className="header-button" sx={{display:{sm:"block",md:"flex",lg:"flex"},textAlign:{sm:"left"},alignItems:"center",gap:"30px"}}>
          <Button  variant="text" sx={{color:"black"}}  endIcon={<ArrowDropDownIcon style={{fill:"black"}}/>}>
Discovery
      </Button>
        <Typography>About</Typography>
        <Typography>Contact us</Typography>
        </Box>


          <Box>
<Button variant="text">{<UserHeader/>}</Button>
<Button variant="text">{<ShopHeader/>}</Button>

          </Box>
         
        </Box>
        </>
      );
}
 
