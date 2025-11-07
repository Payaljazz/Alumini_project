import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

        <div className="flex items-center gap-2">
          <img src="/logo_alumini.png" alt="Logo" className="h-10 w-10 object-cover" />
          <h1 className="text-xl font-semibold text-blue-600 tracking-wide">
            Alumni Connect
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 text-[16px]">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/alumni" className="hover:text-blue-600">Alumni</Link></li>
          <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
          <li><Link to="/jobs" className="hover:text-blue-600">Jobs</Link></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/alumni" onClick={() => setOpen(false)}>Alumni</Link></li>
            <li><Link to="/events" onClick={() => setOpen(false)}>Events</Link></li>
            <li><Link to="/jobs" onClick={() => setOpen(false)}>Jobs</Link></li>
            <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
            <li><Link to="/signup" onClick={() => setOpen(false)}>Signup</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
