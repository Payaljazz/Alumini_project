import { useEffect, useState } from "react";
import { getMessages } from "../../api/messageApi";
import Loader from "../../components/Loader";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages()
      .then(res => setMessages(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-bg px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-dark mb-6">
          Messages
        </h1>

        {messages.length === 0 && (
          <p className="text-muted">No messages yet.</p>
        )}

        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`bg-white p-5 rounded-xl shadow border-l-4
                ${
                  msg.type === "announcement"
                    ? "border-primary"
                    : msg.type === "newsletter"
                    ? "border-secondary"
                    : "border-green-500"
                }
              `}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-dark">
                  {msg.title || "Message"}
                </h3>
                {!msg.read && (
                  <span className="text-xs bg-accent text-dark px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              <p className="text-muted">{msg.content}</p>

              <div className="mt-2 text-sm text-gray-400 flex justify-between">
                <span>Type: {msg.type}</span>
                <span>
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
