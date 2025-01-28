import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import { Browse } from "./components/ui/Browse";
import { Profile } from "./components/Profile";
import { JobDescription } from "./components/JobDescription";
import { Companies } from "../admin/Companies";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/jobs", element: <Jobs /> },
  { path: "/browse", element: <Browse /> },
  { path: "/profile", element: <Profile /> },
  { path: "/jobs/description/:id", element: <JobDescription /> },
  { path: "/admin/companies/", element: <Companies /> },
  { path: "/admin/companies/create",element:< },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
