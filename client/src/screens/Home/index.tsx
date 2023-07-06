import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Homescreen = () => {
    return ( 
        <>
        <Box sx={{backgroundImage:`url(../public/photo/bg-image.png)`,height:"700px",backgroundSize:"cover",display:"flex",alignItems:"center",justifyContent:"center"}}>

 <Box sx={{backgroundColor:"#F7F8FA",display:"flex",flexDirection:"column",alignItems:"center",p:{sm:"15px",md:"46px",lg:"66x",borderRadius:"8px"}}}>
    <Box>
    <img  src="../public/photo/hero-title.png" alt=""  />

    </Box>
<Typography sx={{fontSize:{sm:"20px",md:"40px",lg:"56px"}}}> The nature candle</Typography>
<Typography sx={{fontSize:{sm:"12px",md:"18px",lg:"20px"},width:{sm:"full",md:"550px",lg:"620px"},textAlign:"center",marginBottom:"45px"}}>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </Typography>
    <Button variant="contained" sx={{backgroundColor:"green",fontSize:{sm:"12px",md:"18px",lg:"20px"},width:{sm:"full"},paddingX:{sm:"8px",md:"30px",lg:"40px"}}}>
Discovery our collection
    </Button>
    </Box>
        </Box>


        <Box sx={{textAlign:"center",marginTop:"90px"}}>
            <Typography sx={{fontSize:{sm:"30px",md:"40px",lg:"50px"},color:"#0B254B"}}>Products</Typography>
            <Typography sx={{color:"#5E6E89"}}>Order it for you or for your beloved ones </Typography>
        </Box>
        </>
         );
}
 
