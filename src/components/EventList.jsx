import EventCard from "./EventCard";

function EventList({ events, onViewDetails }) {
  if (events.length === 0) {
    return <p>No events available yet.</p>;
  }

  return (
    <div className="events-grid">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          category={event.category}
          description={event.description}
          onViewDetails={() => onViewDetails(event)}
        />
      ))}
    </div>
  );
}

export default EventList;