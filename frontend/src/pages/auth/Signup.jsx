import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    role: "student", // default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          password: formData.password,
          role: formData.role, // 🔥 role sent to backend
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-200 px-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🎓</span>
            <h1 className="text-3xl font-extrabold text-white">
              Alumni <span className="text-yellow-300">Connect</span>
            </h1>
          </div>
          <p className="text-blue-100 text-sm mt-1">
            Bridging Alumni, Students & Institutions
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Create Account
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            {/* 🔥 ROLE SELECT */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            
            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4 text-sm">
            Already have an account?
            <Link to="/login" className="text-indigo-600 font-semibold ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
