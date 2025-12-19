import { useState } from "react";
import { sendMessage } from "../../api/messageApi";

export default function SendAnnouncement() {
  const [data, setData] = useState({
    title: "",
    content: "",
    type: "announcement",
  });

  const submit = async (e) => {
    e.preventDefault();
    await sendMessage(data);
    alert("Announcement sent");
    setData({ title: "", content: "", type: "announcement" });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Send Announcement
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="Title"
          className="border p-3 w-full rounded-md"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <textarea
          placeholder="Message content"
          rows="4"
          className="border p-3 w-full rounded-md"
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />

        <button className="bg-primary text-white px-6 py-2 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}
