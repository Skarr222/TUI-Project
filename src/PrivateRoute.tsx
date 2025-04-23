import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface PrivateRouteProps {
  children?: React.ReactNode;
  requireAdmin?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  requireAdmin = false,
}) => {
  const { isAdminAuthenticated, isCustomerAuthenticated } = useAuth();
  const location = useLocation();

  if (requireAdmin) {
    return isAdminAuthenticated ? (
      children
    ) : (
      <Navigate to="/admin/login" state={{ from: location }} replace />
    );
  }

  return isCustomerAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
