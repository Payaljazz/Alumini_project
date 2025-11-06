import React from "react";

function EventCard({ title, date, location, description, image, organizer }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Event Image */}
      <img
        className="h-48 w-full object-cover"
        src={image || "https://via.placeholder.com/400x250"}
        alt={title}
      />

      {/* Event Content */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

          <div className="text-sm text-gray-600 mb-3">
            <p><span className="font-semibold text-blue-600">Date:</span> {date}</p>
            <p><span className="font-semibold text-blue-600">Location:</span> {location}</p>
            {organizer && (
              <p><span className="font-semibold text-blue-600">Organizer:</span> {organizer}</p>
            )}
          </div>

          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Register
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
