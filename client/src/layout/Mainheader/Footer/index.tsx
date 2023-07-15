import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import { CandleFooter, CandleHeader } from '@/assets';
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export const FooterMain = () => {
    return ( 
        <Box sx={{backgroundColor:"#272727",paddingX:"110px",paddingTop:"60px",paddingBottom:"115px"}}>
        <Root> 
      <Divider sx={{backgroundColor:"#FFFFFF"}}></Divider>
    </Root>


      <Box sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex"},marginTop:"10px",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",flexDirection:"column",marginBottom:{xs:"10px"}}}>
            <Box sx={{display:"flex",alignItems:"center"}}>
            <Typography>{<CandleFooter/>}</Typography>
        <Typography sx={{fontSize:{xs:"22px",sm:"26px",md:"30px",lg:"31px"},color:"#FFFFFF",marginLeft:"8px"}}>Candleaf</Typography>
            </Box>
      
        <Typography component={"p"}  sx={{color:"#FFFFFF",width:"245px"}}>Your natural candle made for your home and for your wellness.</Typography>
        </Box>
<Box sx={{flexBasis:"52%"}}>
        <Grid container>
            <Grid lg={4} md={6} sm={12} xs={12}>
                <Item sx={{backgroundColor:"transparent",boxShadow:"none",textAlign:"left"}}>
                    <Typography sx={{color:"#56B280",marginBottom:"23px"}}>Discovery</Typography>
                    <Typography sx={{color:"#FFFFFF",marginBottom:"20px"}}>New season</Typography>
                    <Typography sx={{color:"#FFFFFF",marginBottom:"24px"}}>Most searched</Typography>
                    <Typography sx={{color:"#FFFFFF"}}>Most selled</Typography>
                </Item>
            </Grid>
            <Grid lg={4} md={6} sm={12} xs={12}>
                <Item  sx={{backgroundColor:"transparent",boxShadow:"none",textAlign:"left"}}>
                <Typography  sx={{color:"#56B280",marginBottom:"23px"}}>About</Typography>
                    <Typography  sx={{color:"#FFFFFF",marginBottom:"20px"}}>Help</Typography>
                    <Typography sx={{color:"#FFFFFF",marginBottom:"20px"}}>Shipping</Typography>
                    <Typography sx={{color:"#FFFFFF"}}>Affiliate</Typography>
                </Item>
            </Grid>
            <Grid lg={4} md={6} sm={12} xs={12}>
                <Item  sx={{backgroundColor:"transparent",boxShadow:"none",textAlign:"left"}}>
                <Typography  sx={{color:"#56B280",marginBottom:"23px"}}>Info</Typography>
                    <Typography sx={{color:"#FFFFFF",marginBottom:"20px"}}>Contact us</Typography>
                    <Typography sx={{color:"#FFFFFF",marginBottom:"20px"}}>Privacy Policies</Typography>
                    <Typography sx={{color:"#FFFFFF"}}>Terms & Conditions</Typography>
                </Item>
            </Grid>
        </Grid>
        </Box>
      </Box>
        </Box>
     );
}
 
