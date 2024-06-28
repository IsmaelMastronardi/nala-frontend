import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  if (!sessionStorage.getItem('auth_token')) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
