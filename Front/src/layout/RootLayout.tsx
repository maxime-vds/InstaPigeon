//components

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {

  return (
    <div className="RootLayout">
      <header>
      <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
