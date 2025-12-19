import React, { useEffect, useState } from "react";
import axios from "axios";

function EditAlumniProfile() {
  const [form, setForm] = useState({
    graduationYear: "",
    branch: "",
    currentCompany: "",
    designation: "",
    skills: "",
    bio: ""
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/alumni/profile",
        { withCredentials: true }
      );

      setForm({
        graduationYear: res.data.graduationYear || "",
        branch: res.data.branch || "",
        currentCompany: res.data.currentCompany || "",
        designation: res.data.designation || "",
        skills: res.data.skills?.join(", ") || "",
        bio: res.data.bio || ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        "http://localhost:5000/api/alumni/profile",
        {
          ...form,
          skills: form.skills.split(",").map((s) => s.trim())
        },
        { withCredentials: true }
      );

      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-24 max-w-3xl mx-auto px-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Alumni Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Graduation Year"
          value={form.graduationYear}
          onChange={(e) =>
            setForm({ ...form, graduationYear: e.target.value })
          }
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Branch"
          value={form.branch}
          onChange={(e) =>
            setForm({ ...form, branch: e.target.value })
          }
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Current Company"
          value={form.currentCompany}
          onChange={(e) =>
            setForm({ ...form, currentCompany: e.target.value })
          }
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Designation"
          value={form.designation}
          onChange={(e) =>
            setForm({ ...form, designation: e.target.value })
          }
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={(e) =>
            setForm({ ...form, skills: e.target.value })
          }
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Bio"
          value={form.bio}
          onChange={(e) =>
            setForm({ ...form, bio: e.target.value })
          }
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditAlumniProfile;
