function EventDetails({ event, onRegister, onClose }) {
  if (!event) return null;

  return (
    <section className="event-details">
      <h2>{event.title}</h2>

      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Category: {event.category}</p>
      <p>{event.description}</p>

      <button onClick={onRegister}>
        Register for Event
      </button>

      <button onClick={onClose}>
        Close Details
      </button>
    </section>
  );
}

export default EventDetails;