import { CandleHeader, ShopHeader, UserHeader } from "@/assets";
import { Box, Button, Typography } from "@mui/material";
import * as React from 'react';
import Container from '@mui/material/Container';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import "./index.css"
import { UseHeader } from "./UseHeader";
import { HomePath, SignUpPath } from "@/main";
export const HeaderMain = () => {
const {
  navigate
}=UseHeader()
    return (
        <>
        <Box sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex",xl:"flex"},justifyContent:{sm:"space-around",md:"space-around",lg:"space-around",xl:"space-around"},alignItems:"center",height:{sm:"full",md:"75px",lg:"80px"}}}>

          <Box>
            
          <Button variant="text" sx={{color:"green",fontWeight:600,fontSize:{sm:"14px",md:"18px",lg:"20px"}}} startIcon={<CandleHeader fill="#56B280"/> } onClick={()=>{
            navigate(HomePath)
          }}>
        Candleaf
      </Button>
          </Box>

<Box className="header-button" sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex"},alignItems:"center",gap:"30px"}}>

  <Box className="wrapper">

          <Button  variant="text" sx={{color:"black",fontSize:{sm:"12px",md:"16px",lg:"18px"}}}  endIcon={<ArrowDropDownIcon style={{fill:"black"}}/>}>
Discovery

      </Button>

      <Box component={"ul"} sx={{listStyle:"none"}} className="slider">
<Box component={"li"}>ariyan</Box>
<Box component={"li"}>ariyan</Box>
<Box component={"li"}>atiyan</Box>

</Box>
  </Box>
        <Typography sx={{fontSize:{sm:"12px",md:"16px",lg:"18px"}}}>About</Typography>
        <Typography sx={{fontSize:{sm:"12px",md:"16px",lg:"18px"}}}>Contact us</Typography>
        </Box>


          <Box>
<Button variant="text" >{<UserHeader onClick={()=>{
  navigate(SignUpPath)
}}/>}</Button>
<Button variant="text">{<ShopHeader/>}</Button>

          </Box>
         
        </Box>
        </>
      );
}
 
