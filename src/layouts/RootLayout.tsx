import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.tsx";
import { useEffect, useState } from "react";



export default function RootLayout() {


  const [Nav, setNav] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, [localStorage.getItem("authToken")]);

  return (
    <>
      {Nav ? <Navbar /> : null}

      <Outlet />
    </>
  );
}
