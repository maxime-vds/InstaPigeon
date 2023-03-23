import { useMediaQuery } from '@mui/material';
import NavbarBottomPhone from './navBotPhone';
import NavbarHeadersPc from './navHeadPc';

export default function NavScreen() {
  const isTabletScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div>
      {isTabletScreen ? <NavbarBottomPhone /> : <NavbarHeadersPc />}
    </div>
  );
}
