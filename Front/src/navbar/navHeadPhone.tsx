  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';




  export default function NavbarHeadersPhone () {



      return ( 

          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static"> {/**fixed for the top on the page  */}
            <Toolbar>
            
              <Typography variant="h6" component="div" 
                  sx={{ 
                      flexGrow: 1,
                      fontFamily: 'arial',
                      fontWeight: 700,
                      fontSize:28 
                  }} 
                  >
                  InstaPigeon
              </Typography>

              <Button color="inherit"> </Button>
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




  

  