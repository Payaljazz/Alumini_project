export default function EventCard({ event, onRSVP }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col">

      <h2 className="text-xl font-semibold text-primary mb-1">
        {event.name}
      </h2>

      <p className="text-sm text-muted mb-2">
        {new Date(event.date).toLocaleDateString()} • {event.location || "Online"}
      </p>

      <p className="text-muted flex-grow">
        {event.description || "No description provided"}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-muted">
          RSVPs: {event.rsvpCount}
        </span>

        <button
          onClick={() => onRSVP(event._id)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
        >
          RSVP
        </button>
      </div>
    </div>
  );
}
