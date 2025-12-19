import { useState } from "react";
import { addAchievement } from "../../api/achievementApi";

export default function AddAchievement() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    type: "award",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAchievement(form);
    alert("Achievement added successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Add Achievement
      </h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        className="input"
        placeholder="Title"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="input"
        placeholder="Description"
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="input"
        required
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="input"
      >
        <option value="award">Award</option>
        <option value="research">Research</option>
        <option value="contribution">Contribution</option>
      </select>

      <button className="btn-green w-full mt-4">
        Add Achievement
      </button>
    </form>
  );
}
