import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Alumni Portal</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/directory" className="hover:underline">Directory</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/jobs" className="hover:underline">Jobs</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
