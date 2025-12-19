import { useEffect, useState } from "react";
import { getEvents, rsvpEvent } from "../../api/eventApi";
import Loader from "../../components/Loader";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then(res => setEvents(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleRSVP = async (id) => {
    await rsvpEvent(id);
    setEvents(events =>
      events.map(ev =>
        ev._id === id
          ? { ...ev, rsvpCount: ev.rsvpCount + 1 }
          : ev
      )
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-bg px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-dark">
            Events
          </h1>
          <p className="text-muted mt-2">
            Discover upcoming alumni and campus events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 && (
            <p className="text-muted">No events available.</p>
          )}

          {events.map(event => (
            <EventCard
              key={event._id}
              event={event}
              onRSVP={handleRSVP}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
