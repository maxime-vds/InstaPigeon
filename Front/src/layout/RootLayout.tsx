//components

import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NavScreen from "../components/Navbar";

const Paths = ["/", "Login", "nav", "navUp", "landing", "grid"];

export default function RootLayout() {
  const [userAuth, setUserAuth] = useState<boolean>(false);

  return (
    <div className="RootLayout">
      <NavScreen />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
