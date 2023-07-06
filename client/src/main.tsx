import React from "react"
import ReactDOM from "react-dom/client"
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { MainLayout } from "./layout";
import { Homescreen } from "./screens";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[{
      path:"/",
      element:<Homescreen/>
    }]
  }
]);


const root=ReactDOM.createRoot(document.getElementById("root")as HTMLElement)

root.render(
    <React.StrictMode>
  <RouterProvider router={router} />
    </React.StrictMode>
)