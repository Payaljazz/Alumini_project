import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">

        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Create Account
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            className="border p-3 rounded-md text-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option>Select Role</option>
            <option>Alumni</option>
            <option>Student</option>
            <option>Admin</option>
          </select>

          <button
            className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-semibold ml-1 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
