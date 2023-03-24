import { useMediaQuery } from "@mui/material";
import NavbarBottomPhone from "./NavbarBottomPhone";
import NavbarHeadersPc from "./NavbarHeadersPc";

export default function NavScreen() {
  const isTabletScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <>{isTabletScreen ? <NavbarBottomPhone /> : <NavbarHeadersPc />}</>
  );
}
