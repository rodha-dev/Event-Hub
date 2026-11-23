import { useState, useEffect } from "react";

import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import ExploreEvents from "./pages/ExploreEvents";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import MyRegistrations from "./pages/MyRegistrations";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import useEvents from "./hooks/useEvents";

import {
  createEvent,
  updateEvent,
  deleteEvent,
} from "./services/eventService";

import {
  registerForEvent,
  getUserRegistrations,
} from "./services/registrationService";

import "./App.css";

// Protect pages that require authentication
function ProtectedRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

// Prevent logged-in users from accessing Login and Signup
function PublicRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/" replace /> : <Outlet />;
}

function App() {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const {
    events,
    loading,
    error,
    refreshEvents,
  } = useEvents();

  // Event selection and editing
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  // User registrations
  const [registrations, setRegistrations] = useState([]);

  // Search and category filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event form data
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    location: "",
    description: "",
  });

  // Automatically load registrations when the user logs in
  useEffect(() => {
    let isActive = true;

    const loadRegistrations = async () => {
      if (!currentUser) {
        setRegistrations([]);
        return;
      }

      try {
        const userRegistrations = await getUserRegistrations();

        if (isActive) {
          setRegistrations(userRegistrations);
        }
      } catch (err) {
        console.error("Error loading registrations:", err.message);

        if (isActive) {
          setRegistrations([]);
        }
      }
    };

    loadRegistrations();

    return () => {
      isActive = false;
    };
  }, [currentUser]);

  // Handle changes in the event form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Create a new event or update an existing event
  const handleCreateEvent = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      navigate("/login");
      return;
    }

    try {
      if (editingEvent) {
        await updateEvent(editingEvent.id, formData);
        alert("Event updated successfully!");
      } else {
        await createEvent(formData);
        alert("Event created successfully!");
      }

      await refreshEvents();

      setFormData({
        title: "",
        category: "",
        date: "",
        location: "",
        description: "",
      });

      setEditingEvent(null);

      navigate("/events");
    } catch (err) {
      alert("Unable to save event: " + err.message);
    }
  };

  // Open the form with existing event information
  const handleEditEvent = (event) => {
    setEditingEvent(event);

    setFormData({
      title: event.title || "",
      category: event.category || "",
      date: event.date || "",
      location: event.location || "",
      description: event.description || "",
    });

    navigate("/create-event");
  };

  // Reset the form when cancelling
  const handleCancel = () => {
    setEditingEvent(null);

    setFormData({
      title: "",
      category: "",
      date: "",
      location: "",
      description: "",
    });

    navigate("/events");
  };

  // Register for an event and save it to Firestore
  const handleRegistration = async () => {
    if (!selectedEvent) return;

    try {
      await registerForEvent(selectedEvent);

      const updatedRegistrations = await getUserRegistrations();

      setRegistrations(updatedRegistrations);

      alert("You have successfully registered!");
    } catch (error) {
      alert(error.message);
    }
  };

  // Delete an event from Firestore
  const handleDeleteEvent = async (eventId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEvent(eventId);

      await refreshEvents();

      alert("Event deleted successfully!");
    } catch (err) {
      alert("Unable to delete event: " + err.message);
    }
  };

  return (
    <Routes>
      {/* Authentication pages */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Protected application pages */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/events"
          element={
            <ExploreEvents
              events={events}
              loading={loading}
              error={error}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onViewDetails={(event) => {
                setSelectedEvent(event);
                navigate("/event-details");
              }}
            />
          }
        />

        <Route
          path="/event-details"
          element={
            selectedEvent ? (
              <EventDetails
                event={selectedEvent}
                onRegister={handleRegistration}
                onClose={() => navigate("/events")}
              />
            ) : (
              <Navigate to="/events" replace />
            )
          }
        />

        <Route
          path="/create-event"
          element={
            <CreateEvent
              formData={formData}
              onChange={handleChange}
              onSubmit={handleCreateEvent}
              onCancel={handleCancel}
              submitLabel={
                editingEvent ? "Update Event" : "Create Event"
              }
            />
          }
        />

        <Route
          path="/registrations"
          element={
            <MyRegistrations
              registrations={registrations}
            />
          }
        />

        <Route
          path="/organizer-dashboard"
          element={
            <OrganizerDashboard
              events={events}
              onCreateEvent={() => {
                setEditingEvent(null);

                setFormData({
                  title: "",
                  category: "",
                  date: "",
                  location: "",
                  description: "",
                });

                navigate("/create-event");
              }}
              onEditEvent={handleEditEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          }
        />
      </Route>

      {/* Redirect unknown pages */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;