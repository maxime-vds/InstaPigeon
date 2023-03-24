//mui
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";




export default function Navbar() {
  return (
    <>
      <header>


export default function NavbarHeadersPhone() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "poppins",
              fontWeight: 400,
              fontSize: 28,
            }}
          >
            InstaPigeon
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}





        {/* <NavLink to="/">
                        <h2>InstaPigeon</h2>
                        </NavLink>
                    <NavLink to="Login">Login</NavLink>
                    <NavLink to="Register">Register</NavLink> */}
        <Box>
          <AppBar elevation={0} color="secondary">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* change this to typography ? but does it really matter ? */}
              <Typography color="primary">
                <h2 color="primary">InstaPigeon</h2>
              </Typography>
              <IconButton size="large" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </header>

      <footer>

      </footer>
    </>
  );
}
