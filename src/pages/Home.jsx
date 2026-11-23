import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <h1 className="hero-title">
            Discover Amazing Events Near You
          </h1>

          <p>
            Find, explore, and register for exciting events
            happening around you.
          </p>
          <Link to="/events" className="btn">Explore Events</Link>

        </section>

        <section className="benefits">
          <h2>Why Choose EventHub?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Discover Events</h3>
              <p>Find exciting events that match your interests.</p>
            </div>

            <div className="benefit-card">
              <h3>Easy Registration</h3>
              <p>Register for your favourite events easily.</p>
            </div>

            <div className="benefit-card">
              <h3>Manage Events</h3>
              <p>Create and manage your own events.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;