import { Navigate } from 'react-router';

const ProtectedRoute = ({ children, requiredRole }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  
  console.log("ProtectedRoute - user:", user);
  console.log("ProtectedRoute - user.token:", user?.token);
  
  if (!user || !user.token) {
    console.log("Redirecting to login - no user or token");
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default ProtectedRoute;