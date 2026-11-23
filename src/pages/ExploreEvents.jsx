import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import EventList from "../components/EventList.jsx";
import EventFilters from "../components/EventFilters";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function ExploreEvents({
  events,
  loading,
  error,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  onViewDetails,
}) {
  return (
    <>
      <Navbar />

      <main className="featured-events">
        <h1>Explore Events</h1>

        <p>Discover exciting events happening around you.</p>

        <EventFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <EventList
            events={events}
            onViewDetails={onViewDetails}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default ExploreEvents;