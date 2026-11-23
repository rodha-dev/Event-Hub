import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load events when the component mounts
  useEffect(() => {
    let isActive = true;

    getEvents()
      .then((data) => {
        if (isActive) {
          setEvents(data);
          setError("");
        }
      })
      .catch((err) => {
        if (isActive) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isActive) {
          setLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  // Refresh events when requested
  const refreshEvents = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getEvents();

      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    events,
    setEvents,
    loading,
    error,
    refreshEvents,
  };
}

export default useEvents;