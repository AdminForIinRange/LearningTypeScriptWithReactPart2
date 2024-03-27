import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar.tsx';

export default function RootLayout() {

  
 
  return (
    <>
     
      {localStorage.getItem('authToken') ? <Navbar /> : null}
     
      <Outlet />

    </>
  );
}
