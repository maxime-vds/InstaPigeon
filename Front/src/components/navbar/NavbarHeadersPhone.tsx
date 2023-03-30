import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

//userAuth= true 

export default function NavbarHeadersPhone() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <AppBar 
        position="relative"
        elevation={0}
        sx={{margin:"0"}}
          >
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

         {/**  <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>*/}
          
          <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
            
      
      >
         <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} style={{ height: open ? '80px' : 'auto', fontSize:"24px "}}>Profile</MenuItem>
        <MenuItem onClick={handleClose} style={{ height: open ? '80px' : 'auto', fontSize:"24px"  }}>Setting</MenuItem>
        <MenuItem onClick={handleClose} style={{ height: open ? '80px' : 'auto', fontSize:"24px"  }}>Logout</MenuItem>
      </Menu>
    </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
