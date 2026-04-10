import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuth();
  return session ? <>{children}</> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
