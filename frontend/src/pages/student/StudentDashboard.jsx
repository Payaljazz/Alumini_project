import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyStudentProfile } from "../../api/studentApi";
import Loader from "../../components/Loader";

export default function StudentDashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getMyStudentProfile();
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load student profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loader />;

  if (error)
    return (
      <p className="pt-24 text-center text-red-500 font-semibold">
        {error}
      </p>
    );

  if (!profile)
    return (
      <p className="pt-24 text-center text-muted">
        Profile not found
      </p>
    );

  return (
    <div className="min-h-screen bg-bg px-6 py-10 pt-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Student Dashboard
          </h1>
          <Link
            to="/student/edit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
          >
            Edit Profile
          </Link>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Info label="Course" value={profile.course || "—"} />
          <Info label="Year" value={profile.year || "—"} />
        </div>

        {/* Interests */}
        <div className="mt-6">
          <h3 className="font-semibold text-dark mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {profile.interests?.length ? (
              profile.interests.map((interest, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))
            ) : (
              <p className="text-muted">No interests added</p>
            )}
          </div>
        </div>

        {/* Mentor */}
        <div className="mt-6">
          <h3 className="font-semibold text-dark mb-2">Mentor</h3>
          {profile.mentor ? (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-primary">
                {profile.mentor?.user?.name || "Mentor"}
              </p>
              <p className="text-sm text-muted">
                {profile.mentor?.designation || "—"} @{" "}
                {profile.mentor?.currentCompany || "—"}
              </p>
            </div>
          ) : (
            <p className="text-muted">Mentor not assigned yet</p>
          )}
        </div>

      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <p className="font-semibold text-dark">{value}</p>
    </div>
  );
}
