function EventCard({ title, date, location, category, description, onViewDetails }) {
    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{location}</p>
            <p>{category}</p>
            <p>{description}</p>

            <button onClick={onViewDetails}>View Details</button>

        </div>
    );
}
export default EventCard;



















