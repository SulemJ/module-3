import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  // If not logged in, redirect to login and save the attempted URL[cite: 3]
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}