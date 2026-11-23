import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      alert("Unable to log out: " + error.message);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <h2 className="logo">
          <Link to="/">EventHub</Link>
        </h2>

        <Link to="/">Home</Link>
        <Link to="/events">Explore Events</Link>
        <Link to="/registrations">My Registrations</Link>
        <Link to="/organizer-dashboard">Organizer Dashboard</Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Navbar;