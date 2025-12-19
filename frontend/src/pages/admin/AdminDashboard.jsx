import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Manage users, monitor activity, and view platform reports.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        <StatCard
          title="Total Users"
          value="1,240"
          color="text-blue-600"
        />

        <StatCard
          title="Alumni"
          value="620"
          color="text-indigo-600"
        />

        <StatCard
          title="Students"
          value="580"
          color="text-green-600"
        />

        <StatCard
          title="Active Events"
          value="14"
          color="text-yellow-500"
        />

      </div>

      {/* Admin Actions */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <DashboardCard
          to="/admin/users"
          title="Manage Users"
          desc="View, edit, block, or remove users from the platform."
          border="border-blue-600"
          text="text-blue-600"
        />

        <DashboardCard
          to="/admin/reports"
          title="Reports & Analytics"
          desc="Analyze platform usage and user engagement."
          border="border-indigo-600"
          text="text-indigo-600"
        />

        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-red-500">
          <h3 className="text-xl font-semibold text-red-600 mb-2">
            System Settings
          </h3>
          <p className="text-gray-600">
            Configure system preferences and permissions.
          </p>
        </div>

      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function StatCard({ title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </p>
    </div>
  );
}

function DashboardCard({ to, title, desc, border, text }) {
  return (
    <Link
      to={to}
      className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 ${border}`}
    >
      <h3 className={`text-xl font-semibold mb-2 ${text}`}>
        {title}
      </h3>
      <p className="text-gray-600">
        {desc}
      </p>
    </Link>
  );
}
