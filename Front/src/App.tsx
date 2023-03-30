import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { useState } from "react"

//components
import RegisterPage from "./pages/registerform/RegisterPage"
import LoginPage from "./pages/loginForm/LoginPage"
import CreatePage from "./pages/Create/CreatePage"
import Posts from "./pages/FotoGrid/Posts"

import Landing from "./pages/Landing"
import FotoGrid from "./pages/FotoGrid/FotoGrid"
import Dashboard from "./pages/Dashboard/Dashboard"
import { RequireAuth } from "./components/RequireAuth"

//context
import { AuthProvider } from "./context/authContext"
import { useAuthStore } from "./context/authStore"

//styles
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import { StyledEngineProvider } from "@mui/material/styles"
import Home from "./pages/Home/Home"
import Grid from "./components/Grid"

const theme = createTheme({
  palette: {
    primary: {
      main: "#5A558F",
    },
    secondary: {
      main: "#D9D9D9",
    },
  },
})

function App() {
  const { authed } = useAuthStore()
  const [gotIt, setGotIt] = useState<boolean>(false)



  function TryLog ():void {
    console.log("got it")
    setGotIt(true)


  }




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage TryLog={TryLog} />} />

      {gotIt ?  

        <Route
          path="/Grid"
          element={


            // <RequireAuth>
            <FotoGrid />
            // </RequireAuth>
          }
        />

         :  <Route path="/" element={<Landing/>}/> }


        <Route path="/posts/:id" element={<Posts />} />

        <Route
          path="/Dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/create" element={<CreatePage />} />
      {/**  <Route path="/home" element={<Home />} />
         <Route path="/ho" element={<Grid />} />*/} 
      </Route>
      
    )
  )
  return (
    <>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App
