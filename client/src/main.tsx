import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { MainLayout } from "./layout";
import { Homescreen, SignInScreen, SignUpScreen,CardShoppingScreen } from "./screens";


export const HomePath="/";
export const SignInPath="/Login";
export const SignUpPath="/SignUp";
export const CardShoppingPath="/CardShopping";

const router = createBrowserRouter([
  {
    path: HomePath,
    element: <MainLayout/>,
    children:[{
      path:"/",
      element:<Homescreen/>
    }],
  },
{
  path:SignInPath,
  element:<SignInScreen/>
},
{
  path:SignUpPath,
  element:<SignUpScreen/>
},
{
  path:CardShoppingPath,
  element:<CardShoppingScreen/>
}
  
]);


const root=ReactDOM.createRoot(document.getElementById("root")as HTMLElement)

root.render(
    <React.StrictMode>
  <RouterProvider router={router} />
    </React.StrictMode>
)