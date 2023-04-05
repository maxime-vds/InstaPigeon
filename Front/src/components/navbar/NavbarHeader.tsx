import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { BurgerMenu } from './BurgerMenu'

import { Button } from '../button/Button'

import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

export default function NavbarHeader() {
   const { pathname } = useLocation()

   const navigate = useNavigate()
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)

   const toolbarStyles = {
      backgroundColor: pathname === '/' ? '#7F96FF' : '#D9D9D9',
      display: 'flex',
      justifyContent: 'space-between',
   }

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const navigateToLogin = () => {
      navigate('/login')
   }

   return (
      <>
         <AppBar position="relative" elevation={0} sx={{ margin: '0' }}>
            <Toolbar style={toolbarStyles}>
               {pathname === '/' ? (
                  <Button
                     buttonText="Login"
                     backgroundColor="#BD9B45"
                     onClick={navigateToLogin}
                  />
               ) : (
                  <>
                     <Link underline="none" component={RouterLink} to="/">
                        {' '}
                        <h2 style={{ fontSize: '28px', color: '#5A558F' }}>
                           InstaPigeon
                        </h2>
                     </Link>
                     <BurgerMenu
                        handleClick={handleClick}
                        handleClose={handleClose}
                        pathname={pathname}
                        open={open}
                        anchorEl={anchorEl}
                     />
                  </>
               )}
            </Toolbar>
         </AppBar>
      </>
   )
}
