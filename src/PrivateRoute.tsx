import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface PrivateRouteProps {
  children?: React.ReactNode; // Accept children prop
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAdminAuthenticated } = useAuth();

  return isAdminAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
