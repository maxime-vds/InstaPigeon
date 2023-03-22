import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import Landing from "./components/Landing"
import {useEffect} from 'react'



const router = createBrowserRouter(

    createRoutesFromElements(
        //Home
        
        // I can use RootLayout to store the top Navbar for all pages, 
        // then select different navbars and changes ?
        // or have 2 pages basically, landing, register, login
        // then home, modals, account, etc
        
        
        // Landing < register, login
        // how to change from landing page to register page/login
        // based on userAutentication
        
        <Route  element={<RootLayout/>}>
            <Route index element={<Landing/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>

 
            // once user is Authenticated, we can pass to this tree ?           


         //<Route element={<HomeLayout/>}> 
         //<Route index element={<Home>}
         //
         // <Route>   



    ))
    
    

   
    
function App() {



    return(
        <RouterProvider router={router}/>
    )
}

export default App
