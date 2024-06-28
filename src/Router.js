import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import { Login } from "./sessions/login";
import { Signup } from "./sessions/signup";
import { Home } from "./home";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    index: true
  },
  {
    path: "/signup",
    element: <Signup />,
    index: true
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>
  }
]);
