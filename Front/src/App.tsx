import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import NavbarHeadersPc from "./components/Navbar/NavbarHeadersPc";
import NavbarBottomPhone from "./components/Navbar/NavbarBottomPhone";
import Landing from "./components/Landing";
import { AuthContext, AuthProvider } from "./context/authContext";
import { useAuthStore } from "./context/authStore";
import { useSetLoginUser } from "./hooks/useSetLoginUser";
import Grid from "./components/Grid";
import RecipeReviewCard from "./components/test";


import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5A558F",
    },
    secondary: {
      main: "#D9D9D9",
    },
  },
});

function App() {
  const { loginUser, setLoginUser } = useAuthStore();

  const router = createBrowserRouter(
    createRoutesFromElements(


      <Route element={<RootLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path="/Register" element={<Register/>}/>
          {/* <Route path="/Login" element={<Login/>}/> */}
          <Route path="/Grid" element={<RecipeReviewCard />} /> 


      </Route>

      // <Route element={<RootLayout />}>
      //   <Route index element={<Landing />} />
      //   <Route path="/Register" element={<Register />} />
      //   <Route path="/login" element={<Login />} />
      //   {/* <Route path="/Grid" element={<RecipeReviewCard />} /> */}
      //   {/* protected routes */}
      //   {/* home, modals, dashboard,  */}
      // </Route>
    )
  );
  return (
    // <StyledEngineProvider>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
    // </StyledEngineProvider>
  );
}

export default App;
