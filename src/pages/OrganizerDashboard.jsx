import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrganizerDashboard({
  events = [],
  onCreateEvent,
  onEditEvent,
  onDeleteEvent,
}) {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <h1>Organizer Dashboard</h1>

        <p>Manage your events and monitor participation.</p>

        <button onClick={onCreateEvent}>
          Create New Event
        </button>

        <section className="dashboard-events">
          <h2>Manage Events</h2>

          {events.length === 0 ? (
            <p>You haven't created any events yet.</p>
          ) : (
            <div className="events-grid">
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <h3>{event.title}</h3>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>

                  <button onClick={() => onEditEvent(event)}>
                    Edit
                  </button>

                  <button onClick={() => onDeleteEvent(event.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default OrganizerDashboard;