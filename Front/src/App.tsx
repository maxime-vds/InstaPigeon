import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Register from "./components/Register"
import Login from "./components/Login"
import Landing from "./components/Landing"
import {useEffect} from 'react'
import NavbarBottomPhone from "./navbar/navBotPhone"
import NavbarHeadersPc from "./navbar/navHeadPc"



const router = createBrowserRouter(

    createRoutesFromElements(
        //Home
        
        // I can use RootLayout to store the top Navbar for all pages, 
        // then select different navbar and changes ?
        // or have 2 pages basically, landing, register, login
        // then home, modals, account, etc
        
        
        // Landing < register, login
        // how to change from landing page to register page/login
        
        <Route path="/" element={<RootLayout/>}>

            <Route index element={<Landing/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/nav" element={< NavbarBottomPhone />}/>
            <Route path="/navUp" element={< NavbarHeadersPc/>}/>
            

        </Route>
    ))
    
    

   
    
function App() {



    return(
        <RouterProvider router={router}/>
    )

}

export default App
