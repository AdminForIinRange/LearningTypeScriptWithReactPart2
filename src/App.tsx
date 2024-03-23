import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home/Home.tsx";
import Goals from "./pages/Goals/Goals.tsx";



// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="Goals" element={<Goals />} />
    </Route>
  )
);

function App() {


  return <RouterProvider router={router} />;
}

export default App;
