import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.tsx";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";

export default function RootLayout() {
  // const { user } = useSelector((state: RootState) => state.auth);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     navigate("/");
  //   } else {
  //     navigate("/loginsignup");
  //   }
  // }, [user, localStorage.getItem("authToken")]);


const [Nav, setNav] = useState(false)

  useEffect(() => {
   if (localStorage.getItem("authToken")) {
    setNav(true)

   } else {
    setNav(false)
   }


  },[localStorage.getItem("authToken")]);

  return (
    <>
      {Nav ? <Navbar /> : null}

      <Outlet />
    </>
  );
}
