import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">

        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 font-semibold ml-1 hover:underline"
          >
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
