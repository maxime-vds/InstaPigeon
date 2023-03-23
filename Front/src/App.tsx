import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Register from "./components/Register"
import Login from "./components/Login"
import NavbarHeadersPc from "./navbar/navHeadPc"
import NavbarBottomPhone from "./navbar/navBotPhone"
import Landing from "./components/Landing"



const router = createBrowserRouter(
    createRoutesFromElements(

        //Home
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/nav" element={<NavbarBottomPhone/>}/>
            <Route path="/navUp" element={<NavbarHeadersPc/>}/>
            <Route path="/landing" element={<Landing/>}/>
            
        </Route>

    ))



function App() {
    return(
        <RouterProvider router={router}/>
    )
}

export default App
