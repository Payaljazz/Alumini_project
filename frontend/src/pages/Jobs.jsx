import React from "react";

function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      deadline: "12 Nov 2025",
    },
    {
      title: "Full Stack Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      deadline: "20 Nov 2025",
    },
    {
      title: "Backend Developer",
      company: "TCS",
      location: "Mumbai",
      deadline: "15 Nov 2025",
    },
  ];

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold text-blue-600">Job Opportunities</h1>
      <p className="text-gray-600 mt-2">Explore jobs shared by alumni and industry professionals.</p>

      <input
        type="text"
        placeholder="Search jobs..."
        className="w-full mt-6 p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{job.title}</h2>

            <p className="text-gray-700 mt-2 font-medium">{job.company}</p>

            <p className="text-gray-500 text-sm mt-1">{job.location}</p>

            <p className="text-red-500 text-sm mt-3">
              Deadline: {job.deadline}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Jobs;
