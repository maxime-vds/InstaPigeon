import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { AuthProvider } from "./context/authContext";
import { useAuthStore } from "./context/authStore";

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

const Home = () => {
  return <h2>home</h2>;
};
const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

function App() {
  const { loginUser, setLoginUser } = useAuthStore();

  const handleClick = () => {
    setLoginUser('what');

    console.log(loginUser);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* <Route path="/Grid" element={<RecipeReviewCard />} />  */}
      </Route>
    )
  );
  return (
    <>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </StyledEngineProvider>

      <button onClick={handleClick}>
        <h2>Login User</h2>
      </button>
    </>
  );
}

export default App;
