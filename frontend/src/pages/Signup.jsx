import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          contact: formData.contact,
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
    } catch {
      alert("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">

        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md"
            required
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="border p-3 rounded-md"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-md"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border p-3 rounded-md"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-3 rounded-md"
            required
          >
            <option value="">Select Role</option>
            <option value="alumni">Alumni</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-semibold ml-1">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
