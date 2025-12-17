import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import Events from "./pages/Events";
import AlumniDirectory from "./pages/AlumniDirectory";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">

        {isAuthenticated && <Navbar />}

        <main className="flex-grow">
          <Routes>

            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
            />

            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/jobs"
              element={isAuthenticated ? <Jobs /> : <Navigate to="/login" />}
            />
            <Route
              path="/events"
              element={isAuthenticated ? <Events /> : <Navigate to="/login" />}
            />
            <Route
              path="/alumni"
              element={
                isAuthenticated ? <AlumniDirectory /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/admin"
              element={
                isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />
              }
            />

            <Route path="*" element={<Navigate to="/login" />} />

          </Routes>
        </main>

        {isAuthenticated && <Footer />}

      </div>
    </Router>
  );
}

export default App;
