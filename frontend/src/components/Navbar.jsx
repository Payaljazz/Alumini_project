import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🎓</span>
          <h1 className="text-2xl font-extrabold text-indigo-600">
            Alumni <span className="text-yellow-400">Connect</span>
          </h1>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/alumni"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Alumni
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Jobs
          </NavLink>

          {/* 🎓 STUDENT DASHBOARD */}
          {user?.role === "student" && (
            <NavLink
              to="/student/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600"
              }
            >
              Dashboard
            </NavLink>
          )}

          {/* 🔥 ADMIN */}
          {user?.role === "admin" && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-semibold"
                  : "text-gray-600 hover:text-red-600"
              }
            >
              Admin
            </NavLink>
          )}
        </div>

        {/* AUTH BUTTON */}
        <div className="flex items-center gap-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

