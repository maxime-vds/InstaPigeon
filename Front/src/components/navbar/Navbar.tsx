import { useMediaQuery } from "@mui/material"
import NavbarBottomPhone from "./NavbarBottomPhone"
import NavbarHeadersPc from "./NavbarHeadersPc"
import NavbarHeadersPhone from "./NavbarHeadersPhone"
import React from "react"

import { useLocation } from "react-router-dom"

export default function Navbar() {
  const isTabletScreen = useMediaQuery("(max-width: 1024px)")
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <div>
      {isTabletScreen ? (
        <React.Fragment>
          <header>
              <NavbarHeadersPhone/>
          </header>
          <footer>
            {/* authed? :  */}
            <NavbarBottomPhone />
          </footer>
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
