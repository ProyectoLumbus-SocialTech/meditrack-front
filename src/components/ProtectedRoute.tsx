import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ element, isAuthenticated }: ProtectedRouteProps) => {
  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
