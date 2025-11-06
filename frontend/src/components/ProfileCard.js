import React from "react";

function ProfileCard({ name, batch, course, profession, location, contact, achievements, image }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col items-center p-6">
        
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-3"
          src={image || "https://via.placeholder.com/100"}
          alt={name}
        />

        
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-blue-600 text-sm font-medium">{profession}</p>

       
        <div className="mt-3 text-sm text-gray-600 text-center space-y-1">
          <p><span className="font-semibold">Batch:</span> {batch}</p>
          <p><span className="font-semibold">Course:</span> {course}</p>
          <p><span className="font-semibold">Location:</span> {location}</p>
          <p><span className="font-semibold">Contact:</span> {contact}</p>
        </div>

        
        {achievements && achievements.length > 0 && (
          <div className="mt-4 w-full">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Achievements:</h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {achievements.map((a, index) => (
                <li key={index}>{a}</li>
              ))}
            </ul>
          </div>
        )}

       
        <div className="mt-5 flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Message
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
