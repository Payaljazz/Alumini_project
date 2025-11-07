import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">

        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4">

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

          <button
            className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 font-semibold ml-1 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-center mt-3 text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
          Forgot Password?
        </p>

      </div>
    </div>
  );
}

export default Login;
