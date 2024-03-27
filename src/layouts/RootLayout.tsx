import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar.tsx';
import { AppDispatch, RootState } from "../store.ts";
import { useDispatch, useSelector } from "react-redux";
export default function RootLayout() {

  
  const {
    user,
  } = useSelector((state: RootState) => state.auth);
  return (
    <>
     
      {localStorage.getItem('authToken') ? <Navbar /> : null}
     
      <Outlet />

    </>
  );
}
