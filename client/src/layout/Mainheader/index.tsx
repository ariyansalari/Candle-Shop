import {FooterMain} from "./Footer";
import {Outlet} from "react-router-dom";
import Container from '@mui/material/Container';
import { HeaderMain } from "./Header";

export const MainLayout = () => {
    return ( 

      
     
<Container fixed>
       
{/* Header side 🔻 */}
        <header>
           <HeaderMain/>
        </header>

{/* main side  🔻 */}
        <main>
        <Outlet />
        </main>

{/* Footer side 🔻 */}
        <footer>
            <FooterMain/>
        </footer>

        </Container>


   

     );
}
 
