import { useMediaQuery } from '@mui/material'

import React from 'react'

import { useLocation } from 'react-router-dom'

//components
import NavbarBottomPhone from './NavbarBottomPhone'
import NavbarHeadersPc from './NavbarHeadersPc'
import NavbarHeader from './NavbarHeader'
import NavbarAuth from './NavbarAuth'

export default function Navbar() {
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')

   const authed = sessionStorage.getItem('authed')
   const { pathname } = useLocation()
   const NoAuthNavbars = ['/', '/login', '/register']

   return (
      <div>
         <>
            <header>
               {NoAuthNavbars.includes(pathname) ? (
                  <NavbarHeader />
               ) : (
                  <NavbarAuth />
               )}
            </header>
         </>
         {isTabletScreen ? (
            <footer>
               {NoAuthNavbars.includes(pathname) ? '' : <NavbarBottomPhone />}
            </footer>
         ) : (
            <React.Fragment>
               <header>{/* <NavbarHeadersPc /> */}</header>
               <footer></footer>
            </React.Fragment>
         )}
      </div>
   )
}
