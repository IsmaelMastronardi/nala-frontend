import { createBrowserRouter } from "react-router-dom";
import { EmployeesList } from "./employees/employeesList";
import ProtectedRoute from "./protectedRoute";
import { Login } from "./sessions/login";
import { Signup } from "./sessions/signup";

const getAccessToken = () => {
  console.log('GET ACCESS TOKEN', sessionStorage.getItem('auth_token'));
    return sessionStorage.getItem('auth_token');
};

const isAuthenticated = () => {
    return !!getAccessToken();
};

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
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/",
        element: <EmployeesList />
      },
    ]
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>
  }
])