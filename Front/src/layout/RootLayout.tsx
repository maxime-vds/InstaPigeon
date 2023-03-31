//components

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";



export default function RootLayout() {
const {pathname} = useLocation()



  return (
    <div className="RootLayout">
      <header>

        {/* kill navbar here for account settings ?  seems pretty messy */}

      {pathname === "/"}

      <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
