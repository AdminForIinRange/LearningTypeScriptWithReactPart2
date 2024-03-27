import {
  createBrowserRouter,
  createRoutesFromElements,

  Route,
  RouterProvider,

} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home/Home.tsx";
import Goals from "./pages/Goals/Goals.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import GoalCreation from "./pages/GoalCreation/GoalCreation.tsx";


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


  return <RouterProvider router={router} />;
}

export default App;
