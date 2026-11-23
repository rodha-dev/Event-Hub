import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetailsComponent from "../components/EventDetails";

function EventDetails({ event, onRegister, onClose }) {
  return (
    <>
      <Navbar />

      <main>
        <EventDetailsComponent
          event={event}
          onRegister={onRegister}
          onClose={onClose}
        />
      </main>

      <Footer />
    </>
  );
}

export default EventDetails;