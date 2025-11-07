import React, { useState } from "react";

function Aluminidirectoring() {
  const [search, setSearch] = useState("");

  const alumni = [
    {
      name: "Amit Kumar",
      batch: "2020",
      profession: "Software Engineer",
      company: "Google",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Priya Sharma",
      batch: "2019",
      profession: "Data Analyst",
      company: "TCS",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Rahul Singh",
      batch: "2021",
      profession: "Full Stack Developer",
      company: "Microsoft",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const filtered = alumni.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold text-blue-600">Alumni Directory</h1>
      <p className="text-gray-600 mt-2">
        Browse and connect with alumni across batches and industries.
      </p>

      <input
        type="text"
        placeholder="Search alumni by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mt-6 p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {filtered.map((a, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <img
              src={a.avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold text-blue-600 text-center mt-4">
              {a.name}
            </h2>

            <p className="text-center text-gray-700 mt-1">Batch: {a.batch}</p>
            <p className="text-center text-gray-700">
              {a.profession} – {a.company}
            </p>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Aluminidirectoring;
