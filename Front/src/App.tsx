import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { useState, useEffect } from "react"

//components
import RegisterPage from "./pages/Registerform/RegisterPage"
import LoginPage from "./pages/LoginForm/LoginPage"
import CreatePage from "./pages/Create/CreatePage"
import Posts from "./pages/FotoGrid/Posts"
import { AccountPage } from "./pages/Account/AccountPage"


import Landing from "./pages/Landing"
import FotoGrid from "./pages/FotoGrid/FotoGrid"
import Dashboard from "./pages/Dashboard/Dashboard"

//context
import { RequireAuth } from "./components/RequireAuth"
import { AuthProvider } from "./context/authContext"
import { useAuthStore } from "./context/authStore"

//styles
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import { StyledEngineProvider } from "@mui/material/styles"
import Home from "./pages/Home/Home"

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />

        <Route
          path="/Grid"
          element={
            // <RequireAuth>
            <FotoGrid />
            // </RequireAuth>
          }
        />
        <Route path="/" element={<Landing />} />

        <Route path="/posts/:id" element={<Posts />} />

        <Route
          path="/Dashboard"
          element={
            // <RequireAuth>
            <Dashboard />
            // </RequireAuth>
          }
        />

        <Route path="/Account" element={<AccountPage />}></Route>

        <Route path="/create" element={<CreatePage />} />
        <Route path="/home" element={<Home />} />
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
