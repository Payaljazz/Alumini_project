import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AlumniDirectory() {
  const [alumni, setAlumni] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alumni/directory")
      .then((res) => setAlumni(res.data || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = alumni.filter((a) =>
    `${a.user?.name || ""} ${a.designation || ""} ${a.currentCompany || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="pt-32 text-center text-xl text-blue-600">
        Loading alumni...
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-8xl mx-auto bg-blue-100  pb-10">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        Alumni Directory
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search alumni..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-10 p-4 border border-blue-200 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No alumni found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((a) => (
            <div
              key={a._id}
              className="bg-gradient-to-b from-blue-50 to-white
                         border border-blue-100 rounded-2xl shadow-md
                         hover:shadow-xl transition duration-300 p-6"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto rounded-full 
                              bg-blue-200 flex items-center justify-center
                              text-3xl font-bold text-blue-700">
                {a.user?.name?.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="text-xl font-bold text-center mt-4 text-blue-800">
                {a.user?.name}
              </h2>

              {/* Designation */}
              <p className="text-center text-gray-700 mt-1">
                {a.designation}
              </p>

              {/* Company */}
              <p className="text-center text-gray-500">
                {a.currentCompany}
              </p>

              {/* Branch + Year */}
              <p className="text-center text-sm text-blue-600 mt-1">
                {a.branch} • {a.graduationYear}
              </p>

              {/* Button */}
              <button
                onClick={() => navigate(`/alumni/${a._id}`)}
                className="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-lg
                           hover:bg-blue-700 transition font-semibold"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AlumniDirectory;
