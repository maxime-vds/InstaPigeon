import { useMediaQuery } from "@mui/material";
import NavbarBottomPhone from "./NavbarBottomPhone";
import NavbarHeadersPc from "./NavbarHeadersPc";
import NavbarHeadersPhone from "./NavbarHeadersPhone";
import React from "react";

export default function Navbar() {
  const isTabletScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      {isTabletScreen ? (
        <React.Fragment>
          <header>
            <NavbarHeadersPhone />
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
  );
}
