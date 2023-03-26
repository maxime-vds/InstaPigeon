import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { ReactNode } from "react"

//components
import Register from "./components/Register"
import LoginForm from "./components/LoginForm/LoginPage"
import Landing from "./components/Landing"
import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import { RequireAuth } from "./hooks/RequireAuth"

//context
import { AuthProvider } from "./context/authContext"
import { useAuthStore } from "./context/authStore"

//styles
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import { StyledEngineProvider } from "@mui/material/styles"

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
        <Route path="/Register" element={<Register />} />

        {/* if(authed) {} */}
        <Route
          path="/Home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/Login" element={<LoginForm />} />
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
