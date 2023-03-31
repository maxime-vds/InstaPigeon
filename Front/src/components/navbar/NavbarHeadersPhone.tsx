import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"

import { Button } from "../button/Button"

import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom"
import { Link } from "@mui/material"

//userAuth= true

export default function NavbarHeadersPhone() {
  const authed = ["/"]
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const toolbarStyles = {
    backgroundColor: pathname === "/" ? "#7F96FF" : "#D9D9D9",
    display: "flex",
    justifyContent: "space-between",
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigateToLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <AppBar position="relative" elevation={0} sx={{ margin: "0" }}>
        {/* changing  */}
        <Toolbar style={toolbarStyles}>
          {pathname === "/" ? (
            <Button
              buttonText="Login"
              backgroundColor="#BD9B45"
              onClick={navigateToLogin}
            />
          ) : (
            <Link underline="none" component={RouterLink} to="/"> <h2 style={{ fontSize: "28px", color: "#5A558F" }}>InstaPigeon</h2></Link>
          )}

          <div>
            <IconButton
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              size="large"
              edge="start"
              color={pathname === "/" ? "secondary" : "primary"}
            >
              <MenuIcon />

              {/* create styled component for burger menu */}
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                onClick={handleClose}
                style={{ height: open ? "80px" : "auto", fontSize: "24px " }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ height: open ? "80px" : "auto", fontSize: "24px" }}
              >
                Setting
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ height: open ? "80px" : "auto", fontSize: "24px" }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
