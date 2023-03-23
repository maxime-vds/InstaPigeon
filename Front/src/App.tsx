import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider, Router, Routes } from "react-router-dom"
import RootLayout from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import NavbarHeadersPc from "./navbar/navHeadPc"
import NavbarBottomPhone from "./navbar/navBotPhone"
import Landing from "./components/Landing"
import { AuthContext, AuthProvider} from "./context/authContext"
import { useAuthStore } from "./context/authStore"
import { useSetLoginUser } from "./hooks"
import RowAndColumnSpacing from "./components/test"
import NestedGrid from "./components/test"


    
function App() {

const router = createBrowserRouter(
    createRoutesFromElements(
            
        <Route path="/" element={<RootLayout/>}>
        
            <Route index element={<Landing/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/nav" element={<NavbarBottomPhone/>}/>
            <Route path="/navUp" element={<NavbarHeadersPc/>}/>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/grid" element={<NestedGrid/>}/>
            
        </Route>

            )
        )




    return(

        <AuthProvider>
        <RouterProvider router={router}/>
        </AuthProvider>

        )
    }

export default App
