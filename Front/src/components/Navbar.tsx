import { useMediaQuery } from "@mui/material";
import NavbarBottomPhone from "./navbar/NavbarBottomPhone";
import NavbarHeadersPc from "./navbar/NavbarHeadersPc";
import NavbarHeadersPhone from "./navbar/NavbarHeadersPhone";
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
            <NavbarBottomPhone />
          </footer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <header></header>
          <footer></footer>
        </React.Fragment>
      )}
    </div>
  );
}
