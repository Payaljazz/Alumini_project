import React from "react";

function Events() {
  const events = [
    {
      title: "Annual Alumni Meet 2025",
      date: "25 Nov 2025",
      location: "College Auditorium",
      description: "Reunite with old classmates, network, and celebrate the journey.",
    },
    {
      title: "Tech Webinar: Future of AI",
      date: "10 Dec 2025",
      location: "Online",
      description: "A knowledge-sharing webinar hosted by alumni working in top companies.",
    },
    {
      title: "Career Guidance Workshop",
      date: "5 Jan 2026",
      location: "Seminar Hall",
      description: "Senior alumni guide students on internships, jobs, and career growth.",
    },
  ];

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold text-blue-600">Upcoming Events</h1>
      <p className="text-gray-600 mt-2">
        Stay connected and participate in alumni reunions, webinars, and workshops.
      </p>

      <input
        type="text"
        placeholder="Search events..."
        className="w-full mt-6 p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {events.map((event, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{event.title}</h2>

            <p className="text-gray-700 mt-2 font-medium">
              📅 {event.date}
            </p>

            <p className="text-gray-600 mt-1">
              📍 {event.location}
            </p>

            <p className="text-gray-500 text-sm mt-3">
              {event.description}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Register Now
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Events;
