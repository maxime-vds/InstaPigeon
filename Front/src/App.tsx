import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import NavbarHeadersPc from "./navbar/navHeadPc"
import NavbarBottomPhone from "./navbar/navBotPhone"
import Landing from "./components/Landing"
import RowAndColumnSpacing from "./components/test"
import NestedGrid from "./components/test"
import {useEffect} from 'react'
import { AuthProvider } from "./context/authContext"



const router = createBrowserRouter(
    createRoutesFromElements(



        
        <Route  element={<RootLayout/>}>
            <Route index element={<Landing/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/nav" element={<NavbarBottomPhone/>}/>
            <Route path="/navUp" element={<NavbarHeadersPc/>}/>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/grid" element={<NestedGrid/>}/>

            
        </Route>


    ))



function App() {
    return(
        <AuthProvider>
        <RouterProvider router={router}/>
        </AuthProvider>
    )
}

export default App
