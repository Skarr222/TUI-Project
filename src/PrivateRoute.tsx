import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { Navigate } from "react-router-dom";
import { JSX } from "react";

const PrivateRoute = ({
  children,
  role,
}: {
  children: JSX.Element;
  role?: "admin" | "customer";
}) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (role && auth.user?.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
