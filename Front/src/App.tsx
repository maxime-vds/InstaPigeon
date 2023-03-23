import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider, Router, Routes } from "react-router-dom"
import RootLayout from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import Landing from "./components/Landing"
import {useEffect, useState, useContext} from 'react'
import { AuthContext, AuthProvider} from "./context/authContext"
import { useAuthStore } from "./context/authStore"


    
function App() {

const getHook = useAuthStore()

//causes infinite loop

console.log(getHook.setLoginUser('yup'))
console.log(getHook.loginUser);




const router = createBrowserRouter(

    createRoutesFromElements(
        // <Routes>
            
        <Route  element={<RootLayout/>}>
            {/* <Route element={<AuthProvider/>}> */}
            <Route index element={<Landing/>}/>
            {/* </Route> */}
            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>

        // </Routes>
        ))

    return(
        <RouterProvider router={router}/>
        )
    }

export default App
