import { useMediaQuery } from "@mui/material"

import React from "react"

import { useLocation } from "react-router-dom"

//components
import NavbarBottomPhone from "./NavbarBottomPhone"
import NavbarHeadersPc from "./NavbarHeadersPc"
import NavbarHeadersPhone from "./NavbarHeadersPhone"
import NavbarAuth  from "./NavbarAuth"

export default function Navbar() {
  const isTabletScreen = useMediaQuery("(max-width: 1024px)")
  const authed = sessionStorage.getItem("authed")
  const {pathname} = useLocation()
  const NoAuthNavbars = ["/", "/login", "/register"]


    return (
      <div>
        {isTabletScreen ? (
          <React.Fragment>
            <header>
              {NoAuthNavbars.includes(pathname) ? <NavbarHeadersPhone /> : <NavbarAuth/>  }
            </header>
            <footer>{NoAuthNavbars.includes(pathname)?  "" : <NavbarBottomPhone /> }</footer>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <header>
              <NavbarHeadersPc />
            </header>
            <footer></footer>
          </React.Fragment>
        )}
      </div>
    )
}
