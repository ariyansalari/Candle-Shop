import { Avatar, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PopularProducts from "../../routes/PopularProducts.json"
import Grid from '@mui/material/Grid';
import products from "../../routes/products.json"
import { UseHome } from "./UseHome";
import { Check, StarFirst, StarSecond, StarThird } from "@/assets";
export const Homescreen = () => {

    const {
        Item,
       
    }=UseHome()

    return ( 
        <>
        <Box sx={{backgroundImage:`url(../public/photo/homeScreen/bg-image.png)`,height:"700px",backgroundSize:"cover",display:"flex",alignItems:"center",justifyContent:"center"}}>

 <Box sx={{backgroundColor:"#F7F8FA",display:"flex",flexDirection:"column",alignItems:"center",p:{sm:"15px",md:"46px",lg:"66x",borderRadius:"8px"}}}>
    <Box>
    <img  src="../public/photo/homeScreen/hero-title.png" alt=""  />

    </Box>
<Typography sx={{fontSize:{sm:"20px",md:"40px",lg:"40px"}}}> The nature candle</Typography>
<Typography sx={{fontSize:{sm:"12px",md:"18px",lg:"20px"},width:{sm:"full",md:"550px",lg:"620px"},textAlign:"center",marginBottom:"45px"}}>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </Typography>
    <Button variant="contained" sx={{backgroundColor:"green",fontSize:{sm:"12px",md:"18px",lg:"20px"},width:{sm:"full"},paddingX:{sm:"8px",md:"30px",lg:"40px"} , "&:hover":{backgroundColor:"green"} }}>
Discovery our collection
    </Button>
    </Box>
        </Box>


        <Box sx={{textAlign:"center",marginTop:"90px",marginBottom:"60px"}}>
            <Typography sx={{fontSize:{sm:"30px",md:"40px",lg:"50px"},color:"#0B254B"}}>Products</Typography>
            <Typography sx={{color:"#5E6E89"}}>Order it for you or for your beloved ones </Typography>
        </Box>

        <Box>
         <Grid container sx={{mb:"125px"}}>

                {products.map(post=>(
<Grid sx={{paddingLeft:"25px",marginBottom:"25px"}} md={4} lg={3} sm={6} xs={12} gap={2}>
    <Item >
        <img style={{margin:"0px auto"}} src={post.image} alt="" />
        <Typography sx={{color:"#1D293F",fontWeight:600,textAlign:"left",marginLeft:"8px"}}>{post.name}</Typography>
        <Typography sx={{textAlign:"right",color:"green"}}>{post.price}</Typography>
    </Item>
</Grid>
                    ))}
                    
                    </Grid>
            
            <Box sx={{display:{xs:"block",sm:"block",md:"block",lg:"flex"},justifyContent:{lg:"space-evenly"},backgroundColor:"#F7F8FA",py:"130px"}}>
                <Box sx={{marginLeft:{md:"40px"}}}>
                    <Typography sx={{fontSize:{xs:"20px",sx:"22px",md:"40px",lg:"44px"},width:{sm:"300px",md:"350px",lg:"400"}}}>Clean and fragrant soy wax</Typography>
                    <Typography component={"p"} sx={{color:"green",marginBottom:"38px"}}>Made for your home and for your wellness</Typography>
                    <Typography sx={{marginBottom:"10px"}}>{<Check/>} Eco-sustainable:All recyclable materials, 0% CO2 emissions</Typography>
                    <Typography sx={{marginBottom:"10px"}}>{<Check/>} Hyphoallergenic: 100% natural, human friendly ingredients </Typography>
                    <Typography sx={{marginBottom:"10px"}}>{<Check/>} Handmade: All candles are craftly made with love.</Typography>
                    <Typography>{<Check/>} Long burning: No more waste. Created for last long.</Typography>

<Button sx={{backgroundColor:"green",color:"white", "&:hover":{backgroundColor:"green"},marginTop:"68px",width:'194px',fontSize:"18px"}}>Learn more</Button>

                </Box>
                <Box sx={{textAlign:{xs:"center",sm:"center",md:"center"}}}>
                <img  src="../public/photo/homeScreen/doublecandle.png" alt=""  />
                </Box>
            </Box>

<Box sx={{backgroundColor:"#E9FFF3",paddingBottom:"89px"}}>
<Box>
    <Typography sx={{fontSize:{xs:"22px",sm:"26",md:"38px",lg:"40px"},textAlign:"center",paddingTop:"90px",color:"#0B254B"}}>Testimonials</Typography>
    <Typography sx={{fontSize:{xs:"16px",sm:"16px",md:"18px",lg:"18px"},textAlign:"center",marginBottom:"27px",color:"#5E6E89"}} component={"p"}>Some quotes from our happy customers</Typography>
</Box>

<Grid container spacing={2} sx={{paddingX:"40px"}} >

    
  <Grid item lg={4} md={6} sm={6} xs={12} >
    <Item>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Avatar sx={{width:"84px",height:"84px"}} src="../public/photo/homeScreen/bg.png"/>
          <Typography>{<StarFirst/>}</Typography>
          <Typography  sx={{color:"black",fontSize:{xs:"20px",sm:"20px",md:"22px",lg:"22px"},width:{xs:"200px",sm:"200px",md:"240px",lg:"260px"}}}>“I love it! No more air fresheners”</Typography>
          <Typography component={"p"} sx={{fontSize:"18px"}}>Luisa</Typography>
        </Box>
    </Item>
  </Grid>


  <Grid item lg={4} md={6} sm={6} xs={12}>
    <Item>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Avatar sx={{width:"84px",height:"84px"}} src="../public/photo/homeScreen/bgsecond.png"/>
          <Typography>{<StarSecond/>}</Typography>
          <Typography sx={{color:"black",fontSize:{xs:"20px",sm:"20px",md:"22px",lg:"22px"},width:{xs:"200px",sm:"200px",md:"240px",lg:"260px"}}}>“Raccomended for everyone”</Typography>
          <Typography component={"p"} sx={{fontSize:"18px"}}>Edoardo</Typography>
        </Box>
    </Item>
  </Grid>


  <Grid item lg={4} md={6} sm={6} xs={12}>
    <Item>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Avatar sx={{width:"84px",height:"84px"}} src="../public/photo/homeScreen/bgfirst.png"/>
          <Typography>{<StarThird/>}</Typography>
          <Typography  sx={{color:"black",fontSize:{xs:"20px",sm:"20px",md:"22px",lg:"22px"},width:{xs:"200px",sm:"200px",md:"240px",lg:"260px"}}}>“Looks very natural, the smell is awesome”</Typography>
          <Typography component={"p"} sx={{fontSize:"18px"}}>Mart</Typography>
        </Box>

    </Item>
  </Grid>
</Grid>
</Box>



<Box>
<Typography sx={{fontSize:{xs:"20px",sm:"26px",md:"40px",lg:"40px"},textAlign:"center",color:"#0B254B",marginTop:"90px"}}>Popular</Typography>   
 <Typography component={"p"} sx={{textAlign:"center",fontSize:{xs:"14",sm:"16px",md:"18px",lg:"18px",marginBottom:"50px",color:"#5E6E89"}}}>Our top selling product that you may like</Typography>
    <Grid container sx={{marginBottom:"70px"}}>

{PopularProducts.map(post=>(
<Grid sx={{paddingLeft:"25px",marginBottom:"25px"}} md={4} lg={3} sm={6} xs={12} gap={2}>
<Item >
<img style={{margin:"0px auto"}} src={post.image} alt="" />
<Typography sx={{color:"#1D293F",fontWeight:600,textAlign:"left",marginLeft:"8px"}}>{post.name}</Typography>
<Typography sx={{textAlign:"right",color:"green"}}>{post.price}</Typography>
</Item>
</Grid>
    ))}
    
    </Grid>

</Box>
        </Box>
        </>
         );
}
 
