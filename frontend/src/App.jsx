import { Routes, Route, Navigate, Outlet } from "react-router-dom";

/* Auth */
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

/* Common */
import Home from "./pages/common/Home";
import AlumniDirectory from "./pages/common/AlumniDirectory";
import Events from "./pages/common/Events";
import Jobs from "./pages/common/Jobs";
import Messages from "./pages/common/Messages";

/* Alumni */
import AlumniProfile from "./pages/alumni/AlumniProfile";
import EditAlumniProfile from "./pages/alumni/EditAlumniProfile";
import Achievements from "./pages/alumni/Achievements";
import AddAchievement from "./pages/alumni/AddAchievement";

/* Student */
import StudentDashboard from "./pages/student/StudentDashboard";

/* Admin */
import AdminDashboard from "./pages/admin/AdminDashboard";
import SendAnnouncement from "./pages/admin/SendAnnouncement";
import Reports from "./pages/admin/Reports";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleGuard from "./components/RoleGuard";



function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>

      {/* Layout wrapper for all pages */}
      <Route element={<Layout />}>

        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/alumni" element={<AlumniDirectory />} />

        {/* 🔥 Public alumni profile */}
        <Route path="/alumni/:id" element={<AlumniProfile />} />

        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />

        {/* ===== PROTECTED ROUTES ===== */}
        <Route element={<ProtectedRoute />}>

          <Route path="/messages" element={<Messages />} />

          {/* Alumni only */}
          <Route element={<RoleGuard role="alumni" />}>
            <Route path="/alumni/profile" element={<AlumniProfile />} />
            <Route path="/alumni/profile/edit" element={<EditAlumniProfile />} />
            <Route path="/alumni/achievements" element={<Achievements />} />
            <Route path="/alumni/achievements/add" element={<AddAchievement />} />
          </Route>

          {/* Student only */}
          <Route element={<RoleGuard role="student" />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
          </Route>

          {/* Admin only */}
          <Route element={<RoleGuard role="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/announcement" element={<SendAnnouncement />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>

        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
