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


const [allow, setNav] = useState(false)

  useEffect(() => {
   if (localStorage.getItem("authToken")) {


   }


  },[localStorage.getItem("authToken")]);

  return (
    <>
      {localStorage.getItem("authToken") ? <Navbar /> : null}

      <Outlet />
    </>
  );
}
