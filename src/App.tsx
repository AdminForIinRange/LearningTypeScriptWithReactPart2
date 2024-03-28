import {
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home/Home.tsx";
import Goals from "./pages/Goals/Goals.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import GoalCreation from "./pages/GoalCreation/GoalCreation.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store.ts";
import { useEffect } from "react";
import { setUserData, signOutUser } from "./features/auth/authSlice.tsx";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="loginsignup" element={<Auth />} />
      <Route path="Home" element={<Home />} />
      <Route path="/" element={<Goals />} />
      <Route path="GoalCreation" element={<GoalCreation />} />
    </Route>
  )
);

function App() {


  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const UserTestStorage = localStorage.getItem("UserTestStorage");

    if (UserTestStorage && !user) {
      // If UserTestStorage exists in localStorage and user is not logged in, fetch user data
      const userTestStorageObj = JSON.parse(UserTestStorage);
      dispatch(setUserData(userTestStorageObj));
    } else if (!UserTestStorage && user) {
      // If UserTestStorage doesn't exist in localStorage but user is logged in, sign out the user
      dispatch(signOutUser());
    
    }
  }, [dispatch, user]);

  return <RouterProvider router={router} />;
}

export default App;
