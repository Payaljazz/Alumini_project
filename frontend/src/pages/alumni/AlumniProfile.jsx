import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AlumniProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/alumni/profile/${id}`
      );
      setProfile(res.data);
    } catch (err) {
      console.error("Profile fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-32 text-center text-lg text-gray-600">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="pt-32 text-center text-red-500">
        Profile not found
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 text-white text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-white text-indigo-600 flex items-center justify-center text-3xl font-bold">
            {profile.user?.name?.charAt(0)}
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {profile.user?.name}
          </h1>

          <p className="mt-2 text-indigo-100">
            {profile.designation} @ {profile.currentCompany || "N/A"}
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h3 className="text-sm text-gray-500">Branch</h3>
            <p className="font-semibold text-gray-800">
              {profile.branch}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500">Graduation Year</h3>
            <p className="font-semibold text-gray-800">
              {profile.graduationYear}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm text-gray-500">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills?.length > 0 ? (
                profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-600">No skills added</p>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm text-gray-500">Bio</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {profile.bio || "No bio available"}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AlumniProfile;
