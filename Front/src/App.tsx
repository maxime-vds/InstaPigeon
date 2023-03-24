import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider, Router, Routes } from "react-router-dom"
import RootLayout from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import Landing from "./components/Landing"
import {useEffect, useState, useContext} from 'react'
import { AuthContext, AuthProvider} from "./context/authContext"
import { useAuthStore } from "./context/authStore"
import { useSetLoginUser } from "./hooks"


import { StyledEngineProvider } from '@mui/material/styles';








    
function App() {

const {loginUser, setLoginUser} = useAuthStore()




const router = createBrowserRouter(

    createRoutesFromElements(
        // <Routes>
            
        <Route path="/" element={<RootLayout/>}>
            {/* <Route element={<AuthProvider/>}> */}
            <Route index element={<Landing/>}/>
            {/* </Route> */}
            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>

        // </Routes>
        ))

    return (
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
    );
    }

export default App
