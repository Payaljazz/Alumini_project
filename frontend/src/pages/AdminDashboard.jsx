import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      
      <div className={`fixed md:static w-64 bg-white shadow-lg h-full p-6 transition-transform ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Admin Panel</h2>

        <ul className="text-gray-700 flex flex-col gap-4">
          <li><Link to="/admin/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
          <li><Link to="/admin/alumni" className="hover:text-blue-600">Manage Alumni</Link></li>
          <li><Link to="/admin/events" className="hover:text-blue-600">Manage Events</Link></li>
          <li><Link to="/admin/jobs" className="hover:text-blue-600">Manage Jobs</Link></li>
          <li><Link to="/admin/reports" className="hover:text-blue-600">Reports</Link></li>
          <li><Link to="/admin/settings" className="hover:text-blue-600">Settings</Link></li>
        </ul>
      </div>

     
      <button
        className="md:hidden absolute top-5 left-5 bg-blue-600 text-white p-2 rounded-md"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      
      <div className="flex-1 p-8 mt-10 md:mt-0">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">Dashboard Overview</h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Total Alumni</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">784</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Events</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">18</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Job Posts</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">52</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Students</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">1290</p>
          </div>

        </div>

        
        <div className="mt-10 bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Recent Activities</h2>

          <ul className="text-gray-700">
            <li className="border-b py-3">✅ New Alumni Registered</li>
            <li className="border-b py-3">📢 New Event Scheduled</li>
            <li className="border-b py-3">💼 New Job Added</li>
            <li className="py-3">📊 Report Generated</li>
          </ul>
        </div>

        
        <div className="mt-10 bg-white p-10 shadow-md rounded-xl text-center">
          <h2 className="text-xl font-semibold text-gray-700">Analytics Overview</h2>
          <p className="text-gray-500 mt-3">Chart/Graph will appear here</p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
