import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyRegistrations({ registrations = [] }) {
  return (
    <>
      <Navbar />

      <main className="registrations">
        <h1>My Registrations</h1>

        <p>Here are the events you have registered for.</p>

        {registrations.length === 0 ? (
          <p>You haven't registered for any events yet.</p>
        ) : (
          <div className="events-grid">
            {registrations.map((registration) => (
              <div className="event-card" key={registration.id}>
                <h3>{registration.eventTitle}</h3>

                <p>
                  Date: {registration.eventDate}
                </p>

                <p>
                  Location: {registration.eventLocation}
                </p>

                <p>
                  Registration Status: Confirmed
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default MyRegistrations;