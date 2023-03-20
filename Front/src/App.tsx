import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Register from "./components/Register"
import Login from "./components/Login"



const router = createBrowserRouter(
    createRoutesFromElements(

        //Home
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>

    ))



function App() {
    return(
        <RouterProvider router={router}/>
    )
}

export default App
