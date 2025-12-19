import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  // 🔹 jab auth check ho raha ho
  if (loading) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  // 🔹 agar user login nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔹 agar login hai
  return <Outlet />;
}
